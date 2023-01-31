const path=require('path')
const fs=require('fs')
// const chalk=require('chalk')

const readNote=(title)=>{
    const notes=loadNotes()
 return   notes.find((note)=>note.title===title)
}
const list=function () {
    const notes=loadNotes()
    console.log(notes)
}
const removeNote=function (title) {
    const notes=loadNotes()
    const notesToKeep=notes.filter((note)=>note.title!==title)
    saveNotes(notesToKeep)
}

const addNote=(title,body)=>{
   const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=>note.title===title)
    const duplicateNotesMatch=notes.find((note)=>note.title===title)


    if (!duplicateNotesMatch) {
        notes.push({
            title:title,
            body:body
        })        
        saveNotes(notes)
    }
    else
    {
        console.log('Note title already exists')
    }
}

const loadNotes=function(){
    try {
        const dataBuffer=fs.readFileSync('./Text/text.json')
        const stringData=dataBuffer.toString()
        return JSON.parse(stringData)
    } catch (error) {
        return []
    }
}

const saveNotes=(notes)=>{
    const jsonData=JSON.stringify(notes)
    if (!fs.existsSync("./Text")) {
        fs.mkdirSync("Text")
        // path_tofile=path.relative('Text','text.json')
        // fs.open(path_tofile,'w',function(err,data){
        //     if (err) {
        //         throw err
        //     }
        //     console.log('File created successfully')
        // })
        fs.writeFileSync('./Text/text.json',jsonData)
    } 
    else
    {
        fs.writeFileSync('./Text/text.json',jsonData)
    }
}

module.exports={addNote,removeNote,list,readNote}