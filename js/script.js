
class Coffee {
  constructor() {
      this.empty = true;
  }

  refill() {
      console.log("Refilling the coffee.");
      this.empty = false;
  }

  drink() {
      console.log("Drinking the coffee.");
      this.empty = true;
  }
}

const coffee = new Coffee();

if (coffee.empty) {
  coffee.refill();
} else {
  coffee.drink();
}
