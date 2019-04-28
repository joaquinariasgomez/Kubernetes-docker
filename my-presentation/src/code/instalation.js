export default `
#!/usr/bin/env bash

DOCKER_VERSION="18.03.0~ce-0~ubuntu"
KUBERNETES_VERSION="1.10.1"
MINIKUBE_VERSION="0.25.0"
HELM_VERSION="2.8.2"

# Docker
sudo apt-get update
sudo apt-get install -y apt-transport-https ...

curl -fsSL https://download.docker.com/linux...
sudo add-apt-repository "deb [arch=amd64] ht...
sudo apt-get update
sudo apt-get install -y docker-ce=\${DOCKER_...
sudo usermod -aG docker $USER


# minikube
curl -Lo kubectl https://storage.googleapis....
curl -Lo minikube https://storage.googleapis...
sudo minikube start --vm-driver=none

[ -d /root/.kube ] && sudo mv /root/.kube $H...
sudo chown -R $USER $HOME/.kube
sudo chgrp -R $USER $HOME/.kube

[ -d /root/.minikube ] && sudo mv /root/.min...
sudo chown -R $USER $HOME/.minikube
sudo chgrp -R $USER $HOME/.minikube


# helm
sudo apt-get install -y socat
curl -O https://kubernetes-helm.storage.goog...
tar xvzf helm-v\${HELM_VERSION}-linux-amd64....
sudo mv linux-amd64/helm /usr/local/bin
helm init --wait


#Firefox
sudo apt install -y firefox
`;
