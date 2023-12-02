// OOPs --
// Encapsulation
// Inheritance
// Polymorphism
// Abstraction

class Employee {
  setEmpDetails(name, id, phoneNum) {
    this.name = name;
    this.id = id;
    this.phoneNum = phoneNum;
  }
  getEmpName() {
    return this.name;
  }
  getEmpId() {
    return this.id;
  }
  getEmpPhoneNum() {
    return this.phoneNum;
  }
}

let emp1 = new Employee();
emp1.setEmpDetails("John", 1001, 9809090909);
console.log(emp1.getEmpId()); // 1001
console.log(emp1.getEmpName()); // John
console.log(emp1.getEmpPhoneNum()); //9809090909

class BankAccount {
  //   setAccountBalance(accountNumber, accountHolder, balance) {
  //     this.accountHolder = accountHolder;
  //     this.accountNumber = accountNumber;
  //     this.balance = balance;
  //   }
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  getAccountHolder() {
    return this.accountHolder;
  }
  getAccountNumber() {
    return this.accountNumber;
  }
  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }
  withDraw(amount) {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    return false;
  }
  displayAccountDetails() {
    console.log("Account Number: " + this.accountNumber);
    console.log("Account Holder: " + this.accountHolder);
    console.log("Account balance: " + this.balance);
  }
}

let bAccount = new BankAccount("123456789", "John Doe", 1000);
bAccount.deposit(200);
bAccount.withDraw(100);

bAccount.displayAccountDetails();
