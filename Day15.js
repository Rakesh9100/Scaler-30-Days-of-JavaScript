// Challenge 15

function string_chop(str, size) {
    if (size === undefined) {
        return [str];
    }

    if (typeof size !== 'number' || size <= 0) {
        return ["Invalid size"];
    }

    if (size >= str.length) {
        return [str];
    }

    const result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
    }

    return result;
}

console.log(string_chop('Scaler'));
console.log(string_chop('Scaler', 2));
