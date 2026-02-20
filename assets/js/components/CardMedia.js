

//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class TCardMedia extends HTMLElement {
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
        const PAGINA_ATUAL = window.location.pathname.split("/").pop().replace(".html", "") || "index";
        const carousel_id = this.getAttribute("carousel-id")
        const card_id = this.getAttribute("card-id")
        const badge = {
            class1: this.getAttribute("badge_class1"),
            class2: this.getAttribute("badge_class2"),
            text1: this.getAttribute("badge-name1"),
            text2: this.getAttribute("badge-name2"),
        }
        const links = {
            image: this.getAttribute("link_image") || "",
            click: this.getAttribute("link_click") || "#",
        }
        
        // Template Stamper (So insere o HTML) ────────────────────────────────────────────────────── ✣ ──
        this.innerHTML = `
<div class="card card--carousel"> 
    <!-- CARD TOP -->
    <div class="card__media">
        <img class="card__image" src="${links.image}" loading="lazy" decoding="async" alt="Projeto de HVAC AutoCAD e Revit">
        <!-- BADGES -->
        <div class="card__badges">
            <span class="badge ${badge.class1}">${badge.text1}</span>
            <span class="badge ${badge.class2}">${badge.text2}</span>
        </div>
    </div>    
    <!-- CARD BOTTOM -->
    <a href="${links.click}">
        <span class="card-title" data-i18n="pages.${PAGINA_ATUAL}.carousel${carousel_id}.card${card_id}.title"></span>
        <span class="card-subtitle" data-i18n="pages.${PAGINA_ATUAL}.carousel${carousel_id}.card${card_id}.desc"></span>
    </a>
</div> 
<!-- ─── CARD MEDIA END ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── ✣ ─ -->
        `
    }
}

customElements.define('t-card-media', TCardMedia);