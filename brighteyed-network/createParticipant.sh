if [ $1 == "Doctor" ]; then
    composer participant add -c admin@brighteyed-network -d '{"$class":"org.brighteyed.network.Doctor","nie":'\"$2\"',"firstName":'\"$3\"',"lastName":'\"$4\"', "email":'\"$5\"', "myPatients":""}'
elif [ $1 == "Patient" ]; then
    composer participant add -c admin@brighteyed-network -d '{"$class":"org.brighteyed.network.Patient","nie":'\"$2\"',"firstName":'\"$3\"',"lastName":'\"$4\"', "email":'\"$5\"', "authorized":"", "myRecords":""}'
else
    echo "Unknown person type"
fi