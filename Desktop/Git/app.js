var arr = [1, 2, 3, 4];
console.log(arr);
arr.push(5);
console.log(arr);

console.log(arr.length);

var age = 19;

age = 21;

console.log(age);

///operators
//Arithmetic Operators

var a = 2;
var b = 10;

console.log("a + b = ", a + b);
console.log("b -a  = ", b - a);
console.log("b/a  = ", b / a);
console.log("b*a  = ", b * a);
console.log("b**a  = ", b ** a);
console.log("b%a  = ", b % a);

//Assignment Operators

console.log("b  ", b);
b++;
console.log("b+=1 ", b);
b -= 1;
console.log("b-=10 ", b);
b--;
console.log("b--  ", b);

var c = 10;
console.warn(c++);
console.log(c);
//console.warn(++c);

//comparison Operators
var d = 10;
var e = 2;
var f = "10";
console.log(d > e);

console.log(d < e);

console.log(d <= e);
console.log(d >= e);
console.log(d == e);
console.log(d == f);
console.log(d != f);
console.warn(d == f);
console.warn(d + f);

//logical operators

console.log("true && true ", true && true);
console.log("true && false", true && false);
console.log("false && true", true && false);
console.log("false&& false", false && false)

console.log('true   | |   true ',    true | | true)
console.log('true   | |   false',   true | | false)
console.log('false  | |   true',    true | | false)
console.log('false  | |   false',   false | | false)