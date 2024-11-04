/* Esta funcion no es parte del Ejercicio.
- Los Reset se podrian hacer en cada funcion del Elemento a borrar. 
*/
function reset(elemento) {
    elemento.value = ''
    elemento.textContent = ''
}

/* Ejercicio 1 Cadena de texto 
- Funcion añadir y funciones de borrar 
- Boton añadir y boton borrar
 */

const palabras = document.getElementById(`palabras`)
const mostrarArray = document.getElementById('mostrarArray')
const resultado = document.getElementById('resultado')

let vector = new Array()
let indice = 0

// Funcion para insertar la palabra en el Array.
function insertar() {
    if (palabras.value !== ''){
        vector[indice] = palabras.value + ' '
        indice++
        mostrar()
        reset(palabras)
        console.log(vector)
    } else {
        alert('Debes insertar una palabra')
    }
}

// Funcion para mostrar las palabras almacenadas en el Array en un alert.
function mostrar(){
    let cadena = ``

    for(x in vector) {
        cadena = cadena + vector[x]
    }

    alert(cadena) 
}

// Funcion para vaciar el Array.
function vaciar() {
    if(vector.length == 0){
        alert('No hay datos almacenados para borrar')
    } else {
       vector = []
       indice = 0
       console.log(vector) 
    }
}

/* Ejercicio 2 - Suma de valores
- Input
- Array 
- Tres botones
- Dos funciones
*/ 

const valor = document.getElementById('valor')

let vector2 = []

// Funcion para agregar Numero en el Array.
function agregarValor(){
    if (valor.value !== '' && !isNaN(valor.value)) {
        let numero = parseInt(valor.value)
        vector2.push(numero)
        mostrarValores()
        console.log(vector2)
    } else {
        alert('Debes de insertar un número')
    }
    
    reset(valor)
}

function sumar() {
    let suma = vector2.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
    console.log(suma)
    console.log(vector2)
    mostrarResultado(suma)
}

// Funcion para vaciar el Array, Resultado, Mostrar Valor.
function borrar() {
    vector2 = []
    reset(resultado)
    reset(mostrarArray)
}

// Funcion para mostrar Valores de Array
function mostrarValores() {
    mostrarArray.textContent = vector2.join(',')
}

// Funcion para mostrar el resultado total de casa suma.
function mostrarResultado(total) {
    resultado.textContent = total
}
