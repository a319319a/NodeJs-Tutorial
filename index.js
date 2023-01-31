const chalk=require('chalk')
console.log(blue('Hello world!'));

const yargs=require('yargs')
const argv = yargs(hideBin(process.argv)).argv


yargs.command({
    command:'remove',
    describe:'Remove a note ',
    builder:{
        describe:'Note title',
        demandOption:true,
        type:'string'
    },
    handler:function () {
        console.log('the data has been removed')
    }
})


yargs.command({
    command:'add',
    describe:'Addd a new note',
    builder:{
        describe:'Note title',
        demandOption:true,
        type:'string'
    },
    body:{
        describe:'Note Body',
        demandOption:true,
        type: 'string'
    },
    handler:function (argv) {
        console.log("My name is amartya mukjerhee............")
    }
}).argv


console.log(chalk.blue('Hello world!'));