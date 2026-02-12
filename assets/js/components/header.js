

//Criando Custom HTML Components ─────────────────────────────────────────────────────────────────────────────── ✣ ──

class THeader extends HTMLElement {
    // =======================================
    // Função principal main()
    // =======================================
    //Navegador executa automaticamente a função connectedCallback ao baixar o script
    connectedCallback() {
        this.renderizador(); //Inicia o script de carimbar o HTML na página
        this.initLanguageDropdown(); //Inicia o script do menu dropdown de línguas
        this.initTheme(); //Inicia o script de tema visual
        this.initHamburguerMenu(); //Inicia o script do hamburguer menu
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
<!-- ──────────────────────────────────────────────────────────────────────────-->
<!-- ████████████████████████████  HEADER SECTION  ████████████████████████████-->
<!-- ──────────────────────────────────────────────────────────────────────────-->
<!-- ─── HIDDEN NAV BAR MOBILE ────────────────────────────────────────────────────────── ✣ ─ -->
<nav class="offscreen-menu" aria-label="Navegação principal">
    <button class="menu-close" aria-label="Fechar menu">
        <svg class="svgicon-small" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6l-12 12"/></svg>
    </button> 
        <ul>             
            <li>
                <svg class="svgicon-xsmall" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                <a data-i18n="nav.home" href="${links.navbutton1}"></a>
            </li>
            <li>
                <svg class="svgicon-xsmall" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm400 360H600v80H360v-80H160v160h640v-160Zm-360 0h80v-80h-80v80Zm-280-80h200v-80h240v80h200v-200H160v200Zm320 40Z"/></svg>
                <a data-i18n="nav.portfolio" href="${links.navbutton2}"></a>
            </li>
            <li>
                <svg class="svgicon-xsmall" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q14-36 44-58t68-22q38 0 68 22t44 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm301.5-678.5Q510-807 510-820t-8.5-21.5Q493-850 480-850t-21.5 8.5Q450-833 450-820t8.5 21.5Q467-790 480-790t21.5-8.5ZM200-246q54-53 125.5-83.5T480-360q83 0 154.5 30.5T760-246v-514H200v514Zm379-235q41-41 41-99t-41-99q-41-41-99-41t-99 41q-41 41-41 99t41 99q41 41 99 41t99-41ZM280-200h400v-10q-42-35-93-52.5T480-280q-56 0-107 17.5T280-210v10Zm157.5-337.5Q420-555 420-580t17.5-42.5Q455-640 480-640t42.5 17.5Q540-605 540-580t-17.5 42.5Q505-520 480-520t-42.5-17.5ZM480-503Z"/></svg>
                <a data-i18n="nav.resume" href="${links.navbutton3}"></a>
            </li>
            <li>
                <svg class="svgicon-xsmall" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm80-80h400v-80H280v80Zm0-320h200v-80H280v80Zm0 160h400v-80H280v80Zm-80-320v160-160 560-560Z"/></svg>
                <a data-i18n="nav.blog" href="${links.navbutton4}"></a>
            </li>
            <li>
                <svg class="svgicon-xsmall" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
                <a data-i18n="nav.contact" href="${links.navbutton5}"></a>
            </li>
        </ul>
</nav>
        
<header>
<div class="container flex">   
    <div class="flex flex-row justify-spacebetween w-full">
        
        <!-- ─── NAV BAR - LEFT SIDE ──────────────────────────────────────────────────────────────── ✣ ─ -->
        <a href="${links.navbutton1}"><img class="logo-header" src="${links.headerlogo_darktheme}" alt="Pedro AGA Silva, engenheiro mecânico"></a>
            
        <!-- ─── NAV BAR DESKTOP - RIGHT SIDE ──────────────────────────────────────────────────────────────── ✣ ─ -->
        <nav class="navbar navbar--desktop">
            <!-- LINKS -->
            <ul>
                <li><a data-i18n="nav.home" href="${links.navbutton1}" class="btn btn--secondary"></a></li>
                <li><a data-i18n="nav.portfolio" href="${links.navbutton2}" class="btn btn--secondary"></a></li>
                <li><a data-i18n="nav.resume" href="${links.navbutton3}" class="btn btn--secondary"></a></li>
                <li><a data-i18n="nav.blog" href="${links.navbutton4}" class="btn btn--secondary"></a></li>
                <li><a data-i18n="nav.contact" href="${links.navbutton5}" class="btn btn--primary"></a></li>
            </ul>    
            <!-- NAV SETTINGS -->
            <div class="nav-preferences">
                <!-- THEME TOGGLE -->
                <button class="btn-settings theme-toggle" aria-label="Alternar tema">
                    <svg class="svgicon-xsmall" xmlns="http://www.w3.org/2000/svg"    viewBox="0 0 640 640"><path fill="currentColor" d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320     576C388.8 576 451.3 548.8 497.3 504.6C504.6 497.6 506.7 486.7 502.6 477.5C498.5 468.3 488.9 462.6 478.8     463.4C473.9 463.8 469 464 464 464C362.4 464 280 381.6 280 280C280 207.9 321.5 145.4 382.1 115.2C391.2 110.7 396.4   100.9 395.2 90.8C394 80.7 386.6 72.5 376.7 70.3C358.4 66.2 339.4 64 320 64z"/></svg>
                </button>
                <!-- PILL DIVIDER -->
                <div class="pill-divider"></div>
                <!-- LANG SELECTOR -->
                <div class="lang-selector">
                    <button class="lang-toggle"> 
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
                <button class="btn-settings theme-toggle" aria-label="Alternar tema">
                    <svg class="svgicon-xsmall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path   fill="currentColor" d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C388.8     576 451.3 548.8 497.3 504.6C504.6 497.6 506.7 486.7 502.6 477.5C498.5 468.3 488.9 462.6     478.8 463.4C473.9 463.8 469 464 464 464C362.4 464 280 381.6 280 280C280 207.9 321.5 145.4   382.1 115.2C391.2 110.7 396.4 100.9 395.2 90.8C394 80.7 386.6 72.5 376.7 70.3C358.4 66.2  339.4 64 320 64z"/></svg>
                </button>
                <!-- PILL DIVIDER -->
                <div class="pill-divider"></div>
                <!-- LANG SELECTOR -->
                <div class="lang-selector">
                    <button class="lang-toggle"> 
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
                        
            <!-- HAMBURGUER MENU BUTTON --> 
                <button data-i18n-aria="aria.menu.open" class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">
                    <svg class="svgicon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="currentColor" d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>
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
        const themeToggles = document.querySelectorAll(".theme-toggle");
        
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
        const menuToggle = document.querySelector(".menu-toggle");
        const offscreenMenu = document.querySelector(".offscreen-menu");
        const closeBtn = document.querySelector(".menu-close");
    
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