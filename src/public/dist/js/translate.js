document.addEventListener("DOMContentLoaded", function() {
    const lang = localStorage.getItem("lang") || 'us';
    const dropdownButton = document.getElementById("language-selector");
    const dropdownItems = document.querySelectorAll(".lang");

    if (lang) {
        updateButton(lang);
        loadTranslations(lang);
    }

    dropdownItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const selectedLang = this.getAttribute("data-lang");
            localStorage.setItem("lang", selectedLang);
            loadTranslations(selectedLang);
            updateButton(selectedLang);
        });
    });

    function updateButton(lang) {
        const langText = {
            "us": "English",
            "es": "Español",
            "fr": "Français"
        };

        dropdownButton.innerHTML = `<span class='flag flag-xs flag-country-${lang}'></span>`;
    }

    function loadTranslations(lang) {
        fetch(`../../translations/${lang}.json`).then(response => response.json()).then(data => {
            document.querySelectorAll("[data-translate]").forEach(element => {
                const key = element.getAttribute("data-translate");
                element.textContent = data[key];
            });
            document.querySelectorAll("[data-translate-placeholder]").forEach(element => {
                const key = element.getAttribute("data-translate-placeholder");
                element.placeholder = data[key];
            });

        }).catch(error => console.error('Error al cargar la traducción:', error));
    }
});