//=========================================
// MENÚ CON SOMBRA AL HACER SCROLL
//=========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 4px 15px rgba(0,0,0,.2)";

    } else {

        header.style.boxShadow = "none";

    }

});

//=========================================
// ANIMACIÓN DE APARICIÓN
//=========================================

const elementos = document.querySelectorAll(
".hero, .beneficios, .nosotros, .estadisticas, .testimonios, .cta"
);

const mostrarElemento = () => {

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        const pantalla = window.innerHeight * 0.80;

        if (posicion < pantalla) {

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";

        }

    });

};

elementos.forEach(elemento => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = "all .8s ease";

});

window.addEventListener("scroll", mostrarElemento);

window.addEventListener("load", mostrarElemento);

//=========================================
// BOTONES DESCARGAR
//=========================================

const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {

    boton.addEventListener("click", function(e){

        e.preventDefault();

        alert(
"¡Gracias por tu interés!\n\nLa aplicación FinPay estará disponible próximamente en Google Play y App Store."
        );

    });

});