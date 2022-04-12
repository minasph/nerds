let initModal = function() {
    const writeUsLink = document.querySelector('.block-contacts__link-modal');
    const writeUsPopup = document.querySelector('.modal-write-us');
    const writeUsClose = writeUsPopup.querySelector('.modal-write-us__close');
    const writeUsLogin = writeUsPopup.querySelector('.field__input_login');
    const writeUsEmail = writeUsPopup.querySelector('.field__input_email');
    const writeUSMessage = writeUsPopup.querySelector('.field__input_message');
    const writeUsForm = writeUsPopup.querySelector('.modal-write-us__form');

    let isStorageSupport = true;
    let storageLogin = '';
    let storageEmail = '';

    try {
        storageLogin = localStorage.getItem('login');
        storageEmail = localStorage.getItem('email');
    } catch (err) {
        isStorageSupport = false;
    }

    writeUsLink.addEventListener('click', function(evt) {
        evt.preventDefault();
        writeUsPopup.classList.add('modal_show');
        if(storageLogin) {
            writeUsLogin.value = storageLogin;
            writeUsLogin.focus();
        }
        else {
            writeUsLogin.focus();
        }
        if(storageEmail) {
            writeUsEmail.value = storageEmail;
        }
    });

    writeUsClose.addEventListener('click', function(evt) {
        evt.preventDefault();
        writeUsPopup.classList.remove('modal_show');
        writeUsPopup.classList.remove('modal_error');
    });

    writeUsForm.addEventListener('submit', function(evt) {
        if(!writeUsLogin.value || !writeUsEmail.value || !writeUSMessage.value) {
            evt.preventDefault();
            writeUsPopup.classList.remove('modal_error');
            writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
            writeUsPopup.classList.add('modal_error');
        }
        else if(isStorageSupport) {
            localStorage.setItem('login', writeUsLogin.value);
            localStorage.setItem('email', writeUsEmail.value)
        }
    });

    window.addEventListener('keydown', function(evt) {
        if(evt.keyCode === 27 && writeUsPopup.classList.contains('modal_show')) {
            evt.preventDefault();
            writeUsPopup.classList.remove('modal_show');
            writeUsPopup.classList.remove('modal_error');
        }
    });
};

let initSlider = function() {
    let sliderBlock = document.querySelector('.slider');
    let sliderToggles = sliderBlock.querySelectorAll('.slider__toggle');
    let sliderItems = sliderBlock.querySelectorAll('.slider__item');
    let currentSlide = 0;

    sliderToggles.forEach(function(sliderToggle, index) {
        sliderToggle.addEventListener('click', function() {
            sliderItems[currentSlide].classList.remove('slider__item_current');
            sliderToggles[currentSlide].classList.remove('slider__toggle_current');

            sliderItems[index].classList.add('slider__item_current');
            sliderToggle.classList.add('slider__toggle_current');

            currentSlide = index;
        })
    })
};

let initMap = function() {

    let ContactsMap = document.querySelector('.contacts__map');

    let myMap = new ymaps.Map(ContactsMap, {
        center: [59.939097, 30.321520],
        zoom: 17,
        controls: ['zoomControl']
    }, {});

    let myPlacemark = new ymaps.Placemark([59.938748, 30.323161], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.png',
        iconImageSize: [231, 190],
        iconImageOffset: [-50, -190]
    });

    myMap.geoObjects.add(myPlacemark);
};

ymaps.ready(initMap);
initModal();
initSlider();

let initModal = function () {
    const e = document.querySelector(".block-contacts__link-modal"), t = document.querySelector(".modal-write-us"),
        o = t.querySelector(".modal-write-us__close"), l = t.querySelector(".field__input_login"),
        r = t.querySelector(".field__input_email");
    var a = t.querySelector(".field__input_message");
    const i = t.querySelector(".modal-write-us__form");
    let s = !0, c = "", n = "";
    try {
        c = localStorage.getItem("login"), n = localStorage.getItem("email")
    } catch (e) {
        s = !1
    }
    e.addEventListener("click", function (e) {
        e.preventDefault(), t.classList.add("modal_show"), c && (l.value = c), l.focus(), n && (r.value = n)
    }), o.addEventListener("click", function (e) {
        e.preventDefault(), t.classList.remove("modal_show"), t.classList.remove("modal_error")
    }), i.addEventListener("submit", function (e) {
        l.value && r.value && a.value ? s && (localStorage.setItem("login", l.value), localStorage.setItem("email", r.value)) : (e.preventDefault(), t.classList.remove("modal_error"), t.offsetWidth = t.offsetWidth, t.classList.add("modal_error"))
    }), window.addEventListener("keydown", function (e) {
        27 === e.keyCode && t.classList.contains("modal_show") && (e.preventDefault(), t.classList.remove("modal_show"), t.classList.remove("modal_error"))
    })
}, initSlider = function () {
    let e = document.querySelector(".slider"), o = e.querySelectorAll(".slider__toggle"),
        l = e.querySelectorAll(".slider__item"), r = 0;
    o.forEach(function (e, t) {
        e.addEventListener("click", function () {
            l[r].classList.remove("slider__item_current"), o[r].classList.remove("slider__toggle_current"), l[t].classList.add("slider__item_current"), e.classList.add("slider__toggle_current"), r = t
        })
    })
}, initMap = function () {
    var e = document.querySelector(".contacts__map");
    let t = new ymaps.Map(e, {center: [59.939097, 30.32152], zoom: 17, controls: ["zoomControl"]}, {});
    e = new ymaps.Placemark([59.938748, 30.323161], {}, {
        iconLayout: "default#image",
        iconImageHref: "img/map-marker.png",
        iconImageSize: [231, 190],
        iconImageOffset: [-50, -190]
    });
    t.geoObjects.add(e)
};
ymaps.ready(initMap), initModal(), initSlider();
