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

//*-------------- ÖDEV -------------------
//* fiyatlar dizisinde her bir fiyata %10 zam yapalım.
