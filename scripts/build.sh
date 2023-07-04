#!/bin/bash

# We now assume that this is running inside the git directory.
git fetch --all
git pull

yarn install --frozen-lockfile
yarn run build