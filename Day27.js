// Challenge 27

function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const myRange = range(1, 5);

for (const num of myRange) {
    console.log(num);
}
