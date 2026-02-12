

//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class TCTA extends HTMLElement {
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
            ctabutton1: this.getAttribute("link_ctabutton1"),
        }
        
        // Template Stamper (So insere o HTML) ────────────────────────────────────────────────────── ✣ ──
        this.innerHTML = `

<!-- ──────────────────────────────────────────────────────────────────────────-->
<!-- ████████████████████████████  CTA SECTION  ████████████████████████████-->
<!-- ──────────────────────────────────────────────────────────────────────────-->
<!-- Seção Call to Action -->
<div class="container">
<section class="section flex flex-col justify-center text-center">
    <span class="divider-horizontal100"></span>
    <h2>Entre em contato</h2>
    <span class="subtext">Vamos trabalhar juntos em seu próximo projeto?</span>
    <!-- Botões Call to Action -->
    <div class="margintop-small">
        <a href="${ctabutton1}" class="btn btn--primary">Enviar Mensagem<svg class="svgicon-xsmall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="currentColor" d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></a>
    </div>
</section>
</div>
<!-- ─── CTA SECTION END ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── ✣ ─ -->
        `
    }
}

customElements.define('t-cta', TCTA);