// Challenge 23

function counter() {
    let count = 0;
  
    return function () {
        count++;
        return count;
    };
}

const incrementCounter = counter();

console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());
