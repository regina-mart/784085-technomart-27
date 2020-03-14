var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".interactive-map");
var mapPopupImg = document.querySelector(".map-big-link");
var mapClose = document.querySelector(".map-big-link::after");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
})
