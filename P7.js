const cluster = require('cluster')

// is Master => true = single thread

// is worker => true = multi thread => through method called fork()

if(cluster.isMaster){
    console.log('node is running in single thread');

}else{
    console.log('no action');
}