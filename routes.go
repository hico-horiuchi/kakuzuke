package main

import (
	"net/http"

	assetfs "github.com/elazarl/go-bindata-assetfs"
	"github.com/goware/httpcoala"
	"github.com/hico-horiuchi/kakuzuke/backend/controllers"
	"github.com/zenazn/goji"
)

func main() {
	controllers.Asset = Asset
	controllers.GitHubClient = initGitHubClient()

	top := controllers.TopController{}
	ranking := controllers.RankingController{}

	goji.Get("/assets/*", http.FileServer(&assetfs.AssetFS{Asset: Asset, AssetDir: AssetDir, AssetInfo: AssetInfo, Prefix: "/"}))
	goji.Get("/frontend/*", http.FileServer(&assetfs.AssetFS{Asset: Asset, AssetDir: AssetDir, AssetInfo: AssetInfo, Prefix: "/"}))
	goji.Get("/api/ranking/:username", ranking.ShowAPI)
	goji.Get("/", top.Index)

	goji.Use(httpcoala.Route("*"))
	goji.Serve()
}
