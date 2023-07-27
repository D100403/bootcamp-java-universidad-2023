// Calculadora
// Ingresar dos valores
// Ingresar la operación
// Mostrar el resultado
// Operaciones posibles son: +,-,/,*
// Si la operación no es válida, mostrar un cartel

const valor1 = Number(prompt('Ingrese un número'))
const valor2 = Number(prompt('Ingrese otro número'))
const operacion = prompt('Ingrese una operación: +, -, /, *')

if (!valor1 || !valor2){
    alert('Números inválidos')
}

if(operacion !== '+' 
    && operacion !== '-'
        && operacion !== '/'
            && operacion !=='*'){  
                alert('Operación inválida')
}

if (operacion === '/' && valor2 === 0){
    alert('No se puede dividir entre cero')
}
/*
if (operacion === '+') {
    resultado = valor1 + valor2;
} else if (operacion === '-') {
    resultado = valor1 - valor2;
} else if (operacion === '/') {
    resultado = valor1 / valor2;
} else if (operacion === '*') {
    resultado = valor1 * valor2;
}
alert("El resultado es: " + resultado);
*/
// Switch
switch(operacion) {
    case '+':
        alert(valor1 + valor2)
        break;
    case '-':
        alert(valor1 - valor2)
        break;
    case '*':
        alert(valor1 * valor2)
        break;
    default:
        alert(valor1 / valor2)
}