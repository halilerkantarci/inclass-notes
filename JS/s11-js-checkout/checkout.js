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
    let quantityP = event.target.nextElementSibling;
    if (quantityP.innerText > 1) {
      quantityP.innerText--;
      // dedeye çıkmış olduk
      // parameter == productInfoDiv
      calculateProductAndCartTotal(event.target.parentElement.parentElement);
    } else {
      if (confirm("Product will be deleted?")) {
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartTotal();
      }
    }

    // console.log("minus button clicked");

    //? classlist dersem o elementin tek bir classını yazmam yeterli
  } else if (event.target.classList.contains("plus")) {
    event.target.previousElementSibling.innerText++;
    // parameter == productInfoDiv
    calculateProductAndCartTotal(event.target.parentElement.parentElement);

    // console.log("plus button clicked");
  } else if (event.target.classList.contains("remove-product")) {
    event.target.parentElement.parentElement.parentElement.remove();
    calculateCartTotal();

    // console.log("remove button clicked");
  } else {
    // console.log("other clicks");
  }
  // tıklanan elementi gösterir
  //   console.log(event.target);
});

//? ==================================
//! CALCULATE CART AND PRODUCT TOTALS
//* ==================================
const calculateProductAndCartTotal = (productInfoDiv) => {
  let quantity = 
  let price = 
  calculateCartTotal();
};

const calculateCartTotal = () => {};
