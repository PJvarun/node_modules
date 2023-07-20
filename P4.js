const numbers = require('./Content/sub/numbers')
const names = require('./Content/sub/names')
const methods = require('./Content/sub/method')

methods.sayHi(names.user1)
methods.sayHi(names.user2)
methods.sayHi(names.user3)

console.log("sum =", methods.sum(numbers.x,numbers.y, numbers.z)); 