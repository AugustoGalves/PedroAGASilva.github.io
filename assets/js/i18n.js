// ==============================
// i18n.js – Sistema de Tradução (Versão Flat JSON)
// ==============================

window.I18N = {};
window.currentLang = "pt-BR";

/**
 * Carrega o arquivo JSON do idioma selecionado
 */
window.loadLanguage = async function (lang) {
  try {
    const res = await fetch(`/assets/i18n/${lang}.json`, { cache: "no-store" });
    
    if (!res.ok) throw new Error(`Não foi possível carregar ${lang}.json`);

    window.I18N = await res.json();
    window.currentLang = lang;

    applyTranslations();
    updateLangButton(lang);

    localStorage.setItem("lang", lang);
    
    // Atualiza o atributo lang do HTML (importante para SEO)
    document.documentElement.lang = lang;
    
  } catch (err) {
    console.error("Erro ao carregar idioma:", err);
  }
};

/**
 * Busca a tradução.
 * Como seu JSON usa chaves "planas" ("hero.name"), a busca é direta.
 */
window.t = function (key) {
  return window.I18N[key] || key;
};

/**
 * Aplica as traduções em todos os elementos da página
 */
function applyTranslations() {
  // 1. Tradução de Texto Simples e Meta Tags
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const translation = window.t(key);

    if (el.tagName === "META") {
      // Para tags <meta>, atualizamos o atributo 'content'
      el.setAttribute("content", translation);
    } else if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      // Para inputs, atualizamos o placeholder
      el.setAttribute("placeholder", translation);
    } else {
      // Para o resto, atualizamos o texto visível
      el.textContent = translation;
    }
  });

  // 2. Tradução de HTML (com formatação negrito, links, etc)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    el.innerHTML = window.t(key);
  });

  // 3. Tradução de Imagens (alt) e Acessibilidade (aria-label)
  // Use no HTML: data-i18n-alt="chave" ou data-i18n-aria="chave"
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    el.setAttribute("alt", window.t(el.dataset.i18nAlt));
  });
  
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    el.setAttribute("aria-label", window.t(el.dataset.i18nAria));
  });
}

/**
 * Atualiza o texto do botão (PT-BR vira PT)
 */
function updateLangButton(lang) {
  const shortLang = lang.split('-')[0].toUpperCase(); 
  document.querySelectorAll(".lang-toggle").forEach(btn => {
    btn.textContent = `🌐 ${shortLang}`;
  });
}