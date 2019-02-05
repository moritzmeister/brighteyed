../fabric-servers/teardownFabric.sh
../fabric-servers/startFabric.sh
export FABRIC_VERSION=hlfv12
export COMPOSER_PROVIDERS='{
  "github": {
    "provider": "github",
    "module": "passport-github",
    "clientID": "e058114a138d103248ae",
    "clientSecret": "42e6561ea27df21aa9e7556cbf5ed88f69f84643",
    "authPath": "/auth/github",
    "callbackURL": "/auth/github/callback",
    "successRedirect": "http://localhost:4200/Login",
    "failureRedirect": "http://localhost:4200/"
  }
}'
rm -rf *.card
composer card delete --card admin@brighteyed-network
composer network install --card PeerAdmin@hlfv1 --archiveFile brighteyed-network@0.0.1.bna
composer network start --networkName brighteyed-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@brighteyed-network
composer-rest-server -c admin@brighteyed-network -m true