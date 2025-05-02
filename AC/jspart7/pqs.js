
// const a=((n)=>{
//     return n*n;
// })
// console.log(a(2));

 let a=  setInterval(()=>{
        console.log("hello world")
    },2000)

 setInterval(()=>
{
    clearInterval(a)
},10000)