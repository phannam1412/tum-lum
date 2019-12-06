#!/bin/bash

mkdir /go/src/app
cd /go/src/app
GOPATH=/go/src/app
go get -u github.com/phannam1412/go-pattern-matching
rm parse-sql-syntax.go
wget https://raw.githubusercontent.com/phannam1412/tum-lum/master/parse-sql-syntax.go
go run parse-sql-syntax.go
