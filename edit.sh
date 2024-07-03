#!/bin/bash

echo "Saving..."
sleep 2

git add .
git commit -m "quick-update"
git push origin main
git pull origin main

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