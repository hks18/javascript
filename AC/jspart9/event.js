const b=document.querySelector(".best")
b.addEventListener("click",function(){
    console.log("hello")
})
const a=document.querySelector("form")
const Input=document.querySelector("input")
// a.addEventListener("submit",(Event)=>{
//     Event.preventDefault();
//     console.log(Input.value)
// })
a.addEventListener("submit",function(Event){
    Event.preventDefault();
    console.log(Input.value)
})