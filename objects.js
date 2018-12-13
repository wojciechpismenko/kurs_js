const prod1 = {
    name : 'komputer',
    price : 4000,
    weight : 3,
};

const prod2 = {
    name : 'doniczka',
    price : 8,
    weight : 0.3,
};

console.log(prod1);
console.log(prod2);
console.log("Produkt numer jeden to: " + prod1.name);
console.log("Produkt numer dwa to: " + prod2.name);
console.log("Produkty kosztują razem: " + (prod1.price + prod2.price));
console.log("Produkty ważą razem: " + (prod1.weight + prod2.weight));