// Challenge 16

function sumArray(numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
  
    return sum;
}

const numbersArray = [1, 2, 3, 4, 5];
const result = sumArray(numbersArray);
console.log(result);
