const getnotes=require('./note')
const jsonData=require('./json')
const yargs = require('yargs')
// const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv)).argv

yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'Addd a new note',
    handler:function (argv) {
        console.log("Amartya mUkhopadhyay")
    }
})

// console.log(yargs)s
// getnotes.getNotes()
// jsonData.storeJson()
// console.log(getnotes.add(5,4))
// console.log(getnotes.sub(99,12))

