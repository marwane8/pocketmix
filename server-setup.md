## Setting Up a Droplet
Steps for bootstrapping a digital ocean debian droplet 

#### 1 - Update Droplet
    apt upgrade && apt update

#### 2 - Create a sudo user
    adduser admin` *pw: aswasw
    usermod -aG sudo admin
    cp /root/.ssh/authorized_keys /home/admin/.ssh/

#### 3 - Install htop metrics
    sudo apt-get install htop

#### 4 - Setup pocketbase
    scp pocketbase admin@root@24.199.81.165:/home/admin/
