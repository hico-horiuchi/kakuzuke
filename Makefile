GO_BUILDOPT := -ldflags '-s -w'

gom:
	go get github.com/mattn/gom
	gom install

run:
	gom run main.go ${ARGS}

fmt:
	gom exec goimports -w *.go kakuzuke/*/*.go

bindata:
	gom exec go-bindata-assetfs ./app/... ./assets/... ./kakuzuke/views/...

debugdata:
	gom exec go-bindata-assetfs -debug=true ./app/... ./assets/... ./kakuzuke/views/...

build: fmt bindata
	gom build $(GO_BUILDOPT) -o bin/kakuzuke *.go

clean:
	rm -f bin/kakuzuke

link:
	mkdir -p $(GOPATH)/src/github.com/hico-horiuchi
	ln -s $(CURDIR) $(GOPATH)/src/github.com/hico-horiuchi/kakuzuke

unlink:
	rm $(GOPATH)/src/github.com/hico-horiuchi/kakuzuke
	rmdir $(GOPATH)/src/github.com/hico-horiuchi
