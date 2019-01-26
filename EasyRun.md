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
composer card delete --card admin@brighteyed-network
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

### 4. Add a participant:
From brighteyed-network:
Put the values for the fields:

Doctor (last one just leave empty for an emppty array):
composer participant add -c admin@brighteyed-network -d '{"$class":"org.brighteyed.network.Doctor","nie":"","firstName":"","lastName":"", "email":"", "myPatients":""}'

Patient: (last two are optional)
composer participant add -c admin@brighteyed-network -d '{"$class":"org.brighteyed.network.Patient","nie":"","firstName":"","lastName":"", "email":"", "authorized":"", "myRecords":""}'

### 5. Issue an identity card to a participant
From brighteyed-network:
Change the values for the name, username and nie:

Doctor:
composer identity issue -c admin@brighteyed-network -f name.card -u username -a "resource":"org.brighteyed.network.Doctor#nie"
composer card import -f name@network.card
composer network ping -c username@brighteyed-network

Patient:
composer identity issue -c admin@brighteyed-network -f name.card -u username -a "resource":"org.brighteyed.network.Patient#nie"


For composer-playground
composer card import -f name@network.card
composer network ping -c username@brighteyed-network