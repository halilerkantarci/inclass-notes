// ?================================================
// ?                   ARRAYS
// ?================================================

//* DİZİ TANIMLAMA
//* ------------------------------------------------

//! 1:YÖNTEM (ARRAY LİTERAL) - BU YÖNTEMİ KULLANICAZ
const isimler = ["ahmet", "mehmet", "ismet", "saffet"];
console.log(isimler);
console.log(typeof isimler[0], isimler[0]);

//! 2:YÖNTEM (OBJECT CONSTRUCTOR)
const diller = new Array("Phyton", "Java", "C++", "JS", "Go");
console.log(diller);

const number = new Array(3, 2, 1);
console.log(number);

const sayilar = new Array(10);
console.log(sayilar); //! 10 elemanlık boş bir array oluşturur

//* DİZİDEN VERİ OKUMA-YAZMA
//* ----------------------------------------------------
const java = diller[1];
console.log(java);
diller[3] = "JavaScript"; //! const ile tanımlamama rağmen değişti
console.log(diller);
