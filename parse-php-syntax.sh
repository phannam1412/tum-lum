#!/bin/bash

mkdir /go/src/app
cd /go/src/app
GOPATH=/go/src/app
go get -u github.com/phannam1412/go-pattern-matching
rm parse-php-syntax.go
wget https://raw.githubusercontent.com/phannam1412/tum-lum/master/parse-php-syntax.go
go run parse-php-syntax.go
