#!/bin/bash

git config --global push.default simple # we only want to push one branch — master
git remote add deploy ssh://git@github.com:alizand1992/chorebot-frontend.git
git push master deploy # push our updates