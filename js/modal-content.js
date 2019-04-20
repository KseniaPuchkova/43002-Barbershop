var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

 link.addEventListener("click", function(event) {
 event.preventDefault();
 popup.classList.add("modal-content-show");
 if (storage) {
 login.value = storage;
 password.focus();
 } else {
 login.focus();
 }
 });

 close.addEventListener("click", function(event) {
 event.preventDefault();
 popup.classList.remove("modal-content-show");
 popup.classList.remove("modal-error");
     });

 form.addEventListener("submit", function(event) {
 if (!login.value && !password.value) {
 event.preventDefault();
 popup.offsetWidth = popup.offsetWidth;
 popup.classList.add("modal-error");
} else {
localStorage.setItem("login", login.value);
}});

 window.addEventListener("keydown", function(event) {
 if (event.keyCode === 27) {
 if (popup.classList.contains("modal-content-show")) {
 popup.classList.remove("modal-content-show");
 popup.classList.remove("modal-error");
}
}
});

 var mapOpen = document.querySelector(".open-map");
 var mapPopup = document.querySelector(".modal-content-map");
 var mapClose = mapPopup.querySelector(".modal-content-close");
 var overlay = document.querySelector(".overlay");

 mapOpen.addEventListener("click", function(event) {
 event.preventDefault();
 mapPopup.classList.add("modal-content-show-map");
 overlay.classList.add("overlay-show");
     });

 mapClose.addEventListener("click", function(event) {
 event.preventDefault();
 mapPopup.classList.remove("modal-content-show-map");
 overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
  if (mapPopup.classList.contains("modal-content-show-map")) {
  mapPopup.classList.remove("modal-content-show-map");
  overlay.classList.remove("overlay-show");
}
}
});

 var gallery = document.querySelector(".gallery");
      gallery.classList.add("gallery-live");
      var buttons =
        '<button class="btn gallery-prev">Назад</button>' +
        '<button class="btn gallery-next">Вперед</button>';

      gallery.innerHTML = gallery.innerHTML + buttons;

      var prev = document.querySelector(".gallery-prev");
      prev.setAttribute('disabled', 'disabled');
