// const students = {
//     fullName: "Aksandra",
//     age: 23,
//     gender: "female",
//     marks: 95.8,
//     printMarks: function () {
//         console.log("marks = ", this.marks); //?students.marks = this.marks
//     },
// };

const employees = {
    calTax() {
        console.log('tax rate is 10%')
    }
}
const karanArjun = {
    salary : 50000,      
}
karanArjun.__proto__ = employees;