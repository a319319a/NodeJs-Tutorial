const biodata={
    name:"Amartya",
    age:"27",
    channel:"Codelogicx",
    mobile:8910881705
}
const jsonData=JSON.stringify(biodata)

console.log(jsonData)

const objData=JSON.parse(jsonData)

console.log(objData)


const { readFileSync, rmdir } = require('fs')
const http=require('http')

const server = http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.end("Hello Welcome to Mukherjee and Sons ")
    }
    else if(req.url=='/about')
    {
        res.end(`My name is ${objData.name} and I work at ${objData.channel}`)
    }
    else if(req.url=='/contact')
    {
        res.end(`My contact number is ${objData['mobile']}` )
    }
    else if (req.url=='/write') {
        const fs=require('fs')
        if (fs.existsSync('json.json')) {
           fs.appendFileSync('json.json',JSON.stringify(objData),(err)=>{
            if (err) {
                res.writeHead(417,{"content-type":"text/html"})

                res.end(`The error is ${err}`)
            }
            res.end("Record inserted")
         }) 
        }
        else
        {
            fs.writeFileSync('json.json',JSON.stringify(objData),(err)=>{
                if (err) {
                    res.writeHead(417,{"content-type":"text/html"})
                 res.end(`The error is ${err}`)
                }
                res.end(`The error is ${err}`)
             })
        }
        
    }
    else if (req.url=='/read') {
        const fs=require('fs')
        fs.readFileSync('./json.json','utf-8',(err,data)=>{
         const orgData=JSON.parse(data)
         console.log(orgData)
        })
    }
    else
    {
        res.writeHead(404,{"content-type":"text/html"})
        res.end("<h1>404 Error page does not exists</h1>")
    }
})

server.listen(8002,"localhost",()=>{
    console.log("<h1>Server started</h1>")
})