let a = prompt('Please input a');
let b = prompt('Please input b');
let c = prompt('Please input c');

if ( !a || !b || !c || isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || b === 0 || c === 0 ) {
    console.log('Invalid input data');
} else {
    const numberTwo = 2;
    const numberFour = 4;
    let discriminant = b * b - numberFour * a * c;

    if (discriminant < 0) {
        console.log('no solution');
    }

    if (discriminant === 0) {
        let xEqualsZero = -b / (numberTwo * a);

        console.log('x = ' + xEqualsZero);
    }

    if (discriminant > 0) {
        let xLargerZero1 = (-b + Math.sqrt(discriminant)) / (numberTwo * a);
        let xLargerZero2 = (-b - Math.sqrt(discriminant)) / (numberTwo * a);

        console.log('x1 = ' + xLargerZero1 + ' and, x2 = ' + xLargerZero2);
    }
}