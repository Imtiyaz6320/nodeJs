// Update Data in MongoDB

const dbConnection = require("./mongodb");

const UpdateData = async () => {
  let data = await dbConnection();

  // single update
//   let result = await data.updateOne(
//       {mobile: "max-0"}, {$set: { mobile: 'lava', price: 133 }}
//   )

  // multple line  update

  let result = await data.updateMany(
    { brand: "micromax" },
    { $set: { brand: "Made in xyzcontry" } }
  );
  console.log(result);
};

UpdateData();
// nodemon update.js