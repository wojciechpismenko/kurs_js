const arr = ['doniczka', 'szklanka', 'zeszyt', 'telefon', 'torba'];

console.log(arr);
console.log(arr.length);

for (let i = 0; i < arr.length; i+=1) {
    console.log(arr[i] + ' ' + arr[i].length);
};

for (let el of arr) {
    console.log(el + ' ' + el.length);
};

arr.forEach(function(el) {
    console.log(el + ' ' + el.length);
});

arr.push('koniec');
arr.unshift('poczatek');
console.log('Nowa tablica to: ' + arr);
console.log('Długość nowej tablicy to: ' + arr.length);

let tab = [];

function random(){
    let a = Math.floor(Math.random() * 10) + 1;
    return a;
};

for (let i=0; i<10; i+=1) {
    tab[i] = random();
};

function compare(a, b) {
    return a-b
};

console.log('Losowa tablica: ' + tab);
console.log('Najmniejszy element: ' + tab.sort(compare)[0]);
console.log('Największy eelment: ' + tab.sort(compare)[tab.length-1]);

const tabUsers = [
    {name : "Marcin", age: 14},
    {name : "Piotr", age: 18},
    {name : "Agnieszka", age: 13},
    {name : "Weronika", age: 20}
];

console.log(tabUsers.filter(function(user) {
    return user.age >= 18;
}));
