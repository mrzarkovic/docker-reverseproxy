# Docker Reverse Proxy

The idea is to have two separate servers, Apache running PHP 5.6 and MySql and Nginx with PHP 7 FPM.
Read more about how to setup Nginx reverse proxy in [this](https://www.thepolyglotdeveloper.com/2017/03/nginx-reverse-proxy-containerized-docker-applications/) blog post.

## Configuration

The best way to get stated is to use the .example files in the repository

### Nginx reverse proxy server

Use the nginx.conf.example file to setup the reverse proxy server.

### Apache server with PHP 5.6

Use the .example files from `php-5-6-apache/public` and `php-5-6-apache/conf` directories to setup Apache server with PHP 5.6 and add your website configuration and website source files.

### PHP 7.0 FPM

Use the .example files from `php-7/public` and `php-7/conf` directories to setup PHP 7.0 FPM server and add website source files.

### Nginx for PHP 7.0

Use the .example file from  `nginx/conf` directory to setup Nginx server with PHP 7.0 FPM.

## Build

From root, run `docker-compose up -d --build`. Docker will build the containers and copy contents of 'php-5-6-apache', 'php-7' and 'nginx' `public` and `conf` directories to the virtual machines `/var/www/html` and appropriate configuration direcories. Those files are also synced with the containers.

Grab a coffee, it can take a while.
