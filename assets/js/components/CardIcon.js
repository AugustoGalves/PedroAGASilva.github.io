

//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class TCardIcon extends HTMLElement {
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
        const card_group_id = this.getAttribute("card-group-id");
        const card_id = this.getAttribute("card-id");
        const icon_svg = this.getAttribute("icon-svg") || "";
        const links = {
        };
        
        // Template Stamper (So insere o HTML) ────────────────────────────────────────────────────── ✣ ──
        this.innerHTML = `

<!-- ─── CARD ICON ELEMENT ──────────────────────────────────────────────────────────────── ✣ ─ -->
<div class="card card--emote">
    ${icon_svg}
    <div class="flex flex-col items-start">
        <span class="card-title" data-i18n="pages.${PAGINA_ATUAL}.cardgroup${card_group_id}.card${card_id}.title"></span>
        <span class="card-content" data-i18n="pages.${PAGINA_ATUAL}.cardgroup${card_group_id}.card${card_id}.desc"></span>
    </div>
</div>
<!-- ─── CARD ICON ELEMENT END ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── ✣ ─ -->
        `
    }
}

customElements.define('t-card-icon', TCardIcon);