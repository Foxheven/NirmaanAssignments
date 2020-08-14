class Account {
    constructor(accountNumber, holdersName, bal) {
        this.AccountNo = accountNumber;
        this.HoldersName = holdersName;
        this.Balance = bal;
    }
    print() {
        console.log("Hi,", this.HoldersName, "your account number is:", this.AccountNo, ".Your current balance is :", this.Balance);
    }

    deposit(amount) {
        var valid = checkAmount(amount);
        if (valid) {
            var deposited = this.Balance += amount;
            console.log(" Deposited Rs " + amount + ". Your account balance is  now Rs " + deposited + ".");

        }
    }
    withdraw(amount) {
        var valid = checkAmount(amount);
        if (valid) {
            if (amount > this.Balance) {
                console.log("Insufficient funds,the amount requested for withdraw is " + amount);
            } else {
                this.Balance -= amount;
                console.log("Amount withdraw Rs " + amount);
            }
        }
    }
    printBalance() {
        console.log("Available balance Rs " + this.Balance);
    }



}
function checkAmount(amount) {
    if (typeof amount == "number") {
        return true;
    } else {
        return false;
    }
}
var Account1 = new Account(452007, "Alex", 2500);
var Account2 = new Account(452008, "Jhon", 3000);
Account1.print();
Account1.deposit(300);
Account1.withdraw(300);
Account1.printBalance();
Account2.print();
Account2.deposit(300);
Account2.withdraw(300);
Account2.printBalance();











