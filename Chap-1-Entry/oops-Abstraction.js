// Abstraction -- Hide details and show Essentials
function Employee(name, age, baseSalary) {
  this.name = name;
  this.age = age;
  this.baseSalary = baseSalary;

  // before encapsulation
  //   this.monthlyBonus = 1000;

  //   this.calculateFinalSalary = function () {
  //     let finalSalary = this.baseSalary + this.monthlyBonus;
  //     console.log("Final salary is : " + finalSalary);
  //   };

  // after encapsulation
  let monthlyBonus = 1000;
  let calculateFinalSalary = function () {
    let finalSalary = baseSalary + monthlyBonus;
    console.log("Final salary is : " + finalSalary);
  };

  this.getEmpDetails = function () {
    console.log("Name : " + this.name + " | Age : " + this.age);
    // encapsulation
    calculateFinalSalary();
  };
}

let emp1 = new Employee("John", 30, 2000);
emp1.getEmpDetails(); // Name : John | Age : 30
// emp1.calculateFinalSalary();

// encapsulation

// Name : John | Age : 30
// Final salary is : 3000
