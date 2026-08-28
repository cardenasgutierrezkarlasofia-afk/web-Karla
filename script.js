script.js

// MENSAJE DE LAS RAZAS

function mostrarMensaje(caballo) {

    alert(
        "Has seleccionado el " +
        caballo +
        ". ¡Sigue explorando el mundo de los caballos!"
    );

}


// DATOS CURIOSOS

const datos = [

    "Los caballos pueden dormir tanto de pie como acostados.",

    "Los caballos tienen un campo de visión muy amplio.",

    "Un caballo adulto tiene aproximadamente 205 huesos.",

    "Los caballos pueden reconocer a personas conocidas.",

    "Los caballos utilizan sus orejas para mostrar parte de su estado de ánimo.",

    "Existen cientos de razas y tipos de caballos en el mundo."

];


// MOSTRAR DATO ALEATORIO

function mostrarDato() {

    let numero = Math.floor(
        Math.random() * datos.length
    );

    let resultado =
        document.getElementById("dato");

    resultado.style.opacity = "0";


    setTimeout(function () {

        resultado.textContent =
            "🐎 " + datos[numero];

        resultado.style.opacity = "1";

    }, 200);

}