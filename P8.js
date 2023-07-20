const cluster = require('cluster')

if(cluster.isWorker){
    console.log('node is running in multi thread node  ');
}else{
    cluster.fork()
    cluster.fork()
    cluster.fork()

}