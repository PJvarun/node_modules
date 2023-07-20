const { readFileSync, writeFileSync} = require('fs') // fs = file system

// sync read and write

console.log('started');
const first =readFileSync('./Content/sub/first.txt') // synchronous read
const second = readFileSync('./Content/sub/second.txt') 

writeFileSync('./Content/sub/result-file-1.txt', `here is the result :${first} \n\n ${second}`,{
    flag:'a' }) // synchronous write

    console.log('completed');



    
 