// let btn=document.querySelector("button");
// btn.onclick=()=>{
//     console.log("button was clicked")
// }
let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.onclick=(()=>{//on click is used to perform one function  at atime if we try to perform onclick multiple function thn the last onclick will be excetuted
       console.log("hello");
    })
    btn.onmouseenter=(()=>{
        console.log("mouse enter")
    })
}