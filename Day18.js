// Challenge 18

function doubleValues(numbers) {
    var doubledArray = numbers.map(function(number) {
        return number * 2;
    });
  
    return doubledArray;
}

var inputArray = [1, 2, 3, 4, 5];
var resultArray = doubleValues(inputArray);
console.log(resultArray);
