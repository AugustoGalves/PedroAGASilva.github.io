

//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class TCardCarouselReduced extends HTMLElement {
    // =======================================
    // Função principal main()
    // =======================================
    //Navegador executa automaticamente a função connectedCallback ao baixar o script
    connectedCallback() {
        setTimeout(() => { // Timeout, esse Callback so vai rodar depois do HTML da pagina ser baixado por inteiro. 
            const Cards_HTML = this.innerHTML; // Salva os <t-cards> dentro do <t-card-carousel>
            this.renderizador(Cards_HTML); //Inicia o script de carimbar o HTML na página
            this.initDragToScroll() // Código drag to scroll do carousel
        }, 0);
    }
    	

    // ====================================
    // Função que faz o HTML Stamping
    // ====================================
    renderizador(Cards_HTML){
        // Declaração das variáveis capturadas no HTML ────────────────────────────────────────────────────── ✣ ──
        const PAGINA_ATUAL =
            window.location.pathname
            .split("/")
            .filter(Boolean)
            .pop()
            ?.replace(".html", "") || "index";
        const carousel_id = this.getAttribute("carousel-id")
        const links = {
        }
        
        // Template Stamper (So insere o HTML) ────────────────────────────────────────────────────── ✣ ──
        this.innerHTML = `
<div class="container section">
<section class="flex flex-col">
    <h3 class="self-start" data-i18n="pages.${PAGINA_ATUAL}.carousel${carousel_id}.title"></h3>
    <span class="subtext span-nowrap" data-i18n="pages.${PAGINA_ATUAL}.carousel${carousel_id}.subtitle"></span>

    <!-- CARROSSEL -->
    <div class="carousel-wrapper">
    <div class="carousel-track">
        
        <!-- CARDS VÃO DENTRO DO SLOT -->
        ${Cards_HTML}

    </div>
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

customElements.define('t-card-carousel-reduced', TCardCarouselReduced);