#!/usr/bin/env bash

DOCKER_VERSION="18.03.0~ce-0~ubuntu"
KUBERNETES_VERSION="1.10.1"
MINIKUBE_VERSION="0.25.0"
HELM_VERSION="2.8.2"

# Docker
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce=${DOCKER_VERSION}
sudo usermod -aG docker $USER


# minikube
curl -Lo kubectl https://storage.googleapis.com/kubernetes-release/release/v${KUBERNETES_VERSION}/bin/linux/amd64/kubectl && chmod +x kubectl && sudo mv kubectl /usr/local/bin/
curl -Lo minikube https://storage.googleapis.com/minikube/releases/v${MINIKUBE_VERSION}/minikube-linux-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/
sudo minikube start --vm-driver=none

[ -d /root/.kube ] && sudo mv /root/.kube $HOME/.kube
sudo chown -R $USER $HOME/.kube
sudo chgrp -R $USER $HOME/.kube

[ -d /root/.minikube ] && sudo mv /root/.minikube $HOME/.minikube
sudo chown -R $USER $HOME/.minikube
sudo chgrp -R $USER $HOME/.minikube


# helm
sudo apt-get install -y socat
curl -O https://kubernetes-helm.storage.googleapis.com/helm-v${HELM_VERSION}-linux-amd64.tar.gz
tar xvzf helm-v${HELM_VERSION}-linux-amd64.tar.gz
sudo mv linux-amd64/helm /usr/local/bin
helm init --wait

# pip3
sudo apt-get update
sudo apt-get install -y python3-pip

