# -*- mode: ruby -*-
# vi: set ft=ruby :


require 'pathname'


# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "ubuntu/xenial64"

  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "3072"]
    vb.customize ["modifyvm", :id, "--cpus", "2"]
  end
  config.vm.network "private_network", type: "dhcp"
  config.ssh.forward_x11 = true

  config.vm.provision :shell, path: "instalation.sh", privileged: false

end
