#!/usr/bin/env bash

set -e # exit when error

# copy files
mkdir -p dist/ &&
rm -rf dist/* &&
cp package.json dist/ &&
cp LICENSE dist/

# build
yarn run build:prod &&
yarn run build:scss &&
yarn run copy:scss &&
yarn run clean:css
