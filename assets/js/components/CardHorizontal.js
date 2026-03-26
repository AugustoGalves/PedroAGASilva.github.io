

//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class TCardHorizontal extends HTMLElement {
    connectedCallback() {
        this.renderizador(); 
    }
        
    renderizador() {
        // Declaração das variáveis capturadas no HTML
        const PAGINA_ATUAL =
            window.location.pathname
            .split("/")
            .filter(Boolean)
            .pop()
            ?.replace(".html", "") || "index";
            
        const group_id = this.getAttribute("card-group-id") || "list_posts";
        const card_id = this.getAttribute("card-id");
        const alt_text = this.getAttribute("alt-text") || "";
        
        const badge = {
            class1: this.getAttribute("badge-class1") || "",
            class2: this.getAttribute("badge-class2") || "",
            text1: this.getAttribute("badge-name1") || "",
            text2: this.getAttribute("badge-name2") || "",
        };
        
        const links = {
            image: this.getAttribute("link-image") || "",
            click: this.getAttribute("link-click") || "#",
        };

        const badgesHtml = (badge.text1 || badge.text2) ? `
            <div class="card__badges card__badges--compact">
                ${badge.text1 ? `<span class="badge ${badge.class1}">${badge.text1}</span>` : ""}
                ${badge.text2 ? `<span class="badge ${badge.class2}">${badge.text2}</span>` : ""}
            </div>
        ` : "";
        
        // Transformamos o Card Inteiro no Link <a>
        this.innerHTML = `
<a href="${links.click}" class="card card--horizontal no-underline"> 
    
    <div class="card__media shrink-0 relative">
        ${badgesHtml}
        <img class="card__image object-cover" src="${links.image}" loading="lazy" decoding="async" alt="${alt_text}">
    </div>    
    
    <div class="card__content">
        <strong class="card-title line-clamp-2" data-i18n="pages.${PAGINA_ATUAL}.${group_id}.card${card_id}.title"></strong>
        <span class="card-subtitle line-clamp-2" data-i18n="pages.${PAGINA_ATUAL}.${group_id}.card${card_id}.desc"></span>
    </div>

</a>
`;
    }
}

customElements.define('t-card-horizontal', TCardHorizontal);