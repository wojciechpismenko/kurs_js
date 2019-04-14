const A = [2, 3, 9, 2, 5, 1, 3, 7, 10];
const B = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];

const createC = (A, B) => {
  const C = [];
  const Bhash = [];
  const BhashNumber = [];

  B.forEach(el => {
    let i = Bhash.findIndex(elem => elem === el);

    if (i != -1) {
      BhashNumber[i] += 1;
    } else {
      Bhash.push(el);
      BhashNumber.push(1);
    }
  });

  const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i += 1)
      if (num % i === 0) return false;
    return num > 1;
  }

  A.forEach(el => {
    let i = Bhash.findIndex(elem => elem === el);

    (i === -1 || i != -1 && isPrime(BhashNumber[i]) === false) && C.push(el);
  });

  return C;
}

const C = createC(A, B);
console.log(C);