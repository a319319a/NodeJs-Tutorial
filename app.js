
const yargs=require('yargs')
const jsonOperations=require('./json')
const http=require('http')
yargs.version('10.0.0')

// create add command

yargs.command({
    command:'add',
    description:'add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        jsonOperations.addNote(argv.title,argv.body)
    }

})

yargs.command({
    command:'remove',
    description:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        jsonOperations.removeNote(argv.title)
        console.log("Removing a a command from the list")      
    }
})

yargs.command({
    command:'list',
    description:'List of the notes',
    handler() {
        jsonOperations.list()        
    }
})

yargs.command({
    command:'read',
    description:'reading from the file of the notes',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        if (jsonOperations.readNote(argv.title)) {
            console.log('the information regarding the note',jsonOperations.readNote(argv.title))
        }
    }
})


yargs.parse()