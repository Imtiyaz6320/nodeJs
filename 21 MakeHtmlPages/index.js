const express = require('express');
const path = require ('path')
// console.log(__dirname);
const app = express();
const PublicPath = path.join(__dirname,'public')
// console.log(PublicPath);
app.use(express.static(PublicPath))  // http://localhost:7878/about.html


app.listen(7878);



/*
{
  "dependencies": {
    "express": "^4.18.2"
  }
}
*/