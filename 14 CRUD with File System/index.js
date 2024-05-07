const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/appleee.txt`;

// creat file 
// fs.writeFileSync(filePath,'this is a simple file');

// fs.readFile(filePath, (err, item) => {
//   console.log(item);
// });

// output
// <Buffer 74 68 69 73 20 69 73 20 61 20 73 69 6d 70 6c 65 20 66 69 6c 65>

// show file 
// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item); // output this is a simple file
// });

// fs.appendFile(filePath, " for fruits", (err) => {
//   if (!err) console.log("file is updated");
// });

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) console.log("file name is updated");
// });

fs.unlinkSync(`${dirPath}/fruit.txt`);
