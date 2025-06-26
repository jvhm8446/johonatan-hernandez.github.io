
function setLanguage(lang) {
    const current = window.location.href;
    if (lang === 'es' && !current.includes('_es')) {
        window.location.href = current.replace(/(index)?(\.html)?$/, '_es.html');
    } else if (lang === 'en' && current.includes('_es')) {
        window.location.href = current.replace('_es', '');
    }
}
