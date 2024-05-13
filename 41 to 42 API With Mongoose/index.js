const express = require("express");

require("./config");
const productstestings = require("./product");

const app = express();

app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new productstestings(req.body);
  let result = await data.save();
  console.log(req.body);
  res.send(result);
});

app.get("/list", async (req, res) => {
  let data = await productstestings.find();
  console.log(data);
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  let data = await productstestings.deleteOne(req.params);
  res.send(data);
});

app.put("/update/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await productstestings.updateOne(req.params, { $set: req.body });
  resp.send(data);
});

app.listen(7878);

/*
{
  "name": "39-mongooes-in-nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "imtiyaz",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.3",
    "mongoose": "^8.2.1"
  }
}

*/
