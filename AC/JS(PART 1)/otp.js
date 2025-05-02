function num(){
    let n=0;
    let m=""
     while(n<4)
     {
        m += Math.round(Math.random()*9.5);
       
        n+=1;

     }
     return m;
    
}
console.log(num())
