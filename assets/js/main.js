

// ==============================
// main.js – Inicialização
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "pt-BR";

  if (typeof loadLanguage === "function") {
    loadLanguage(saved);
  } else {
    console.error("loadLanguage não encontrado. i18n.js foi carregado?");
  }

  setupLanguageDropdown();
});


// ==============================
// Dropdown de idiomas
// ==============================

function setupLanguageDropdown() {
  const selector = document.querySelector(".lang-selector");
  const toggle   = document.querySelector(".lang-toggle");
  const items    = document.querySelectorAll(".lang-menu li");

  if (!selector || !toggle) return;

  // abrir / fechar
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    selector.classList.toggle("open");
  });

  // selecionar idioma
  items.forEach(item => {
    item.addEventListener("click", () => {
      const lang = item.dataset.lang;

      if (!lang) return;

      loadLanguage(lang);

      toggle.textContent = `🌐 ${lang.toUpperCase()}`;
      selector.classList.remove("open");
    });
  });

  // fechar clicando fora
  document.addEventListener("click", () => {
    selector.classList.remove("open");
  });
}
