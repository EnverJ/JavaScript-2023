let numbers = [1, 2, 3, 4, 5, 6, 7, 7];
console.log(numbers);

let fruits = ["apple", "banana", "grapes"];
console.log(fruits);

let cars = new Array("Ford", "Toyota", "Tesla");
console.log(cars);
console.log(cars[1]);

cars[1] = "Honda";
console.log(cars);
console.log(cars[1]);

fruits.push("Cherry");
console.log(fruits);
console.log(fruits.length);

let x;
for (x in fruits) {
  console.log(fruits[x]);
}

for (x of fruits) {
  console.log(x);
}

// [
//     1, 2, 3, 4,
//     5, 6, 7, 7
//   ]
//   [ 'apple', 'banana', 'grapes' ]
//   [ 'Ford', 'Toyota', 'Tesla' ]
//   Toyota
//   [ 'Ford', 'Honda', 'Tesla' ]
//   Honda
//   [ 'apple', 'banana', 'grapes', 'Cherry' ]
//   4
//   apple
//   banana
//   grapes
//   Cherry
//   apple
//   banana
//   grapes
//   Cherry
