//* ==============================================================
//*                           FOR LOOP
//* ==============================================================

const islemler = [-3000, 4500, -2200, -6000, 9000];

const islemlerToplami = () => {
  let toplam = 0;
  for (let i = 0; i < islemler.length; i++) {
    toplam += islemler[i];
  }
  return toplam;
};
console.log(islemlerToplami());

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrncileri aramamızı sağlayacak ve aranılan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//*  fonksiyonu yazınız. Eğer aranılan isimde bir ogrenci yok ise
//* fonksiyon aranılan ogrenci bulunamdı dondurulmelidir.
//! İNDİSLEMEYE GEREK VAR
//*-------------------------------------------------------

const ogrenciler = [
  "ahmet",
  "mehmet",
  "ismet",
  "saffet",
  "ahmet",
  "nur",
  "can",
  "nur",
  "mehmet",
  "cem",
];
const ogrenciBul = function (isim) {
  let sayac = 0;
  for (let i in ogrenciler) {
    if (ogrenciler[i] == isim) {
      sayac++;
    }
  }
  if (sayac == 0) {
    return `${isim},${sayac} adet bulundu`;
  } else {
    return `${isim} ismiden ${sayac} tane var`;
  }
};

let ogrIsim = "AHMet".toLocaleLowerCase();
console.log(ogrenciBul(ogrIsim));

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const ogrenciBul1 = function (isim) {
  let sayac = 0;
  for (let ogrenci of ogrenciler) {
    ogrenci === isim ? sayac++ : null; //! ternary
    // ogrenci === isim && sayac++; //! short-circuit yöntemi: && --> koşul doğru ise ifadeyi çağırır
    // ogrenci === isim || sayac--; //! short-circuit yöntemi: || --> koşul yanlış ise ifadeyi çağırır
  }
  return !sayac
    ? `${isim},${sayac} adet bulundu`
    : `${isim} ismiden ${sayac} tane var`;
};

let ogrIsim1 = "AHMet".toLocaleLowerCase();
console.log(ogrenciBul1(ogrIsim1));

//* ======================================================
//*                   FOREACH LOOP
//* ======================================================

const fiyatlar = [100, 250, 50, 59];
// let x = fiyatlar.forEach(yazdir);
// function yazdir(value) {
//     console.log(value);
// }

fiyatlar.forEach((value) => console.log(value));

//* FİYATLAR DİZİSİNDEKİ ELEMANLARIN TOPLAMINI YAZDIR
let toplam = 0;
fiyatlar.forEach((fiyat) => (toplam += fiyat));
console.log(toplam);

//! NOT : foreach metodu void bir metottur.Yani herhangi bir değer döndürmez

// --------------------------  ÖRNEK ----------------------
let toplam1 = 0;
fiyatlar.forEach((value, indis, dizi) => {
  toplam1 += value;
  console.log(`${indis}.iterasyon toplamı:${toplam1}`);
  dizi[indis] = value + 10;
});
console.log(fiyatlar);

//* ======================================================
//*                  MAP METHOD
//* ======================================================

//* isimler dizisinin içerisindeki her ismi büyük harf olarak yeni bir diziye sakla
const isimler = [
  "ahmet",
  "mehmet",
  "ismet",
  "saffet",
  "can",
  "canan",
  "cavidan",
];

let x = isimler.map((a) => a.toUpperCase());
console.log(x);
console.log(isimler);

// ÖRNEK: tlFiyatlar dizidekisindeki ürünlere zam yapılmak isteniyor.
// Fiyatı 100 TL den fazla olanlara %10 zam, 100 TL den az olanlara ise
// %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki
// gibi diziye saklamak istiyoruz.
const tlFiyatlar = [100, 150, 100, 50, 80];
const degerler = tlFiyatlar.map((a, b) =>
  a > 100
    ? `${b + 1}. ürünün fiyatı : ${(a * 1.1).toFixed(2)}`
    : `${b + 1}. ürünün fiyatı : ${(a * 1.15).toFixed(2)}`
);
console.log(degerler);

//* ======================================================
//*                  CHAINING (PIPELINE)
//* ======================================================
//! tüm isimleri büyük harfe çevirip konsolda yazdır
//* ÇEVİR VEYA DEĞİŞTİR DERSE MAP KULLAN
isimler
  .map((isim) => isim.toUpperCase())
  .forEach((name1) => console.log(name1));

//! ÖRNEK
//? ismi ahmet olanları al,harflerini büyük yap,yazdır
isimler
  .filter((x) => x === "ahmet" || x === "mehmet") //["ahmet","mehmet"]
  .map((x) => x.toUpperCase())
  .forEach((x) => console.log(x));

//* ======================================================
//*                  FİLTER
//* ======================================================
//!ÖRNEK: fiyatlar arrayinde fiyatı 250 tl den az olanları ayri bir diziye sakla

const kucuk250 = fiyatlar.filter((x) => x < 250);
console.log(kucuk250);

//*-------------- ÖDEV -------------------
const fiyatlar1 = [100, 250, 50, 89];
//***ödev fiyatlara %10 zam yapılsın:**///
//! fiyatlar1.forEach(
//   (value, index, arr) => (arr[index] = (value * 1.1).toFixed(2))
// );
// console.log(fiyatlar1);
//* fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri
//* konsola tek tek bastırınız.

//* fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere
//*  %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

let fiyatDusuk = fiyatlar1
  .filter((a) => a < 110)
  .forEach((a) => console.log((a * 1.1).toFixed(2)));
console.log(fiyatDusuk);

//* maaslar 4000'den düsük olanlara %50 zam yapmak istiyoruz
//* ve bunu ayri dizi olarak saklamak istiyoruz.
const maaslar = [3000, 5000, 4000, 6000, 6500];
const dusuk = maaslar.filter((x) => x < 4000).map((y) => y * 1.5);
console.log(dusuk);

//* Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari yazdiralim.

const buyuk = maaslar.filter((a) => a > 4000).map((a) => a * 1.25);
console.log(buyuk);

//* ===================================================
//*                        REDUCE
//* ===================================================
const maaslar1 = [3000, 5000, 4000, 6000, 6500];
const toplam12 = maaslar.reduce((t, m) => t + m, 0);
console.log(toplam12);

//* maasi ortalamanin altinda olanlara %20 zam yapalim
