package controllers

import (
	"net/http"
	"sort"
	"sync"

	"github.com/google/go-github/github"
	streak "github.com/hico-horiuchi/go-github-streak"
	"github.com/hico-horiuchi/kakuzuke/kakuzuke/models"
	"github.com/zenazn/goji/web"
)

type RankingController struct {
	controller
}

func (ranking RankingController) Show(c web.C, w http.ResponseWriter, r *http.Request) {
	var (
		group sync.WaitGroup
		mutex sync.Mutex
	)

	client := github.NewClient(nil)
	me, _, err := client.Users.Get(c.URLParams["username"])
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	followees, _, err := client.Users.ListFollowing(c.URLParams["username"], nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	followees = append(followees, *me)

	users := make([]*models.User, len(followees))
	for i := range followees {
		group.Add(1)

		go func(j int, followee *github.User) {
			var (
				user models.User
				me   bool = true
			)
			defer group.Done()

			contributions, _ := streak.GetContributions(*followee.Login)

			user.Login = followee.Login
			user.AvatarURL = followee.AvatarURL
			user.CurrentStreak = &contributions.CurrentStreak
			if *user.Login == c.URLParams["username"] {
				user.Me = &me
			}

			mutex.Lock()
			users[j] = &user
			mutex.Unlock()
		}(i, &followees[i])
	}
	group.Wait()

	var list models.UserList = users
	sort.Sort(list)

	if len(list) > 10 {
		list = list[:10]
	}
	ranking.API(w, list)
}