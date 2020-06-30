$(document).ready(function(){
    let acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top;

    //cambiar ubicacion
    $('#btnAcercaDe').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 100
        },500)
    });

    $('#btnMenu').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        },500)
    });

    $('#btnGaleria').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        },500)
    });

    $('#btnUbicacion').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria + 550
        },500)
    });

    //efecto menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            opacity: "1",
            'top': '-200px'
        })
        $(this).animate({
            'top': '0px'
        },2000 + (index * 500))
    });
    //efecto header
    if($(window).width() > 800){
        $('header .contenido').css({
            marginTop: 0
        })
        $('header .contenido').animate({
            opacity: 1,
            marginTop: '-80px'
        }, 1500)
    }
})