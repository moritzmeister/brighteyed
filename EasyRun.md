## How to run the project:
These are just the instructions to copy-paste to your terminal. If something gives an error refer to the README that is in the same folder.

### 1. Deploying the brighteyed business network version 0.0.1
From the root folder of repo run:

sudo chmod 755 runNetwork.sh (first time, give access to the script)
cd brighteyed-network
./runNetwork.sh


### 2. Start Node.js web-app:
From the root folder of repo run:

cd brighteyed-app
npm install (first time only)
npm start
```

### 3. Add a participant:
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


composer participant add -c admin@brighteyed-network -d '{"$class":"org.brighteyed.network.Doctor","nie":"1111","firstName":"Moritz","lastName":"Meister", "email":"iam@doctor", "myPatients":""}'
composer participant add -c admin@brighteyed-network -d '{"$class":"org.brighteyed.network.Patient","nie":"2222","firstName":"Serghei","lastName":"Bordea", "email":"iam@patient", "authorized":"", "myRecords":""}'
composer identity issue -c admin@brighteyed-network -f serghei.card -u serghei -a "resource":"org.brighteyed.network.Patient#2222"