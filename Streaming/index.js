const fs=require('fs')
const http=require('http')

const server=http.createServer()

server.on('request',(req,res)=>{
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err)
    //     {
    //         return console.error(err);
    //     }
    //     else
    //     {
    //         res.end(data.toString())
    //     }
    // })
    const rStream=fs.createReadStream('input.txt')
    rStream.on('data',(chunkdata)=>{
        res.write(chunkdata)
    })
    rStream.on('end',()=>{
        res.end()
    })
    rStream.on('error',(err)=>{
        console.log(err);
        res.end('file not found')
    })
    
    
})
server.listen(8080,'127.0.0.1',)

