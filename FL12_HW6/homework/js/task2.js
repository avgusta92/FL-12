let a = prompt('Please input a');
let b = prompt('Please input b');
let c = prompt('Please input c');

let isInvalid = false;

let NunberA = Number(a);
let NunberB = Number(b);
let NunberC = Number(c);

let integerСheckA = !Number.isInteger(NunberA);
let integerСheckB = !Number.isInteger(NunberB);
let integerСheckC = !Number.isInteger(NunberC);

if (!a || !b || !c || isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Input values should be ONLY numbers');
    isInvalid = true;
} else if (NunberA <= 0 || NunberB <= 0 || NunberC <= 0 || integerСheckA || integerСheckB || integerСheckC) {
    alert('A triangle must have 3 sides with a positive definite length');
    isInvalid = true;
}

if (isInvalid === true) {
    alert('Triangle doesn’t exist');
    console.log('Triangle doesn’t exist');
} else {
    if (NunberA === NunberB && NunberB === NunberC && NunberC === NunberA) {
        console.log('Equilateral triangle');
    } else if (NunberA === NunberB || NunberB === NunberC || NunberC === NunberA) {
        console.log('Isosceles triangle');
    } else if (NunberA !== NunberB && NunberB !== NunberC && NunberC !== NunberA) {
        console.log('Scalene triangle');
    }
}