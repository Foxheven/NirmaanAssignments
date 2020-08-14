class Emp {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    print() {
        console.log(this.id, this.name);
    }
}
var eich = new Emp(1, "Shubham")
console.log(eich);
eich.print();


