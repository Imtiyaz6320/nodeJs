const dbConnection = require('./mongodb')

// Read in mongodb 
// using promises
// console.log(dbConnection()); 
// dbConnection().then((res)=>{
//     // console.log(res.find());
//     // console.log(res.find().toArray());
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })

// using async


const main = async () => {
    let data = await dbConnection()
    data = await data.find().toArray();
    console.log(data);
}

main()


/*{
  "dependencies": {
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "mongodb": "^6.4.0"
  }
}
*/