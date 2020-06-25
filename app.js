const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes');

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Add a new Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Add a note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title :' + argv.title)
        console.log('Note :' + argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function() {
        console.log('Removing a note!')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function() {
        console.log('Listing all notes!')
    }
})

//Create read note
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function() {
        console.log('Reading a note!')
    }
})

yargs.parse()

// const command = process.argv[2];
// console.log(process.argv)

// if (command === 'add')
// {
//     console.log('Adding note!')
// }
// else if (command === 'remove')
// {
//     console.log('Removing note!')
// }

// console.log(notes())

// console.log(chalk.green('Success!'))
// console.log(chalk.blue.bold('Nodemon!'))

// console.log(process.argv[2])

//const validator = require('validator')
//console.log(validator.isURL('http://abcd.com'))
//console.log(validator.isEmail('dlbnprabath.gmail.com'))


// const add = require('./utils')
// const sum = add(6, 4)
// console.log(sum)