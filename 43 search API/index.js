const express = require("express");

require("./config");
const products = require("./product");

const app = express();

app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  let data = await products.find({
    $or: [
      { brand: { $regex: req.params.key } },
      { name: { $regex: req.params.key } },
    ],
  });
  resp.send(data);
  console.log(data);
});

app.listen(7878);
// brand and name non main search karta hai 
/* 2 TYPE search hota hai  one maching all line macing */
