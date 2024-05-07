const express = require('express');
const app = express();

const reqFile= ((req,res,next)=>{
    console.log("reqFile");
    next()
})
app.use(reqFile)


app.get('',(req,res)=>{
   res.send("hello imtiyaz")
})
app.get('/abc',(req,res)=>{
    res.send("this good for you okay")
 })
 

app.listen(7878);


/*{
  "dependencies": {
    "ejs": "^3.1.9",
    "express": "^4.18.2"
  }
}
 */