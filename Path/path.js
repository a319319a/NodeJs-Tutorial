const path=require('path')

console.log("Directory Name",path.dirname('Home/NodejsTutorial/Path/path.js'))
console.log(">extention name is",path.extname('Home/NodejsTutorial/Path/path.js'))
console.log("The base name of my file is",path.basename('Home/NodejsTutorial/Path/path.js'))

console.log(path.parse('Home/NodejsTutorial/Path/path.js'))

const myPath=path.parse('Home/NodejsTutorial/Path/path.js')

console.log(myPath.base,myPath.root,myPath.dir)