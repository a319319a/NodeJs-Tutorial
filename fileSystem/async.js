const fs=require('fs')

// fs.mkdir('Amartya',(err)=>{
//     console.log(err)
// })
// fs.writeFile('Amartya/crudoperation.txt','There are all async file operation. ',(err)=>{
//     console.log(err)
// })
// fs.appendFile('Amartya/crudoperation.txt','Data appended. ',(err)=>{
//     console.log(err)
// })
fs.readFile('Amartya/crudoperation.txt','utf-8',(err,data)=>{
    if (err) {
        console.log(err)
    }
    console.log(data)
})

fs.unlink('Amartya/crudoperation.txt',(err)=>{
    if (err) {
        console.log(err)
    }
})
fs.rmdir('Amartya',(err)=>{
    if (err) {
        console.log(err)
    }
})