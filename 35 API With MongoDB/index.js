const dbConnect= require('./mongodb');

dbConnect().then((resp)=>{
resp.find({name:'nord'}).toArray().then((data)=>{
console.log(data)
})
})

const main=async ()=>{
   let data = await dbConnect();
   data = await data.find({}).toArray();
   console.log(data)
}

main()


/*"dependencies": {
    "chalk": "^4.1.2",
    "colors": "^1.4.0",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "mongodb": "^4.1.2",
    "simple-node-logger": "^21.8.12"
  }*/