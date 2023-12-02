let i;
for (i = 1; i < 5; i++) {
  console.log("the value of i is " + i);
}

// for in
let fruits = ["apple", "banana", "grapes"];
let x;
for (x in fruits) {
  console.log("fruits: " + fruits[x]);
}
// fruits: apple
// fruits: banana
// fruits: grapes

for (x of fruits) {
  console.log(x);
}
// apple
// banana
// grapes
