# Clase 4 - Objetos

## Sintaxis de objeto / Object literal.
    Primero se crea una variable
```
const nombre = "Monito de 24 pulgadas";

const precio = 500;

const disponible = true;

const producto = {
    nombre : "Monitor de 24 pulgadas",
    precio: 500,
    disponible: true,
};

console.log(producto);

Aclaracion:

nombre: "Monitor..." ---> nombre es la key y "monitor..." se llama valor.
```
### Sintaxis de punto

```
console.log(producto.nombre) ---> a-1


producto.imagen = "imagen.jpg"; ---> a-2

delete producto.disponibole; ---> a-3

Aclaraciones:
a-1: Esta es la forma de obtener SOLO el valor de nombre dentro del objeto producto.
a-2: Esta es la forma de agregar informacion al objeto.
a-3: De esta manera eliminamos informacion.
```

### Destructuring

```
const { nombre, precio, disponible} = producto;

console.log(nombre)
console.log(precio)
console.log(disponible) ---> a-1

producto.disponible = flase

console.log(producto) ---> a-2

Aclaraciones: 
a-1: Devuelve el dato solicitado
a-2: Cambia el valor de la variable.
```

## CRUD 
    Create - Read - Update - Delete.
    Esto es lo que se hizo anteriormente, crear, leer, actualizar, eliminar.

## Constructor
    Es una *funcion* que vamos a utilizar para crear un nuevo objeto. En definitiva es una plantilla.

### Ejemplo 1

```
function Producto (nombre, precio){
    this.nombre = nombre
    this.precio = precio
    this.disponible = true
}

const producto2 = new Producto ("Teclado", 1000); ---> a-1

console.log(producto2) ---> a-2

Aclaracion:
*Importante* Se denomina con mayuscula, se le da identidad.
- Con this. le decimos a la funcion que en this.algo ira lo que se pide en el argumento de la funcion. this.disponible sera un valor por defecto que le daremos.
a-1: producto2 tomara como referencia la plantilla de Producto.
a-2: Devuelve el formato de Producto con los datos pasados en producto2.
```

## Metodos
[Link de los methods](https://www.w3schools.com/js/js_string_methods.asp)
```
let cadena = "Hola mundo."

console.log(cadena.***) ---> a-1

Aclaraciones
a-1: Luego de poner el . deberia aparecer opciones recomendadas.
```

## Metodos personalizados.

```
function Cliente (nombre, edad, domicilio){
    this.nombre = nombre;
    this.edad = edad;
    this.domicilio = domicilio;

    this.saludar = function (){
        console.log("Saludos " + this.nombre)
    };
}

const cliente1 = new Cliente("Coder", 26, "Av. Publica s/n");

console.log(cliente1);

cliente1.saludar();
```

## Clases

```
class Cliente {
    constructor(nombre, acceso){
        this.nombre = nombre
        this.acceso = acceso
    }
}

const coderhouse = new Cliente("Coder", "Accepted");

console.log(coderhouse);
```

## Metodos de clases

```
class Usuario {
    constructor(nombre, acceso) {
        this.nombre = nombre;
        this.acceso = acceso;
    }

    mostrarInfoDeAcceso() {
        return `Usuario: ${this.nombre}, tu acceso es ${this.acceso}`;
    }
}

const coderhouse = new Usuario("Coder", "Permitido");

console.log(coderhouse.mostrarInfoDeAcceso());
```