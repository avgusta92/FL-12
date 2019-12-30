function makeNumber(input) {
    let isNumbers = '';

    for (let i = 0; i < input.length; i++) {
        if (!isNaN(input[i])) {
            isNumbers += input[i];
        }
    }
    return isNumbers;
}
makeNumber('erer384jjjfd123');
