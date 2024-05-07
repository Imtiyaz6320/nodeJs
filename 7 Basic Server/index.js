const http = require ('http')

http.createServer ((req,resp)=>{
    resp.write("<h1>hello imtiyaz your start working now</h1>")
    resp.end()
}).listen(8080)
console.log("yes this runing ");