var link = document.querySelector(".goods-buy");
var popup = document.querySelector(".added-to-basket");
var close = popup.querySelector(".button-close");
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
