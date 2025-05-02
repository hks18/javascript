let a=function(...args){
    let sum=0;
    for(let i=0;i<args.length;i++)
    {
        sum=sum+=args[i];
    }
    return sum/args.length;
}
console.log(a(1,2,3,))