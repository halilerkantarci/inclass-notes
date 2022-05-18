//* --------------------------------
//* concat() - immutable
//* --------------------------------

const str1 = "Clarusway";
const str2 = " Hello";
const str3 = " World";
//! Klasik yöntem ile string tanımlanırsa bu string bir primitive değişkendir
const str4 = str1 + str2;
console.log(str4);

console.log(str4.concat(str3));
console.log(str4.concat(" Turkey", " poland"));
const str6 = " selam";
const str7 = " good day";
const str8 = str4.concat(str6).concat(str7);
console.log(str8);
//! NON-PRİMİTEVE STRİNG TANIMLAMA
// const str5 = new String("non-primitive string");
// console.log(str5, typeof str5);

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//* --------------------------------
//* charAt() - immutable
//* --------------------------------
console.log(str8.charAt()); //! 0. indekste bulunan charı getirir
console.log(str8.charAt(4));
console.log(str8.charAt(str8.length - 1));
// console.log(str8.indexOf("a"));
