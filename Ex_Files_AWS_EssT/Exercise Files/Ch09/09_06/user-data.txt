#! /bin/bash -ex
yum update -y
yum groupinstall -y "Web Server" "MySQL Database" "PHP Support"
service httpd start
chkconfig httpd on
groupadd www
usermod -a -G www ec2-user
chown -R root:www /var/www
chmod 2775 /var/www
find /var/www -type d -exec chmod 2775 {} +
find /var/www/ -type f -exec chmod 0664 {} +