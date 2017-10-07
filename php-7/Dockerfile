FROM php:7-fpm

RUN docker-php-source extract \
	&& apt-get update \
	&& apt-get install curl git nano -y \
    && apt-get install autoconf g++ make openssl libssl-dev libcurl4-openssl-dev pkg-config libsasl2-dev libpcre3-dev libmcrypt-dev libldap2-dev git nano -y \
	&& rm -rf /var/lib/apt/lists/* \
	&& docker-php-ext-configure ldap --with-libdir=lib/x86_64-linux-gnu \
	&& docker-php-ext-install ldap pdo pdo_mysql \
	&& docker-php-ext-install -j$(nproc) mcrypt \
	&& pecl install mongodb \
	&& docker-php-ext-enable mongodb \
	&& docker-php-source delete