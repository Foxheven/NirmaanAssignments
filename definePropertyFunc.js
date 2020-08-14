function Employee(id, name) {
    Object.defineProperty(this, "id", { value: id, writable: true, enumerable: true, configurable: true });
    Object.defineProperty(this, "name", { value: name, writable: true, enumerable: true, configurable: true });
}

let obj = new Employee(1, "xyz");
console.log(obj);
obj.name = "abc";
obj.id = 8;
console.log(obj);