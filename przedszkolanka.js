const A = [12,15];
const B = [11,22];

function NWD(x) {
  let a = x[0];
  let b = x[1];
  let t = 0;

  while (b != 0) {
    t = b;
    b = a % b;
    a = t;
  }

  return a;
}

function NWW(x) {
  let a = x[0];
  let b = x[1];
  let w = 0;

  w = (a * b) / NWD(x);
  return w;
}

console.log(NWW(A));
console.log(NWW(B));