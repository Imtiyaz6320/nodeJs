const {MongoClient} = require ('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'e-comm'
const client = new MongoClient(url);

async function getData() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);
}
getData();


/*{
  "dependencies": {
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "mongodb": "^6.4.0"
  }
}
*/