console.log("******* LOOPS *****");

// for (let i = 1; i <= 10; i++) {
// //!  console.log(Math.trunc(Math.random() * 100 + 1));
//   const randomSayi = Math.trunc(Math.random() * 100 + 1);
//   console.log(randomSayi);
//   math.trunc() metodu virgülden kurtarır
//   math.floor() aşşağı yukarlar
//   math.ceil() yukarı yuvarlar
//   math.round() normal bildiğimiz yuvarlama
// }

// ********************************************************* FOR DÖNGÜSÜ ********
//? Örnek:1 den n e kadar sayiları toplayan kodu yazınız
// const n = prompt("n sayisini giriniz");
// let toplam = 0;
// for (let i = 1; i <= n; i++) {
//   toplam = toplam + i;
// }
// console.log(toplam);

//!!! *********************************************************** WHİLE DÖNGÜSÜ  *****
// let i = 1;
// while (i <= 5) {
//   console.log(`${i}. merhaba`);
//   i += 2;
// //!  i++ birer birer arttır
// }
//? ***** örnek 2
// let not = prompt("lütfen notunuzu giriniz(0-100)");
// while (not < 0 || not > 100) {
//   console.log("wrong range");
//   let not = prompt("lütfen notunuzu giriniz(0-100)");
// }
// console.log(`girdiğiniz not ${not}`);
//! *************************************************** DO - WHİLE 0************
// ö n c e     ç a l ı ş t ı r         s o n r a         k o n t r o l        e t ,   d o ğ r u y s a       b a ş a      d ö n
// let i = 1;
// do {
//   console.log("merhaba-", i);
//   i++;
// } while (i <= 5);

//? ***** örnek 2
// let not;
// do {
//   not = prompt("lütfen notunuzu girin (0-100)");
//   if (not < 0 || not > 100) {
//     alert("girdiğiniz not 0-100 arasında olmalıdır.");
//   }
// } while (not < 0 || not > 100);
// console.log("girdiğiniz not", not);

//? Ö D E V 1 : KLAVYEDEN Q KARAKTERİ GİRİLENE KADAR   NOT   GİRİŞİ   YAPAN   BİR  PROGRAM   DÖNGÜ KULLANARAK YAZ
