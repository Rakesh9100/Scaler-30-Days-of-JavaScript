// Challenge 30

function throttle(func, interval) {
    let lastInvocationTime = 0;
    
    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastInvocationTime >= interval) {
            func.apply(this, args);
            lastInvocationTime = currentTime;
        }
    };
}

function myFunction() {
    console.log('Function invoked!');
}

const throttledFunction = throttle(myFunction, 1000);

throttledFunction();

setTimeout(() => {
    throttledFunction();
}, 500);

setTimeout(() => {
    throttledFunction();
}, 1000);
