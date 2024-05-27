var fibonnacci;
var i = 0;
var a = 0;
var b = 1;
while (i <= 100) {
    console.log(a);
    var fibonnacci_1 = a;
    a = b;
    b = fibonnacci_1 + b;
    i++;
}
console.log(a);
