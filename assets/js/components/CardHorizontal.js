

//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class TCardHorizontal extends HTMLElement {
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
        const group_id = this.getAttribute("card-group-id") || "list_posts";
        const card_id = this.getAttribute("card-id");
        const alt_text = this.getAttribute("alt-text") || "";
        const badge = {
            class1: this.getAttribute("badge_class1") || "",
            class2: this.getAttribute("badge_class2") || "",
            text1: this.getAttribute("badge-name1") || "",
            text2: this.getAttribute("badge-name2") || "",
        };
        const links = {
            image: this.getAttribute("link_image") || "",
            click: this.getAttribute("link_click") || "#",
        };

        // Evita renderizar a div de badges caso nenhum badge seja passado
        const badgesHtml = (badge.text1 || badge.text2) ? `
            <div class="card__badges" style="margin-bottom: 0.5rem;">
                ${badge.text1 ? `<span class="badge ${badge.class1}">${badge.text1}</span>` : ""}
                ${badge.text2 ? `<span class="badge ${badge.class2}">${badge.text2}</span>` : ""}
            </div>
        ` : "";
        
        // Template Stamper (So insere o HTML) ────────────────────────────────────────────────────── ✣ ──
        this.innerHTML = `
<div class="card card--horizontal" style="display: flex; flex-direction: row; gap: 1.5rem; align-items: center; margin-bottom: 1.5rem;"> 
    <a href="${links.click}" class="card__media card__media--horizontal" style="flex-shrink: 0; width: 250px; text-decoration: none;">
        <img class="card__image" src="${links.image}" loading="lazy" decoding="async" alt="${alt_text}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
    </a>    
    
    <div class="card__content" style="display: flex; flex-direction: column;">
        ${badgesHtml}
        <a href="${links.click}" style="text-decoration: none; color: inherit;">
            <span class="card-title" data-i18n="pages.${PAGINA_ATUAL}.${group_id}.card${card_id}.title" style="display: block; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.25rem;"></span>
            <span class="card-subtitle" data-i18n="pages.${PAGINA_ATUAL}.${group_id}.card${card_id}.desc" style="display: block; font-size: 0.9rem; opacity: 0.8;"></span>
        </a>
    </div>
</div>
<!-- ─── CARD MEDIA HORIZONTAL END ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── ✣ ─ -->
        `
    }
}

customElements.define('t-card-horizontal', TCardHorizontal);