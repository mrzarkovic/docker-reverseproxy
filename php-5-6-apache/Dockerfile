# Dockerfile
FROM php:5.6-apache

RUN docker-php-source extract \
	&& apt-get update \
	&& apt-get install libmcrypt-dev libldap2-dev nano -y \
	&& rm -rf /var/lib/apt/lists/* \
	&& docker-php-ext-configure ldap --with-libdir=lib/x86_64-linux-gnu \
	&& docker-php-ext-install ldap pdo pdo_mysql mysqli \
	&& a2enmod expires rewrite \
	&& a2enmod ssl \
  && a2enmod headers \
	&& docker-php-source delete

ADD php.ini /usr/local/etc/php/php.ini

# Copy this repo into place.
ADD public /var/www/html

# Update the default apache site with the config we created.
ADD 000-default.conf /etc/apache2/sites-enabled/000-default.conf