// Challenge 3

function isInRange50To99(value1, value2) {
    if ((value1 >= 50 && value1 <= 99) || (value2 >= 50 && value2 <= 99)) {
        return true;
    }
    return false;
}

var value1 = 45;
var value2 = 75;

if (isInRange50To99(value1, value2)) {
    console.log("At least one of the values is in the range 50..99");
}
else {
    console.log("Neither of the values is in the range 50..99");
}
