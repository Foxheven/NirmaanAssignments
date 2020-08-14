//Creating object with prototype
//Not only creating an object but specifying its prototype


var bigB = {
    name: "Amitabh",
    surname: "Bachchan"
};
console.log(bigB);

//var smallB = {
//   name: "abhishek",
//   surname: "bachchan"
//}
console.log(smallB);

var smallB = Object.create(bigB);
console.log(smallB);
console.log(smallB.surname);
smallB.name = "Abhishek";
console.log(smallB.name);
console.log("My father is", smallB.__proto__.name);

