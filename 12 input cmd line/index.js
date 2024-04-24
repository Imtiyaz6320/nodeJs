console.log(process.argv[2]);
// console.log(process);
const fs = require ('fs')

const input = process.argv
// fs.writeFileSync(input[2],input[3])

if (input[2]=='add') {                            // node  ./index.js add data.txt 'this is data fruit and coloras'
    fs.writeFileSync(input[3],input[4])
} else if (input[2] == 'remove'){           // node  ./index.js remove data.txt  
    fs.unlinkSync(input[3])
}else{
    console.log("invalid output");      //node  ./index.js  hello i.txt  
}