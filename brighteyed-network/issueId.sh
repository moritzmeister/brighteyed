./createParticipant.sh $1 $2 $3 $4 $5
composer identity issue -c admin@brighteyed-network -f $3.card -u $3 -a "resource":"org.brighteyed.network.$1#$2"
