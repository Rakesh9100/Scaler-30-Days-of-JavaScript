// Challenge 24

function debounce(func, delay) {
    let timerId;
    
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function myFunction() {
    console.log('Function debounced!');
}

const debouncedFunction = debounce(myFunction, 500);

debouncedFunction();
