#!/bin/bash
# -->> DON'T SPEND ALL OF YOUR TIME ON THIS! <<--

clear
echo "(____): Runing server diagnostics..."
sleep 0.2

# Re-link/link all files
chmod +x server/dashboard.sh

clear
echo "(@___): Runing server diagnostics..."
sleep 0.5

# Assign values
port_listening() {
  nc -l -p 9090 &
  nc_pid=$!
}

clear
echo "(@@__): Runing server diagnostics..."
sleep 0.6

# Add diagnostics later

clear
echo "(@@@_): Runing server diagnostics..."
sleep 0.3

# Add diagnostics later

clear
echo "(@@@@): Runing server diagnostics..."
sleep 1.4

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

port_listening

clear
echo "(@@@@): Starting server..."
sleep 4

clear
echo "(*): Server-setup protocol finished"
sleep 1

echo "(*): Procceding to developer dashboard..."
sleep 1

./server/dashboard.sh

echo "(!): The current process has been terminated"
exit