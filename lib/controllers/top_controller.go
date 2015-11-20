package controllers

import (
	"net/http"

	"github.com/zenazn/goji/web"
)

type TopController struct {
	controller
}

func (top TopController) Index(c web.C, w http.ResponseWriter, r *http.Request) {
	top.Render(w, "lib/views/top/index")
}
