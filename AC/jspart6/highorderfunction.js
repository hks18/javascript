function greet(func,n){
    for (let i=0;i<=n;i++)
    {
        func();
    }
   
}
let a= function()
{
    console.log("hello");
}
greet(a,5);