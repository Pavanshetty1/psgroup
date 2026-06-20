#!/bin/bash

set -e

APP_NAME="psgroup-backend"
WEB_ROOT="/var/www/psgroup"

echo "========== PULLING CODE =========="
git pull

echo "========== FRONTEND =========="
npm install
npm run build

sudo mkdir -p $WEB_ROOT
sudo rm -rf $WEB_ROOT/*
sudo cp -r dist/* $WEB_ROOT/

echo "========== BACKEND =========="
cd backend
npm install

echo "========== PM2 =========="
pm2 restart $APP_NAME || pm2 start server.js --name $APP_NAME

pm2 save

echo "========== DONE =========="