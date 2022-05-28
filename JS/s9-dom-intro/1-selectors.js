const x = document.getElementsByClassName("par");
x[0].style.backgroundColor = "red";
const y = document.getElementById("header");
y.style.color = "blue";

document.getElementsByTagName("img")[0].style.width = "350px";

const button = document.getElementById("btn");
btn.style.backgroundColor = "black";
btn.style.color = "yellow";
button.style.fontSize = "2rem";

//* CHANGİNG TEXT CONTENT
const par = document.getElementsByClassName("par");
// par[0].textContent = "DOM MANİPULATİON";
par[0].innerHTML += " " + '<a href="https://www.clarusway.com">Clarusway</a>';
//* ====================================
//*             QUERY SELECTOR()
//* ====================================

const k = document.querySelectorAll(".par");
k[2].style.border = "1px solid blue";
k[2].style.padding = ".5rem";
k[2].style.backgroundColor = "hotpink";
k[2].style.color = "white";

document.querySelector("title").textContent = "JS09-DOM ❤";
//! query selector diziye çevirdi
const myPars = document.querySelectorAll("p");
console.log(myPars); //nodelist döndürür
myPars.forEach((p) => (p.style.fontSize = "14px"));

//! classname diziye çevirmez,foreach yapabilmek için arraye dönüştürmek gerekir
//* HTML COLLECTİONDAN ARRAYE ÇEVİRME YÖNTEMLERİ
//? 1.ARRAY.from()
const myPars1 = document.getElementsByClassName("prgf");
console.log(myPars1); //html collection

const myParsArray = Array.from(myPars1);
console.log(myParsArray);
myParsArray.forEach((p) => console.log(p.innerHTML));

//? 2. spread / rest

[...myPars1].forEach((a) => console.log(a.innerHTML));

// queryselector harici bişey kullanırsak html collection olur, çevirmek için üstteki yöntemler kullanılır
