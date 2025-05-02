let arr=["a","b","c","d"];
function concat(arr)
{let s=""
    for (let i=0;i<arr.length;i++)
    {
       s+=arr[i];
    }
    return s;
}

console.log(concat(arr))