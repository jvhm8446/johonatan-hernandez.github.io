
function setLanguage(lang) {
    fetch(`lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll("[data-i18n]").forEach(el => {
                const key = el.getAttribute("data-i18n");
                if (data[key]) {
                    el.textContent = data[key];
                }
            });
        });
    localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", function () {
    const lang = localStorage.getItem("lang") || "en";
    setLanguage(lang);
    document.getElementById("btn-es").addEventListener("click", () => setLanguage("es"));
    document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));
});
