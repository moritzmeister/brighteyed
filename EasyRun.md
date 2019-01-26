## How to run the project:
These are just the instructions to copy-paste to your terminal. If something gives an error refer to the README that is in the same folder.
### 1. If you run it for the first time
export FABRIC_VERSION=hlfv12
./fabric-servers/teardownFabric.sh
./fabric-servers/startFabric.sh

### 2. Deploying the brighteyed business network version 0.0.1
From the root folder of repo run:

./fabric-servers/startFabric.sh
cd brighteyed-network
composer network install --card PeerAdmin@hlfv1 --archiveFile brighteyed-network@0.0.1.bna
composer network start --networkName brighteyed-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@brighteyed-network
composer-rest-server -c admin@brighteyed-network -m true

### 3. Start Node.js web-app:
From the root folder of repo run:

cd brighteyed-app
npm install (first time only)
npm start
```