// ?================================================
// ?                   ARRAYS
// ?================================================

//* DİZİ TANIMLAMA
//* ------------------------------------------------  //! GENELDE CONST İLE DEĞİŞKEN TANIMLA

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

//*! okuma */
const java = diller[1];
console.log(java);

//! yazma
diller[3] = "JavaScript"; //! const ile tanımlamama rağmen değişti
console.log(diller);

// isimler = ["Can", "Canan", "Cavidan"]; //! bu şekilde tekrar atama yapamazsın
// console.log(isimler); //! assigment to constant variable
const yaslar = [22, 18, 15];
const kisiler = [
  "Ahmet",
  "Yılmaz",
  "Can",
  "Baki",
  2022,
  2022 - 1970,
  true,
  5.6,
  yaslar,
];
console.log(kisiler);
console.log(kisiler[8][1]);
kisiler[8][1] += 1; //! array içidenki bir sayiyi arttirdim
console.log(kisiler);

const sonYas = kisiler[8][0]++; //önce ata,sonra arttır
console.log(sonYas, kisiler); //sonyas 22,kisilerdeki 23

//* -------------- METHODS ------------------------
//! Diziyi değiştiren metotlar (pop,push,reverse,shift,unshift,sort,splice)
const meyveler = ["elma", "armut", "muz", "kivi"];
console.log(meyveler.pop()); //? son elemanı siler
console.log(meyveler);

console.log(meyveler.push("Ananas")); //? son eleman olarak ekler
console.log(meyveler);

console.log(meyveler.shift()); //? ilk elemanı sildi
console.log(meyveler);

console.log(meyveler.unshift("Çilek"));
console.log(meyveler); //? ilk sıraya ekledi

console.log(meyveler.reverse());
console.log(meyveler.sort()); //? harf sırasına dizdi

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); //The first parameter (2) defines the position where new elements should be added (spliced in).The second parameter (0) defines how many elements should be removed.
console.log(fruits);

const citrus = fruits.slice(3); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ] --> [ 'Kiwi', 'Apple', 'Mango' ] 3. indeksten sonrasını slice ediyor
console.log(citrus);
