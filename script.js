{
    console.log("Witaj!");

    const changeThemeButton = document.querySelector(".js-switchTheme");
    const switchNav = document.querySelector(".js-swithcNavWorking");
    const changeImage = document.querySelector(".js-changeImgPosition");
    const deletePhoto = document.querySelector(".js-deleteImage");
    const photo = document.querySelector(".section__image");
    const ImageText = document.querySelector(".js-displayTextChanged");

    const switchTheme = () => {
        const body = document.querySelector(".body");
        const header = document.querySelector(".header");
        const nav1 = document.querySelector(".js-LinkToSectionOne");
        const nav2 = document.querySelector(".js-LinkToSectionTwo");
        const nav3 = document.querySelector(".js-LinkToSectionThree");
        const nav4 = document.querySelector(".js-LinkToSectionFour");
        const wrapper = document.querySelector(".wrapper");
        const heading1 = document.querySelector(".js-sectionHeading1");
        const heading2 = document.querySelector(".js-sectionHeading2");
        const heading3 = document.querySelector(".js-sectionHeading3");
        const heading4 = document.querySelector(".js-sectionHeading4");
        const heading5 = document.querySelector(".js-sectionHeading5");
        const footer = document.querySelector(".footer");
        const link = document.querySelector(".div__linkToSectionFour");
        const tableHeader1 = document.querySelector(".js-tableHeader1");
        const tableHeader2 = document.querySelector(".js-tableHeader2");
        const tableHeader3 = document.querySelector(".js-tableHeader3");
        const tableHeader4 = document.querySelector(".js-tableHeader4");
        const tableHeader5 = document.querySelector(".js-tableHeader5");
        const tableHeader6 = document.querySelector(".js-tableHeader6");
        const tableHeader7 = document.querySelector(".js-tableHeader7");
        const tableHeader8 = document.querySelector(".js-tableHeader8");

        if (changeThemeButton.innerText === "Włącz ciemny motyw") {
            body.classList.toggle("body--darkMode");
            header.classList.toggle("header--darkMode");
            nav1.classList.toggle("navigation--darkMode");
            nav2.classList.toggle("navigation--darkMode");
            nav3.classList.toggle("navigation--darkMode");
            nav4.classList.toggle("navigation--darkMode");
            wrapper.classList.toggle("wrapper--darkMode");
            heading1.classList.toggle("section__heading--darkMode");
            heading2.classList.toggle("section__heading--darkMode");
            heading3.classList.toggle("section__heading--darkMode");
            heading4.classList.toggle("section__heading--darkMode");
            heading5.classList.toggle("section__heading--darkMode");
            footer.classList.toggle("footer--darkMode");
            link.classList.toggle("div__linkToSectionFour--darkMode");
            tableHeader1.classList.toggle("table__cell--headerDarkMode");
            tableHeader2.classList.toggle("table__cell--headerDarkMode");
            tableHeader3.classList.toggle("table__cell--headerDarkMode");
            tableHeader4.classList.toggle("table__cell--headerDarkMode");
            tableHeader5.classList.toggle("table__cell--headerDarkMode");
            tableHeader6.classList.toggle("table__cell--headerDarkMode");
            tableHeader7.classList.toggle("table__cell--headerDarkMode");
            tableHeader8.classList.toggle("table__cell--headerDarkMode");
            changeThemeButton.innerText = "Wyłącz ciemny motyw";
        } else {
            body.classList.toggle("body--darkMode");
            header.classList.toggle("header--darkMode");
            nav1.classList.toggle("navigation--darkMode");
            nav2.classList.toggle("navigation--darkMode");
            nav3.classList.toggle("navigation--darkMode");
            nav4.classList.toggle("navigation--darkMode");
            wrapper.classList.toggle("wrapper--darkMode");
            heading1.classList.toggle("section__heading--darkMode");
            heading2.classList.toggle("section__heading--darkMode");
            heading3.classList.toggle("section__heading--darkMode");
            heading4.classList.toggle("section__heading--darkMode");
            heading5.classList.toggle("section__heading--darkMode");
            footer.classList.toggle("footer--darkMode");
            link.classList.toggle("div__linkToSectionFour--darkMode");
            tableHeader1.classList.toggle("table__cell--headerDarkMode");
            tableHeader2.classList.toggle("table__cell--headerDarkMode");
            tableHeader3.classList.toggle("table__cell--headerDarkMode");
            tableHeader4.classList.toggle("table__cell--headerDarkMode");
            tableHeader5.classList.toggle("table__cell--headerDarkMode");
            tableHeader6.classList.toggle("table__cell--headerDarkMode");
            tableHeader7.classList.toggle("table__cell--headerDarkMode");
            tableHeader8.classList.toggle("table__cell--headerDarkMode");
            changeThemeButton.innerText = "Włącz ciemny motyw";
        }
    };

    const switchNavDisplaying = () => {
        const nav = document.querySelector(".navigation");
        const nav1 = document.querySelector(".js-LinkToSectionOne");
        const nav2 = document.querySelector(".js-LinkToSectionTwo");
        const nav3 = document.querySelector(".js-LinkToSectionThree");
        const nav4 = document.querySelector(".js-LinkToSectionFour");
        const attribute1_switched = "#hrefToSectionOne";
        const attribute2_switched = "#ifNavSwithced_hrefToSectionTwo";
        const attribute3_switched = "#ifNavSwithced_hrefToSectionThree";
        const attribute4_switched = "#ifNavSwithced_hrefToSectionFour";
        const attribute1 = "#hrefToSectionOne";
        const attribute2 = "#hrefToSectionTwo";
        const attribute3 = "#hrefToSectionThree";
        const attribute4 = "#hrefToSectionFour";

        if (switchNav.innerText === "Wyłącz menu dynamiczne") {
            nav.classList.toggle("navigation--displayingChanged");
            nav1.setAttribute("href", attribute1_switched);
            nav2.setAttribute("href", attribute2_switched);
            nav3.setAttribute("href", attribute3_switched);
            nav4.setAttribute("href", attribute4_switched);
            switchNav.innerText = "Włącz menu dynamiczne";
        } else {
            nav.classList.toggle("navigation--displayingChanged");
            nav1.setAttribute("href", attribute1);
            nav2.setAttribute("href", attribute2);
            nav3.setAttribute("href", attribute3);
            nav4.setAttribute("href", attribute4);
            switchNav.innerText = "Wyłącz menu dynamiczne";
        }
    };

    const switchImageDisplaying = () => {
        photo.classList.toggle("section__image--positionSwitched");
        ImageText.classList.toggle("section__paragraph--positionSwitched");
    };

    const deleteImage = () => {
        ImageText.classList.toggle("section__paragraph--positionSwitched");
        deletePhoto.remove();
        changeImage.remove();
        photo.remove();
    };

    const init = () => {
        changeThemeButton.addEventListener("click", switchTheme);
        switchNav.addEventListener("click", switchNavDisplaying);
        changeImage.addEventListener("click", switchImageDisplaying);
        deletePhoto.addEventListener("click", deleteImage);
    };

    init();
}
