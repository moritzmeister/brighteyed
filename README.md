# [Brighteyed](https://brighteyed.herokuapp.com)

This is a project developed by Shambhavi Singh, Nicolae Righeriu, Sergei Bordea, Gioele Bigini and Moritz Meister for the local edition of TADHack Madrid 2018.

## How to run the project:

### 1. Installation of a local hyperledger fabric runtime (if not done previously):

The repository contains the scripts to download a local Hyperledger Fabric runtime to deploy our business network to and in order to run the application. Make sure you have installed all the requirements mentioned below.

If you've previously used an older version of Hyperledger Composer and are now setting up a new install, you may want to kill and remove all previous Docker containers, which you can do with these commands:
```
docker kill $(docker ps -q)
docker rm $(docker ps -aq)
docker rmi $(docker images dev-* -q)
```

Download required fabric runtime:
```
cd fabric-servers
export FABRIC_VERSION=hlfv12
./downloadFabric.sh
```
### 2. Start and stop fabric:
You control your runtime using a set of scripts which you'll find in *fabric-servers*.
The first time you start up a new runtime, you'll need to run the start script, then generate a PeerAdmin card. However, note that we already generated a PeerAdmin card, this is only necessary if you used the teardown script before:
```
cd fabric-servers
export FABRIC_VERSION=hlfv12
./startFabric.sh
```
3. You can start and stop your runtime using `~/fabric-servers/stopFabric.sh`, and start it again with `~/fabric-servers/startFabric.sh`.

4. If you want to remove our business network entirely from your fabric instance, you run `~/fabric-servers/stopFabric.sh` and then `~/fabric-servers/teardownFabric.sh`. Note that if you've run the teardown script, the next time you start the runtime, you'll need to create a new PeerAdmin card `./createPeerAdminCard.sh`.

### 3. Deploying the brighteyed business network version 0.0.1
1. To deploy the business network on your fabric, from the *brighteyed-network* directory, run the following command:
```
cd brighteyed-network
composer network install --card PeerAdmin@hlfv1 --archiveFile brighteyed-network@0.0.1.bna
```
The composer network install command requires a PeerAdmin business network card (in this case one has been created and imported in advance), and the file path of the .bna which defines the business network.

2. To start the business network, run the following command:
```
composer network start --networkName brighteyed-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
```
The composer network start command requires a business network card, as well as the name of the admin identity for the business network, the name and version of the business network and the name of the file to be created ready to import as a business network card.

3. To import the network administrator identity as a usable business network card, run the following command:
```
composer card import --file networkadmin.card
```
The composer card import command requires the filename specified in composer network start to create a card.

4. To check that the business network has been deployed successfully, run the following command to ping the network:
```
composer network ping --card admin@brighteyed-network
```
The composer network ping command requires a business network card to identify the network to ping.

### 4. Start the REST server:
```
composer-rest-server -c admin@brighteyed-network -n never -u true -w true
```

### 5. Start Node.js web-app:
Navigate to the *brighteyed-app* directory and finally start the app:
```
cd brighteyed-app
npm install (first time only)
npm start
```

## Requirements

The following are prerequisites for installing the required development tools:
- Operating Systems: Ubuntu Linux 14.04 / 16.04 LTS (both 64-bit), or Mac OS 10.12
- Docker Engine: Version 17.03 or higher
- Docker-Compose: Version 1.8 or higher
- Node: 8.9 or higher (note version 9 is not supported)
- npm: v5.x
- git: 2.9.x or higher
- Python: 2.7.x
- A code editor of your choice, we recommend VSCode.

In doubt, go through this [tutorial](https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html).
We recommend creating a conda environment with Python 2.7.

Furthermore, it is necessary to install the CLI tools for hyperledger composer:
1. Essential CLI tools:
```
npm install -g composer-cli@0.20
```
2. Utility for running a REST Server on your machine to expose your business networks as RESTful APIs:
```
npm install -g composer-rest-server@0.20
```

## THIS IS JUST FOR US - DELETE IN THE END
3. Useful utility for generating application assets:
```
npm install -g generator-hyperledger-composer@0.20
```
4. Yeoman is a tool for generating applications, which utilises generator-hyperledger-composer:
```
npm install -g yo
```

#### Credits
The website uses a bootstrap template from Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-creative/blob/gh-pages/LICENSE) license.

