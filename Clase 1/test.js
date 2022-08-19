// comentarios

/*
let nombre = 'Matias'; // string
console.log(nombre);
let edad = 20; // number
console.log(edad)
let estudiante = true; // boolean
console.log(estudiante)

const apellido = 'Viaggio';
*/


// diferencia etre let y const

// pueden inicializarse vacias
// pueden ser redeclaradas
// let nombre;
// nombre = 'matias';
// nombre = 37
// nombre ='54 Hola'
// console.log(nombre)


// deben ser declaradas con valor, deben ser declaradas en mayusculas
// const NOMBRE = 'Coder';


// CONCATENACION
// let nombre = 'matias'
// let apellido = 'viaggio'
// let nombreCompleto = nombre + " " + apellido
// console.log(nombreCompleto)

// OPERACIONES +, -, /, *, **, %
// let n1 = 1
// let n2 = 6
// let resul = n1 / n2
// console.log(resul)

// PROMPT se usa para que el usuario ingrese informacion con el teclado

/* let nombre = prompt('Ingrese su nombre por favor: ')
alert('Tu nombre es' + " " + nombre) */

/* let n1 = parseInt(prompt('Ingrese el primer numero: '))
let n2 = parseInt(prompt('Ingrese el segundo numero: '))

alert(n1 + n2) */

let numero1 = parseInt(prompt('Ingrese un numero: '))
let numero2 = parseInt(prompt('Ingrese un segundo numero: '))

let operacion = numero1 + numero2;

alert('La suma de esos dos numeros es' + ' ' + operacion)