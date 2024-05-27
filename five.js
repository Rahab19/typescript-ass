function reverse(num, num1) {
    if (num1 === void 0) { num1 = 0; }
    while (num !== 0) {
        var digit = num % 10;
        num1 = num1 * 10 + digit;
        num = Math.floor(num / 10);
    }
    return num1;
}
var num1 = reverse(190);
console.log(num1);
