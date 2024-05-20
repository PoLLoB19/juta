let i = 0;
let total = 0;

const addcart = document.querySelectorAll(".buy");

addcart.forEach(function (items) {
  items.addEventListener("click", function () {
    let product_price = parseFloat(
      items.parentElement.querySelector(".price").textContent.slice(1)
    );

    let product_img = items.parentElement.querySelector('.image').src;

    let to = document.createElement("div");

    to.innerHTML = `<div class="main_div"> <div class="img_d"><img class="img_cart" src="${product_img}"/></div>
    <div class="details flex justify-between py-4 px-2 items-center bg-stone-600 text-white">
     <div><b>Price-</b> ${product_price}$</div>
      <button class="tra" ><i class="fa-solid fa-trash "></i></button></div> `;
    document.querySelector(".buy_items").append(to);

    i = i + 1;
    document.querySelector(".cart-sign").innerHTML = i;

    document.querySelector(".total_it").innerHTML = `Total items : ${i}`;

    total = total + product_price;

    document.querySelector(".sub").innerHTML = `Subtotal: $${total}`;

  });
});
function cart() {
    document.querySelector(".cart-items").classList.add("cart_i");
    document.querySelector(".blackbox").classList.add("blackbox-in");
   
  }
function exit() {
    document.querySelector(".cart-items").classList.remove("cart_i");
    document.querySelector(".blackbox").classList.remove("blackbox-in");
  }