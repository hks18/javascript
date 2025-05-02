let todo=[]
let req=prompt("enter your choice")
let j;
while(true){
  if(req=="quit")
  {
        
    console.log("quitting app")
    break;
  }
  if(req=="print")
    for (let i=0;i<todo.length;i++){
         console.log(i,todo[i])
    }
    else if(req=="add")
    {
        let a=prompt("enter task to add")
        todo.push(a);
    }     
    else if(req=="delete")
    {
        let idx=prompt("enter index you want to delete")
        todo.splice(i,1);
        console.log("delete")
    }
   else{
    console.log("wrong request");
   }
   req=prompt("enter your choice")
  
}

