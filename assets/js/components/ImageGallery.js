//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class TImageGallery extends HTMLElement {
    // =======================================
    // Função principal main()
    // =======================================
    connectedCallback() {
        setTimeout(() => { 
            // 1. Captura as imagens originais que você digitou no HTML
            const originalImages = Array.from(this.querySelectorAll('img'));
            
            if (originalImages.length === 0) {
                console.warn("⚠️ t-image-gallery: Nenhuma tag <img> encontrada dentro do componente.");
                return;
            }

            // 2. Extrai os dados (src e alt) de cada imagem
            const imageData = originalImages.map(img => ({
                src: img.getAttribute('src'),
                alt: img.getAttribute('alt') || 'Imagem do projeto'
            }));

            // 3. Renderiza a estrutura completa na tela
            this.renderizador(imageData);

            // 4. AGORA SIM, com os elementos novos na tela, nós os selecionamos
            this.mainSlider = this.querySelector('.image-gallery__main-container');
            this.thumbSlider = this.querySelector('.image-gallery__thumb-container');
            
            if (!this.mainSlider || !this.thumbSlider) return;

            // 5. Inicia as lógicas de interação
            this.initDragToScroll(this.mainSlider);
            this.initThumbnailClickNav();
            this.initScrollSyncObserver();
        }, 0);
    }
        
    // ====================================
    // Função que faz o HTML Stamping
    // ====================================
    renderizador(images){
        // Constrói o HTML das imagens principais
        const mainImagesHTML = images.map(img => 
            `<img src="${img.src}" alt="${img.alt}" class="image-gallery__main-image" loading="lazy">`
        ).join('');

        // Constrói o HTML das miniaturas (adicionando 'is-active' na primeira)
        const thumbImagesHTML = images.map((img, index) => {
            const activeClass = index === 0 ? 'is-active' : '';
            return `<img src="${img.src}" alt="Miniatura: ${img.alt}" class="image-gallery__thumb-image ${activeClass}" loading="lazy">`;
        }).join('');
        
        // Carimba a estrutura final no HTML
        this.innerHTML = `
<section class="image-gallery image-gallery__main-container mb-2 flex gap3 pb-1">
                ${mainImagesHTML}
            </section>
            
            <nav class="image-gallery image-gallery__thumb-container flex gap2 pb-2">
                ${thumbImagesHTML}
            </nav>
`;
    }

    // ====================================
    // 1. Lógica de Scroll com o Mouse
    // ====================================
    initDragToScroll(slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active'); 
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return; 
            e.preventDefault(); 
            
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; 
            slider.scrollLeft = scrollLeft - walk;
        });
        
        const imgs = slider.querySelectorAll('img');
        imgs.forEach(el => {
            el.addEventListener('dragstart', (e) => e.preventDefault());
        });
    }

    // ====================================
    // 2. Lógica de Clique nas Miniaturas
    // ====================================
    initThumbnailClickNav() {
        const thumbs = this.thumbSlider.querySelectorAll('.image-gallery__thumb-image');
        const mainImages = this.mainSlider.querySelectorAll('.image-gallery__main-image');

        thumbs.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                const targetImage = mainImages[index];
                if (!targetImage) return;

                this.mainSlider.scrollTo({
                    left: targetImage.offsetLeft - this.mainSlider.offsetLeft,
                    behavior: 'smooth'
                });
            });
        });
    }

    // ====================================
    // 3. Lógica de Sincronização de Rolagem
    // ====================================
    initScrollSyncObserver() {
        const thumbs = this.thumbSlider.querySelectorAll('.image-gallery__thumb-image');
        const mainImages = this.mainSlider.querySelectorAll('.image-gallery__main-image');

        const observerOptions = {
            root: this.mainSlider, 
            threshold: 0.6 
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(mainImages).indexOf(entry.target);
                    if (index !== -1) {
                        this.updateActiveThumbnail(thumbs, index);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        mainImages.forEach(img => observer.observe(img));
    }

    updateActiveThumbnail(thumbs, activeIndex) {
        thumbs.forEach((thumb, index) => {
            if (index === activeIndex) {
                thumb.classList.add('is-active');
            } else {
                thumb.classList.remove('is-active');
            }
        });
    }
}

customElements.define('t-image-gallery', TImageGallery);