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
  setupCarouselFade();
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



// ==============================
// Lógica do Carrossel (Scroll & Borders Fade)
// ==============================

function setupCarouselFade() {
    const wrapper = document.querySelector('.carousel-wrapper');
    const track = document.querySelector('.carousel-track');

    // Se não houver carrossel na página, para a função para evitar erros
    if (!wrapper || !track) return;

    // --- 1. Lógica do Fade (Visual) ---
    const updateFade = () => {
        const tolerance = 2; 
        const scrollLeft = track.scrollLeft;
        const maxScroll = track.scrollWidth - track.clientWidth;

        if (track.scrollWidth <= track.clientWidth) {
            wrapper.setAttribute('data-scroll', 'none');
            return;
        }

        if (scrollLeft <= tolerance) {
            // Início: Remove atributo para usar o padrão CSS (Fade Direita)
            wrapper.removeAttribute('data-scroll'); 
        } else if (Math.abs(maxScroll - scrollLeft) <= tolerance) {
            // Fim: Fade Esquerda
            wrapper.setAttribute('data-scroll', 'end');
        } else {
            // Meio: Fade Ambos
            wrapper.setAttribute('data-scroll', 'middle');
        }
    };

    track.addEventListener('scroll', updateFade);
    window.addEventListener('resize', updateFade);
    updateFade(); // Chama uma vez para ajustar o estado inicial

    
    // --- 2. Lógica de Arrasto com Mouse (Drag to Scroll) ---
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', (e) => {
        isDown = true;
        track.classList.add('active');
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });

    track.addEventListener('mouseleave', () => {
        isDown = false;
        track.classList.remove('active');
    });

    track.addEventListener('mouseup', () => {
        isDown = false;
        track.classList.remove('active');
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2; 
        track.scrollLeft = scrollLeft - walk;
    });
}