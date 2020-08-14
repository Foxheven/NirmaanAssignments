function add(a, b) {
    console.log(a, b);
    console.log(arguments[0], arguments[1]);
}

add(5, 7);
function calculate(param, print) {
    console.log("calculating");
    if (print == undefined || print == true)
        console.log("printing");
    if (param == false)
        console.log("not printing");
}

calculate(5 * 5);