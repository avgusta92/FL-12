function isLeapYear(input) {
    let a = new Date(input);

    if (!a.getDate()) {
        return 'Invalid Date';

    } else {

        if ((a.getFullYear() % 400) === 0) {
            return a.getFullYear() + ' is a leap year';

        } else if ((a.getFullYear() % 100) === 0) {
            return a.getFullYear() + ' is not a leap year';

        } else if ((a.getFullYear() % 4) === 0) {
            return a.getFullYear() + ' is a leap year';

        } else {
            return a.getFullYear() + ' is not a leap year';
        }
    }
}
isLeapYear('2020-01-01 00:00:00');