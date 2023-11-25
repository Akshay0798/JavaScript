        // for of loop
        //its use for string and Array
        /*
        let name="Supriya Khandavali";

        let size=0;
        for (let i of name) {
            console.log(i);
            size++;
        }
        console.log("String Size = " + size);
        */

        // for in loop
        //its use for object
        const student = {
            Name : "Supriya",
            Age : 28,
            cgpt : 9.9,
            isPass : true
        };
        //it will print only key value
        for(let key in student){
            console.log("key = " + key,"value = " + student[key] );
        }

        // Questions
        let gameNumber = 25;
        let userNo = prompt("Guess the game Number : ");

        while (userNo != gameNumber) {
            userNo = prompt(" you entre wrong number : Guess Again ");
        }
        console.log("Congratulation ! you entre correct number");
