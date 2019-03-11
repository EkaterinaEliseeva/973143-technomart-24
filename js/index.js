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

try {
    storagename = localStorage.getItem("inputname");
    storageemail = localStorage.getItem("inputemail");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
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

closebutton.addEventListener("click", function(evt) {
    evt.preventDefault(); 
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

formwriteus.addEventListener("submit", function(evt) {
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
        if (popup.classList.contains("modal-show")|| mappopup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
            mappopup.classList.remove("modal-show");
        }
    }
});


var maplink = document.querySelector(".company-contacts-map");
var mappopup = document.querySelector(".modal-map");
var mapclose = document.querySelector(".modal-map-close");

maplink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mappopup.classList.add("modal-show");
});

mapclose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mappopup.classList.remove("modal-show");
});

