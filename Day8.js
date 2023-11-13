// Challenge 8

function getSubsets(array, length) {
    let result = [];
  
    function generateSubsets(currentSubset, start) {
        if (currentSubset.length === length) {
            result.push([...currentSubset]);
            return;
        }
  
        for (let i = start; i < array.length; i++) {
            currentSubset.push(array[i]);
            generateSubsets(currentSubset, i + 1);
            currentSubset.pop();
        }
    }
  
    generateSubsets([], 0);
    return result;
}

const sampleArray = [1, 2, 3];
const subsetLength = 2;

const subsets = getSubsets(sampleArray, subsetLength);
console.log(subsets);
