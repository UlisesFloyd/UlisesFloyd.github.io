

/*estas funciones son para que la barra de inicio se mantenga fija al hacer scroll*/
/* $: selector para jquery. Aqui se ejecutara tdo el documento*/

$(document).ready(function(){  /*estudiar las funciones en js y jquery*/
    //Cambio de estilo barra nav
    $(window).on("scroll", function(){
        var positionParrafo = $("#primerparrafo").offset();
        var positionDocument = $(window).scrollTop();
        //console.log(position.top);
        if (positionDocument > positionParrafo.top - 100) {
            $('nav').removeClass('white'); /*cuando la barra esta por debajo del primer parrafo se quita el blanco*/
            $('.burger').removeClass('white'); /*cuando el burger esté por debajo del primer parrafo se quita el blanco*/
        } else {
            $('nav').addClass('white'); /*cuando esta por encima,vuelve el blanco*/
            $('.burger').addClass('white'); /*cuando esté por encima, vuelve a blanco otra vez*/

        }
    });
    // Menu lateral
    $('.burger').click(function(){  /*click(function): para hacer clicks con el ratón en un elemento*/
        $('.burger').toggleClass('open');   /* togglelass: si el elemento tiene la clase open la pone y si no la tiene la quita. un conmutador*/
        $('aside').toggleClass('open');
    });
});

$(window).resize(function(){
    location.reload();
});


