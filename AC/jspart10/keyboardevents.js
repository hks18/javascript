let ip=document.querySelector("input" )
ip.addEventListener("keydown",function(event){
    console.log(event.code);
    if(event.code=="ArrowUp")
        console.log("character move up")
    else if(event.code=="ArrowDown")
        console.log("character move down")
    else if(event.code=="ArrowLeft")
        console.log("character move left")
    else
    console.log("character move right")
})