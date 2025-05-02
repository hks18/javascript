// async function greet() {
//     return "greet function created"
    
// }
// greet() promise fullfilled
// async function greet() {
//        throw "Error created"// error created
//          return "greet function created"
        
//      }
// greet()
//     .then((result) => {
//         console.log("promise excecuted successfully")
//     }).catch((err) => {
//         console.log("error was created")
//     });// deal with the error
h1=document.querySelector("h1");
function changecolor(color,time){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num=Math.floor(Math.random()*10)+1;
        if(num>3){
            reject("promise was rejected")}
        h1.style.color=color
        console.log(`color changed to${color}`)
        resolve("promise was resolved")
    },time)
    
})
}
async function change() {
    try{
  await  changecolor("red",1000) //bina try catch ke error aane pe next line promise ke baad jo a=5 hai woh exceute nhi horha tha but with help of try and catch error hone ke baad bhi exceute hua 
   await changecolor("blue",1000)
   await changecolor("green",1000)}
   catch(err){
    console.log(err)
   }
   let a=5;
   console.log(a)
}
