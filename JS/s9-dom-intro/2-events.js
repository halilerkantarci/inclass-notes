//* =====================================================
//*           EVENTS
//* =====================================================

//* EXAMPLE-1 (MOUSE OVER,MOUSE OUT)

//? METHOD-3

//! 1.1 1.yöntem
// document.getElementById("header").onmouseover = function () {
//   document.getElementById("header").style.color = "red";
// };
//! 1.1 2.yöntem
const header = document.getElementById("header");
header.onmouseover = function () {
  header.style.color = "red";
};
header.onmouseout = function () {
  header.style.color = "black";
};

//? METHOD-4

// const myImg = document
//   .querySelector("img")
//   .addEventListener("mouseover", function () {
//     document.querySelector("img").style.width = "400px";
//   });

const myImg = document.querySelector("img");
myImg.addEventListener("mouseover", () => {
  myImg.style.transform = "translateY(5px)";
});
myImg.addEventListener("mouseout", () => {
  myImg.style.transform = "translateY(-5px)";
});

//* EXAMPLE-2 (Button onclick)

const button = document.querySelector("#btn");
button.addEventListener("click", function () {
  document.querySelector("#body").style.backgroundImage =
    "linear-gradient(to right,purple,yellow)";
  button.textContent = "Search";
});
