## Ubuntu Droplet Setup
Steps for bootstrapping a digital ocean ubuntu droplet.

```
IMPORTANT -- find and replace user, ip, site information before copying

USER:   mom
IP:     174.138.42.1
DOMAIN: lightclickphoto

```

ssh root@174.138.42.1
ssh mom@174.138.42.1

https://lightclickphoto.com/
https://admin.lightclickphoto.com/_/#


#### 1 - Update Droplet
> Update system and install nginx and docker
```

apt upgrade && apt update
reboot

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

scp ./setup-server/pocketbase.service root@174.138.42.1:/lib/systemd/system/
scp ./setup-server/pocketbase root@174.138.42.1:/home/mom/pb/
service pocketbase start

```

#### 3 - Setup DO Firewall 
> Set up firewalls rules to allow only pocket base ports 
```

Droplet > Networking > Firewalls 
1. Inbound 443, 80, 22
2. Outbound all Ports
Firwalls > Add Droplet > Firewall

```


Server is setup! Visit the site and make your pocketbase account.


## Diagnostics
Useful diagnostic entries to check

Test port forwarding:
`
docker run --name testnginx -p "3000:80" nginx
`

