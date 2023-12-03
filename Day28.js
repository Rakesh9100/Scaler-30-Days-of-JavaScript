// Challenge 28

function createLoggingProxy(target) {
    return new Proxy(target, {
        get: function (target, property, receiver) {
            console.log(`Accessing property: ${property}`);
            return Reflect.get(target, property, receiver);
        },
    });
}

const originalObject = { a: 1, b: 2 };
const loggingProxy = createLoggingProxy(originalObject);

// Accessing properties will now be logged
console.log(loggingProxy.a);
console.log(loggingProxy.b);
