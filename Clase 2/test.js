// MUY IMPORTANTE ---> LOS COMENTARIOS CON // NO DEBEN SER DESCOMENTADOS
// PARA PROBAR UN BLOQUE DE CODIGO DESCOMENTAR LOS QUE CONTENGAN /* */





//### Sintaxis: Forma en la que se escribe el codigo.
//### Control de flujos / Condicionales (if).

//Estructura basica:
//.
//if (condicion)  {
//    bloque ---> *Se ejecuta si la condicion SI se cumple
//} else {
//    bloque ---> *Se ejecuta si la condicion NO se cumple
//}

//### EJERCICIO EJEMPLO 1

//*IMPORTANTE* ---> El doble signo igual (==) significa 'equivale', por lo tanto se podria decir 1 == 1 (1 es igual a 1).

//CASO 1:

/* const puntaje = 1000;

if (puntaje == 1000) { 
    console.log('Es igual!')
}else {
    console.log('No es igual!')
} */


//*Se imprime por consola 'Es igual!'*

////CASO 2:

/* const puntaje = 2000;

if (puntaje == 1000) { 
    console.log('Es igual!')
}else {
    console.log('No es igual!')
} */
//*Se imprime por consola 'No es igual!'*

//CASO 3:

/* const puntaje = "1000";

if (puntaje == 1000) { 
    console.log('Es igual!')
}else {
    console.log('No es igual!')
} */
//Se imprime por consola 'Es igual!'* ---> Ya que no compara el tipo de dato el resultado seria 'Es igual!' sin importar que uno sea string y otro un numero. 

//CASO 4:
//*IMPORTANTE* ---> El triple signo igual ademas comprueba el tipo de dato. 
/* const puntaje = "1000";

if (puntaje === 1000) { 
    console.log('Es igual!')
}else {
    console.log('No es igual!')
} */
//*Se imprime por consola 'No es igual!'*


//OPERADORES LOGICOS:

// ===   --->    Estrictamente igual
// !==   --->    No es estrictamente igual
// >     --->    Mayor que...
// >=    --->    Mayor o igual que...
// <     --->    Menor que...
// <=    --->    Menor o igual que...
// &&    --->    AND
// //    --->    OR
// !     --->    NOT


//### EJERCICIO EJEMPLO 2

//CASO 1

/* const dinero      = 300;

const totalAPagar = 500;

if (dinero > totalAPagar) {
    console.log('Podemos pagar!');
} else {
    console.log('Fondos insuficientes');
} */
//*Se imprime por consola 'Fondos insuficientes'*

//CASO 2

/* const dinero      = 600;

const totalAPagar = 500;

if (dinero >= totalAPagar) {
    console.log('Podemos pagar!');
} else {
    console.log('Fondos insuficientes');
} */
//*Se imprime por consola 'Podemos pagar!'*

//CASO 3

/* const dinero      = 300;

const totalAPagar = 500;

const tarjeta     = true

if (dinero > totalAPagar) {
    console.log('Podemos pagar!');
} else if (tarjeta) {
    console.log('Puedo pagar porque tengo tarjeta!');
} else {
    console.log('Fondos insuficientes')
} */
//*Se imprime por consola 'Puedo pagar porque tengo tarjeta!'*

//CASO 4

/* const dinero      = 300;

const totalAPagar = 500;

const tarjeta     = false

if (dinero > totalAPagar) {
    console.log('Podemos pagar!');
} else if (tarjeta) {
    console.log('Puedo pagar porque tengo tarjeta!');
} else {
    console.log('Fondos insuficientes')
} */
//*Se imprime por consola 'Fondos insuficientes'*

//*IMPORTANTE* ---> Siempre toma el primer valor verdadero


//## SWITCH ---> Evalua mas de una condicion, permitiendo y evitando que el codigo no sea muy extenso.
//-------------------------------------------------------

//### EJERCICIO EJEMPLO 3

//CASO 1

/* const metodoPago = 'Tarjeta';

switch (metodoPago) {
    case 'Efectivo': 
        console.log('Pagaste en efectivo!');
    break;
    case 'Cheque':
        console.log('Pagaste con un cheque!');
    break
    case 'Tarjeta':
        console.log('Pagaste con un tarjeta!');
    break
    default:
        console.log('Metodo de pago no aceptado');
    break;
} */

//*En este caso se imprime por consola 'Pagaste con un tarjeta!'*

//BREAK ---> Palabra reservada. Esta palabra hace que se termine la condicion
//DEFAULT ---> Palabra reservada. Esta palabra deja un valor predeterminado en caso de que ninguna de las condiciones se cumpla.

//AND y OR

//AND(&&) ---> Para que sea true deben der las dos correctas

//OR(||) ---> Con que uno sea true es suficiente

//### EJERCICIO EJEMPLO 4

//CASO 1



/* const usuario    = false;

const puedePagar = false;

if (usuario && puedePagar) {
    console.log('Puedes comprar!');
} else if (!usuario && !puedePagar){
    console.log('No puedes comprar!');
} */


//*Imprime por consola 'No puedes comprar!'*
//*ACLARACION* ---> !usuario, !puedePagar, !cualquiercosa es lo contrario a usuario, puedePagar, cualquiercosa

//CASO 2




/* const usuario    = true;

const puedePagar = true;

if (usuario && puedePagar) {
    console.log('Puedes comprar!');
} else if (!usuario && !puedePagar){
    console.log('No puedes comprar!');
} */
//*Imprime por consola 'Puedes comprar!'*




//CASO 3




/* const usuario    = false;

const puedePagar = false;

if (usuario && puedePagar) {
    console.log('Puedes comprar!');
} else if (!usuario) {
    console.log('No puedes comprar!');
} else if (!puedePagar) {
    console.log('No puedes pagar!');
} else {
    console.log('No puedes ingresar ni comprar!')
} */



//*Imprime por consola 'No puedes ingresar ni comprar!'*


//### EJERCICIO EJEMPLO 5

//CASO 1 



/* const efectivo     =   300;
const credito      =   400;
const disponible   =   efectivo + credito;
const totalAPagar  =   600;

if (efectivo > totalAPagar || 
    credito > totalAPagar || 
    disponible > totalAPagar
) {
    console.log('Podemos comprar!');
} else {
    consoole.log('Fondos insuficientes!');
} */



//*ACLARACION* ---> Con el || (or) solo hace falta que una de las condiciones sea true para ejecutar el bloque dentro de if.

//### EJERCICIO EJEMPLO 6

//CASO 1



/* let nombreAlumno   = prompt('Ingresa el nombre del alumno: ');

let apellidoAlumno = prompt('Ingresa el apellido del alumno: ');

if (nombreAlumno !== '' && apellidoAlumno !== '') {
    alert('Nombre: ' + nombreAlumno + ' Apellido: ' + apellidoAlumno);
} else {
    alert('No ingreso datos');
} */
