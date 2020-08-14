'use strict';
class Employee {
    constructor(id, name) {
        Object.defineProperty(this, "id", { value: id, writable: true, enumerable: true, configurable: false });
        Object.defineProperty(this, "name", { value: name, writable: true, enumerable: true, configurable: true });
    }

}
let Ben = new Employee(1, "xyz");

let salaryProperty = { value: 1000, writable: true, enumerable: true, configurable: true };
Object.defineProperty(Ben, "salary", salaryProperty);

Ben.id = 25;
console.log(Ben);
console.log(Ben.salary);
