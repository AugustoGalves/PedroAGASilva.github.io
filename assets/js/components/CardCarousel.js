

//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class TCardCarousel extends HTMLElement {
    // =======================================
    // Função principal main()
    // =======================================
    //Navegador executa automaticamente a função connectedCallback ao baixar o script
    connectedCallback() {
        const Cards_HTML = this.innerHTML; // Salva os <t-cards> dentro do <t-card-carousel>
        this.renderizador(Cards_HTML); //Inicia o script de carimbar o HTML na página
        this.initDragToScroll() // Código drag to scroll do carousel
    }
    	

    // ====================================
    // Função que faz o HTML Stamping
    // ====================================
    renderizador(Cards_HTML){
        // Declaração das variáveis capturadas no HTML ────────────────────────────────────────────────────── ✣ ──
        const PAGINA_ATUAL = window.location.pathname.split("/").pop().replace(".html", "") || "index";
        const carousel_id = this.getAttribute("carousel-id")
        const links = {
        }
        
        // Template Stamper (So insere o HTML) ────────────────────────────────────────────────────── ✣ ──
        this.innerHTML = `
<div class="container section">
<section class="flex flex-col">
    <h2 class="self-start" data-i18n="pages.${PAGINA_ATUAL}.carousel${carousel_id}.title"></h2>
    <div class="flex w-full">
        <span class="subtext span-nowrap" data-i18n="pages.${PAGINA_ATUAL}.carousel${carousel_id}.subtitle"></span>
        <span class="divider-horizontal100"></span>
    </div>

    <!-- CARROSSEL -->
    <div class="carousel-wrapper">
    <div class="carousel-track">
        
        <!-- CARDS VÃO DENTRO DO SLOT -->
        ${Cards_HTML}

    </div>
    </div>

    <!-- Botão -->
    <div class="text-center">
        <a class="btn btn--primary" href="/portfolio.html" data-i18n="pages.${PAGINA_ATUAL}.carousel${carousel_id}.cta"><svg class="svgicon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="currentColor" d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></a>
    </div>           
</section>
</div>
<!-- ─── CARD CAROUSEL SECTION END ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── ✣ ─ -->
        `
    }

    // ====================================
    // Lógica de Scroll com o Mouse
    // ====================================
    initDragToScroll() {
        // O "this" aqui se refere ao próprio Web Component
        const slider = this.querySelector('.carousel-track');
        if (!slider) return; // Prevenção de erro caso o elemento não exista

        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active'); 
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return; 
            e.preventDefault(); 
            
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; 
            slider.scrollLeft = scrollLeft - walk;
        });
        
        // --- HACK BÔNUS PARA CARROSSEIS ---
        // Previne o "arrastar" nativo das imagens e links pelo navegador,
        // que geralmente buga e interrompe o seu drag personalizado.
        const imgsAndLinks = this.querySelectorAll('img, a');
        imgsAndLinks.forEach(el => {
            el.addEventListener('dragstart', (e) => e.preventDefault());
        });
    }
}

customElements.define('t-card-carousel', TCardCarousel);