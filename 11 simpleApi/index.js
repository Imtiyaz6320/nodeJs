// const http = require('http')
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application\json'})
//     res.write(JSON.stringify({name:'imtiyaz hussain', email : 'imtiyaz6320@gmail'}))
//     res.end()
// }).listen(8080)

const http = require('http')
const data = require('./data')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data))
    res.end()
}).listen(8080)