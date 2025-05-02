let arr=[20,30,40,50,60]
let f=arr.every((el)=>{
    return el%10==0;
})
console.log(f);
let g=arr.reduce((acc,el)=>
{
  if(el<acc)
    return el;
  else
    return acc;
})
console.log(g);