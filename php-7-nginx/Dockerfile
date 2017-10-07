FROM php:7.2-fpm

# Copy this repo into place.
ADD public /var/www/html

# Update the default apache site with the config we created.
ADD site.conf /etc/nginx/conf.d/site.conf