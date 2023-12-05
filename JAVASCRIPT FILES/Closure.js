// function init() {
//     let name = "Google"; 
    
//     function displayName() {
//       console.log(name); 
//     }
//     displayName();
//   }
//   init();

//! Lexical scoping
// function outer(){
//     let username = "Akshay"

//     function inner(){
//         console.log("Inner : " + username)
//     }
//     inner()
// } 
// outer();
// console.log(username);

/*function outer(){
    let username = "Akshay"
    //console.log(password);//! will not work
    function inner(){

        //*let suppose we declare 1 more variable 
        let password = "Suppu";
        console.log("Inner : " + username)
    }
    function innerTwo(){
        console.log("InnerTwo : " + username)
        // console.log(password); //! will not work
    }
    inner()
    innerTwo()
} 
outer();
// console.log(username); //! will not work */

//? conclusion : child-child can't share each other ,parents can't get from child but child can get anything from parents

//! Closure
// function outer() {
//     const name = "Akshay";
    
//     function inner() {
//       console.log(name);
//     }
//     return inner; //*when u return a function uska complete lexical scope hi return hota he
//   }
  
//   const myFunc = outer();
//   myFunc();
  




  
  