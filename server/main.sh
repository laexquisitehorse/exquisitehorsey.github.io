#!/bin/bash
# -->> DON'T SPEND ALL OF YOUR TIME ON THIS! <<--

port_listening() {
  nc -l -p 8080 &
  nc_pid=2431
}

clear
echo "(____): Starting server..."
sleep 1

clear
echo "(@___): Starting server..."
sleep 0.2

clear
echo "(@@__): Starting server..."
sleep 0.5

clear
echo "(@@@_): Starting server..."
sleep 0.8

clear
echo "(@@@@): Starting server..."
sleep 0.4

port_listening

clear
echo "(*): Server protocol finished"
sleep 1

wait $nc_

echo "(!): Process ended"
exit