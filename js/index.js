var link = document.querySelector(".company-contacts-button");
var popup = document.querySelector(".modal-write-us");
var closeButton = document.querySelector(".modal-write-us-close");
var formWriteUs = document.querySelector(".modal-write-us-form");
var inputName = document.querySelector(".input-name");
var inputEmail = document.querySelector(".input-email");
var inputText = document.querySelector(".modal-write-us-textarea");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";
var modal = document.querySelectorAll(".modal");

try {
    storageName = localStorage.getItem("inputName");
    storageEmail = localStorage.getItem("inputEmail");
} catch (err) {
    isStorageSupport = false;
}

if (link) link.addEventListener("click", function(evt) {
    evt.preventDefault(); 
    popup.classList.add("modal-show");
    
    if (storageName && storageEmail)  {
        inputName.value = storageName;
        inputEmail.value = storageEmail;
        inputText.focus();
    } else {
        if (storageName && !storageEmail) {
            inputEmail.focus();
        } else {
            inputName.focus();
        }   
    }       
});

if (closeButton) closeButton.addEventListener("click", function(evt) {
    evt.preventDefault(); 
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

if (formWriteUs) formWriteUs.addEventListener("submit", function(evt) {
    if (!inputName.value || !inputEmail.value || !inputText.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("inputName", inputname.value);
            localStorage.setItem("inputEmail", inputemail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        for (i=0;i<modal.length;i++) {
            if (modal[i].classList.contains("modal-show")) {
                modal[i].classList.remove("modal-show");
            }
        }
    }
});


var mapLink = document.querySelector(".company-contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map-close");
var mapIframe = document.querySelector(".modal-map-iframe");

if (mapLink) mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    mapPopup.classList.remove("modal-map-img");
    mapIframe.classList.remove("visually-hidden");
});

if (mapClose) mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    mapPopup.classList.add("modal-map-img");
});


var cartLink = document.querySelectorAll(".catalog-item-action-buy");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = document.querySelector(".modal-cart-close");

if (cartLink) for (var i=0; i<cartLink.length; i++) {
    cartLink[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
    });
};

if (cartClose) cartClose.addEventListener("click", function(evt) {
evt.preventDefault();
cartPopup.classList.remove("modal-show");
});
