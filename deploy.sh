#!/bin/bash

#git config --global push.default matching # we only want to push one branch — master
#git remote add deploy ssh://deploy@45.77.1.73:22/var/www/chorebot-frontend
ssh-keyscan -H 45.77.1.73 >> ~/.ssh/known_hosts
#git push deploy master
ssh deploy@45.77.1.73 'cd /var/www/chorebot-frontend && git checkout . && git clean -fd && git pull --prune'
ssh deploy@45.77.1.73 'export PATH="$PATH:/home/deploy/.nvm/versions/node/v12.18.1/bin/" && cd /var/www/chorebot-frontend && npm install && npm run build && sudo service nginx restart'
