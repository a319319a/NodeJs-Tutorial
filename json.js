
const fs=require('fs')
const book={
    title:'innerEngineering and self motivation',
    author:'Sadhguru',
    price:250
}


const bookJSon=JSON.stringify(book)

const storeJson=()=>{
    if (!fs.existsSync("./Text/text.json")) {
        fs.writeFileSync('./Text/text.json',bookJSon)
    } else {
        fs.appendFileSync('./Text/text.json',bookJSon)
    }
}


const addNote=(title,body)=>{
    const notes=loadNotes()

    notes.push({
        title:title,
        body:body
    })
}

const loadNotes=()=>{
    try {
        const dataBuffer=fs.readFileSync('./Text/text.json')
        const stringData=dataBuffer.toString()
        return JSON.parse(stringData)
    } catch (error) {
        return []
    }
}

const saveNotes=(notes)=>{
    const jsonData=JSON.stringify('notes')
    if (!fs.existsSync("./Text/text.json")) {
        fs.writeFileSync('./Text/text.json',jsonData)
    } else {
        fs.appendFileSync('./Text/text.json',jsonData)
    }
}
module.exports={storeJson}