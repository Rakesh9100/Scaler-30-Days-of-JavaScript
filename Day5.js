// Challenge 5

function getFileExtension(filename) {
    const dotIndex = filename.lastIndexOf('.');

    if (dotIndex !== -1) {
        return filename.substring(dotIndex + 1);
    }
    else {
        return '';
    }
}

const filename1 = 'example.txt';
const filename2 = 'image.png';

console.log(`File extension of ${filename1}: ${getFileExtension(filename1)}`);
console.log(`File extension of ${filename2}: ${getFileExtension(filename2)}`);
