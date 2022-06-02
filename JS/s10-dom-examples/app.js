const dilInput = document.querySelector(".diller");
const silBtn = document.getElementById("sil");
const ekleBtn = document.getElementById("ekle");

const dilSection = document.querySelector("#dil-section");

const ul = document.createElement("ul");
dilSection.appendChild(ul);

//? SELECTORS
//* ****************************** */

console.log(dilSection.children[0]);
console.log(dilSection.parentNode.parentNode.parentNode.parentNode);

// ul den h1 e erişmenin kısa yolu. yukarıdaki gibi uzun uzun yazmıyoruz
const h1 = ul.closest(".container").firstElementChild;
console.log(h1);
h1.style.color = "red";

// const h2 = ul.closest(".container").firstChild;
// console.log(h2);

//? container classı içindeki btn classına ait olan elementleri arar

const buttons = ul.closest(".container").querySelectorAll(".btn");
console.log(buttons);
//* ****************************** */

ekleBtn.onclick = function () {
  if (!dilInput.value) {
    alert("Lütfen Bir Dil Giriniz");
  } else {
    ul.innerHTML += `<li>${dilInput.value}</li>`;
    dilInput.value = "";
    javascriptKontrol();
  }
};
const javascriptKontrol = () => {
  document.querySelectorAll("ul li").forEach((dil) => {
    const kucukharf = dil.textContent.toLowerCase();
    if (kucukharf === "javascript") {
      //   dil.className = "red";
      //! yukarıdaki kod ile aşşağıdaki aynı (yukarıdaki eskiden olan classları siler,üzerine ekler)
      dil.setAttribute("class", "red");
    }
  });
};

silBtn.onclick = function () {
  ul.childElementCount > 0
    ? ul.removeChild(ul.lastChild)
    : alert("there is no data to delete");
};

//! entera basınca girdi olsun,delete e basınca silme olsun

dilInput.addEventListener("keydown", (e) => {
  //? Enter da yazabilirsin 13 de yazabilirsin
  if (e.keyCode === 13) {
    ekleBtn.onclick(); //.click() de diyebilirsin
  }
  if (e.code === "Delete") {
    silBtn.onclick();
  }
});

//* sayfa açılınca direkt inputa değer girebildik
dilInput.focus();

//! yukarıdaki ile aynı
// window.onload = () => {
//   javascriptKontrol();
//   dilInput.focus();
// };
