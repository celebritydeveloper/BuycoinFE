const language = document.getElementById('language');
const tab = document.getElementById('tab');
const main = document.getElementById('main');
const body = document.getElementById('body');
const languageModal = document.getElementById('languageModal');
const closeLanguage = document.getElementById('closeLanguage');

language.addEventListener('click', function () {
    languageModal.style.visibility = "visible";
});

closeLanguage.addEventListener('click', function () {
    languageModal.style.visibility = "hidden";
});

languageModal.addEventListener('click', function () {
    languageModal.style.visibility = "hidden";
});


window.addEventListener("scroll", function(e) {
    if(this.scrollY > 350) {
       tab.classList.add("tabs--container-fixed", "tabs--list-fixed");
    }else {
        tab.classList.remove("tabs--container-fixed", "tabs--list-fixed");
    }
});


const mediaQuery = window.matchMedia('(min-width: 700px)');

function checkScroll() {
    if(this.scrollY > 10) {
        tab.classList.add("tabs--container-fixed", "tabs--list-fixed");
        console.log("Hello World");
     }else {
         tab.classList.remove("tabs--container-fixed", "tabs--list-fixed");
         console.log("No");
     }
}

function handleScreenChange(e) {
    if(e.matches) {
        console.log("Yes");
        checkScroll();
    }
}

mediaQuery.addListener(handleScreenChange);
//handleScreenChange(mediaQuery);
