//There is no private or protected in JavaScript
var person = {
    id: 1,
    name: "Shubham",
    _salary: 5000
};
console.log(person._salary);

//__proto__ is not meant to be used by us

var bigB = { name: "Amitabh", surname: "Bachchan" };
var smallB = Object.create(bigB);
smallB.name = "Abhishek";
console.log("My father is", Object.getPrototypeOf(smallB).name);
