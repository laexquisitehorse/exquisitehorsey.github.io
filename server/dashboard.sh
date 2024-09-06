#!/bin/bash
PORT=9090
BLACK='\033[30m'
GREEN='\033[32m'
YELLOW='\033[33m'
RESET='\033[0m'
port_listening() {
  nc -l -p $PORT &
  nc_pid=$!
}

clear
echo "(*): Awaiting following command"
echo -e "(-): Server status: ${BLACK}[${RESET}${GREEN}00${RESET}${YELLOW}00${RESET}${BLACK}]${RESET}"
read message

command=$(echo "$message" | awk '{print $1}')
arg1=$(echo "$message" | awk '{print $2}')
arg2=$(echo "$message" | awk '{print $3}')

if [ "$command" == "close" ]; then
  echo "(*): Closing port..."
  sleep 2
  nc -k $PORT
elif [ "$command" == "change" ] && [ "$arg1" == "port" ]; then
  if [[ "$arg2" =~ ^[0-9]+$ ]] && [ "$arg2" -ge 1024 ] && [ "$arg2" -le 65535 ]; then
    PORT=$arg2
    nc -k 9090
    port_listening
    echo "(*): Port changed to $PORT"
    ./server/dashboard.sh
  else
    echo "(!): Invalid port number. Please enter a number between 1024 and 65535."
  fi
elif [ "$command" == "exit" ]; then
  echo "(*): Exiting without closing port..."
  sleep 2
  exit
else
  echo "(!): Invalid command."
fi

echo "(!): Exiting dashboard..."
sleep 2
exit
