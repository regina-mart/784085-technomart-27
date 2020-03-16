var links = document.querySelector(".goods-buy-link");
var popup = document.querySelector(".added-to-basket");
var close = popup.querySelector(".button-close");
var closeTwo = popup.querySelector(".continue-shopping");

links.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.add("modal-show");
}

for(var i = 0; i < links.length; i++) {
 links[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
 })
}

close.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.remove("modal-show");
});

closeTwo.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.remove("modal-show");
});
