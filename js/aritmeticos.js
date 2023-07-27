/*
    Operadores: relacionales, lógicos, aritméticos
    
    +
    -
    /
    *
    --
    ++
    **
 */

    const valor1 = 10;
    const valor2 = 100;

// Suma +
const suma = valor1 + Number(valor2)
console.log(suma)

// Con strings
const palabra1 = 'hola'
const palabra2 = 'chau'

const saludo = palabra1 + ' ' + palabra2
const saludo2 = `${palabra1} ${palabra2}` //alt+96 ``
console.log(saludo, saludo2)
console.log(`${saludo} ${saludo2}`)

// Resta -
const resta = valor1 - valor2;
console.log(resta)

// Math.
console.log(Math.random())

// Multiplicacion* 
const multiplicacion = valor1 * valor2
console.log(multiplicacion)

// División
const division = valor1 / valor2
console.log(division)

//Resto %


const D = 10
const d = 5
const C = D/D
const r = D % d

console.log(D,d,C,r)

// Exponencial **
const base = 2
const exp = 3
const res = base ** exp
console.log(res)

// Post-decremento --

let sueldo = 1000
sueldo = sueldo - 1
console.log(sueldo)
//Por --
sueldo--;
console.log(sueldo)

// Se puede decrementar de mas de 1
sueldo -= 10
console.log(sueldo)

// -- Pre-decremento
let a = 1000;
console.log(a)
const b = --a // Pre decremento
console.log(b)