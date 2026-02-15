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
 * Usando "reduce" para navegar no JSON aninhado (ex: "global.nav.home")
 */
window.t = function (key) {
  return key.split('.').reduce((obj, i) => (obj ? obj[i] : null), window.I18N) || key;
};

/**
 * Aplica as traduções em todos os elementos da página
 */
window.applyTranslations = function() {
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
 * Atualiza o texto do botão
 */
function updateLangButton(lang) {
    const shortLang = lang.split('-')[0].toUpperCase();
    
    // O ícone do globo otimizado (SVG)
    const globeIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="svgicon-xsmall" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>`;

    document.querySelectorAll(".lang-toggle").forEach(btn => {
        // 1. Usamos innerHTML para o navegador entender que é código HTML
        // 2. Injetamos o ícone + o texto da língua (PT, EN, etc)
        btn.innerHTML = `${globeIcon} ${shortLang}`;
    });
}