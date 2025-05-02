let max=prompt("Enter the maximum number");
let m=Math.floor(Math.random()*max+1
)
console.log(m);
let guess=prompt("guess the number");
while(true){
    if(guess=="quit")
    {
        break;
        
    }
     if(guess==m)
       { console.log("you guessed it right")
        break;}
    else
      {console.log("you guessed wrong")
     guess=prompt("Enter again");}
}