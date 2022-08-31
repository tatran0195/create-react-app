#!/bin/bash

# navigate to app folder
cd app

# Set env variables
source /etc/profile

# initial startup by running react-script "start", name process "cra_starter"
# --watch watches and restarts if files change
pm2 start ./node_modules/react-scripts/scripts/start.js --name "cra_starter" --watch

# auto restart server if shut down
pm2 startup

# freeze process list for automatic respawn
pm2 save

# restart all processes - necessary to do this again?
pm2 restart all