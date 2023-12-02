// process where one class acquires properties from the another class.

class Car {
  setName(name) {
    this.name = name;
  }

  startEngine() {
    console.log("Engine started for " + this.name);
  }
  stopEngine() {
    console.log("Engine stop for " + this.name);
  }
}

class Toyota extends Car {
  topSpeed(speed) {
    console.log("Top speed for " + this.name + " is " + speed);
  }
}

let mycar = new Toyota();
mycar.setName("Camry");
mycar.startEngine();
mycar.stopEngine();
mycar.topSpeed(200);

// Engine started for Camry
// Engine stop for Camry
// Top speed for Camry is 200
