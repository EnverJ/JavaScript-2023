// Arithmetic operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Type Operators
// Bitwise Operators

// An operator is a symbol that usually represent an action or process
// Arithmetic operators
/*
 + addition
 - subtraction
 * Multiplication
 / division
 % Modules (remainder of division)
 ** Exponential
 ++ increment
*/

// let x = 5;
// let y = 2;
// let result = x ** y; // x raise to the power of y
// console.log("result is : " + result);
// let a = 10;
// //++a;  difference
// let q = 2 * a++;
// console.log("value of a is: " + a);
// let b = 2 * ++a;
// console.log("value of b is :" + b);

// Assignment Operators
/*
  = Assign 
+= Add and assign
-=  Sub and assign
*=  Multiply and assign
/=  Divide and assign
%=  Modulus and assign
**= Exponential and assign
  */

// let x = 10;
// x = 10 + 20;

// x += 5; // x = x + 5
// console.log(x);

// Comparison Operators

/*
Comparison Operators
==  equal to
===  equal value and equal type
!=  not equal to
!==  not equal value and type
＞  greater than
＜  less than
＞=  greater than or equal
＜=  less than or equal
?  ternary operator
*/
let x = 10;
let y = "10";
let result = x == y;
console.log(result);
console.log(x === y);

/*
Ternary operator : like if-then-else
takes 3 arguments.
condition ? value if true: value if false
*/
let result2 = x > y ? x : y;
console.log(result2);
// Logical Operators

/*
&& . - logical AND | True if both conditions are true
||  - logical OR | True if any of the condition is true
! logical NOT| Will return true if the condition is false and vice versa
*/
// let a = true;
// let b = false;
// console.log(a && b);
// console.log(a || b);
// console.log(!a);
// Type Operators

/*

Type Operators
typeof
Returns the type of a variable
We can use the typeof operator to find the data type of a JavaScript variable

instanceof
Returns true if an object is an instance of an object type
The instanceof operator returns a boolean value that indicates if an object is an instance of a particular class
*/

let firstName = "John";
console.log(typeof firstName);
console.log(typeof 123443434);
console.log(typeof 12.23232);
console.log(typeof true);

console.log(typeof [1, 2, 3, 45, 5]);

// instance

let lastName = "Shelby";
let lastNae = new String(lastName);
console.log(lastNae instanceof String);

// Bitwise Operators

/*
Bitwise Operators
&      AND sets each bit to 1 if both bits are 1
|        OR sets each bit to 1 if one of two bits is 1
^       XOR sets each bit to 1 if only one of two bits is 1
~       NOT inverts all the bits
＜＜    Left Shift shifts left and fills empty spaces with 0
＞＞    Right Shift shifts right 

Bitwise operators treat arguments as 32-bit numbers and work on the level of their binary representation
*/
