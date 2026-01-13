//loader de idioma
let I18N = {};
let currentLang = "pt-BR";

async function loadLanguage(lang) {
  const res = await fetch(`/assets/i18n/${lang}.json`);
  I18N = await res.json();
  currentLang = lang;
  applyTranslations();
  localStorage.setItem("lang", lang);
}

function t(path) {
  return path.split(".").reduce((o, k) => o?.[k], I18N) ?? path;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
}
