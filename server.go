package main

import (
	"net/http"

	assetfs "github.com/elazarl/go-bindata-assetfs"
	"github.com/hico-horiuchi/kakuzuke/lib/controllers"
	"github.com/zenazn/goji"
)

func main() {
	controllers.Asset = Asset
	controllers.GitHubClient = initGitHubClient()

	top := controllers.TopController{}
	ranking := controllers.RankingController{}

	goji.Get("/assets/*", http.FileServer(&assetfs.AssetFS{Asset: Asset, AssetDir: AssetDir, Prefix: "/"}))
	goji.Get("/app/*", http.FileServer(&assetfs.AssetFS{Asset: Asset, AssetDir: AssetDir, Prefix: "/"}))
	goji.Get("/api/ranking/:username", ranking.Show)
	goji.Get("/", top.Index)

	goji.Serve()
}
