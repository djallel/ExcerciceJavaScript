#!/usr/bin/env bash
npm start

case "$1" in
  start | START)
    /etc/init.d/apache2 start
  ;;
  stop | STOP)
    kill $(cat /var/run/apache2/apache2.pid)
  ;;
  *)
     echo "Merci d'indiquer start ou stop"
     exit 1
  ;;
esac
