// Challenge 4

function calculateTriangleArea(a, b, c) {
    
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

const sideA = 5;
const sideB = 6;
const sideC = 7;

const triangleArea = calculateTriangleArea(sideA, sideB, sideC);

console.log(`The area of the triangle with side lengths ${sideA}, ${sideB}, and ${sideC} is ${triangleArea}`);
