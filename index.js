const name="amartya"
console.log(name)

const fs=require('fs')

// fs.writeFileSync('read.txt','I am waiting for you')

// fs.appendFileSync('read.txt',"I am at the dumdum station now")
fs.mkdirSync('Main')
fs.writeFileSync('Main/read.txt','I am waiting for you')

const read_buffer=fs.readFileSync('Main/read.txt','utf-8')//This will receive a buffer data
console.log(read_buffer)
const read_original=fs.readFileSync('Main/read.txt','utf-8')
fs.renameSync('Main/read.txt','Main/readWite.txt')
fs.unlinkSync('Main/readWite.txt')
setTimeout(() => {
    
}, 3000)
fs.rmdirSync('Main')
console.log(read_original)