My environment is launched in a virtual machine based on Debian and running over VirtualBox.

In order for this machine to be working, you will need to install [Vagrant](https://www.vagrantup.com/). To run it the first time, you must locate yourself in this directory and run:

```bash
~/Kubernetes-docker-tests$ vagrant up
~/Kubernetes-docker-tests$ vagrant ssh
```

**vagrant up** will start the machine and **vagrant ssh** will connect you via ssh to the machine. If you want to shut it down, simply run:

```bash
~/Kubernetes-docker-tests$ vagrant halt
```

To turn it on again, **vagrant up**. For more information about Vagrant, run:

```bash
~/Kubernetes-docker-tests$ vagrant help
```
