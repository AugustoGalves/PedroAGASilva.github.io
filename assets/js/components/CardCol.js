

//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class TCardRow extends HTMLElement {
    // =======================================
    // Função principal main()
    // =======================================
    //Navegador executa automaticamente a função connectedCallback ao baixar o script
    connectedCallback() {
        setTimeout(() => { // Timeout, esse Callback so vai rodar depois do HTML da pagina ser baixado por inteiro. 
            const Cards_HTML = this.innerHTML; // Salva os <t-cards> dentro do <t-card-row>
            this.renderizador(Cards_HTML); //Inicia o script de carimbar o HTML na página
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
        const card_group_id = this.getAttribute("card-group-id");
        const links = {
        };
        
        // Template Stamper (So insere o HTML) ────────────────────────────────────────────────────── ✣ ──
        this.innerHTML = `

<!-- ─── CARDS ROW SECTION ──────────────────────────────────────────────────────────────── ✣ ─ -->
<div class="container my-2 mx-auto">
<section class="flex flex-row gap7 justify-spacebetween flex-col-mobile gap3-mobile items-center-mobile">

    <!-- CARDS VÃO DENTRO DO SLOT -->
    ${Cards_HTML}

</section>
</div>
<!-- ─── CARDS ROW SECTION END ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── ✣ ─ -->
        `
    }
}

customElements.define('t-card-row', TCardRow);