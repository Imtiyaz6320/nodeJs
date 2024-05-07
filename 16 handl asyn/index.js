let a=20;
let b=0;


let waitingData= new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve(30);
   },2000)
})

waitingData.then((data)=>{
   b=data;
   console.log(a+b)
})

// used of Promise main work stop the run code 2 secd complet then run 