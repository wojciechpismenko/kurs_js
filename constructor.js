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

function Enemy(name, speed, attack, posX) {
    this.name = name;
    this.live = 5;
    this.speed = speed;
    this.attack = attack;
    this.posX = posX;
}

Enemy.prototype.printName = function() {
    return "Jestem " + this.name + ". "
}

Enemy.prototype.move = function() {
    this.posX = this.posX - this.speed;
    console.log(this.printName(), "Znajduję się na pozycji " + this.posX);
}

Enemy.prototype.attackEnemy = function() {
    console.log(this.printName(), "Atakuję gracza z pozycji " + this.posX + " z siłą " + this.attack);
}

Enemy.prototype.hit = function() {
    this.live--
    console.log(this.printName(), "Mam teraz życia " + this.live);
}

const e1 = new Enemy("Enemy1", 4, 10, 250);
e1.move();
e1.move();
e1.move();
e1.attackEnemy();

const e2 = new Enemy("Enemy2", 3, 15, 250);
e2.move();
e2.move();
e2.move();
e2.attackEnemy();
e2.hit();
e2.hit();
e2.hit();

String.prototype.sortText = function(char) {
    const tab = this.split(char);
    tab.sort();
    return tab.join(char);

}

console.log("Marcin|Ania|Piotrek|Beata".sortText("|"));