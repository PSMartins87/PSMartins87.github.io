/**
 * Inicialização do Carrossel de Projetos
 */
const projectSwiper = new Swiper(".project-swiper", {
    // Quantidade de slides visíveis por padrão (ótimo para mobile)
    slidesPerView: 1,
    // Espaçamento entre os slides
    spaceBetween: 30,
    // Ativa o loop, fazendo o carrossel ser infinito
    loop: true,
    // Habilita a navegação por "bolinhas"
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Pontos de quebra para responsividade
    breakpoints: {
        // Quando a tela for >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // Quando a tela for >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

/**
 * Inicialização do Carrossel de Publicações
 */
const publicationSwiper = new Swiper(".publication-swiper", {
    // Configurações semelhantes, mas podemos ajustar se necessário
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // Quando a tela for >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});
