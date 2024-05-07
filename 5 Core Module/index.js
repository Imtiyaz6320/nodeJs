const app=require('./app')
console.log("this is call app.js", app.xyz())

let arr=[4,1,6,3,4,89,0];

const result =arr.filter((item)=>{
    return item>=4
});
console.warn(result);