// Challenge 20

function findFirstNegative(numbers) {
    const firstNegative = numbers.find(number => number < 0);
    
    return firstNegative !== undefined ? firstNegative : undefined;
}

const numbersArray = [2, 4, -6, 8, -10, 12];
const result = findFirstNegative(numbersArray);
console.log(result);
