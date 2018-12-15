function Car(name, brand, engine, mile, age) {
    this.name = name;
    this.brand = brand;
    this.engine = engine;
    this.mile = mile;
    this.age = age;
}

Car.prototype.printDetails = function() {
    console.log("Nazwa: " + this.name);
    console.log("Marka: ", this.brand);
    console.log("Silnik: ", this.engine);
    console.log("Przebieg: ", this.mile);
    console.log("Wiek: ", this.age);
}

const car1 = new Car("Corolla", "Toyota", 1.4, 240000, 15);
const car2 = new Car("F10", "BMW", 520, 38000, 2);
const car5 = new Car("Mazda III", "Mazda", 1.4, 29000, 2);

car1.printDetails();
