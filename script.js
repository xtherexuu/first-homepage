{

console.log("Witaj!");

let changeThemeButton = document.querySelector(".js-switchTheme");
let switchNav = document.querySelector(".js-swithcNavWorking");
let changeImage = document.querySelector(".js-changeImgPosition");
let deletePhoto = document.querySelector(".js-deleteImage");

let body = document.querySelector(".body");
let header = document.querySelector(".header");
let nav = document.querySelector(".navigation");

let nav1 = document.querySelector(".js-LinkToSectionOne");
let nav2 = document.querySelector(".js-LinkToSectionTwo");
let nav3 = document.querySelector(".js-LinkToSectionThree");
let nav4 = document.querySelector(".js-LinkToSectionFour");

let wrapper = document.querySelector(".wrapper");

let heading1 = document.querySelector(".js-sectionHeading1");
let heading2 = document.querySelector(".js-sectionHeading2");
let heading3 = document.querySelector(".js-sectionHeading3");
let heading4 = document.querySelector(".js-sectionHeading4");
let heading5 = document.querySelector(".js-sectionHeading5");

let footer = document.querySelector(".footer");

let link = document.querySelector(".linkToSectionFour");

let photo = document.querySelector(".firstSectionPhoto");

let ImageText = document.querySelector(".firstSectionParagraph");

let attribute1 = "#hrefToSectionOne";
let attribute2 = "#hrefToSectionTwo";
let attribute3 = "#hrefToSectionThree";
let attribute4 = "#hrefToSectionFour";

let attribute1_switched = "#hrefToSectionOne";
let attribute2_switched = "#ifNavSwithced_hrefToSectionTwo";
let attribute3_switched = "#ifNavSwithced_hrefToSectionThree";
let attribute4_switched = "#ifNavSwithced_hrefToSectionFour";


function switchTheme() {
    if (changeThemeButton.innerText === "Włącz ciemny motyw") {
        body.classList.toggle("darkBody");
        header.classList.toggle("darkHeader");
        nav1.classList.toggle("darkNav");
        nav2.classList.toggle("darkNav");
        nav3.classList.toggle("darkNav");
        nav4.classList.toggle("darkNav");
        wrapper.classList.toggle("darkWrapper");
        heading1.classList.toggle("darkHeading");
        heading2.classList.toggle("darkHeading");
        heading3.classList.toggle("darkHeading");
        heading4.classList.toggle("darkHeading");
        heading5.classList.toggle("darkHeading");
        footer.classList.toggle("darkFooter");
        link.classList.toggle("darkLink");
        changeThemeButton.innerText = "Wyłącz ciemny motyw";
    }
    else {
        body.classList.toggle("darkBody");
        header.classList.toggle("darkHeader");
        nav1.classList.toggle("darkNav");
        nav2.classList.toggle("darkNav");
        nav3.classList.toggle("darkNav");
        nav4.classList.toggle("darkNav");
        wrapper.classList.toggle("darkWrapper");
        heading1.classList.toggle("darkHeading");
        heading2.classList.toggle("darkHeading");
        heading3.classList.toggle("darkHeading");
        heading4.classList.toggle("darkHeading");
        heading5.classList.toggle("darkHeading");
        footer.classList.toggle("darkFooter");
        link.classList.toggle("darkLink");
        changeThemeButton.innerText = "Włącz ciemny motyw";
    }
}

function deleteImage() {
    photo.remove();
    deletePhoto.remove();
    
}

function switchPhotoPosition() {
    photo.classList.toggle("switchPhotoPositionOn");
    ImageText.classList.toggle("switchPhotoPositionOn_p");
}

function switchNavWork() {
    if (switchNav.innerText === "Wyłącz menu dynamiczne") {
        nav.classList.toggle(".navigation--displayingChanged");
        nav1.setAttribute("href", attribute1_switched);
        nav2.setAttribute("href", attribute2_switched);
        nav3.setAttribute("href", attribute3_switched);
        nav4.setAttribute("href", attribute4_switched);
        switchNav.innerText = "Włącz menu dynamiczne";
    }
    else {
        nav.classList.toggle("navPositionChanged");
        nav1.setAttribute("href", attribute1);
        nav2.setAttribute("href", attribute2);
        nav3.setAttribute("href", attribute3);
        nav4.setAttribute("href", attribute4);
        switchNav.innerText = "Wyłącz menu dynamiczne";
    }
}

changeThemeButton.addEventListener("click", () => {
    switchTheme();
})

deletePhoto.addEventListener("click", () => {
    deleteImage();
})

changeImage.addEventListener("click", () => {
    switchPhotoPosition();
})

switchNav.addEventListener("click", () => {
    switchNavWork();
})

}