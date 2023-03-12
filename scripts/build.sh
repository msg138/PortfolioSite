#!/bin/bash

cd /root/PortfolioSite/
git fetch --all
git pull

yarn run build
# Assumes that apache is running
cp dist/* /var/www/html/ -R