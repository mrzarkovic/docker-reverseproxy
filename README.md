# Docker Reverse Proxy

- In `php-5-6-apache/public` add a directory with a website project e.g. `mywebsite1`
- In `php-5-6-apache/public/000-default.conf` set up virtual hosts for your website project

```
# 000-default.conf

<VirtualHost *:80>
  ServerAdmin me@mydomain.com
  ServerName mywebsite1.dev
  ServerAlias mywebsite1.dev
  DocumentRoot /var/www/html/mywebsite1.dev

  <Directory /var/www/html/mywebsite1.dev>
      Options Indexes FollowSymLinks MultiViews
      AllowOverride All
      Order deny,allow
      Allow from all
  </Directory>

  ErrorLog ${APACHE_LOG_DIR}/error.log
  CustomLog ${APACHE_LOG_DIR}/access.log combined

</VirtualHost>
```

- From root, run `docker-compose up -d`. Docker will build the containers and copy contents of 'php-5-6-apache' and 'php-7-nginx'\`s `public` directories to the virtual machines `/var/www/html` direcories.