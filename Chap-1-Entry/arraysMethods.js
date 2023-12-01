let fruits = ["apple", "banana", "grapes"];

console.log(fruits); //[ 'apple', 'banana', 'grapes' ]

fruits.pop(); // remove the last element
console.log(fruits); // [ 'apple', 'banana' ]

fruits.shift(); // remove the first element
console.log(fruits); // [ 'banana' ]

fruits.push("cherry"); // add the element to the end
console.log(fruits); //[ 'banana', 'cherry' ]

fruits.unshift("Lemon"); // add the element to the beginning
console.log(fruits); //[ 'Lemon', 'banana', 'cherry' ]

delete fruits[1]; // remove
console.log(fruits); // [ 'Lemon', <1 empty item>, 'cherry' ]

fruits[1] = "Orange";
console.log(fruits); //[ 'Lemon', 'Orange', 'cherry' ]

fruits.splice(1, 2); // remove the element from 1 to 2
console.log(fruits); //[ 'Lemon' ]

fruits.splice(2, 0, "Orange", "cherry");
console.log(fruits); //[ 'Lemon', 'Orange', 'cherry' ]

let citrusFruits = fruits.slice(0, 2);
console.log(fruits); //[ 'Lemon', 'Orange', 'cherry' ]
console.log(citrusFruits); // [ 'Lemon', 'Orange' ]

let evenNumbers = [2, 4, 6];
let oddNumbers = [1, 3, 5];
let primeNumbers = [2, 3, 5];
let numbers = evenNumbers.concat(oddNumbers);
console.log(numbers); //[ 2, 4, 6, 1, 3, 5 ]
let numbers2 = evenNumbers.concat(oddNumbers, primeNumbers);
console.log(numbers2); //  [2, 4, 6, 1, 3,5, 2, 3, 5]
