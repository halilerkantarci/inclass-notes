console.log("********* FUNCTİON DECLARATİON*****");
//! 1. yöntem Declaration
function yazdir() {
  console.log("Hello From The Other Side");
}
yazdir();

// ************* EXAMPLE 1
function topla(a, b) {
  return a + b;
}
console.log(topla(3, 4));

// ************* EXAMPLE 2
// function carp(a, b) {
//   a = prompt("enter a number");
//   b = prompt("enter a number");
//   return a * b;
// }
// console.log(carp());

// ************ EXAMPLE 3
// function selamla(name, lastname = "default parameter") {
//   console.log(`Hello ${name} ${lastname}`);
// }
// selamla("halil", "erkantarci");
// selamla("halil");

// ********** EXAMPLE 4: AGE CALCULATOR

function yasHesapla(year, name) {
  const month = new Date().getMonth();
  console.log(`${month}.month`);
  const mesaj = `${name} in yaşı ${new Date().getFullYear() - year} dir `;
  return mesaj;
}

const mesaj1 = yasHesapla(2001, "Elif");
console.log(mesaj1);

// ****************** EXAMPLE 5 : EVEN OR ODD??
function evenOdd(a) {
  return a % 2 === 0 ? `${a} is even` : `${a} is odd`;
}
console.log(evenOdd(5));
