// console.log( process.argv);
// console.log( process);

const input = process.argv;

const fs = require('fs');

if(input[2]=='add')   // node ./index.js add  data.txt "this is data fruit colour"
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove')  // node ./index.js remove  data.txt  
{
    fs.unlinkSync(input[3])
}
else                                // node ./index.js abc      
{
    console.log("invalid input ")
}


// node index.js other red.txt 'this is color'