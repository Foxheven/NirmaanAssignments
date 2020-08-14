function Employee(id, name) {
    this.id = id;
    this.name = name;
    Employee.count = 100;
    Employee.prototype.baseSalary = 5000;
    //this.print = function () {
    //   console.log(`id=${this.id},name=${this.name}`);
    // }
    Employee.prototype.print_details = function () {
        console.log(`id = ${this.id}, name = ${this.name}`);
    }
}
var xyz = new Employee(1, "Shubh");

//xyz.print();
xyz.print_details();
