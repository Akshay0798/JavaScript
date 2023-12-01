//? DOM Manipulation

//! selection with id
// let heading = document.getElementById("heading");
// console.dir(heading);

//! selecting with class
// let cls = document.getElementsByClassName("cls");
// console.dir(cls);

// ! selecting with tag 'p'
// let para = document.getElementsByTagName("p");
// console.dir(para);
// console.log(para);

//! Query selector

// let firstELe = document.querySelector("p");
// console.dir(firstELe);

// let allELe = document.querySelectorAll(".cls");
// console.dir(allELe);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

// ? Question

// let H2 = document.querySelector("h2");
// console.dir(H2);

// H2.innerText = H2.innerText + " Thank you Shraddha mam";

// ? Questions

let divs = document.querySelectorAll(".box");
let idx = 1;
for(diiv of divs){
   diiv.innerText = `Akshay❤️Suppu ${idx}`
   idx++;
}
