
const { ifError } = require('assert');
const { log } = require('console');
const fs = require ('fs')
const path = require ('path')
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`

// fs.writeFileSync(filePath, 'this is simple text file ')

// fs.readFile(filePath,(err,item)=>{
//     console.log(item);
// })   // output <Buffer 74 68 69 73 20 69 73 20 73 69 6d 70 6c 65 20 74 65 78 74 20 66 69 6c 65 20>

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })   

// fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
//     if(!err) console.log("file updatedd");
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is  updatedd");
// })

fs.unlinkSync(`${dirPath}/fruit.txt`)