// Challenge 1

function reverseNumber(num) {
    
    let numStr = num.toString();
    let reversedStr = numStr.split('').reverse().join('');
    let reversedNum = parseInt(reversedStr, 10);
    
    return reversedNum;
}

let x = 32243;
let reversedX = reverseNumber(x);
console.log("Reversed number is: ",reversedX);
