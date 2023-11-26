// Challenge 21

async function asyncLoop(array, asyncFunction) {
    for (const element of array) {
        await asyncFunction(element);
    }
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const asyncOperation = async (element) => {
    console.log(`Processing element: ${element}`);
    await delay(1000);
    console.log(`Finished processing element: ${element}`);
};

const arrayToProcess = [1, 2, 3, 4, 5];
asyncLoop(arrayToProcess, asyncOperation);
