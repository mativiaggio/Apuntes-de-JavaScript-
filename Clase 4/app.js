// IMPORTANTE --------------------------------

// Descomntar solo los bloques que estan escritos entre /* */
// para poder ejecutar el codigo a eleccion.


// Ejemplo 1

/* function solicitarNombre () {
    let nombre = prompt('Ingrese su nombre: ');
    alert(`El nombre del usuario es: ${nombre}`);
}

solicitarNombre(); */


// Ejemplo 2

/* function sumar (primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero
    return resultado;
}

alert(sumar (3, 4)) */


/// Ejemplo 3


/* let numero1 = Number(prompt('Ingrese el primer numero: ')); 
let numero2 = Number(prompt('Ingrese el segundo numero: ')); 

function suma (numero1, numero2) {
    return numero1 + numero2
}

let resultado = suma(numero1, numero2)

alert(resultado) */


// Ejemplo 4


/* let primerNumero = 0;
let segundoNumero = 0;

function calculadora (primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case ('+'):
            return primerNumero + segundoNumero;
        break

        case ('-'):
            return primerNumero - segundoNumero;
        break

        case('*'):
            return primerNumero * segundoNumero;
        break

        case ('/'):
            return primerNumero / segundoNumero;
        break

        defult:
            return 0
        break
    }
}

alert(calculadora(20, 30, '+')) */


// Funcion en funcion

// Ejemplo 1

/* iniciarApp()

function iniciarApp (){
    alert('Iniciando APP...')
    
    segundaFuncion()
}

function segundaFuncion () {
    alert('Desde la segunda funcion')

    usuarioAutenticado()
}

function usuarioAutenticado () {
    alert('Autenticando usuario, espere...')

    alert('Usuario autenticado exitosamente.')
} */


// Funcion flecha 
// Ejemplo 1


/* const aprendiendo = () => 'Aprendiendo';

alert(aprendiendo);
*/




// Funcion anonima
// Ejemplo 1

/* const saludo = function () {
    return 'Hola'
}

alert(saludo()) */


// Ejemplo 2

/* let producto = function (a, b) {
    return a * b
}

alert(producto(2, 4)) */