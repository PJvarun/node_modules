// import numbers from './content/numbers

// Warning : To load on Es module , set "type": "module"  in the package.json or use the .mjs extension.

//require(path) =>to import files

const names = require('./Content/sub/names')

console.log('user1 =', names.user1);
console.log('user2 =', names.user2);
console.log('user3 =', names.user3);


const numbers = require('./Content/sub/numbers')
let result=numbers.x * numbers.y *numbers.z
console.log('product =', result);