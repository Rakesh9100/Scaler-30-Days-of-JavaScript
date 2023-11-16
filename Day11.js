// Challenge 11

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

function listObjectProperties(obj) {
    var result = [];
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            result.push(property);
        }
    }
    return result.join(",");
}

var output = listObjectProperties(student);
console.log(output);
