//! synchronous programming 
// let a = prompt("Enter your name:");
// let b = prompt("Enter your favorite color:");
// let c = prompt("Enter the city you were born in:");

// console.log("Hello " + a + "! Your favorite color is " + b + " and you were born in " + c + ".");

//! callback function
function Hello(){
    console.log("sayHello")
}
function Hi(){
    console.log("sayHii")
}


const add = (num1, num2, callbackFun) => {
    console.log(num1 + num2);
    callbackFun();
};

add(10,20,Hello);
add(10,200,Hi);
add(56,60,function(){
    console.log("Bye....")
})

/* function add(num1,num2,callbackFun){
    console.log(num1 + num2);
    callbackFun();
}
add(10,20,Hello);
add(10,200,Hi);
add(56,60,function(){
    console.log("Bye....")
}) */


