let btn1 = document.querySelector("#btn1");
// btn1.onclick = () =>{
//     console.log("btn1 was clicked");
//     let a =23;
//     a++;
//     console.log(a);
// }

// btn1.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY); //position
// }

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("Akshay❤️Suppu");
// }

//? Event Listener
//! for 1 event we can create multiple function
/*btn1.addEventListener("click",(evt) =>{
    console.log("button was clicked");

    console.log(evt.type);
    console.log(evt.target);
}) 
btn1.addEventListener("click",() =>{
    console.log("button was clicked - Handler 2");
})*/

//? remove event listener
/* btn1.addEventListener("click",() =>{
    console.log("button was clicked - Handler 1");
}) ;
btn1.addEventListener("click",() =>{
    console.log("button was clicked - Handler 2");
}) ;

const handler3 = ()=>{
    console.log("button was click - Handler 4");
};
btn1.addEventListener("click",handler3)

btn1.addEventListener("click",() =>{
    console.log("button was clicked - Handler 4");
}) ; 

//! while removing we store this in variable this handler suppose i have to remove handler 3
//! callback function should be same to remove 
btn1.removeEventListener("click",handler3);*/

//? Questions - change dark - light mode
/* let modebtn = document.querySelector("#mode");
let currMode = "light";
modebtn.addEventListener("click",() =>{
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});*/

//* 2nd way - create css file give class and by classList we call classes from css file 
let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; // Initial mode: light

modebtn.addEventListener("click", () => {
    if (currMode === "light") {
        body.classList.remove("light"); // Remove light mode class if present
        modebtn.innerHTML="🌙";
        body.classList.add("dark"); // Add dark mode class
        currMode = "dark"; // Update current mode
    } else {
        body.classList.remove("dark"); 
        modebtn.innerHTML="🌞";
        body.classList.add("light"); 
        currMode = "light";
    }
    console.log(currMode);
});
