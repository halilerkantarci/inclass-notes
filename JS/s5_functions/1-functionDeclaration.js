console.log("********* FUNCTİON DECLARATİON*****");
//! 1. yöntem Declaration
function yazdir() {
  console.log("Hello From The Other Side");
}
yazdir();

// ************* ÖRNEK 1
function topla(a, b) {
  return a + b;
}
console.log(topla(3, 4));

// ************* ÖRNEK 2
// function carp(a, b) {
//   a = prompt("enter a number");
//   b = prompt("enter a number");
//   return a * b;
// }
// console.log(carp());

// ************ ÖRNEK 3
// function selamla(name, lastname = "default parameter") {
//   console.log(`Hello ${name} ${lastname}`);
// }
// selamla("halil", "erkantarci");
// selamla("halil");

// ********** ÖRNEK 4: YAŞ HESAPLA

function yasHesapla(year, name) {
  // const mesaj = `${name} in yaşı ${2022 - year} dir `;
  const mesaj = `${name} in yaşı ${new Date().getFullYear() - year} dir `;
  return mesaj;
}

const mesaj1 = yasHesapla(2001, "Elif");
console.log(mesaj1);
