// Challenge 13

function memoize(func) {
    const cache = {};
  
    return function (...args) {
        const key = JSON.stringify(args);
  
        if (cache[key]) {
            console.log('Result from cache');
            return cache[key];
        }
  
      const result = func(...args);
      cache[key] = result;
      return result;
    };
}

// Function to be memoized
function add(a, b) {
    console.log('Calculating sum');
    return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(4, 5));
console.log(memoizedAdd(4, 5));
