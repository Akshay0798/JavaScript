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

/*
  A function that takes a function as an argument and invokes it after a specified delay.
  @param {function} nextData - The function to be invoked after the specified delay.
  @param {number} dataID - The ID of the data to be passed to the next function.
 */
// function getData(dataID,nextData) {
//     setTimeout(() => {
//         console.log("data", dataID);
//         nextData();
//     }, 3000);
// }

// getData(1, () => {
//     getData(2)
// });

//****************************************************************
//! Promices
// let promices = new Promise((resolve, reject) => {
//     console.log("i am Promises");
//     reject("some error occurred ");
// })

// function getData(dataID, getnextdata) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataID);
//       resolve("Successful");
//       reject("Error");
//       if (getnextdata) {
//         getnextdata();
//       }
//     }, 5000);
//   });
// }

//****************************************************************

// let getPromise = () => {
//     return new Promise((resolve, reject) => {
//         // resolve("Resolved");
//         reject("error occurred");
//     });
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled",err)
// })

// promise.catch((rej) => {
//     console.log("promise rejected",rej);
// });

//****************************************************************
//!promise chaining
/* function asyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 5000);
  });
}
function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 5000);
  });
}

console.log("Data1 fetching......");
let p1 = asyncFun1();
p1.then((res) => {
  console.log("data2 fetching......");
  let p2 = asyncFun2(res);
  p2.then((res) => {
    console.log(res);
  });
});*/

//****************************************************************
//Promise chaining-
/*function getData(dataID, getnextdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataID);
      resolve("resolved");
    }, 2000);
  });
}

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log("successful", res);
  }); */
  
//****************************************************************
//! Async - Await

// async function hello() {
//     console.log('hello universe');
// }

/*function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('weather Data');
            resolve(200);
        }, 5000);
    });
}

async function getWeatherData() {
    await api();
}*/

function getData(dataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataID);
      resolve("resolved");
    }, 2000);
  });
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}