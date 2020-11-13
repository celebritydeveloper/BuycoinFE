const language = document.getElementById('language');
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