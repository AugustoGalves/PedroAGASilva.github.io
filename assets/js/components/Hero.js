

//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class THero extends HTMLElement {
    // =======================================
    // Função principal main()
    // =======================================
    //Navegador executa automaticamente a função connectedCallback ao baixar o script
    connectedCallback() {
        this.renderizador(); //Inicia o script de carimbar o HTML na página
    }
    	

    // ====================================
    // Função que faz o HTML Stamping
    // ====================================
    renderizador(){
        // Declaração das variáveis capturadas no HTML ────────────────────────────────────────────────────── ✣ ──
        const links = {
            herobutton1: this.getAttribute("link_herobutton1"),
            herobutton2: this.getAttribute("link_herobutton2"),
        }
        
        // Template Stamper (So insere o HTML) ────────────────────────────────────────────────────── ✣ ──
        this.innerHTML = `
<!-- ─── HERO ─────────────────────────────────────────────────────────────────────────────── ✣ ─ -->
<div class="container">
    <section class="flex flex-row justify-spacebetween flex-col-mobile">
        <!-- CODE START OF HERO LEFT DIV-->
        <div class="flex flex-col hero-left">
            <h1 data-i18n="hero.name"></h1>
            <p data-i18n-html="hero.role"></p>
            <span class="divider-horizontal90"></span>
            <div class="hero-full-line">
                <p data-i18n="hero.specialty" class="subtext"></p>
            </div>
            <div class="flex flex-row gap3 py-2 center-align-mobile">
                <a data-i18n="hero.cta1" href="${links.herobutton1}" class="btn btn--primary"></a>
                <a data-i18n="hero.cta2" href="${links.herobutton2}" class="btn btn--secondary"></a>
            </div>
        </div>
        <!-- CODE START OF HERO RIGHT DIV -->
        <div class="flex hero-image">
            <img decoding="async" src="/assets/img/HeroMainImage.png" alt="Pedro Augusto Selfie Photo">
        </div>
    </section>
</div>
<!-- ─── HERO END ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── ✣ ─ -->
        `
    }
}

customElements.define('t-hero', THero);