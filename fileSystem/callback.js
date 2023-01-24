const fs=require('fs')

// fs.writeFile('read.txt','Today I am learning the Call back. ',(err)=>{
//     console.log('the file is already created')
//     console.log(err)
// })

// Call back is needed in async operation since node 
// does not understand what to do if the file is laready  created

// fs.appendFile('read.txt',"This is a  very interesting topic. ",(err)=>{
//     console.log('Task completed',err)
// })

var readData=fs.readFile('read.txt','UTF-8',(err,data)=>{
    console.log("The file read is completed ",data)
})
console.log("The data is ",readData)