let num=prompt("Enter the number")
let sum=0;
let c=0;
while(num!=0)
{ 
    num=Math.floor(num/10);
    c++;
}
console.log(c);