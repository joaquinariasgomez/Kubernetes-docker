My environment is launched in a virtual machine based on Debian and running over VirtualBox.

In order for this machine to be working, you will need to install [Vagrant](https://www.vagrantup.com/). To run it the first time, you must locate yourself in this directory and run:

```bash
~/Kubernetes-docker$ vagrant up
~/Kubernetes-docker$ vagrant ssh
```

**vagrant up** will start the machine and **vagrant ssh** will connect you via ssh to the machine. If you want to shut it down, simply run:

```bash
~/Kubernetes-docker$ vagrant halt
```

To turn it on again, **vagrant up**. For more information about Vagrant, run:

```bash
~/Kubernetes-docker$ vagrant help
```

In case you want to execute graphical applications inside this virtual machine, you will need a program to export the X Windows. In this case, you could install [Xming](https://sourceforge.net/projects/xming/).

Once you have installed Xming, just run the application and also run this command before sshing into Vagrant:

```bash
~/Kubernetes-docker$ export DISPLAY=localhost:0.0
```
