// function myFun() {}
// myFun.prototype;

// create a constructor without creating a class
let empDetails = function (name, age) {
  this.name = name;
  this.age = age;

  //   this.getName = function () {
  //     return this.name;
  //   };
  //   this.getAge = function () {
  //     return this.age;
  //   };
};

//or prototype

empDetails.prototype.getName = function () {
  return this.name;
};
empDetails.prototype.getAge = function () {
  return this.age;
};

let emp1 = new empDetails("John", 30);
let emp2 = new empDetails("Josh", 50);
console.log(emp1.getName() + ", " + emp1.getAge()); //John, 30
console.log(emp2.getName() + ", " + emp2.getAge()); // Josh, 50
