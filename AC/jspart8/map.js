// let arr=[1,2,3,4,5]
// let s=arr.map(function(el)//operation can be done
// {  return el*2;

// })
// console.log(s)
// let arr=[1,2,3,2,4,5,6]
// let f=arr.filter((num)=>{
//      return num%2;
// })
// console.log(f); filter
//every method
//let arr=[1,2,3,4];
// let f=arr.every((el)=>{
//    return el%2==0;
// })
// console.log(f);
// let s=arr.some((el)=>{
//     return el%2==0;
// }
// )
// console.log(s);// return true false
// let b=arr.reduce((res,el)=>{
//    return res+el;
// })
// console.log(b);
//finding maximum
let arr=[1,2,4,5,8,2];
let f=arr.reduce((res,el)=>{
    if(el>res){
        return el;
    }
    else
    {
        return res;
    }
}
)
console.log(f);