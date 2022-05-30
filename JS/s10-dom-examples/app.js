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

// ul den h1 e erişmek
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
      //! yukarıdaki kod ile aşşağıdaki aynı (eskiden olan classları siler,üzerine ekler)
      dil.setAttribute("class", "red");
    }
  });
};
