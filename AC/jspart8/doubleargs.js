let arr = [1, 2, 3, 4, 5]
let newArr = (arr, ...args) => [...arr, ...args.map((el) => el * 2)]
console.log(newArr(arr, 5, 6, 7, 8))