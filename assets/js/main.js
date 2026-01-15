// ==============================
// main.js – Inicialização
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Carregar idioma salvo ou padrão
  const saved = localStorage.getItem("lang") || "pt-BR";

  if (typeof window.loadLanguage === "function") {
    window.loadLanguage(saved);
  } else {
    console.warn("Função loadLanguage não encontrada. Verifique se i18n.js foi carregado.");
  }

  // 2. Iniciar Dropdown de idiomas
  setupLanguageDropdown();
});


// ==============================
// Lógica do Dropdown de Idiomas
// ==============================

function setupLanguageDropdown() {
  const selectors = document.querySelectorAll(".lang-selector");

  selectors.forEach(selector => {
    const toggle = selector.querySelector(".lang-toggle");
    const items  = selector.querySelectorAll(".lang-menu li");

    if (!toggle) return;

    // Toggle (Abrir/Fechar) ao clicar no botão
    toggle.addEventListener("click", (e) => {
      e.stopPropagation(); // Impede que o click feche o menu imediatamente
      
      // Fecha outros menus abertos antes de abrir este
      document.querySelectorAll(".lang-selector.open").forEach(opened => {
        if (opened !== selector) opened.classList.remove("open");
      });

      selector.classList.toggle("open");
    });

    // Ação ao clicar em uma opção de idioma
    items.forEach(item => {
      item.addEventListener("click", () => {
        const lang = item.dataset.lang;
        if (!lang) return;

        // Carrega o novo idioma
        if (typeof window.loadLanguage === "function") {
          window.loadLanguage(lang);
        }

        // Fecha o menu após selecionar
        selector.classList.remove("open");
      });
    });
  });

  // Fechar qualquer dropdown ao clicar fora
  document.addEventListener("click", () => {
    document.querySelectorAll(".lang-selector.open")
      .forEach(el => el.classList.remove("open"));
  });
}