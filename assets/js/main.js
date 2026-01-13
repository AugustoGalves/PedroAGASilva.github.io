
//INICIALIZAÇÃO AUTOMÁTICA
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "pt-BR";
  loadLanguage(saved);
  setupLanguageDropdown();
});

//Language toggle
function setupLanguageDropdown() {
  const selector = document.querySelector(".lang-selector");
  const toggle = document.querySelector(".lang-toggle");
  const items  = document.querySelectorAll(".lang-menu li");

  if (!selector || !toggle) return;

  // abrir/fechar menu
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    selector.classList.toggle("open");
  });

  // selecionar idioma
  items.forEach(item => {
    item.addEventListener("click", () => {
      const lang = item.dataset.lang;
      loadLanguage(lang);
      toggle.textContent = `🌐 ${lang.toUpperCase()}`;
      selector.classList.remove("open");
    });
  });

  // fechar ao clicar fora
  document.addEventListener("click", () => {
    selector.classList.remove("open");
  });
}
