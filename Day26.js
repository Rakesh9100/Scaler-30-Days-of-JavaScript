// Challenge 26

function calculateTotal(numbers) {
    
    const oddNumbers = numbers.filter(number => number % 2 !== 0);
    const squaredNumbers = oddNumbers.map(number => number ** 2);
    const total = squaredNumbers.reduce((acc, curr) => acc + curr, 0);
    
    return total;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = calculateTotal(numbers);
console.log(result);
