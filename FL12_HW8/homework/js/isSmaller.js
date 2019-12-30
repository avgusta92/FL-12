function isBigger(a, b) {
    return a > b;
}
isBigger(5, -1);

function isSmaller(a, b) {
    return !isBigger(b, a);
}
isSmaller(5, -1);