//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? ---------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ---------------------------------------------------------------

// 3 saniye bekletir
const bekle = (ms) => {
  const start = new Date().getTime();
  while (new Date().getTime() < start + ms) {}
};

// console.log("hello");
// // alert("itf"); //blocking-code
// console.time("timer");
// bekle(3000);
// console.timeEnd("timer");
// console.log("fs11");

//* Asenkron (setTimeout)
//* ---------------------------------------------------------------

console.log("1");

//! macrotask kuyruğu
setTimeout(() => {
  console.log("2");
}, 3000);

//! microtask kuyruğu
console.log("3");

setTimeout(() => {
  console.log("4");
}, 1000);

//* Asenkron (setInterval, clearInternval)
//* ---------------------------------------------------------------

let counter = 0;
setInterval(() => {
  ++counter;
  console.log(counter);
  if (counter == "3") {
    return;
  }
}, 1000);

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakta bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi");
  setTimeout(() => {
    console.log("Sarah: Hello");
    setTimeout(() => {
      console.log("John: How Are you?");
      setTimeout(() => {
        console.log("Fine and you?");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//? ÇÖZÜMLER:
//? -------------------------------
//* 1- XMLHttpRequest (Eski yöntem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlammis hali)
