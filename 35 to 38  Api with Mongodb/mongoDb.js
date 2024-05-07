const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'
const databaseName = 'e-comm'
const client = new MongoClient(url)

async function dbConnection(){
    let result = await client.connect();
    let db = result.db(databaseName)
    return db.collection('products');
}
module.exports = dbConnection;


// "dependencies": {
//     "express": "^4.18.3",
//     "mongodb": "^6.5.0"
//   }