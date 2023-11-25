// Challenge 19

function allPositive(numbers) {
    return numbers.every(function(number) {
        return number > 0;
    });
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, -3, 4, 5];

console.log(allPositive(array1));
console.log(allPositive(array2));
