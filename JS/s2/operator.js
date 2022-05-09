let x = "hello";
let y = "world";
console.log(x + " " + y);
let z = 3;
console.log(x + z);

let r = 10;
let b = r++; // incerement . r = b olduktan sonra r yi 1 arttırır
console.log(r);
console.log(b);

let t = 10;
let m = ++t;
console.log(t); // t yi 1 arttırıp m ye eşitliyor
console.log(m);

let p = 10;
let l = p--;
console.log(p);
console.log(l);

let v = 10;
let g = --v;
console.log(v);
console.log({ g });

let q = 5,
  w = "5";
console.log(q == w); //true
console.log(q === w); // false
console.log(q != w);

let xx = 3,
  yy = 2;
zz = xx > 2 && yy < 20;
console.log(zz);

console.log(NaN == NaN);
