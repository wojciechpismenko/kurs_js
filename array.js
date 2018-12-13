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