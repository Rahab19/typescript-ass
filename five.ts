function reverse(num: number, num1: number = 0): number {
    while (num!== 0) {
        const digit = num % 10;
        num1 = num1 * 10 + digit;
        num = Math.floor(num / 10);
    }
    return num1;
}

let num1 = reverse(190);
console.log(num1);