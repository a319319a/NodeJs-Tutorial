const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.end("This is the main page")
    }
    else if(req.url=='/about')
    {
        res.end("This is the about page")
    }
    else if(req.url=='/contact')
    {
        res.end("Hi My name is Amartya an my number is 8910881705")
    }
    else
    {
        res.writeHead(404,{"content-type":"text/html"})
        res.end("<h1>404 Error page does not exists</h1>")
    }
})

server.listen(8001,"127.0.0.1",()=>{
    console.log("<h1>This server is listening at port 8001</h1>")
})