let num=prompt("Enter the number")
let sum=0;
while(num>0)
{
    let temp=(num%10);
    sum+=temp;
    num=Math.floor(num/10);
}
console.log(sum);