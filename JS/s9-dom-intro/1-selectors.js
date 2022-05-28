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
