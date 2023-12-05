//! destructuring 
// let arr = [3,4];
// let [a,b]=arr;
// console.log(arr);

// let arr = [3,5,8,9,12,14,18,20];
// let [a, b, c, d, ...rest] = arr
// console.log(a, b, c, d, rest);

//? rest value i need from 12
// let arr = [3,5,8,9,12,14,18,20];
// let [a, , , , ...rest] = arr
// console.log(a, rest);

// let {a,b} = {a:1,b:9}
// console.log(a,b);

//! Spread Operator
let arr1 = [3,6,9]
let obj1 = {...arr1}
console.log(obj1);

const sum = (v1, v2, v3) => {
    return v1+v2+v3
};

console.log(sum(...arr1));

let obj2 = {
    name:"Akshay",
    company:"Microsoft",
    address: "Bangalore"
}
// console.log({company:"Google",...obj2}); //this will print the obj2 object without changing any value
console.log({...obj2,company:"Google"});