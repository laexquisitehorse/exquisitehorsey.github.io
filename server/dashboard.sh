#!/bin/bash
PORT=9090

clear
echo "(*): Awaiting following command"
echo "(-): Port: $PORT | [0000]"
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
    echo "(*): Port changed to $PORT"
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
