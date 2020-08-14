//data
var balance = 0;

//functions
function deposit(amount){
    balance += amount;
}
function withdraw(amount){
    balance -= amount;
}
function print(){
    console.log(balance)
}
deposit(100);
withdraw(100);
print();