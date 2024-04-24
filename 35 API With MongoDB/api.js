const express = require('express')
const dbConnect = require('./mongodb')
const mongodb = require('mongodb')
const app = express();
// post using this code 
app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.log(data);
    res.send(data)
});

app.post('/', async (req, res) => {
    // console.log(req.body);
    let data = await dbConnect()
    let result = await data.insertMany(req.body)
    console.log(result);
    res.send(result)
});

app.put('/:name', async (req, res) => {
    // console.log(req.body);
    let data = await dbConnect()
    // let result = await data.updateOne(
    //     { name: "Product 11" },
    //     { $set: { category: "accessory" } }
    // )
    let result = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    console.log(result);
    res.send({ result: 'update' })
});

app.delete("/:id", async (req, res) => {
    {
        // console.log(req.params.id);
        let data = await dbConnect();
        let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
        console.log(result);
        res.send(result)
    }
})


app.listen(7878)









//put methed   
/* "url": "http://localhost:7878/Product 11",
body
row      json
{
    "name": "Product 11",
    "brand": "OnePlus",
    "price": 444,
    "category": "laptop"
  }
*/