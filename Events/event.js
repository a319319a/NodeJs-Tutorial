const EventEmitter=require('events')

const event=new EventEmitter()

// event.on('SayName',()=>{
//     console.log("My name is AMartya")
// })
// event.on('SayName',()=>{
//     console.log("My name is Pratap")
// })
// event.on('SayName',()=>{
//     console.log("My name is Avirup")
// })
// event.on('SayName',()=>{
//     console.log("My name is Saswti")
// })
// event.on('SayName',()=>{
//     console.log("My name is Srijit")
// })
// event.emit("SayName")


event.on('checkPage',(sc,msg)=>{
    console.log(`Status code is ${sc} and the page is ${msg}`)
})
event.emit('checkPage',200,"Running")
