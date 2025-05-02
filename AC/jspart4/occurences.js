let arr=[1,2,3,3,2,5,6,2,3];
let a=[]
for (let i=0;i<arr.length;i++)
{  
    if(arr[i]!=2)
       a.push(arr[i]);
}
console.log(a)