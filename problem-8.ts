class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}
  displayInfo() {
    console.log(`Your car model is: ${this.year} ${this.brand} ${this.model}`);
  }
}
// Sample Input:
let newCar = new Car("Toyota", "Corolla", 2020);
newCar.displayInfo();

// Sample Output:
// ("Your car model is:  2020 Toyota Corolla");
