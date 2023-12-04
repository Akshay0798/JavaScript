/* 
function myFunction(){
    console.log("Suppu");
    console.log("Akshay");
}
myFunction();
myFunction();*/

/* function myFunction(msg,n){ // ? parameter
    console.log(msg + n);
}
myFunction("I Love Suppu",69); // ? Argument */

// * function myFunction(a,b){
//     s = a+b;
//     console.log("before retuen");
//     return s;
//     console.log("after return");
// }
// let val = myFunction(98,54);
// console.log(val);

// ? Arrow Function

// normal sum function
function sum(a,b){
    return a + b;
}
// ! sum arrow 
const arrowSum = (a,b)=> {
    console.log(a + b);
}

// normal multiplication function
function mul(a,b){
    return a * b;
}
//  ! mul arrow
let mulArrow = (a,b)=>{
    console.log(a * b);
}
mulArrow = 7;

/*function countVowels(str){
    let count = 0;
    for (const char of str) {
        if(char === a || char === e || char === i || char === o || char === u){
            count++;
        }
    }
    console.log(count);
}

let countVowel = str => {
    let count = 0;
    for (const char of str) {
        if(char === a || char === e || char === i || char === o || char === u){
            count++;
        }
    }
    console.log(count);
};*/

//? arr.forEach(callBackFunction):use for array only

/* let arr=['ngp','pune','tanuku'];
arr.forEach(function printVal(val){
    console.log(val); 
})

arr.forEach((val,idx,arr) =>{
    console.log(val.toUpperCase(),idx,arr); 
}) */

//! print the square of each value using the forEach loop.

/*let arr = [2,4,6,8,10];
arr.forEach((val) =>{
    console.log(val**2); 
})

let calSquare = (val) =>{
    console.log(val * val); 
}
arr.forEach(calSquare);*/

//? Map  = create a new array

let nums = [2,4,6,8,10];
// let newArray = nums.map((val) =>{
//     return val**2;
// });
// console.log(newArray); 

//? Filter : create a new array of Element that give true for a condition/filter

// let arr = [1,2,3,4,5,6,7,8,9];
// let filterArray = arr.filter((val) =>{
//  return val % 2 !== 0
// });
// console.log(filterArray);

//?  reduce method - use to find avg or such kind of equation
//? perform some operation and reduce the array to a single value.it return a single value 
//? Example: 

// let arr=[1,2,3,4,5,6,7];
// let output = arr.reduce((result,curr) => { //! result is 1st value and curr is 2nd value of array
//     return result + curr;  //! 1+2 = 3 which will store in result
// });
// console.log(output);

//! find a largest number
/*let arr=[0,5,6,7,1,2,3,4];
let output = arr.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
});
console.log(output);*/

// ! need marks which is greater than 90
/*let marks = [98,64,59,97,28,99,83];
let toppers = marks.filter((val) => {
    return val > 90;
})
console.log(toppers);*/

// ! take a number n as input from user.create an array from 1 to n
// let n = prompt("enter a number");

// let arr = [];

// for(let i=1;i<=n;i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// !use the reduce method to calculate sum of all number in array
// let summ = arr.reduce((result, curr) => {
//     return result + curr;
// })
// console.log("sum = " + summ);

// !use the reduce method to calculate product/factorial of all number in the array
// let product = arr.reduce((result, curr) => {
//     return result * curr;
// })
// console.log("factorial = " + product);










