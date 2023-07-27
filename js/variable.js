/*Variables*/
var miNombre ='Mar';
var miApellido = 'Costa';


/*Constantes*/
const altura = 175;
const colorDeOjos ='verdes';
const fechaNacimiento ="10/04/2003"

/*Variables de bloque: pueden cambiar su valor*/
let colorDePelo ='colorado'
let peso = 60;

/*Saber el tipo de variable*/
//Guardar el tipo de dato en una variable
let tipoMiApellido = typeof(miApellido);
//break point 
console.log(tipoMiApellido);//console.log es un método/función de console

tipoMiApellido = typeof(altura);
console.log(tipoMiApellido);

/*Definiar una variable tipo object*/
const mar = {
    name: 'Mar',
    edad: 25,
    fechaNacimiento: Date.now(),
    trabaja: false
};

//A un objeto le puedo agregar atributos "on the fly"
mar.altura = 200;

const fechaNacMar = Date(mar.fechaNacimiento)

console.log('mar',mar)
console.log('Fecha Nacimiento', fechaNacMar)

//Escribir desde este js en el html
//document.write(`Los datos de Mar son: ${Object.keys(mar)}`)

//JSON.stringify() de fabrica
document.write(`Los datos de Mar son: ${JSON.stringify(mar)}`)