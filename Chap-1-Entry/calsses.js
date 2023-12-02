// class ClassName{
//     fucntions

// }

class Employee {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}
let emp1 = new Employee("John", 100);
let emp2 = new Employee("Josh", 101);
console.log(emp1.name);
console.log(emp1.id);

console.log("name: " + emp2.name + " id:" + emp2.id); // name: Josh id:101
// or
//   setDetails(name, id) {
//     this.name = name;
//     this.id = id;
//   }
// }

// // create object

// let emp1 = new Employee();
// emp1.setDetails("John", "100");
// console.log(emp1.name); // John
// console.log(emp1.id); // 100
