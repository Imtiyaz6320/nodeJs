// Insert Data from MongoDB
// nodemon ./insert.js

const dbConnection = require("./mongodb");

const insert = async () => {
  const db = await dbConnection();
//   console.log('hello', db );
  const result = await db.insertMany([
    { mobile: "max-0", brand: "micromax", price: 12033, color: "non" },
    { mobile: "max-1", brand: "micromax", price: 1.33, color: "kol" },
    { mobile: "max-2", brand: "micromax", price: 90, color: "mou" },
    { mobile: "max-3", brand: "micromax", price: 0.12, color: "lopu" },
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  } else {
    console.log("some thing ronge");
  }
};
insert();

// nodemon insert.js