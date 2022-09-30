#!/bin/bash

# This will start the mongodb docker instance.

docker run --rm -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=michaelg \
  -e MONGO_INITDB_ROOT_PASSWORD=Windy123 \
  --name postdb -d -v /root/site/mongo:/data/db mongo:6