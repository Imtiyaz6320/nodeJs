const express = require('express');
const app = express();

app.get("", (req, resp) => {
    console.log(req.query.name)
    resp.send("Welcome,"+ req.query.name);
});

app.get("/about", (req, resp) => {
    resp.send("Welcome, This is a About Page");
});

app.get("/help", (req, resp) => {
    resp.send("Welcome, This is a Help Page");
});


app.listen(7878);


// send url ==> http://localhost:7878/?name='imtiyaz'
// act ==> req.query.name

/*
{
  "dependencies": {
    "express": "^4.18.2"
  }
}
*/