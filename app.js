const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes');
const { argv } = require('yargs');

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
    handler(argv) {
       notes.addNotes(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title:{
            describe: 'Removing a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.removeNotes(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler() {
        notes.listNotes()
    }
})

//Create read note
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'reading a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.readNote(argv.title)
    }
})

yargs.parse()