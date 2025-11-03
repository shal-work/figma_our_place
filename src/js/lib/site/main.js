$('.header__burger').on('click', () => { 
    toggleBurger();
    $('body').toggleOverflow();
});
$('.menu').on('click', () => {
    toggleBurger();
     $('body').offOverflow();
});


function toggleBurger () {
    $('.header').toggleClass("fadeIn--open");
    
    $('.header__burger').toggleBooleanAttribute('aria-expanded');
    const burger = document.querySelector('.header__burger');
    let expanded = burger.getAttribute('aria-expanded') === 'true';  
    if (Boolean(expanded)) {
        $('.header__burger').toggleChangeAttribute('aria-label', 'Закрыть меню');
    } else {
        $('.header__burger').toggleChangeAttribute('aria-label', 'Открыть меню');
    }
}


$.prototype.activeItem = function(dot) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(dot).removeClass("active");
            $(this[i]).addClass("active");
        });
    }
}
$('.design .carousel__item').activeItem('.design .carousel__item');
$('.side .carousel__item').activeItem('.side .carousel__item'); 
$('.drinking .carousel__item').activeItem('.drinking .carousel__item'); 
$('.main .carousel__item').activeItem('.main .carousel__item'); 
$('.always .carousel__item').activeItem('.always .carousel__item'); 
