

//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class TSidebarCard extends HTMLElement {
    connectedCallback() {
        this.renderizador();
    }

    renderizador() {
        const title = this.getAttribute("title") || "Informações";
        const layout = this.getAttribute("layout") || "row"; // "row" ou "col"
        
        // Formato esperado: "Categoria: HVAC | Localização: Rio de Janeiro | Cliente: BMW"
        const itemsRaw = this.getAttribute("items") || "";
        
        // Processa a string de itens
        const items = itemsRaw.split("|")
            .map(item => item.trim())
            .filter(Boolean)
            .map(item => {
                const partes = item.split(":");
                const chave = partes[0].trim();
                const valor = partes.slice(1).join(":").trim(); // Junta caso tenha ":" no valor
                return { chave, valor };
            });

        // Monta o HTML dos itens com base no layout escolhido
        let itemsHtml = "";
        
        items.forEach((item, index) => {
            if (layout === "col") {
                // Layout vertical
                itemsHtml += `
                    <div>
                        <p class="text-small subtext">${item.chave}</p>
                        <p class="card-title mt-1">${item.valor}</p>
                    </div>
                `;
            } else {
                // Layout horizontal
                itemsHtml += `
                    <div class="flex justify-spacebetween items-center">
                        <p class="card-subtitle">${item.chave}</p>
                        <p class="card-content">${item.valor}</p>
                    </div>
                `;
            }

            // Adiciona o divisor, exceto no último item
            if (index < items.length - 1) {
                itemsHtml += `<div class="divider-horizontal90"></div>`;
            }
        });

        // Template final do Card
        this.innerHTML = `
            <div class="card p-5">
                <h3 class="mb-4">${title}</h3>
                <div class="divider-horizontal100 mb-4"></div>
                <div class="flex flex-col ${layout === 'col' ? 'gap4' : 'gap3'}">
                    ${itemsHtml}
                </div>
            </div>
        `;
    }
}

customElements.define('t-sidebar-card', TSidebarCard);