let a=document.querySelector("form")
a.addEventListener("submit",function(event){
       event.preventDefault();
       //console.log("page registered")
       //alert("form submitted")
    //    let i=document.querySelector("input")
    //    console.log(i.value);
    
    let user=document.querySelector("#user")
    let pass=document.querySelector("#pass")
    console.log(user.value)
     console.log(pass.value);

})