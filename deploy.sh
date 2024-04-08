#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "Deploy"
git push -f git@github.com:scramel/IMV-Motos.git main:gh-pages

cd -