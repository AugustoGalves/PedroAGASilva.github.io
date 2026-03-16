

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
        const PAGINA_ATUAL =
            window.location.pathname
            .split("/")
            .filter(Boolean)
            .pop()
            ?.replace(".html", "") || "index";
        const icon_svg1 = this.getAttribute("icon-svg1") || "";
        const icon_svg2 = this.getAttribute("icon-svg2") || "";
        const extraClasses = {
            heroimage: this.getAttribute("extraclasses-heroimage") || ""
        };
        const extraAttributes = {
            herobutton1: this.getAttribute("extraattributes-herobutton1") || "",
            herobutton2: this.getAttribute("extraattributes-herobutton2") || ""
        };
        const links = {
            herobutton1: this.getAttribute("link-herobutton1") || "",
            herobutton2: this.getAttribute("link-herobutton2") || "",
            heroimage: this.getAttribute("link-heroimage") || ""
        };
        
        // Template Stamper (So insere o HTML) ────────────────────────────────────────────────────── ✣ ──
        this.innerHTML = `
<!-- ─── HERO ─────────────────────────────────────────────────────────────────────────────── ✣ ─ -->
<div class="container">
    <section class="flex flex-row justify-spacebetween flex-col-mobile">
        <!-- CODE START OF HERO LEFT DIV-->
        <div class="section flex flex-col hero-left">
            <h1 data-i18n="pages.${PAGINA_ATUAL}.hero.name"></h1>
            <h2 class="mt-2" data-i18n-html="pages.${PAGINA_ATUAL}.hero.role"></h2>
            <div class="hero-full-line my-1">
                <h3 data-i18n="pages.${PAGINA_ATUAL}.hero.specialty" class="subtext"></h3>
            </div>
            <div class="flex flex-row gap3 py-6 justify-center-mobile">
                <a class="btn btn--primary" href="${links.herobutton1}" ${extraAttributes.herobutton1}>
                    ${icon_svg1}
                    <span data-i18n="pages.${PAGINA_ATUAL}.hero.cta1"></span>
                </a>
                <a class="btn btn--secondary" href="${links.herobutton2}" ${extraAttributes.herobutton2}>
                    ${icon_svg2}
                    <span data-i18n="pages.${PAGINA_ATUAL}.hero.cta2"></span>
                </a>
            </div>
        </div>
        <!-- CODE START OF HERO RIGHT DIV -->
        <div class="flex hero-image ${extraClasses.heroimage}">
            <img decoding="async" fetchpriority="high" src="${links.heroimage}" alt="Augusto Galves Selfie Photo">
        </div>
    </section>
</div>
<!-- ─── HERO END ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── ✣ ─ -->
        `
    }
}

customElements.define('t-hero', THero);