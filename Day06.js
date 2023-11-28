// Challenge 6

function computeSumOrTriple(num1, num2) {
    if (num1 === num2) {
        return 3 * (num1 + num2);
    } else {
        return num1 + num2;
    }
}

let result1 = computeSumOrTriple(3, 5);
console.log("Result 1:", result1);

let result2 = computeSumOrTriple(4, 4);
console.log("Result 2:", result2);
