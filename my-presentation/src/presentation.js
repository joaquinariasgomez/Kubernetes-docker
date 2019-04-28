// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
  Fill,
  Fit,
  Appear,
  CodePane,
  Magic,
  Table,
  TableItem,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableBody,
  Typeface,
  Notes
} from 'spectacle';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import CodeSlide from 'spectacle-code-slide';
import Terminal from "spectacle-terminal";

// Import theme
import createTheme from 'spectacle/lib/themes/default';

//Import images
import graphic1 from './images/graphic1.png';
import graphic2 from './images/graphic2.png';
import graphic3 from './images/graphic3.png';
import graphic4 from './images/graphic4.png';
import graphic5 from './images/graphic5.png';
import graphic6 from './images/graphic6.png';
import graphic7 from './images/graphic7.png';
import graphic8 from './images/graphic8.png';

import kubernetes_logo from './images/kubernetes_logo.png';
import kubernetes_text from './images/kubernetes_text.png';
import docker_logo from './images/docker_logo.png';
import docker_text from './images/docker_text.png';

import vagrant from './images/vagrant.png';

{/* Import all of the libraries from FontAwesomeIcon */}




library.add(fab, fas)

// Require CSS
require('normalize.css');

export const GitHub = () => (
  <FontAwesomeIcon icon={['fab', 'github']} transform="grow-20, left-19" color={"#394d54"}/>
)

export const Prompt = () => (
  <FontAwesomeIcon icon={['fas', 'terminal']} transform="grow-5, left-20" color={"#f05033"}/>
)

/*const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
    darktext: 'red',
    lighttext: 'red'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);*/
const theme = createTheme({
  primary: "white",
  secondary: "black",//"#03A9FC",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: {name:"Droid Serif", googleFont:true, styles:["400", "700i"]},
  secondary: "Montserrat"
});

export default class Presentation extends React.Component {
  render() {
    return (
          <Deck theme={theme} transition={['slide']} transitionDuration={375} progress="pacman">

            <Slide transition={['fade']} bgColor="primary" progressColor="#394d54">
            <Notes>
            Contar un poco el hecho de que no se vea en la UCA pero sí en el trabajo etc. Link del proyecto. La charla será un tanto práctica. Podéis interrumpirme en cualquier momento para preguntar dudas.
            </Notes>
              <Heading fit textColor="black">
                Introduction to Docker and Kubernetes
              </Heading>

              <Layout>
                <Text height={80}>
                  &nbsp;
                </Text>
              </Layout>

              <Layout>
                <Fill>
                  <Heading size={1} textColor="secondary" margin={0}>
                    <Image src={kubernetes_logo}/>
                  </Heading>
                </Fill>
                <Fill>
                  <Heading size={1} textColor="secondary" margin={0}>
                    <Image src={kubernetes_text}/>
                  </Heading>
                  <Heading size={1} textColor="secondary" margin={0}>
                    <Image src={docker_text}/>
                  </Heading>
                </Fill>
                <Fill>
                  <Heading size={1} textColor="secondary" margin={0}>
                    <Image src={docker_logo}/>
                  </Heading>
                </Fill>
              </Layout>

              <Layout>
                <Text height={30}>
                  &nbsp;
                </Text>
              </Layout>

              <Heading size={6} textColor="#394d54">
                José Joaquín Arias
              </Heading>

              <Layout>
                <Text height={10}>
                  &nbsp;
                </Text>
              </Layout>

              <Layout>
                <Fill>
                  <Text bold textSize="0.5em" textColor="#394d54">
                    <GitHub/>
                    github.com/joaquinariasgomez/Kubernetes-docker
                  </Text>
                </Fill>
              </Layout>
            </Slide>


            <Slide progressColor="white" bgColor="#f05033" transition={['zoom', 'slide']}>
            <Notes>
            Párrafo desde "Empecemos por qué no es Kubernetes.." hasta "Vamos a ver primero las..."
            </Notes>
              <Heading fill textColor="white" lineHeight="1.25">
                From Monolithic apps to Microservices
              </Heading>
            </Slide>


            <Slide progressColor="#d2d2d2">
            <Notes>
            Párrafo "Cada microservicio corre como un proceso..."
            </Notes>
              <Image src={graphic6}/>
            </Slide>


            <Slide progressColor="white" bgColor="#f05033" transition={['slide']}>
              <Heading fill textColor="white" lineHeight="1.25">
                Docker
              </Heading>
            </Slide>


            <Slide transition={['slide']} progressColor="black">
              <Heading size={5} lineHeight="1.25">
                Docker and containers
              </Heading>
              <Layout>
                <Text height={70}>
                  &nbsp;
                </Text>
              </Layout>
              <Text fill textAlign="justify">
              The idea behind Docker is to create lightweight and portable containers so that apps can run on any machine with Docker installed.
              </Text>
              <Layout>
                <Text height={80}>
                  &nbsp;
                </Text>
              </Layout>
              <Text fill textAlign="justify">
              Developers can then not worry about whether their application will work on the machine it will actually run on.
              </Text>
            </Slide>


            <Slide transition={['slide']} progressColor="black">
              <Heading size={5} lineHeight="1.25">
                Docker and containers
              </Heading>
              <Layout>
                <Text height={50}>
                  &nbsp;
                </Text>
              </Layout>
              <Text fill textAlign="justify">
              A container is a single isolated process running in the host OS.
              </Text>
              <Layout>
                <Text height={50}>
                  &nbsp;
                </Text>
              </Layout>
              <Text fill textAlign="justify">
              Compared to VMs, containers are much more lightweight, which allows you to run higher number of software components on the same hardware, mainly because each VM needs to run its own set of system processes.
              </Text>
            </Slide>


            <Slide progressColor="black">
            <Notes>
            Para entender Docker y Kubernetes, vamos a ejecutar esta charla de forma práctica.
            Antes de nada, debo explicar otra plataforma más para entender dónde estamos haciendo las pruebas.
            En el enlace os he descrito bien en el README.md cómo ejecutar la máquina virtual. Explicar el uso de Vagrant.
            </Notes>
                <Text fill textAlign="justify">
                  We will use Vagrant as the platform that will provide us with the virtual machine with all the resources to run the tests.
                </Text>
            </Slide>


            <Slide transition={['slide']} progressColor="black">
            <Notes>
            Vagrant es una herramienta para crear y administrar entornos de máquinas virtuales en un solo flujo de trabajo. Las máquinas se aprovisionan sobre VirtualBox, VMware, AWS o cualquier otro proveedor.
            Vagrant aislará las dependencias y su configuración en un solo entorno desechable y consistente.
            </Notes>
              <Image src={vagrant} height={150}/>
              <Layout>
                <Text height={50}>
                  &nbsp;
                </Text>
              </Layout>
              <Text fill textAlign="justify">
              Vagrant is a tool for building and managing virtual machine environments in a single workflow. Machines are provisioned on top of VirtualBox, VMware, AWS or any other provider.
              </Text>
              <Layout>
                <Text height={50}>
                  &nbsp;
                </Text>
              </Layout>
              <Text fill textAlign="justify">
              Vagrant will isolate dependencies and their configuration within a single disposable and consistent environment.
              </Text>
            </Slide>


            <Slide transition={['slide']} progressColor="#303539">

              <Image src={vagrant} height={150}/>
              <Layout>
                <Text height={20}>
                  &nbsp;
                </Text>
              </Layout>
              <Terminal title="joaquin: ~(zsh)" output={[
                  <Typist>
                    vagrant up
                  </Typist>,
                  <div>
                    <div style={{ color: "white"}}> Bringing machine 'default' up with 'virtualbox' provider...</div>
                    <div style={{ color: "white"}}> ==> default: Checking if box 'ubuntu/xenial64' is up to date...</div>
                    <div style={{ color: "white"}}> [...]</div>
                    <div style={{ color: "white"}}> ==> default: Forwarding ports...</div>
                    <div style={{ color: "white"}}> ==> default: Booting VM...</div>
                    <div style={{ color: "white"}}> ==> default: Waiting for machine to boot. This may take a few minutes...</div>
                    <div style={{ color: "white"}}> ==> default: Machine booted and ready!</div>
                  </div>,
                  <Typist>
                    vagrant ssh
                  </Typist>,
                  <div>
                    <div style={{ color: "white"}}> Welcome to Ubuntu 16.04.5 LTS (GNU/Linux 4.4.0-145-generic x86_64)</div>
                    <div style={{ color: "white"}}>  * Documentation:  https://help.ubuntu.com</div>
                    <div style={{ color: "white"}}>  * Management:     https://landscape.canonical.com</div>
                    <div style={{ color: "white"}}>  * Support:        https://ubuntu.com/advantage</div>
                    <div style={{ color: "white"}}>vagrant@ubuntu-xenial:~$ _</div>
                  </div>
              ]}
              />
            </Slide>


            <CodeSlide bgColor="white"
                transition={[]}
                lang="js"
                code={require('./code/Vagrantfile.js').default}
                ranges={[
                    {
                      loc: [
                        0, 7
                    ]
                    }, {
                      loc: [
                        8, 27
                    ]
                  }

              ]}
            />

            <CodeSlide bgColor="white"
                transition={[]}
                lang="js"
                code={require('./code/instalation.js').default}
                ranges={[
                    {
                      loc: [
                        3, 7
                    ]
                    }, {
                      loc: [
                        8, 17
                    ]
                    }, {
                      loc: [
                        19, 31
                    ]
                    }, {
                      loc: [
                        33, 39
                    ]
                    }, {
                      loc: [
                        41, 43
                      ]
                  }

              ]}
            />


            <Slide progressColor="white" bgColor="#f05033">
              <Heading fill textColor="white" lineHeight="1.25">
                First steps with Docker
              </Heading>
            </Slide>


            <Slide textColor="secondary" progressColor="black">
            <Notes>
            Una vez instalado Docker, podemos probar a correr algunos comandos para familiarizarnos con él. Por ejemplo, podemos empezar por descargar y correr una imagen de Docker Hub. Docker Hub (hub.docker.com) es un sitio público que contiene imágenes listas para ser usadas. Vamos a usar la imagen busybox para imprimir un simple “Hola mundo”.
            </Notes>
            <Text fill textAlign="justify">
            The following two Docker commands will pull new images from registry and run them with or without arguments.
            </Text>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Layout>
              <Fill>
                <Text bold textAlign="left" textSize="1.2em" textColor="black">
                  <Prompt/>
                  docker run busybox echo "Hello world"
                </Text>
              </Fill>
            </Layout>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Layout>
              <Fill>
                <Text bold textAlign="left" textSize="1.2em" textColor="black">
                  <Prompt/>
                  docker run hello-world
                </Text>
              </Fill>
            </Layout>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Text fill textAlign="justify">
            If we run the same Docker command, we will see that it won't pull any image from the registry.
            </Text>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Layout>
              <Fill>
                <Text textAlign="left" bold textSize="1.2em" textColor="black">
                  <Prompt/>
                  docker run hello-world
                </Text>
              </Fill>
            </Layout>
            </Slide>


            <Slide textColor="secondary" progressColor="black">
            <Notes>
            Vale, pero ¿qué estamos haciendo exactamente?  Realmente esto es increíble porque estamos descargando y ejecutando una aplicación en un simple comando, sin tener que instalarla ni nada por el estilo.
            </Notes>
            <Text fill textAlign="justify">
            We can show the images stored in our local machine by running the following Docker command.
            </Text>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Layout>
              <Fill>
                <Text bold textAlign="left" textSize="1.2em" textColor="black">
                  <Prompt/>
                  docker images
                </Text>
              </Fill>
            </Layout>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Text fill textAlign="justify">
            These images are run in a container completely isolated from all other processes running in our virtual machine.
            </Text>

            </Slide>


            <Slide transition={['slide']} bgColor="primary" progressColor="#d2d2d2">
            <Notes>
            Primero, Docker comprueba si la imagen busybox:latest se encuentra en local. Si no es así, Docker se la descarga del Docker Hub registry (en docker.io). Después de que la imagen se descargara en tu ordenador, Docker ha creado un contenedor a partir de esa imagen y corrió el comando dentro de él.
            </Notes>
              <Image src={graphic1}/>
            </Slide>


            <Slide textColor="secondary" progressColor="black">
            <Notes>
            Para conseguir la última versión, se añade latest. Si no especificas el tag, Docker lo rellenará con latest.
            </Notes>
            <Text fill textAlign="justify">
            To distinguish the version of an image, colon is added after the name and then the version is written.
            </Text>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Layout>
              <Fill>
                <Text bold textAlign="left" textSize="1.2em" textColor="black">
                  <Prompt/>
                  {"docker run <image>:<tag>"}
                </Text>
              </Fill>
            </Layout>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Text fill textAlign="justify">
            If you don't specify the tag, Docker will assume you are referring to {"<latest>."}
            </Text>

            </Slide>


            <Slide progressColor="white" bgColor="#f05033">
              <Heading fill textColor="white" lineHeight="1.25">
                Creating a simple app in Node.js
              </Heading>
            </Slide>


            <Slide progressColor="black">
                <Text fill textAlign="justify">
                  We will create a web app deployed on a container with Docker's help.
                </Text>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Text fill textAlign="justify">
                This app will accept HTTP requests from any client and will answer with a OK (200 status code) from the server.
                </Text>
            </Slide>


            <Slide progressColor="#2a2734">
                <Heading size={4} fill textColor="#2a2734" textAlign="center" lineHeight="1.25">
                    App.js
                </Heading>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <CodePane lang="js" source={require('./code/app.js').default}>
                </CodePane>
            </Slide>


            <Slide progressColor="#2a2734">
                <Heading size={4} fill textColor="#2a2734" textAlign="center" lineHeight="1.25">
                    Dockerfile
                </Heading>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <CodePane source={require('./code/Dockerfile.js').default}>
                </CodePane>
            </Slide>


            <Slide progressColor="white" bgColor="#f05033">
              <Heading fill textColor="white" lineHeight="1.25">
                Building the image
              </Heading>
            </Slide>


            <Slide textColor="secondary" progressColor="black">
            <Text fill textAlign="justify">
            Once we have the Dockerfile, we will run the following command to build an image called "kubia".
            </Text>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Layout>
              <Fill>
                <Text bold textAlign="left" textSize="1.2em" textColor="black">
                  <Prompt/>
                  docker build -t kubia .
                </Text>
              </Fill>
            </Layout>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Text fill textAlign="justify">
            Docker will find the Dockerfile in the specified direction ("." in this case).
            </Text>
            </Slide>


            <Slide progressColor="#d2d2d2">
            <Notes>
            Párrafo "Cada microservicio corre como un proceso..."
            </Notes>
              <Image src={graphic2}/>
            </Slide>


            <Slide progressColor="black">
                <Text fill textAlign="justify">
                  An image is composed of several layers, making the pull process more efficient.
                </Text>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Text fill textAlign="justify">
                Apart from that, the construction of a Docker image creates a new layer for each instruction of the Dockerfile.
                </Text>
            </Slide>


            <Slide progressColor="#d2d2d2">
              <Image src={graphic3}/>
            </Slide>


            <Slide textColor="secondary" progressColor="black">
            <Text fill textAlign="justify">
            Now let's run our image with the folllowing command:
            </Text>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Layout>
              <Fill>
                <Text bold textAlign="left" textSize="1.05em" textColor="black">
                  <Prompt/>
                  docker run --name kubia-container -p 8080:8080 -d kubia
                </Text>
              </Fill>
            </Layout>

            <Layout>
              <Text height={60}>
                &nbsp;
              </Text>
            </Layout>

            <Text fill textAlign="justify">
            Once this is done, we can access our application through http://localhost:8080.
            </Text>

            <Layout>
              <Text height={60}>
                &nbsp;
              </Text>
            </Layout>

            <Layout>
              <Fill>
                <Text textAlign="left" bold textSize="1.05em" textColor="black">
                  <Prompt/>
                  curl localhost:8080
                </Text>
              </Fill>
            </Layout>
            </Slide>


            <Slide progressColor="black">
                <Text fill textAlign="justify">
                  If you are using Docker in Mac or Windows, you are not running the Docker daemon inside the same virtual machine.
                </Text>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Text fill textAlign="justify">
                  You will then need the name or IP of the virtual machine where this Docker daemon is running. To look at it, use the DOCKER_HOST environment variable.
                </Text>
            </Slide>


            <Slide textColor="secondary" progressColor="black">
            <Text fill textAlign="justify">
            The hexadecimal number we get is the ID of the Docker container.
            </Text>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Layout>
              <Fill>
                <Text bold textAlign="left" textSize="1.2em" textColor="black">
                  <Prompt/>
                  docker ps
                </Text>
              </Fill>
            </Layout>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Text fill textAlign="justify">
            If we execute the command above we will see a list of the containers Docker is running right now.
            </Text>
            </Slide>


            <Slide progressColor="white" bgColor="#f05033">
              <Heading fill textColor="white" lineHeight="1.25">
                Exploring the interior of a container
              </Heading>
            </Slide>


            <Slide textColor="secondary" progressColor="black">
            <Notes>
            -it -> -i: Se asegura que STDIN se mantiene abierto. -t: Pseudo terminal (TTY)
            Si ejecutamos $ ps aux solo vemos tres procesos. No vemos ningún proceso de nuestra máquina local. Pero lo curioso de esto es que si salimos a nuestra máquina local y ejecutamos $ ps aux | grep app.js encontraremos también este proceso corriendo en nuestro host OS. Esto demuestra que los procesos que corren en el contenedor también corren en nuestro host OS.
            </Notes>
            <Text fill textAlign="justify">
            Since our image is based on Node.js, which has bash, we can now run the following to enter inside it.
            </Text>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Layout>
              <Fill>
                <Text bold textAlign="left" textSize="1.2em" textColor="black">
                  <Prompt/>
                  docker exec -it kubia-container bash
                </Text>
              </Fill>
            </Layout>
            </Slide>


            <Slide textColor="secondary" progressColor="black">
            <Text fill textAlign="justify">
            To stop our running container.
            </Text>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Layout>
              <Fill>
                <Text bold textAlign="left" textSize="1.2em" textColor="black">
                  <Prompt/>
                  docker stop kubia-container
                </Text>
              </Fill>
            </Layout>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Text fill textAlign="justify">
            We can still see a non running container.
            </Text>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Layout>
              <Fill>
                <Text bold textAlign="left" textSize="1.2em" textColor="black">
                  <Prompt/>
                  docker ps -a
                </Text>
              </Fill>
            </Layout>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Text fill textAlign="justify">
            To remove our running container.
            </Text>

            <Layout>
              <Text height={50}>
                &nbsp;
              </Text>
            </Layout>

            <Layout>
              <Fill>
                <Text bold textAlign="left" textSize="1.2em" textColor="black">
                  <Prompt/>
                  docker rm kubia-container
                </Text>
              </Fill>
            </Layout>
            </Slide>

            <Slide progressColor="black">
                <Text fill textAlign="justify">
                  We will use Docker Hub to store our image. To do that, we will have to retag our image according to Docker rules.
                </Text>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Layout>
                  <Fill>
                    <Text bold textAlign="left" textSize="1.2em" textColor="black">
                      <Prompt/>
                      docker tag kubia {"<docker_id>/kubia"}
                    </Text>
                  </Fill>
                </Layout>
            </Slide>


            <Slide progressColor="black">
                <Text fill textAlign="justify">
                  Once we are logged in Docker, we can push our image to the Docker Hub. And once it is pushed, everyone will be able to run it.
                </Text>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Layout>
                  <Fill>
                    <Text bold textAlign="left" textSize="1.2em" textColor="black">
                      <Prompt/>
                      docker push {"<docker_id>/kubia"}
                    </Text>
                  </Fill>
                </Layout>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Layout>
                  <Fill>
                    <Text bold textAlign="left" textSize="1.2em" textColor="black">
                      <Prompt/>
                      docker run -p 8080:8080 -d {"<docker_id>/kubia"}
                    </Text>
                  </Fill>
                </Layout>
            </Slide>


            <Slide progressColor="white" bgColor="#f05033" transition={['slide']}>
              <Heading fill textColor="white" lineHeight="1.25">
                Kubernetes
              </Heading>
            </Slide>


            <Slide progressColor="black">
                <Text fill textAlign="justify">
                  Kubernetes is an open source system created by Google for the management of applications in containers, an orchestration system for Docker containers, allowing actions such as scheduling the deployment, scaling and monitoring of our containers.
                </Text>
            </Slide>


            <Slide progressColor="#d2d2d2">
              <Image src={graphic7}/>
            </Slide>


            <Slide transition={['slide']} progressColor="black">
              <Heading size={5} lineHeight="1.25">
                Understanding the architecture of a Kubernetes cluster
              </Heading>
              <Layout>
                <Text height={50}>
                  &nbsp;
                </Text>
              </Layout>
              <Text fill textAlign="justify">
              A Kubernetes cluster is composed of a set of nodes of two types.
              </Text>
              <List>
                <ListItem textAlign="justify">Master node, which contains the Control Plane. Its job is to control the cluster.
                </ListItem>
                <Text height={23}>
                  &nbsp;
                </Text>
                <ListItem textAlign="justify">Worker nodes, which will actually run the application.
                </ListItem>
              </List>
            </Slide>


            <Slide progressColor="#d2d2d2">
              <Image src={graphic8}/>
            </Slide>


            <Slide progressColor="white" bgColor="#f05033" transition={['slide']}>
              <Heading fill textColor="white" lineHeight="1.25">
                Setting up a cluster
              </Heading>
            </Slide>


            <Slide progressColor="black">
                <Text fill textAlign="justify">
                  Once our image is packaged using Docker, we can deploy it in a Kubernetes cluster instead of using Docker directly.
                </Text>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Text fill textAlign="justify">
                  The simplest way of setting up a Kubernetes cluster is using Minikube. Running the following command will give you a description about this cluster.
                </Text>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Layout>
                  <Fill>
                    <Text bold textAlign="left" textSize="1.2em" textColor="black">
                      <Prompt/>
                      kubectl cluster-info
                    </Text>
                  </Fill>
                </Layout>
            </Slide>


            <Slide progressColor="black">
                <Text fill textAlign="justify">
                  The way of running our application using Kubernetes is with a Docker-like command.
                </Text>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Layout>
                  <Fill>
                    <Text bold textAlign="left" textSize="1.2em" textColor="black">
                      <Prompt/>
                      kubectl run kubia --image={"<docker_id>/kubia"} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --port=8080 --generator=run/v1
                    </Text>
                  </Fill>
                </Layout>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Text fill textAlign="justify">
                  Since we are telling Kubernetes to create a replication controller, we can check that it is present by running:
                </Text>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Layout>
                  <Fill>
                    <Text bold textAlign="left" textSize="1.2em" textColor="black">
                      <Prompt/>
                      kubectl get replicationcontroller
                    </Text>
                  </Fill>
                </Layout>
            </Slide>


            <Slide progressColor="white" bgColor="#f05033" transition={['slide']}>
              <Heading fill textColor="white" lineHeight="1.25">
                Introducing Pods
              </Heading>
            </Slide>


            <Slide progressColor="black">
                <Text fill textAlign="justify">
                  The minimum unit that Kubernetes handles is called Pod. It is, essentially, a group of containers.
                </Text>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Text fill textAlign="justify">
                  Each Pod is like an isolated virtual machine. It has its own IP, hostname, processes.. running an application.
                </Text>
            </Slide>


            <Slide progressColor="#d2d2d2">
              <Image src={graphic4}/>
            </Slide>


            <Slide progressColor="black">
                <Text fill textAlign="justify">
                  List all running pods.
                </Text>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Layout>
                  <Fill>
                    <Text bold textAlign="left" textSize="1.2em" textColor="black">
                      <Prompt/>
                      kubectl get pods
                    </Text>
                  </Fill>
                </Layout>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Text fill textAlign="justify">
                  Obtain more information about a pod.
                </Text>

                <Layout>
                  <Text height={50}>
                    &nbsp;
                  </Text>
                </Layout>

                <Layout>
                  <Fill>
                    <Text bold textAlign="left" textSize="1.2em" textColor="black">
                      <Prompt/>
                      kubectl describe pod {"<pod_name>"}
                    </Text>
                  </Fill>
                </Layout>
            </Slide>


            <Slide progressColor="#d2d2d2">
              <Image src={graphic5}/>
            </Slide>


            <Slide progressColor="white" bgColor="#f05033" transition={['slide']}>
              <Heading fill textColor="white" lineHeight="1.25">
                Horizontally scaling your application
              </Heading>
            </Slide>


            <Slide transition={['slide']} progressColor="black">
              <Text fill textAlign="justify">
              To scale up the number of replicas of your pod, you need to change the desired replica count on the ReplicationController like this:
              </Text>
              <Layout>
                <Text height={50}>
                  &nbsp;
                </Text>
              </Layout>
              <Layout>
                <Fill>
                  <Text bold textAlign="left" textSize="1.2em" textColor="black">
                    <Prompt/>
                    kubectl scale rc kubia --replicas=3
                  </Text>
                </Fill>
              </Layout>
            </Slide>


            <Slide progressColor="white" bgColor="#f05033" transition={['slide']}>
              <Heading fill textColor="white" lineHeight="1.25">
                Kubernetes Dashboard
              </Heading>
            </Slide>


            <Slide transition={['slide']} progressColor="black">
              <Text fill textAlign="justify">
              The dashboard allows us to watch all the events that kubectl ran and more, but graphically.
              </Text>
              <Layout>
                <Text height={50}>
                  &nbsp;
                </Text>
              </Layout>
              <Text fill textAlign="justify">
              To obtain its private url, we can run the following command.
              </Text>
              <Layout>
                <Text height={50}>
                  &nbsp;
                </Text>
              </Layout>
              <Layout>
                <Fill>
                  <Text bold textAlign="left" textSize="1.2em" textColor="black">
                    <Prompt/>
                    minikube dashboard --url
                  </Text>
                </Fill>
              </Layout>
            </Slide>


            <Slide transition={['fade']} bgColor="primary" progressColor="#394d54">
            <Notes>
            Contar un poco el hecho de que no se vea en la UCA pero sí en el trabajo etc. Link del proyecto. La charla será un tanto práctica. Podéis interrumpirme en cualquier momento para preguntar dudas.
            </Notes>
              <Heading fit textColor="black">
                Introduction to Docker and Kubernetes
              </Heading>

              <Layout>
                <Text height={80}>
                  &nbsp;
                </Text>
              </Layout>

              <Layout>
                <Fill>
                  <Heading size={1} textColor="secondary" margin={0}>
                    <Image src={kubernetes_logo}/>
                  </Heading>
                </Fill>
                <Fill>
                  <Heading size={1} textColor="secondary" margin={0}>
                    <Image src={kubernetes_text}/>
                  </Heading>
                  <Heading size={1} textColor="secondary" margin={0}>
                    <Image src={docker_text}/>
                  </Heading>
                </Fill>
                <Fill>
                  <Heading size={1} textColor="secondary" margin={0}>
                    <Image src={docker_logo}/>
                  </Heading>
                </Fill>
              </Layout>

              <Layout>
                <Text height={30}>
                  &nbsp;
                </Text>
              </Layout>

              <Heading size={6} textColor="#394d54">
                José Joaquín Arias
              </Heading>

              <Layout>
                <Text height={10}>
                  &nbsp;
                </Text>
              </Layout>

              <Layout>
                <Fill>
                  <Text bold textSize="0.5em" textColor="#394d54">
                    <GitHub/>
                    github.com/joaquinariasgomez/Kubernetes-docker
                  </Text>
                </Fill>
              </Layout>
            </Slide>

          </Deck>
    );
  }
}
