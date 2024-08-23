## Ubuntu Droplet Setup
Steps for bootstrapping a digital ocean ubuntu droplet.

```
IMPORTANT -- find and replace user, ip, site information before copying

USER:   mom
IP:     147.182.212.248
DOMAIN: lightclickphoto

```

ssh root@147.182.212.248
ssh mom@147.182.212.248

https://lightclickphoto.com/
https://api.lightclickphoto.com/admin/#


#### 1 - Update Droplet
> Update system and install nginx and docker
```

apt upgrade && apt update
reboot
apt install nginx
curl -fsSL https://get.docker.com -o install-docker.sh
sh install-docker.sh

```

#### 2 - Create a sudo user
> Add sudo user. Copy authorized keys from root to login from mac
```

adduser mom 
usermod -aG sudo mom 
mkdir /home/mom/.ssh
cp /root/.ssh/authorized_keys /home/mom/.ssh/
chown -R mom:mom /home/mom/.ssh

```

#### 3 - Setup pocketbase
> Copy pocketbase binary to home directory. Set up system service, and start. 
```

mkdir /home/mom/pb

scp ./server-setup/pocketbase.service root@147.182.212.248:/lib/systemd/system/
scp ./server-setup/pocketbase root@147.182.212.248:/home/mom/pb/
service pocketbase start

# test for now

```

#### 4 - Point domain to server
> Visit name cheap and setup domain records to point to server.

Namcheap > Account > Advanced DNS >
 1. A record > @/147.182.212.248
 2. A record > www/147.182.212.248
 3. A record > api/147.182.212.248

#### 5 - Setup nginx
> Copy config files to sites avaliable, create a temporary key for certbot.
> Activate config files and restart the service.
```

scp ./server-setup/*.conf root@147.182.212.248:/etc/nginx/sites-available

sudo openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem

sudo rm /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/api.conf /etc/nginx/sites-enabled/api.conf
sudo ln -s /etc/nginx/sites-available/app.conf /etc/nginx/sites-enabled/app.conf
nginx -t

```

#### 6 - Set up lets encrypt certificate 
> Install python certbot installer, run certbot on domains, verify auto renewal

```

sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d lightclickphoto.com -d www.lightclickphoto.com -d api.lightclickphoto.com
sudo systemctl status certbot.timer
sudo certbot renew --dry-run
service nginx restart

```



## Diagnostics
Useful diagnostic entries to check

Test port forwarding:
`
docker run --name testnginx -p "3000:80" nginx
`

##### check status:
    service nginx status
    service ssh status 
