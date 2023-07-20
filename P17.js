const {readFile, writeFile, read } = require('fs');
const { ReadableStreamDefaultReader } = require('node:stream/web');

// asynchronous 

console.log('started');

// first file read
readFile( './Content/sub/first.txt', 'utf-8', (err,res1) =>{
    if(err){
        console.log(err)
        return
    }
    const first= res1
    // second file read
    readFile('./Content/sub/second.txt',` here is Asynchronous result = \n ${first} \n\n ${second}`,(err,res3) =>{
        if(err){
            console.log(err);
            return
        }
        const second = res2
        
        // write file

        writeFile('./Content/sub/write-async.txt', `here is Asynchronous result = \n ${first} \n\n ${second}`,(err,res3)  => {
    if(err){
    console.log(err);
      return
   }
   console.log('completed');
        })
    })
})