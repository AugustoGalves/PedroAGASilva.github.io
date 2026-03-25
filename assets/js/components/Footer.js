

//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class TFooter extends HTMLElement {
    // =======================================
    // Função principal main()
    // =======================================
    //Navegador executa automaticamente a função connectedCallback ao baixar o script
    connectedCallback() {
        this.renderizador(); //Inicia o script de carimbar o HTML na página
        if (typeof window.applyTranslations === 'function') {
            window.applyTranslations(); // Traduz assim que injetado
        }
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
        const links = {
            whatsappbutton: this.getAttribute("link_whatsappbutton") || "",
            emailbutton: this.getAttribute("link_emailbutton") || "",
            linkedinbutton: this.getAttribute("link_linkedinbutton") || "",
            githubbutton: this.getAttribute("link_githubbutton") || "",
            instagrambutton: this.getAttribute("link_instagrambutton") || ""
        };
        
        // Template Stamper (So insere o HTML) ────────────────────────────────────────────────────── ✣ ──
        this.innerHTML = `
<!-- ──────────────────────────────────────────────────────────────────────────-->
<!-- ████████████████████████████  FOOTER SECTION  ████████████████████████████-->
<!-- ──────────────────────────────────────────────────────────────────────────-->
<footer class="footer-bottom">
    <section class="container flex flex-row justify-spacebetween items-center w-full flex-colreverse-mobile">
        <span class="text-xsmall text-center-mobile" data-i18n="global.footer.copyright"></span>
        
        <!-- Icones -->
        <ul>
            <li><a class="" href="${links.whatsappbutton}" target="_blank" data-i18n-aria="global.aria.whatsapp">
                <svg class="svgicon-small"><use href="/assets/icons/brand-icons.svg#icon-whatsapp"></use></svg></a></li>

            <li><a class="" href="${links.emailbutton}" target="_blank" data-i18n-aria="global.aria.email">
                <svg class="svgicon-small"><use href="/assets/icons/brand-icons.svg#icon-email"></use></svg></a></li>
            
            <li><a class="" href="${links.linkedinbutton}" target="_blank" data-i18n-aria="global.aria.linkedin">
                <svg class="svgicon-small"><use href="/assets/icons/brand-icons.svg#icon-linkedin"></use></svg></a></li>
            
            <li><a class="" href="${links.githubbutton}" target="_blank" data-i18n-aria="global.aria.github">
                <svg class="svgicon-small"><use href="/assets/icons/brand-icons.svg#icon-github"></use></svg></a></li>
            
            <li><a class="" href="${links.instagrambutton}" target="_blank" data-i18n-aria="global.aria.instagram">
                <svg class="svgicon-small"><use href="/assets/icons/brand-icons.svg#icon-instagram"></use></svg></a></li>
        </ul>
    </section>                
</footer>
<!-- ─── FOOTER END ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── ✣ ─ -->
        `
    }
}

customElements.define('t-footer', TFooter);
