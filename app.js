const chalk = require('chalk')

const notes = require('./notes')
console.log(notes())

console.log(chalk.green('Success!'))
console.log(chalk.blue.bold('Nodemon!'))



//const validator = require('validator')
//console.log(validator.isURL('http://abcd.com'))
//console.log(validator.isEmail('dlbnprabath.gmail.com'))


// const add = require('./utils')
// const sum = add(6, 4)
// console.log(sum)