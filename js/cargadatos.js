//Para ingresar datos desde teclado
const nombre = prompt('Ingrese nombre');
const apellido = prompt('Ingrese apellido');
const edad = prompt('Ingrese edad');

//Armar un JSON con los datos que cargue
const datos = {
    name: nombre, 
    surname: apellido, 
    age: edad
}


const datosTexto = JSON.stringify(datos);
console.log('Ingresó', JSON.stringify(datos));

const elNombre = datos['name']

console.log('elNombre: ',elNombre);

const cantidadAtributos = Object.keys(datos).length//Numero de atributos que tiene el dato
console.log('cantidadAtributos', cantidadAtributos);

//Convertir datosTexto, que es un tipo text, a un objeto
const datosObjetos = JSON.parse(datosTexto);
console.log('datosObjeto:', JSON.stringify(datosObjetos));

const iguales = datosObjetos === datos; //Igualdad de tipo y contenido
console.log('iguales', iguales)

//Igualdad de atributos de los objetos
const igualName = datos.name === datosObjetos.name;
const igualAge = datos.age === datosObjetos.age;
const igualSurname = datos.surname === datosObjetos.surname;
console.log('Iguales en atributos', igualName, igualAge, igualSurname)

//Compara el mismo objeto
const igualMismoobjeto = datos === datos;
const igualMismoobjetoDatos = datosObjetos === datosObjetos;
console.log('Iguales', igualMismoobjeto)
console.log('Confirm', igualMismoobjetoDatos)

//Comparo dos numeros
const altura = 175;
const altu = 175;
console.log(altu === altura);

const alturaStr = '175.5';
console.log('===', altura === alturaStr); // === Comparo tipo de valor
console.log('==', altura == alturaStr); // === Comparo SOLO valor

//Convertir string a number
// +variable
// Number(variable)
// parseInt(variable)
// parseFloat(variable)

console.log(+alturaStr)
console.log(Number(alturaStr))
console.log(parseInt(alturaStr))
console.log(parseFloat(alturaStr))