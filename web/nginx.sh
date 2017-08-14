#!/bin/bash
# nginx.sh

mv ./dist/* /usr/share/nginx/html/
nginx -g 'daemon off;'
