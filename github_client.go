package main

import (
	"os"

	"github.com/google/go-github/github"
	"golang.org/x/oauth2"
)

func initGitHubClient() *github.Client {
	githubAccessToken := os.Getenv("GITHUB_ACCESS_TOKEN")

	if githubAccessToken != "" {
		ts := oauth2.StaticTokenSource(
			&oauth2.Token{
				AccessToken: githubAccessToken,
			},
		)
		tc := oauth2.NewClient(oauth2.NoContext, ts)

		return github.NewClient(tc)
	}

	return github.NewClient(nil)
}
