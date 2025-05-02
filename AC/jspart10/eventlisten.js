//eventlistener can perform multiple gtask at a time
let btns=document.querySelectorAll("button");
for(btn of btns){
    //btn.onclick=(()=>{//on click is used to perform one function  at atime if we try to perform onclick multiple function thn the last onclick will be excetuted
    btn.addEventListener("click",sayhello)
    btn.addEventListener("click",sayhi)
}
function sayhello(){
  alert("hello")
}
function sayhi(){
    alert("hi")
  }
