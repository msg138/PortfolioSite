#!/bin/bash

# This will pull the information from the env file.
# STRAPI_DIR

export $(grep -v '^#' .env | xargs)

docker run --rm -it \
  -p 1337:1337 \
  -v $STRAPI_DIR:/srv/app \
  strapi/strapi