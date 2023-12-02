class Animal {
  constructor(name) {
    this.name = name;
  }
  eats() {
    console.log(this.name + " eats food.");
  }
}

let animal = new Animal("Dogs");
animal.eats(); // Dogs eats food.

// method overriding
class Alligator extends Animal {
  eats() {
    console.log(this.name + " eats fishes. ");
  }
}

let murphy = new Alligator("Murphy");
murphy.eats(); // Murphy eats fishes.
