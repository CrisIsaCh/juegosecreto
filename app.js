// let titulo = document.querySelector('h1');
// titulo.innerText="Juego del numero secreto";
// console.log(titulo.innerHTML);
// let parrafo=document.querySelector('p');
// parrafo.textContent="Indica un numero de 1 a 10";

let numeroSecreto = 0;

let numeroIntentos = 0;

let listaNumerosSorteados = [];

let numeroMaximo = 10;


function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log((numeroUsuario));

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Eso es! Descubriste el número secreto ${numeroSecreto}  en ${numeroIntentos} ${numeroIntentos == 1 ? "intento" : "intentos"}🥳🎉🎊`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementsByClassName('chute')[0].children[0].setAttribute("disabled",true);
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', `el numero secreto es menor 😑`);


        } else {
            asignarTextoElemento('p', "el numero secreto es mayor 😣")
        }
        numeroIntentos++;
        limpiarCaja();

    }
    console.log(numeroIntentos);

}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //geenrar numero aleatorio
    //inicializar numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego


    // location.reload();
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerText = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p',"Ya se asignaron todos los numeros posibles");
        document.querySelector('input').setAttribute("disabled",true);
        document.getElementsByClassName('chute')[0].children[0].setAttribute("disabled",true);

    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            console.log(listaNumerosSorteados);
            return numeroGenerado;

        }
    }
}



function limpiarCaja() {
    document.getElementById('valorUsuario').value = "";
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(`numero secreto: ${numeroSecreto}`);
    numeroIntentos = 1;
    document.getElementById('reiniciar').setAttribute("disabled", true);
    document.getElementsByClassName('chute')[0].children[0].removeAttribute('disabled');
}

condicionesIniciales();
