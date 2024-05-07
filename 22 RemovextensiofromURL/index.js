const express = require('express');
const path = require ('path')
// console.log(__dirname);
const app = express();
const PublicPath = path.join(__dirname,'public')
// console.log(PublicPath);
// app.use(express.static(PublicPath))  
app.get('',(_,res)=>{
    res.sendFile(`${PublicPath}/index.html`)
})
app.get('/index',(_,res)=>{
    res.sendFile(`${PublicPath}/index.html`)
})
app.get('/about', (_, res) => {
    res.sendFile(`${PublicPath}/about.html`)
  })
app.get('/services', (_, res) =>{
    res.sendFile(`${PublicPath}/services.html`)
})
app.get('/contact',(_,res)=>{
    res.sendFile(`${PublicPath}/contact.html`)
})
app.get('*', (_, res) =>{
    res.sendFile(`${PublicPath}/404.html`)
})
app.listen(7878);



/*
{
  "dependencies": {
    "express": "^4.18.2"
  }
}
*/