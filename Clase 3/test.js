// MUY IMPORTANTE ---> LOS COMENTARIOS CON // NO DEBEN SER DESCOMENTADOS
// PARA PROBAR UN BLOQUE DE CODIGO DESCOMENTAR LOS QUE CONTENGAN /* */

//Ciclos 
//Clase numero 3 - CoderHouse

//Switch

//Ejemplo 1
//Comidas



/*
let food = prompt("Que se te antoja cenar?: ")

switch (food) {
    case 'hamburguesa':
        console.log(`Pedido: ${food}, valor $1200.`);
        break
    case 'pizza':
        console.log(`Pedido: ${food}, valor $900.`);
        break
    case 'lomo':
        console.log(`Pedido: ${food}, valor $800.`);
        break
    default:
        console.log('Te ahorras unos pesos si no pedis.');
        break
}
*/




//*Template literal* ---> ALT izq + 96 = ` (comillas invertidas o backticks).

//Ejemplo 2
//Peliculas


/*
let option = prompt('Elija una opcion:
1: Garra
2: Batman
3: SpiderHead
4: MoonFall
');

switch (option) {
    case "1":
        console.log("Garra");
        break
    case "2":
        console.log("Batman");
        break
    case "3":
        console.log("SpiderHead");
        break
    case "4":
        console.log("MoonFall");
        break
    default:
        console.log("No has ingresado una opcion valida.")
        break
}
*/


//Bucle while.
//While
//Recordatorio:
//Se repite cuando la condicion es verdadera

//Ejemplo 1
//Primer acercamiento a uso de while



/*
let x = 0

while (x <= 10) { 
    console.log(`El valor de X es ${x}`)
    x++;
}
*/



//*Ayuda* ---> Se lee: Siempre y cuando x sea menor o igual a 10...

//*Ayuda 2* ---> x++: Aumenta en uno el valor de la variable x. 

//*Resultado* ---> Este codigo se va a repetir, aumentando x de uno en uno hasta que x tenga un valor de 10.

//*Importante* ---> si en vez de poner x <= 10 ponemos x < 10, a la hora de ejecutar el codigo el mismo frenara en el valor 9 ya que el 10 no esta contemplado.


//Ejemplo 2
//While con interaccion de usuario.



/*
let entrada = prompt('Ingrese un texto o ESC para interrumpir: ');

let texto = " ";

while (entrada != "ESC" && entrada != "esc") {
    texto += entrada + " ";
    entrada = prompt('Ingrese un texto o ESC para interrumpir: ');
}
alert(texto)
*/



//*Ayuda 1* ---> Se lee asi: mientras que entrada NO sea ESC ni tampoco sea esc entonces...

//*Ayuda 2* ---> El codigo una vez ejecutado se va a repetir, dejando que el usuario ingrese la cantidad de 'textos' que quiera SIEMPRE Y CUANDO el texto NO sea ESC ni esc.

//*Resultado* ---> El alert mostrara la concatenacion de todos los strings ingresados por el usuario antes de terminar el ciclo con ESC o esc.


//do...while
//Ejemplo 1.




/*
let y = 0

do {
    console.log(`El valor de Y es ${y}`)
    y++
} while (y <= 10);
*/



//*El do while ejecutara por lo menos una vez el bloque de codigo mientras que el while no lo hara.*

//Ejemplo 2.

/*
let x = 25

do {
    console.log(x);
    x++;
}while (x < 30);
*/

//Cliclo FOR
//For
//Recordatorio: 
//Se repite una cantidad de veces especifica.

//Sintaxis:
//for (desde; hasta; actualizacion) {
    // Mientras dure el ciclo se ejecuta.
//}

//Ejemplo 1.
//Primer acercamiento al for



/*
for (let i = 0; i < 10; i++){
    alert(`El valor de I es ${i}`);
}
*/




//Ejemplo 2.
//Tabla de multiplicar.


/*
let numero = Number(prompt('Ingrese un numero: '));

for (let i = 1; i <=10; i++){
    let resultado = numero * i;
    alert(`${numero} x ${i} = ${resultado}`);
}
*/




//Ejemplo 3
//Otro acercamiento, uso de condicionales dentro del for.
/*
for (let i = 1; 1 <= 10; i++) {
    if (i===6){
        break
    }
    alert(`El valor de I es ${i}`);
}
*/
//*Ayuda* ---> El usar break hace que el ciclo se interrumpa como si hubiera finalizado al llegar al valor 6.



//Ejemplo 4
//Continue

/*
for (let i = 1; i <= 10; i++) {
    if (i===6) {
        continue;
    }
    alert(`El valor de I es ${i}`);
}
*/


//*Ayuda* ---> Con el continue saltea el valor de 6 y continua con el ciclo
