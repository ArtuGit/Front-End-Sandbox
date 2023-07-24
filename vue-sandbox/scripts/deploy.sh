#!/usr/bin/env sh

# abort on errors
set -e

# Set environment
export NODE_ENV=production

# build
npm run build

# Set environment
export NODE_ENV=dev

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ArtuGit/To-Do-List-on-Vue.js-and-TailwindCSS.git master:gh-pages

cd -