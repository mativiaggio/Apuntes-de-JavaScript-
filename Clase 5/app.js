// Clase numero 4

/* const nombre = "Monito de 24 pulgadas";

const precio = 500;

const disponible = true;
 */

// Asi de declaran objertos:

/* const producto = {
    nombre : "Monitor de 24 pulgadas",
    precio: 500,
    disponible: true,
} */


// Sintaxis de punto

/* 
console.log(producto.nombre)
producto.imagen = "imagen.jpg";

delete producto.disponibole;
*/

// Destructuring

/* const { nombre, precio, disponible} = producto;

console.log(nombre)
console.log(precio)
console.log(disponible)

producto.disponible = flase

console.log(producto)  */


// Constructor

/* function Producto (nombre, precio){
    this.nombre = nombre
    this.precio = precio
    this.disponible = true
}

const producto2 = new Producto ("Teclado", 1000);

console.log(producto2) */ 


// Metodos personalizados

/* function Cliente (nombre, edad, domicilio){
    this.nombre = nombre;
    this.edad = edad;
    this.domicilio = domicilio;

    this.saludar = function (){
        console.log(`Saludos ${this.nombre}`);
    }
}
const cliente1 = new Cliente("Coder", 26, "Av. Publica s/n");

console.log(cliente1);

cliente1.saludar(); */


// Clases

/* class Cliente {
    constructor(nombre, acceso){
        this.nombre = nombre
        this.acceso = acceso
    }
}

const coderhouse = new Cliente("Coder", "Accepted");

console.log(coderhouse); */

// Metodos de clases

/* class Usuario {
    constructor(nombre, acceso) {
        this.nombre = nombre;
        this.acceso = acceso;
    }

    mostrarInfoDeAcceso() {
        return `Usuario: ${this.nombre}, tu acceso es ${this.acceso}`;
    }
}

const coderhouse = new Usuario("Coder", "Permitido");

console.log(coderhouse.mostrarInfoDeAcceso()); */