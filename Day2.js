// Challenge 2

function capitalizeWords(inputString) {
    
    const words = inputString.split(' ');
    const capitalizedWords = words.map(word => {
        if (word.length === 0) {
            return word;
        }
        else {
            return word[0].toUpperCase() + word.slice(1);
        }
    });
  
    const capitalizedString = capitalizedWords.join(' ');
  
    return capitalizedString;
}

const inputString = 'the quick brown fox';
const outputString = capitalizeWords(inputString);
console.log(outputString); // 'The Quick Brown Fox'
