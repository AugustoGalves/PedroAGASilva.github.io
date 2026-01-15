
// ==============================
// i18n.js – Sistema de idiomas
// ==============================

window.I18N = {};
window.currentLang = "pt-BR";

async function loadLanguage(lang) {
  try {
    const res = await fetch(`/assets/i18n/${lang}.json`);

    if (!res.ok) {
      throw new Error("Arquivo de idioma não encontrado: " + lang);
    }

    window.I18N = await res.json();
    window.currentLang = lang;

    applyTranslations();
    updateHtmlLang(lang);

    localStorage.setItem("lang", lang);

  } catch (err) {
    console.error("Erro ao carregar idioma:", err);
  }
}

function t(path) {
  return path
    .split(".")
    .reduce((obj, key) => obj?.[key], window.I18N) ?? path;
}

function applyTranslations() {
  // texto simples
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  // html permitido
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  // meta tags SEO
  const title = t("meta.title");
  const desc  = t("meta.description");

  if (title && title !== "meta.title") document.title = title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && desc && desc !== "meta.description") {
    metaDesc.setAttribute("content", desc);
  }
}

function updateHtmlLang(lang) {
  document.documentElement.lang = lang;
}
