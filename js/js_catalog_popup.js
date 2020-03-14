var link = document.querySelector(".goods-buy-link");
var popup = document.querySelector(".added-to-basket");
var close = popup.querySelector(".added-to-basket::after");
var closeTwo = popup.querySelector(".continue-shopping");

link.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.add("modal-show");
}

close.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.remove("modal-show");
});

closeTwo.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.remove("modal-show");
});
