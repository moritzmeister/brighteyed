## How to run the project:
These are just the instructions to copy-paste to your terminal. If something gives an error refer to the README that is in the same folder.

### 1. Deploying the brighteyed business network version 0.0.1
From the root folder of repo run (it starts from teardown fabric to running a rest server):  

```
cd brighteyed-network  
sudo chmod 755 runNetwork.sh createParticipant.sh issueId.sh createParticipants.sh (first time, give access to the scripts)  

./runNetwork.sh  
```

### 2. Create some participants and business cards:
From the root folder of repo run:  

```
cd brighteyed-network  
./createParticipants.sh  
```

### 3. Start Node.js web-app:
From the root folder of repo run:  

```
cd brighteyed-app  
npm install (first time only)  
npm start  
```


### 4. (Optionally) If you need more participants or business cards:
From brighteyed-network folder  
Just to create a participant:  
```
./createParticipant.sh Doctor/Patient nie name surname email  
```
To create a participant and issue a card:  
```
 ./createParticipant.sh Doctor/Patient nie name surname email  
 ```
