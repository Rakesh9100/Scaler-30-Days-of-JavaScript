// Challenge 17

function filterOutOdd(numbers) {
    const filteredArray = numbers.filter(function(number) {
        return number % 2 === 0;
    });

    return filteredArray;
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultArray = filterOutOdd(inputArray);
console.log(resultArray);
