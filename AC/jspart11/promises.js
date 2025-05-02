h1=document.querySelector("h1")
//function savedb(data,success,failure){
   // let internetspeed=Math.floor(Math.random()*10)+1;
    // if(internetspeed>4){
    //     console.log("your data was saved")
    // }
    // else{
    //     console.log("your data wasn't saved")
    // }let's suppose uh want to perform task with exceution
//       if(internetspeed>4)
//       {
//         success()
//       }
//       else
//       {
//         failure()
//       }
// }
// savedb("hks7",
//     ()=>{
//           console.log("Susccess:your data saved")
//     },
//     ()=>{
//         console.log("failure :your data wasn't saved")
//     }
// ) but writing so many callbacks becomes callback hell and confusing so now we use oncept of promise
function savedb(data){
  return new Promise((resolve,reject)=>{
    let internetspeed=Math.floor(Math.random()*10)+1
    if(internetspeed>4)
            {
              resolve("resolve:data was saved")
            }
            else
            {
              reject("reject:data wasn't saved")
            }
      
  })
}
// let request=savedb("hello")//request promise object
// request.then(()=>{
//   console.log("promise was resolved")
// })
// .catch(()=>{
//   console.log("promise was rejected");
// }) now nested then catch it's just like try and catch only
// savedb("hello")//request promise object
// .then(()=>{
//   console.log("promise was resolved data1 stored")
//   savedb("hello2")
//    .then(()=>{
//     console.log("data 2 was stored")
//    });
// })    //but it looks like nested callback to make it more simple now we do below
// .catch(()=>{
//   console.log("promise was rejected");})
savedb("hello")//request promise object uske baaad hame socha har request ka excetuion pe ek nya kaam ho 
.then((result)=>{
  console.log("promise was resolved data1 stored")
  console.log(result)
   return savedb("hello2")})
.then((result)=>{
  console.log("data 2 was stored")
  console.log(result)
})
.catch((error)=>{
  console.log("promise was rejected");})