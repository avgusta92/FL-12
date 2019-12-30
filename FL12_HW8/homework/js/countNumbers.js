function countNumbers(input) {

    let result = {};

    for (let i = 0; i < input.length; i++) {

        const value = input[i];

        if (!isNaN(value)) {

            if (!result[value]) {
                result[value] = 1;
            } else {
                result[value]++;
            }
        }
    }
    return result;
}
countNumbers('erer384jj4444666888jfd123');