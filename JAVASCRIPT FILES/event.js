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
btn1.addEventListener("click",() =>{
    console.log("button was clicked");
}) 
btn1.addEventListener("click",() =>{
    console.log("button was clicked - Handler 2");
}) 