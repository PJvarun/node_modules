// dns = domain name system(server) 

const dns = require('dns')

dns.lookup('www.be-practical.com', function (err, address, family){
    if(err) throw err;
    console.log('address =', address);
    console.log('family =', family);

    // lookup service

    dns.lookupService(address, 22, function(err, host, service){
        if(err) throw err;
        console.log('host =',host);
        console.log('service =', service);
    })
})