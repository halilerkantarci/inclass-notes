//! BU YÖNTEM ÇOK KULLANILMAZ

//******* ÖRNEK 1 */
// const TekMi = function (x) {
//   return x % 2 === 0 ? "çift" : "tek";
// };
// const sayi = Number(prompt("sayi gir"));
// console.log(`${sayi} ${TekMi(sayi)}`);

//******* ÖRNEK 2: find the bigest number */
// const buyukBul = function (a, b, c ) {
//   if (a > b && a > c) {
//     return `${a} is the biggest.`;
//   } else if (b > a && b > c) {
//     return `${b} is the biggest`;
//   } else return `${c} is the biggest`;
// };
// const sayi1 = Number(prompt("sayi gir"));
// const sayi2 = Number(prompt("sayi gir"));
// const sayi3 = Number(prompt("sayi gir"));
// console.log(buyukBul(sayi1, sayi2, sayi3));

//! FONKSİYON İÇİNDE FONKSİYON KULLANMA
const hesapla = function (islem, s1, s2) {
  let sonuc;
  if (islem == "+") {
    sonuc = topla(s1, s2);
  } else if (islem == "-") {
    sonuc = cikar(s1, s2);
  } else if (islem == "*") {
    sonuc = carp(s1, s2);
  } else if (islem == "/") {
    sonuc = bol(s1, s2);
  }
  return sonuc;
};
const topla = function (s1, s2) {
  return s1 + s2;
};
const cikar = function (s1, s2) {
  return s1 - s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};
console.log(hesapla("+", 3, 5));
console.log(hesapla("*", 3, 5));
