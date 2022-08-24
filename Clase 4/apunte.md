# Funciones

### Ventajas:
    - Evita instrucciones duplicadas.
    - Soluciona problemas complejos.
    - Ordena el codigo

## Sintaxis:

```
function nombre (parametros) {
    bloque_de_codigo   
}
```
### Ejemplo 1
```
function solicitarNombre () {
    let nombre = prompt('Ingrese su nombre: ');
    console.log(`El nombre del usuario es: ${nombre}`);
}

solicitarNombre(); ---> a-1

Aclaraciones:
a-1: De esta manera ejecutamos la funcion.
```

## Parametros
    Se ingresan dentro de los (), son variables.

### Ejemplo 2
    Suma
```
function sumar (primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero
    alert(resultado)
}

alert(sumar (3, 4)) ---> a-2

Aclaraciones:
a-2: Se puede usar alert o console.log por el momento.
```

### Ejemplo 3
    Suma con interaccion del usuario.

```
let numero1 = Number(prompt('Ingrese el primer numero: ')); 
let numero2 = Number(prompt('Ingrese el segundo numero: ')); 

function suma (numero1, numero2) {
    return numero1 + numero2
}

let resultado = suma(numero1, numero2)

alert(resultado)
```

### Ejemplo 4
    Funcion saludar con dos parametros.

```
function saludar (nombre = 'desconocido', apellido = '') { ---> a-3
    alert(`Hola ${nombre} ${apellido}`);
}

saludar ('nombreEjemplo', 'apellidoEjemplo')

Aclaraciones:
a-3: Al poner variable = 'string' se le da por default el valor dentro de las comillas en caso de que el usuario no ingrese ningun dato.
```

### Ejemplo 5

```

let primerNumero = 0;
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
alert(calculadora(20, 30, '+'))

```

## Variable GLOBAL vs variable LOCAL.
    
### Variable LOCAL:
    Variables locales: Viven dentro de la funcion, fuera de la funcion la misma no existe en ningun momento

### Ejemplo 6
    Variable local

```
function crearMensaje () {
    let mensaje = 'Mensaje de prueba';
}

alert(mensaje) ---> a-4

Aclaraciones:
a-4: Este codigo dara error, ya que la variable mensaje no existe fuera de la funcion y el alert esta siendo ejecutado fuera de la funcion.
```

# Funcion dentro de funcion

### Ejemplo 1

```


iniciarApp()
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
}

Aclaracion:
No podemos escribir funciones dentro de funciones, pero si podemos llamar una funcion dentro de otra funcion, tal y como se muestra en el ejemplo.
```

## Funcion flecha

### Ejemplo 1

```
const aprendiendo = () => 'Aprendiendo';

alert(aprendiendo);

Aclaracion
Facilita la sintaxis de la funcion clasica, es una forma para escribir menos codigo. Despues de la flecha (=>) iria lo que va en el return, en este caso particular reemplaza un {
    return 'aprendiendo'
    }
```

## Funciones anonimas
    Son un tipo de funciones que se declaran SIN NOMBRE y que dentro de la variable tiene una instruccion. 

### Ejemplo 1
    Saludo

```
const saludo = function () {
    return 'Hola'
}

alert(saludo())

Aclaracion
Responden como valor de una constante.
```

### Ejemplo 2

```
let producto = function (a, b) {
    return a * b
}

alert(producto(2, 4))
```

### RECOMENDACION
    No se recomienda usar funciones anonimas para el proyecto final. 