function convert() {
    let result1 = [];

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            result1.push(parseInt(arguments[i]));
        } else if (typeof arguments[i] === 'number') {
            let x = '' + arguments[i];
            result1.push(x);
        }
    }

    return result1;
}


function executeforEach(a, b) {
    for (let i = 0; i < a.length; i++) {
        b(a[i]);
    }
}


function mapArray(array, func) {
    let result3 = [];

    function newFun(el) {
        if (typeof el === 'string') {
            result3.push(func(parseInt(el)));
        } else if (typeof el === 'number') {
            result3.push(func(el));
        }
    }

    executeforEach(array, newFun);
    return result3;
}


function filterArray(array, func) {
    let result4 = [];

    function newFun(el) {
        if (func(el) === true) {
            result4.push(el);
        }
    }

    executeforEach(array, newFun);
    return result4;
}


function flipOver(a) {
    let result5 = '';

    for (let i = a.length - 1; i >= 0; i--) {
        result5 += a[i];
    }
    return result5;
}


function makeListFromRange(a) {
    let result6 = [];

    for (let i = a[0]; i <= a[1]; i++) {
        result6.push(i);
    }
    return result6;
}


function getArrayOfKeys(array, b) {
    let result7 = [];

    function newFun(el) {
        result7.push(el[b]);
    }

    executeforEach(array, newFun);
    return result7;
}


function substitute(array) {
    let result8 = [];
    const number30 = 30;

    function func(el) {
        if (el > number30) {
            result8.push(el);
            result8.push('*');
        }
    }

    mapArray(array, func);
    return result8;
}


function getPastDay(a, b) {
    let newDate = new Date(a);
    newDate.setDate(newDate.getDate() - b);
    return newDate;
}


function formatDate(a) {
    const ten = 10;
    
    let newDate = '';
    let zeroHours = '';
    let zeroMinutes = '';

    let date = a.getDate();
    let year = a.getFullYear();
    let month = a.getMonth() + 1;
    let hours = a.getHours();
    let minutes = a.getMinutes();

    if (hours < ten) {
        zeroHours = '0';
    } 
    if (minutes < ten) {
        zeroMinutes = '0';
    }

    newDate = year + '/' + month + '/' + date + ' ' + zeroHours + hours + ':' + zeroMinutes + minutes;

    return newDate;
}