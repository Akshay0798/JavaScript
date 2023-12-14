//? SET TIMEOUT
/*console.log("one")
console.log("Two");

function hello() {
    console.log('hello universe');
}
setTimeout(hello, 3000);

setTimeout(() => {
    console.log('hello world');
}, 3000);

console.log("three");
console.log("four");*/

//******************************************************************

/*function sum(a,b) {
    console.log(a + b);
}
//* mala function as a parameter pass karach aahe
function calculator(a, b, sumCallback) {
    sumCallback(a,b)
}

calculator(1, 2, sum);*/

/*function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}
calculator(1, 2, () => {
    console.log("Sum is " + (1 + 2)); 
})*/

//****************************************************************

function getData(dataID) {
    setTimeout(() => {
        console.log("data", dataID);
    }, 3000);
}


