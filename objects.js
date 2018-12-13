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

const currentUser = {
    name : "Wojciech",
    surname : "Pismenko",
    email : "wojciechpismenko@gmail.com",
    www : "pismenko.pl",
    userType : "editor",
    show : function() {
        console.log("Imię: ", this.name);
        console.log("Nazwisko: ", this.surname);
        console.log("Email: ", this.email);
        console.log("Strona www: ", this.www);
        console.log("Typ użytkownika: ", this.userType);
    }
};

currentUser.show();

const book = {
    title : "Diuna",
    author : "Frank Herbert",
    pageCount : 325,
    publisher : 2,

    showDetails : function() {
        for (const i in this) {
            if (typeof this[i] !== "function") {
                console.log(i);
                console.log(this[i]);
            }
        }
    }
}

book.showDetails();

const users = [
    //id name surname email age money
    [  1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28 ],
    [  2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37 ],
    [  3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06 ],
    [  4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64 ],
    [  5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54 ],
    [  6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08 ],
    [  7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21 ],
    [  8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72 ],
    [  9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68 ],
    [ 10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44 ]
]

function fixData(tab) {
    const newTab = [];

    for (const el of tab) {
        const obj = {
            id : el[0],
            name : el[1],
            surname : el[2],
            email : el[3],
            age : el[4],
            money : el[5]
        }
        newTab.push(obj);
    }

    return newTab;
}

console.log(users);
console.log(fixData(users));

const fixTab = fixData(users);
console.log(fixTab);

let money = 0;
let age = 0;

for (const el of fixTab) {
    money += el.money;
    age += el.age;
}

const summary = {
    money : money,
    age : age,
    averageAge : age / fixTab.length
}

console.log(summary);