window.I18N = {};
window.currentLang = "pt-BR";

window.loadLanguage = async function (lang) {
  const res = await fetch(`/assets/i18n/${lang}.json`);
  window.I18N = await res.json();
  window.currentLang = lang;

  applyTranslations();
  localStorage.setItem("lang", lang);
};

window.t = function (key) {
  return window.I18N[key] ?? key;
};

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
}