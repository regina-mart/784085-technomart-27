var contactsLink = document.querySelector(".contacs-map-button");
var closeBtns = document.querySelectorAll(".button-close");
var contactsPopup = document.querySelector(".map-modal-window");
var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".map-modal");
var buyLinks = document.querySelectorAll(".goods-buy-link");
var addedToBasketPopup = document.querySelector(".added-to-basket");
var continueShoppingBtn;

var mapClose;
var form;
var loginField;
var mailField;

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("loginField");
} catch (err) {
  isStorageSupport = false;
}

if (closeBtns) {
  for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      if (contactsPopup) {
        contactsPopup.classList.add("modal-hide");
        setTimeout(function () {
          contactsPopup.classList.remove("modal-show");
          contactsPopup.classList.remove("modal-error");
          contactsPopup.classList.remove("modal-hide");
        }, 600);
      } else if (addedToBasketPopup) {
        addedToBasketPopup.classList.add("modal-hide");
        setTimeout(function () {
          addedToBasketPopup.classList.remove("modal-show");
          addedToBasketPopup.classList.remove("modal-hide");
        }, 600);
      }
    });
  }
}

if (contactsLink) {
  contactsForm = contactsPopup.querySelector("form");
  loginField = contactsPopup.querySelector("[name=map-name]");
  mailField = contactsPopup.querySelector("[name=map-mailField]");

  if (contactsPopup) {
    contactsLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      contactsPopup.classList.add("modal-show");
    });

    if (contactsForm) {
      contactsForm.addEventListener("submit", function (evt) {
        if (!loginField.value || !mailField.value) {
          evt.preventDefault();
          contactsPopup.classList.remove("modal-error");
          contactsPopup.offsetWidth = contactsPopup.offsetWidth;
          contactsPopup.classList.add("modal-error");
        } else {
          if (isStorageSupport) {
            localStorage.setItem("loginField", loginField.value);
          }
        }
      });
    }

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (contactsPopup.classList.contains("modal-show")) {
          evt.preventDefault();
          contactsPopup.classList.add("modal-hide");
          setTimeout(function () {
            contactsPopup.classList.remove("modal-show");
            contactsPopup.classList.remove("modal-error");
            contactsPopup.classList.remove("modal-hide");
          }, 600);
        }
      }
    });
  }
}

if (mapLink) {
  if (mapPopup) {
    mapClose = mapPopup.querySelector(".map-button-close");

    mapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
    });

    if (mapClose) {
      mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-hide");
        setTimeout(function () {
          mapPopup.classList.remove("modal-show");
          mapPopup.classList.remove("modal-hide");
        }, 600);
      });
    }

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
          evt.preventDefault();
          mapPopup.classList.add("modal-hide");
          setTimeout(function () {
            mapPopup.classList.remove("modal-show");
            mapPopup.classList.remove("modal-hide");
          }, 600);
        }
      }
    });
  }
}

if (addedToBasketPopup) {
  continueShoppingBtn = addedToBasketPopup.querySelector(".continue-shopping");

  if (buyLinks) {
    for (var i = 0; i < buyLinks.length; i++) {
      buyLinks[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        addedToBasketPopup.classList.add("modal-show");
      })
    }
  }

  if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      addedToBasketPopup.classList.add("modal-hide");
      setTimeout(function () {
        addedToBasketPopup.classList.remove("modal-show");
        addedToBasketPopup.classList.remove("modal-hide");
      }, 600);
    });
  }


  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (addedToBasketPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        addedToBasketPopup.classList.add("modal-hide");
        setTimeout(function () {
          addedToBasketPopup.classList.remove("modal-show");
          addedToBasketPopup.classList.remove("modal-hide");
        }, 600);
      }
    }
  });
}
