//functions can be used in 2 ways.
//1.Normal function like add
//2.Constructor function like EMP,to create Object.


function EMP(id, name) {
    this.id = id;
    this.name = name;
    this.print = function () {
        console.log(this.id, this.name);
    }
}
var eich = new EMP(1, "Shubham");
var andreessen = new EMP(2, "joshi");
console.log(eich.id);
console.log(eich);
eich.print();