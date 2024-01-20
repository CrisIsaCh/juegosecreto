// Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];


// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguagesDeProgramacion);
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

// function mostrarLista(){
//     lenguagesDeProgramacion.forEach(element => {
//         console.log(element);

//     });

// }
//mostrarLista();
const mostrarLista2 = () => {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
    }

}
mostrarLista2();
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

const mostrarInversa = () => {

    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);

    }
}
mostrarInversa()

//otra forma de ver reversa
lenguagesDeProgramacion.reverse().forEach(element => {
    console.log(element);
});

// Crea una función que calcule el promedio de los elementos en una lista de números.

let listaNumero = [2, 5, 6, 7, 1, 4, 5, 0];
console.log(listaNumero);
let suma = 0;
const promedioLista = () => {
    for (let index = 0; index < listaNumero.length; index++) {
        suma += listaNumero[index];


    }

    console.log(`promedio : ${suma / listaNumero.length}`);
}
promedioLista();
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
const mayorMenor = () => {
    let mayor = -100;
    let menor = +100;
    for (let index = 0; index < listaNumero.length; index++) {
        if (listaNumero[index] > mayor) {
            mayor = listaNumero[index];
        }
        if (listaNumero[index] < menor) {
            menor = listaNumero[index]
        }

    }
    console.log(mayor);
    console.log(menor);
}
mayorMenor();



// Crea una función que devuelva la suma de todos los elementos en una lista.

//yala
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

const posicion = (numero, array) => {
    let indice = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == numero) {
            indice = i
            break
        }

    }
    return indice;

}

let indice=posicion(3, listaNumero)
console.log(indice);
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function listas(lista1, lista2) {
    let suma = [];
    for (let i = 0; i < lista1.length; i++) {
        suma.push(lista1[i] + lista2[i])
    }
    return suma;
}
let sumas = listas([2, 3, 7], [3, 2, 7]);
console.log(sumas);
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

const cuadrado=(numeros)=>{
    let cua=[]
    numeros.forEach(element => {
        cua.push(element*element)
    });
    return cua;

}

console.log(cuadrado([2,3,5]));
