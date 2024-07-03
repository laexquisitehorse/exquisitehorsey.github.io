#!/bin/bash

echo "Saving..."

git add . > /dev/null 2>&1
git commit -m "quick-update" > /dev/null 2>&1
git push origin main > /dev/null 2>&1
git pull origin main > /dev/null 2>&1

sleep 1
clear

echo "              -"
sleep 0.5
clear

echo "              --"
sleep 0.5
clear

echo "              ---"
sleep 0.5
clear

echo "              -"
sleep 0.5
clear

echo "              --"
sleep 0.5
clear

echo "              ---"
sleep 1

echo "Done!"
sleep 2
clear

exit