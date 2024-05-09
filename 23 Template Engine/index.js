const express = require('express');
const path = require ('path')

const app = express();
const PublicPath = path.join(__dirname,'public')
// const PuPath = path.join(__dirname,'views')  

app.set('view engine', 'ejs')

app.get('/profile',(_,res)=>{
    const user ={
        name:'imtiyaz',
        email: 'imtiyaz@testing.com',
        cite: 'bihar',
        sike: ['nodejs','html','c++','.net']
    }
    res.render('profile',{user})
})

app.get('/login',(_,res)=>{
    res.render('login')
})



app.get('',(_,res)=>{
    res.sendFile(`${PublicPath}/index.html`)
})

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






// {
//     "dependencies": {
//       "ejs": "^3.1.9",
//       "express": "^4.18.2"
//     }
//   }
  