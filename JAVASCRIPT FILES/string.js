let str = 'Akshay';
console.log(str[5]);

//Template Literal - embeded expression in string
let sentance = `This is a template Literal`;
console.log(sentance);

// example
let obj = {
    item:"pen",
    price:100
};
let output = `the cost of ${obj.item} is ${obj.price}`;
console.log(output);

//String interpolation - to creat string by doing substitution of placeholder
// `String text  $(expression) string text`

console.log(`jujubii ${1+2+668877}`);

// excape character
// \n - next line
// \t - space

// console.log("Akshay\nSuppu");
// console.log("Akshay\tSuppu");

// let string = "Akshay Umredkar   ";
// console.log(string.trim()); //remove string
// console.log(string.slice(1,10)); //remove string
// console.log(string.replace("Akshay","Suppu")); //replace
// console.log(string.charAt(1));


let fullName = prompt("Entre Full name without space");
 let id = "@"+ fullName + fullName.length;
 console.log(id);


