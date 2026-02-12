

//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class TFooter extends HTMLElement {
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
            navbutton1: this.getAttribute("link_navbutton1"),
            navbutton2: this.getAttribute("link_navbutton2"),
            navbutton3: this.getAttribute("link_navbutton3"),
            navbutton4: this.getAttribute("link_navbutton4"),
            navbutton5: this.getAttribute("link_navbutton5"),
            headerlogo_darktheme: this.getAttribute("link_headerlogo_darktheme")
        }
        
        // Template Stamper (So insere o HTML) ────────────────────────────────────────────────────── ✣ ──
        this.innerHTML = `

<!-- ─── FOOTER END ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── ✣ ─ -->
        `
    }
}

customElements.define('t-footer', TFooter);