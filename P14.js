 // os module

 const os = require('os')

 const user = os.userInfo()
 console.log('user info =', user);

 console.log('uptime of system =', os.uptime(), 'ms');

 const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMen:os.totalmem(),
    freeMen:os.freemem(),
    arch:os.arch(),
    cpu:os.cpus(),
    avgLoad:os.loadavg()
 }
 console.log('current os =', currentOS);