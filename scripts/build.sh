#!/bin/bash

# We now assume that this is running inside the git directory.
git fetch --all
git pull

yarn install
yarn run build
# Assumes that apache is running
cp dist/* /var/www/html/ -R