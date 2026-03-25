

//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class THeader extends HTMLElement {
    // =======================================
    // Função principal main()
    // =======================================
    //Navegador executa automaticamente a função connectedCallback ao baixar o script
    connectedCallback() {
        this.renderizador();
        this.initLanguageDropdown();
        this.initTheme();
        this.initHamburguerMenu();
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
        const alt_text = this.getAttribute("alt-text") || "";
        const links = {
            navbutton1: this.getAttribute("link_navbutton1") || "",
            navbutton2: this.getAttribute("link_navbutton2") || "",
            navbutton3: this.getAttribute("link_navbutton3") || "",
            navbutton4: this.getAttribute("link_navbutton4") || "",
            navbutton5: this.getAttribute("link_navbutton5") || "",
            headerlogo_darktheme: this.getAttribute("link_headerlogo_darktheme") || ""
        };

        
        // Template Stamper (So insere o HTML) ────────────────────────────────────────────────────── ✣ ──
        this.innerHTML = `
<!-- ──────────────────────────────────────────────────────────────────────────-->
<!-- ████████████████████████████  HEADER SECTION  ████████████████████████████-->
<!-- ──────────────────────────────────────────────────────────────────────────-->
<!-- ─── HIDDEN NAV BAR MOBILE ────────────────────────────────────────────────────────── ✣ ─ -->
<nav class="offscreen-menu" data-i18n-aria="global.aria.navMain">
    <button class="menu-close" data-i18n-aria="global.aria.menu.close">
        <svg class="svgicon-small" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6l-12 12"/></svg>
    </button>
        <ul>
            <li>
                <svg class="svgicon-xsmall"><use href="/assets/icons/ui-icons.svg#icon-home"></use></svg>
                <a href="${links.navbutton1}" data-i18n="global.nav.home"></a>
            </li>
            <li>
                <svg class="svgicon-xsmall"><use href="/assets/icons/ui-icons.svg#icon-portfolio"></use></svg>
                <a href="${links.navbutton2}" data-i18n="global.nav.portfolio"></a>
            </li>
            <li>
                <svg class="svgicon-xsmall"><use href="/assets/icons/ui-icons.svg#icon-resume"></use></svg>
                <a href="${links.navbutton3}" data-i18n="global.nav.resume"></a>
            </li>
            <li>
                <svg class="svgicon-xsmall"><use href="/assets/icons/ui-icons.svg#icon-blog"></use></svg>
                <a href="${links.navbutton4}" data-i18n="global.nav.blog"></a>
            </li>
            <li>
                <svg class="svgicon-xsmall"><use href="/assets/icons/ui-icons.svg#icon-contact"></use></svg>
                <a href="${links.navbutton5}" data-i18n="global.nav.contact"></a>
            </li>
        </ul>
</nav>
        
<header>
<div class="container flex">   
    <div class="flex flex-row justify-spacebetween w-full">
        
        <!-- ─── NAV BAR - LEFT SIDE ──────────────────────────────────────────────────────────────── ✣ ─ -->
        <a href="${links.navbutton1}"><img class="logo-header" src="${links.headerlogo_darktheme}" alt="${alt_text}" height="80"></a>
            
        <!-- ─── NAV BAR DESKTOP - RIGHT SIDE ──────────────────────────────────────────────────────────────── ✣ ─ -->
        <nav class="navbar navbar--desktop">
            <!-- LINKS -->
            <ul>
                <li><a class="btn btn--secondary" href="${links.navbutton1}" data-i18n="global.nav.home"></a></li>
                <li><a class="btn btn--secondary" href="${links.navbutton2}" data-i18n="global.nav.portfolio"></a></li>
                <li><a class="btn btn--secondary" href="${links.navbutton3}" data-i18n="global.nav.resume"></a></li>
                <li><a class="btn btn--secondary" href="${links.navbutton4}" data-i18n="global.nav.blog"></a></li>
                <li><a class="btn btn--primary" href="${links.navbutton5}" data-i18n="global.nav.contact"></a></li>
            </ul>    
            <!-- NAV SETTINGS -->
            <div class="nav-preferences">
                <!-- THEME TOGGLE -->
                <button class="btn-settings theme-toggle" data-i18n-aria="global.aria.theme.toggle">
                    <svg class="svgicon-xsmall icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="currentColor" d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C388.8 576 451.3 548.8 497.3 504.6C504.6 497.6 506.7 486.7 502.6 477.5C498.5 468.3 488.9 462.6 478.8 463.4C473.9 463.8 469 464 464 464C362.4 464 280 381.6 280 280C280 207.9 321.5 145.4 382.1 115.2C391.2 110.7 396.4 100.9 395.2 90.8C394 80.7 386.6 72.5 376.7 70.3C358.4 66.2 339.4 64 320 64z"/></svg>
                    <svg class="svgicon-xsmall icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path fill="currentColor" d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm98 382q-70-70-70-170t70-170q70-70 170-70t170 70q70 70 70 170t-70 170q-70 70-170 70t-170-70Z"/></svg>
                </button>
                <!-- PILL DIVIDER -->
                <div class="pill-divider"></div>
                <!-- LANG SELECTOR -->
                <div class="lang-selector">
                    <button class="lang-toggle" data-i18n-aria="global.aria.language.toggle"> 
                        <svg xmlns="http://www.w3.org/2000/svg" class="svgicon-xsmall" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>
                        PT
                    </button>
                    <ul class="lang-menu">
                        <li data-lang="pt-BR">Português</li>
                        <li data-lang="en">English</li>
                        <li data-lang="es">Español</li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <!-- ─── NAV BAR MOBILE - RIGHT SIDE ────────────────────────────────────────────────────────── ✣ ─ -->
        <div class="navbar navbar--mobile">
            <!-- NAV SETTINGS -->
            <div class="nav-preferences">
                <!-- THEME TOGGLE -->
                <button class="btn-settings theme-toggle" data-i18n-aria="global.aria.theme.toggle">
                    <svg class="svgicon-xsmall icon-moon"><use href="/assets/icons/ui-icons.svg#icon-moon"></use></svg>
                    <svg class="svgicon-xsmall icon-sun"><use href="/assets/icons/ui-icons.svg#icon-sun"></use></svg>
                </button>
                <!-- PILL DIVIDER -->
                <div class="pill-divider"></div>
                <!-- LANG SELECTOR -->
                <div class="lang-selector">
                    <button class="lang-toggle" data-i18n-aria="global.aria.language.toggle"> 
                        <svg class="svgicon-xsmall"><use href="/assets/icons/ui-icons.svg#icon-globe"></use></svg>
                        PT
                    </button>
                    <ul class="lang-menu">
                        <li data-lang="pt-BR">Português</li>
                        <li data-lang="en">English</li>
                        <li data-lang="es">Español</li>
                    </ul>
                </div>
            </div>
                        
            <!-- HAMBURGUER MENU BUTTON --> 
                <button class="menu-toggle" data-i18n-aria="global.aria.menu.open" aria-expanded="false">
                    <svg class="svgicon-small"><use href="/assets/icons/ui-icons.svg#icon-menu"></use></svg>
                </button>
        </div>
    </div>     
</div>
    <!-- DIVIDER -->
    <span class="divider-horizontal100"></span>
</header>
    
<!-- ─── HEADER END ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── ✣ ─ -->
        `
    }


    // ====================================
    // Função do menu Dropdown de Idiomas
    // ====================================
    initLanguageDropdown() {
        const selectors = document.querySelectorAll(".lang-selector");
        selectors.forEach(selector => {
            const toggle = selector.querySelector(".lang-toggle");
            const items  = selector.querySelectorAll(".lang-menu li");
            
            if (!toggle) return;
            
            // Toggle (Abrir/Fechar) ao clicar no botão
            toggle.addEventListener("click", (e) => {
                e.stopPropagation(); // Impede que o click feche o menu imediatamente
                
                // Fecha outros menus abertos antes de abrir este
                document.querySelectorAll(".lang-selector.open").forEach(opened => {
                    if (opened !== selector) opened.classList.remove("open");
                });
                selector.classList.toggle("open");
            });
        
            // Ação ao clicar em uma opção de idioma
            items.forEach(item => {
                item.addEventListener("click", () => {
                    const lang = item.dataset.lang;
                    if (!lang) return;
            
                    // Carrega o novo idioma
                    if (typeof window.loadLanguage === "function") {
                      window.loadLanguage(lang);
                    }
            
                    // Fecha o menu após selecionar
                    selector.classList.remove("open");
                });
            });
        });
        
        // Fechar qualquer dropdown ao clicar fora
        document.addEventListener("click", () => {
            document.querySelectorAll(".lang-selector.open")
            .forEach(el => el.classList.remove("open"));
        });
    }


    // ====================================
    // Lógica do Toggle do Modo Escuro
    // ====================================
    initTheme(){
        const themeToggles = this.querySelectorAll(".theme-toggle");
        
        const applyTheme = (theme) => {
            document.documentElement.setAttribute("data-theme", theme);
        }
        
        // preferência salva
        const savedTheme = localStorage.getItem("theme");
        
        if (savedTheme) {
            applyTheme(savedTheme)
        ;} 
        else {
            const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
            applyTheme(systemPrefersLight ? "light" : "dark");
        }
        
        // botão alternar
        themeToggles.forEach(btn => {
            btn.addEventListener("click", () => {
                const current = document.documentElement.getAttribute("data-theme");
                const next = current === "light" ? "dark" : "light";
            
                applyTheme(next);
                localStorage.setItem("theme", next);
            });
        });
    }
    


    // ====================================
    // Lógica do Toggle do hamburguer menu
    // ====================================
    initHamburguerMenu(){
        const menuToggle = this.querySelector(".menu-toggle");
        const offscreenMenu = this.querySelector(".offscreen-menu");
        const closeBtn = this.querySelector(".menu-close");
    
        function openMenu() {
            offscreenMenu.classList.add("active");
            document.body.classList.add("menu-open");
            menuToggle.setAttribute("aria-expanded", "true");
        }
    
        function closeMenu() {
            offscreenMenu.classList.remove("active");
            document.body.classList.remove("menu-open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    
        // Toggle inteligente (abre e fecha com o mesmo botão)
        if (menuToggle) {
            menuToggle.addEventListener("click", (e) => {
                e.stopPropagation();
                offscreenMenu.classList.contains("active") ? closeMenu() : openMenu();
            });
        }
    
        // Botão X (com segurança)
        if (closeBtn) {
            closeBtn.addEventListener("click", closeMenu);
        }
    
        // Fecha ao clicar em links dentro do menu
        const menuLinks = offscreenMenu.querySelectorAll("a");
        menuLinks.forEach(link => {
            link.addEventListener("click", closeMenu);
        });
    
        // Fecha ao clicar fora do menu (overlay)
        document.addEventListener("click", (e) => {
            // Se o menu não estiver aberto, não faz nada
            if (!offscreenMenu.classList.contains("active")) return;
    
            const clickedInsideMenu = offscreenMenu.contains(e.target);
            const clickedToggle = menuToggle.contains(e.target);
    
            // Se o clique NÃO foi dentro do menu E NÃO foi no botão de abrir
            if (!clickedInsideMenu && !clickedToggle) {
                closeMenu();
            }
        });   
    }
}

customElements.define('t-header', THeader);