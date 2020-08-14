// 1. If SINGLE object is required
var server = { ip: "192.168.0.1", port: 8080, protocol: "http" };
console.log(server);
// 2. If multiple objects are required
class Account {
    constructor(accNo, holdersName, initialBal) {
        this.accNo = accNo;
        this.holdersName = holdersName;
        this.initialBal = initialBal;
    }
    print() {
        console.log("Number", this.accNo, "Name", this.holdersName, "Balance", this.initialBal);

    }
}

let eich = new Account(1, "Shubham", 9000);
eich.print();


// 3. Use arrow function instead of functions
var add = (a, b) => (a + b);
