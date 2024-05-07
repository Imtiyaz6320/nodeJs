const express = require('express');
const app = express();

app.get("", (req, resp) => {

    resp.send(`<h1>hello is home page</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus doloribus eum quod, tempora ullam fugiat facilis rem corporis. Impedit aliquid optio consequatur ut qui. Ex repellat quod quia unde accusamus!
  rendis harum minima odit, repellat quasi. Similique porro delectus possimus fugiat repudiandae magni itaque totam placeat culpa officiis, nihil architecto, iure unde eveniet veniam qui ratione voluptatibus distinctio vel!
    </p>`);
});

app.get("/about", (req, resp) => {
    resp.send(`
    <input type = "text" placeholder="User Name"/> 
    <button type="button">ok</button>
    `);
});

app.get("/help", (req, resp) => {
    resp.send([{
        name: "imtiyaz Hussain",
        email: "imtiyaz@TextDecoderStream.com"
    },
    {
        name: "Hussain",
        email: "Hussain@TextDecoderStream.com"
    },{
        name: "imtiyaz Hussain",
        email: "imtiyazHussain@TextDecoderStream.com"
    },
]);
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