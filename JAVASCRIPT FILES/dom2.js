// let div=document.querySelector("div");
// console.log(div);

// ? GET ATTRIBUTE
// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let a = document.querySelector("p");
// console.log(a.getAttribute("class"));

// ? SET ATTRIBUTE
// let G = document.querySelector("p");
// console.log(G.setAttribute("class","newClass"));

// ? Styling in js
// let div=document.querySelector("div");
//* console.log(div.style);

// div.style.backgroundColor = "black";
// div.style.fontSize = "30px";
// div.innerText = "Suppu😘";

//? Insert new Element/tag
//! step 1 : first create
//! step 2 : Add

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click !";
// console.log(newBtn);

// let div=document.querySelector("div");
//* div.append(newBtn);
//* div.prepend(newBtn);
//* div.before(newBtn);
//* div.after(newBtn);

 //* let paraGraph = document.querySelector("p");
 //! paragraph nanter mi button add karun rahilo
 //* paraGraph.after(newBtn);

 //! creating a new heading 
//  let newHeading = document.createElement("h1");
//  newHeading.innerHTML = "<i>Learning DOM - Document Object model</i>";
//  document.querySelector("body").prepend(newHeading);

 //! IF I HAVE TO REMOVE
//  paraGraph.remove();
//  newHeading.remove();

//? create a new btn give text,background color,textColor...insert the button as the first element inside the body tag

/*let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
newBtn.style.backgroundColor ="red";
newBtn.style.color ="white";

document.querySelector("body").prepend(newBtn)*/


//? Create a <p> tag in html, give it a class & some styling.Now create a new class in CSS and try to append this class to the <p> element.........Did you notice, how you overwrite the class name when you add a new one?......Solve this problem using classList.

let Para = document.querySelector("p");
//classList = sare classes ki list aa jati he
Para.classList.add("newClass");














