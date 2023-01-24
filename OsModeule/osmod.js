const os=require('os')

console.log(os.arch())
console.log(`Free Memory ${os.freemem()/1024/1024/1024} GB memory`)
console.log(`The Host Name is ${os.hostname()}`)
console.log(`This is a platform ${os.platform()} ${os.version()}`)
console.log("the temporary files are",os.tmpdir())
