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
//* charAt() -
//* --------------------------------
console.log(str8.charAt()); //! 0. indekste bulunan charı getirir
console.log(str8.charAt(4));
console.log(str8.charAt(str8.length - 1));

//* --------------------------------
//* includes() - case sensitive
//* --------------------------------
const word = "To be or not to be, that is the question";
console.log(word.includes("to be")); //! true
console.log(word.includes("That")); //! false
console.log(word.includes("")); //! true  (empty string)
console.log(word.includes("to be", 13)); //! 13. indeksten sonra "to be" var mı?
console.log(word.includes("to be", 14));

//* --------------------------------
//* indexOf(),lastIndexof() - case sensitive
//* --------------------------------
const tobeIndex = word.indexOf("or");
console.log(tobeIndex);
console.log(word.indexOf("be")); //! ilk gördüğü be
console.log(word.lastIndexOf("be")); //! son gördüğü be

//* --------------------------------
//* startsWith(), endsWith() - case sensitive
//* --------------------------------
const word2 = "Salına salına sinsice";
console.log(word2.startsWith("sa")); //! false,küçük harf old. için
console.log(word2.startsWith("Sa"));
console.log(word2.startsWith("sa", 7)); //! 7. indeksten sonra sa var mı?
console.log(word2.endsWith("sice"));

//* --------------------------------
//* replace(searchfor,replacewith)
//* --------------------------------
const oku = "Oku Baban gibi,saf olma";
console.log(oku.replace("saf", "eşek"));
console.log(oku); //! gerçek halini değiştirmiyor

//* REGEX,DEĞİŞTİRME YOLLARI;
console.log(oku.replace(/SAF/i, "Aptal")); //! case sensitive özelliğini kaldırdık

//* --------------------------------
//* slice,substring,substr
//* --------------------------------

const veysel = "Uzun ince bir yoldayım gidiyorum gündüz gece..";
const sliced = veysel.slice(33); //! 33. indeksten sonuna kadar git
console.log(sliced);
console.log(veysel.slice(14, 32));
console.log(veysel.substring(14, 32)); //! negatif index kullanılmaz

//* --------------------------------
//* split()
//* --------------------------------
const tarkan = "Gel gündüzle gece olalım";
console.log(tarkan.split(""));
console.log(tarkan.split(" "));

const copyTarkan = tarkan.split();
console.log(copyTarkan); //! stringi array haline getirdi
//* --------------------------------
//* trim()
//* --------------------------------
const ramazan = "    Hoş geldin ya şehri ramazan        ";
console.log(ramazan);
console.log(ramazan.trim()); //! bütün boşluklar kalktı
console.log(ramazan.trimStart()); //! başlangıçtaki boşlukları kaldırdı
console.log(ramazan.trimEnd()); //! sondaki boşlukları kaldırdı
