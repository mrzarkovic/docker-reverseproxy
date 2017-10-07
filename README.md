# Docker Reverse Proxy

The idea is to have two separate servers, apache running php5.6 and mysql and nginx with php7.
Read more about how to setup Nginx reverse proxy in [this](https://www.thepolyglotdeveloper.com/2017/03/nginx-reverse-proxy-containerized-docker-applications/) blog post.

## Apache 

- In `php-5-6-apache/public` add a directory with a website project e.g. `mywebsite1.dev`
- In `php-5-6-apache/000-default.conf` set up virtual hosts for your website project

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

## Nginx

- In `php-7-nginx/public` add a directory with a website project e.g. `mywebsite2.dev`
- In `php-7-nginx/site.conf` set up virtual hosts for your website project

```
# site.conf

server {
    index index.php index.html;
    server_name mywebsite2.dev;
    error_log  /var/log/nginx/error.log;
    access_log /var/log/nginx/access.log;
    root /mywebsite2.dev;

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass php:9000;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
    }
}
```


From root, run `docker-compose up -d`. Docker will build the containers and copy contents of 'php-5-6-apache' and 'php-7-nginx' `public` directories to the virtual machines `/var/www/html` direcories.