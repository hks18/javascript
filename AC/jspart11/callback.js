 h1=document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="red"
// },1000)
// h1=document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="blue"
// },2000)
// h1=document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="green"
// },3000)//suppose multiple color change krna ho toh baar baar 1s count karna possible nhi hai so isko ham aise likhenge 

// function changecolor(color,time,nextcolor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextcolor)
//             nextcolor();
//     },time);
// }
// changecolor("red",1000);
// changecolor("green",2000);
// changecolor("blue",3000); chalo ab callback usekarte hai
// changecolor("red",1000,()=>{
//      changecolor("orange",1000,()=>{
//         changecolor("green",1000,()=>{
//             changecolor("blue",1000)
//         })
//      })
// })//call back hell
function changecolor(color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve ("color changed")
        },time);
    })
   
}
changecolor("red",1000)
.then(()=>{
    console.log("color changed to red")
})
.then(()=>{
    changecolor("blue",1000)
    console.log("color changed to blue")
})
