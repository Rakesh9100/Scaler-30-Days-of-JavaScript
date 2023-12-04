// Challenge 29

function raceWithTimeout(promises, timeout) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Timeout exceeded'));
        }, timeout);
    });
    
    return Promise.race([...promises, timeoutPromise]);
}

const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 2000));

raceWithTimeout([promise1, promise2], 1500)
.then(result => console.log(result))
.catch(error => console.error(error.message));
