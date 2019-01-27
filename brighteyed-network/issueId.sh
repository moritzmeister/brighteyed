./createParticipant.sh $1 $2 $3 $4 $5
if [ $1 == "Doctor" ]; then
    composer identity issue -c admin@brighteyed-network -f $3.card -u $3 -a "resource":"org.brighteyed.network.Doctor#$2"
elif [ $1 == "Patient" ]; then
    composer identity issue -c admin@brighteyed-network -f $3.card -u $3 -a "resource":"org.brighteyed.network.Patient#$2"
else
    echo "Unknown person type"
fi