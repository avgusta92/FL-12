let a = prompt('Please input a');
let b = prompt('Please input b');
let c = prompt('Please input c');

let isInvalid = false;

let NunberA = parseInt(a, 10)
let NunberB = parseInt(b, 10)
let NunberC = parseInt(c, 10)

if (!a || !b || !c) {
    alert('Input values should be ONLY numbers');
    isInvalid = true;
} else if (NunberA <= 0 || NunberB <= 0 || NunberC <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
    isInvalid = true;
}

if (isInvalid === true) {
    alert('Triangle doesn’t exist');
    console.log('Triangle doesn’t exist');
} else {
    if (a === b && b === c && c === a) {
        console.log('Equilateral triangle');
    } else if (a === b || b === c || c === a) {
        console.log('Isosceles triangle');
    } else if (a !== b && b !== c && c !== a) {
        console.log('Scalene triangle');
    }
}
// У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто "лягут" на третью и треугольника не получится.


// eslint ./js/task2.js

