// Challenge 10

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // swapping elements if they are in the wrong order
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

var sampleArray = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
var sortedArray = bubbleSort(sampleArray);
console.log(sortedArray);
