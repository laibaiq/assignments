"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/
const strl1 = "Hello";
const strl2 = "hello";
console.log(strl1 === strl2);
console.log(strl1 !== strl2);
const text1 = "Hello World";
const text2 = "hello world";
console.log(text1.toLowerCase() === text2);
const num1 = 10;
const num2 = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z); //true
console.log(x < y || y > z); //true
console.log(x > y && y < z); // false
console.log(x > y || y > z); // false
const fruits = [
    `apple`, `orange`, `kiwi`, `mango`
];
console.log(fruits.includes(`kiwi`));
console.log(fruits.includes(`banana`));
const colors = [
    `red`, `yellow`, `blue`, `purple`
];
console.log(!colors.includes(`green`));
console.log(!colors.includes(`blue`));
