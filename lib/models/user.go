package models

type User struct {
	Login         *string `json:"login"`
	AvatarURL     *string `json:"avatar_url"`
	CurrentStreak *int    `json:"current_streak"`
	Me            *bool   `json:"me"`
}

type UserList []*User

func (list UserList) Len() int {
	return len(list)
}

func (list UserList) Swap(i, j int) {
	list[i], list[j] = list[j], list[i]
}

func (list UserList) Less(i, j int) bool {
	return *list[i].CurrentStreak > *list[j].CurrentStreak
}
