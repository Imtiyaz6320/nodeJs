// Delete Data in MongoDB 
// nodemon delete.js


const dbConnection = require ('./mongodb');

const deleteData = async () => {
   let data = await dbConnection();
//    let result = await  data.deleteOne({mobile: "tiktok"})
let result = await  data.deleteMany({mobile: "max-0"})
   console.log(result);
   if (result.acknowledged) {
    console.log("data deleted sussccc");
   }
}
deleteData();