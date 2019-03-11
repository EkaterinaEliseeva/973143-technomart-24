var link = document.querySelector(".company-contacts-button");
var popup = document.querySelector(".modal-write-us");
var closebutton = document.querySelector(".modal-write-us-close");
var formwriteus = document.querySelector(".modal-write-us-form");
var inputname = document.querySelector(".input-name");
var inputemail = document.querySelector(".input-email");
var inputtext = document.querySelector(".modal-write-us-textarea");
var isStorageSupport = true;
var storagename = "";
var storageemail = "";
var modal = document.querySelectorAll(".modal");

try {
    storagename = localStorage.getItem("inputname");
    storageemail = localStorage.getItem("inputemail");
} catch (err) {
    isStorageSupport = false;
}

if (link) link.addEventListener("click", function(evt) {
    evt.preventDefault(); 
    popup.classList.add("modal-show");
    
    if (storagename && storageemail)  {
        inputname.value = storagename;
        inputname.email = storageemail;
        inputtext.focus();
    } else {
        if (storagename && !storageemail) {
            inputemail.focus();
        } else {
            inputname.focus();
        }   
    }       
});

if (closebutton) closebutton.addEventListener("click", function(evt) {
    evt.preventDefault(); 
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

if (formwriteus) formwriteus.addEventListener("submit", function(evt) {
    if (!inputname.value || !inputemail.value || !inputtext.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("inputname", inputname.value);
            localStorage.setItem("inputemail", inputemail.value);
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


var maplink = document.querySelector(".company-contacts-map");
var mappopup = document.querySelector(".modal-map");
var mapclose = document.querySelector(".modal-map-close");

if (maplink) maplink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mappopup.classList.add("modal-show");
});

if (mapclose) mapclose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mappopup.classList.remove("modal-show");
});


var cartlink = document.querySelectorAll(".catalog-item-action-buy");
var cartpopup = document.querySelector(".modal-cart");
var cartclose = document.querySelector(".modal-cart-close");

if (cartlink) for (var i=0; i<cartlink.length; i++) {
    cartlink[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        cartpopup.classList.add("modal-show");
    });
};

if (cartclose) cartclose.addEventListener("click", function(evt) {
evt.preventDefault();
cartpopup.classList.remove("modal-show");
});
