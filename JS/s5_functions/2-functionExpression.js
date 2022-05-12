//! BU YÖNTEM ÇOK KULLANILMAZ

//******* ÖRNEK 1 */
// const TekMi = function (x) {
//   return x % 2 === 0 ? "çift" : "tek";
// };
// const sayi = Number(prompt("sayi gir"));
// console.log(`${sayi} ${TekMi(sayi)}`);

//******* ÖRNEK 2: find the bigest number */
const buyukBul = function (a, b, c) {
  if (a > b && a > c) {
    return `${a} is the biggest.`;
  } else if (b > a && b > c) {
    return `${b} is the biggest`;
  } else return `${c} is the biggest`;
};
const sayi1 = Number(prompt("sayi gir"));
const sayi2 = Number(prompt("sayi gir"));
const sayi3 = Number(prompt("sayi gir"));
console.log(buyukBul(sayi1, sayi2, sayi3));
