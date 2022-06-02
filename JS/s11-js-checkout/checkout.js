const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", () => {
  // set item to LocalStorage
  // biz silene kadar durur
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);

  // set item to SessionStorage
  // oturumu kapattığınızda bu değerler kaybolur
  //!   sessionStorage.setItem("taxRate", taxRate);
  //!   sessionStorage.setItem("shippingPrice", shippingPrice);
});

// capturing method
let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event) => {
  // if (e.target.classList.contains("minus"))
  //alttakiyle üstteki aynı şey
  //! clas name dersek; o elementin tüm classları yazılmalı ("minus pls btn")
  if (event.target.className == "minus") {
    event.target.nextElementSibling.innerText--;
    // console.log("minus button clicked");
    //? classlist dersem o elementin tek bir classını yazmam yeterli
  } else if (event.target.classList.contains("plus")) {
    console.log("plus button clicked");
  } else if (event.target.classList.contains("remove-product")) {
    console.log("remove button clicked");
  } else {
    console.log("other clicks");
  }
  // tıklanan elementi gösterir
  //   console.log(event.target);
});
