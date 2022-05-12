//! BU YÖNTEM ÇOK KULLANILMAZ

const TekMi = function (x) {
  return x % 2 === 0 ? "çift" : "tek";
};
const sayi = Number(prompt("sayi gir"));
console.log(TekMi(3));
