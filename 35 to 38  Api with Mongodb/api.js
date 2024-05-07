const express = require ('express')
const dbConnect = require ('./mongoDb')
const mongodb = require ('mongodb');

const app = express()

app.use(express.json());

app.get('/',async (req,res) => {
    let data = await dbConnect()
        data = await data.find({}).toArray();
        console.log(data);
        res.send(data)
});

app.post('/',async (req,res)=>{
    let data = await dbConnect()
    let result = await data.insertOne(req.body)
    console.log(result);
    res.send(result)
})

// app.put('/',async (req,res)=>{
//     let data = await dbConnect()
//     let result = await data.updateOne (
//         {color: "blackkk"},{$set:{mobile:" onePlesh"}}
//     )
//     console.log(result)
//     res.send({result:'update'})
// })

app.put('/:mobile',async (req,res)=>{
    let data = await dbConnect()
    let result = await data.updateOne (
        {mobile : req.params.mobile},{$set: req.body}
    )
    console.log(result)
    res.send({result:'update'})
})

app.delete('/:id',async (req,res)=>{
    let data = await dbConnect()
    let result = await data.deleteOne ({_id: new mongodb.ObjectId(req.params.id)} )
    console.log(result)
    res.send({result:'delete'})
})


app.listen(7878)


/*
put 
http://localhost:7878/i phone
body
row json

data 
*/