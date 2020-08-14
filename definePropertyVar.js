let person = { id: 1, name: "Shubham" };
console.log(person);
let salaryProperty = { value: 1400, writable: true, enumerable: true, configurable: true };
Object.defineProperty(person, "salary", salaryProperty);
console.log(person);
person.salary = 1500;
console.log(person);
