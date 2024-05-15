// npm i multer

const express = require("express");
const multer = require("multer");
const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cd) {
      cd(null, "uploads");
    },
    filename: function (req, file, cd) {
      cd(null, file.fieldname + "_" + Date.now() + ",jpg");
    },
  }),
}).single("user_file");

app.post("/upload", upload, (req, res) => {
  res.send("file Upload");
});

app.listen(7878);

// "dependencies": {
//     "express": "^4.17.1",
//     "mongodb": "^3.6.10",
//     "mongoose": "^5.11.15",
//     "multer": "^1.4.5-lts.1"
//   }


/* upload file in postman 
post http://localhost:7878/upload
Body => form-data => key ->user_file  and selact file   value ==> selact file 
*/