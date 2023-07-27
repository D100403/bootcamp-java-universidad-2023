/*1- crear un array */
//                 0   1 
const vector = ['casa','perro'];

//tamaño
console.log('tamaño',vector.length)

//posición? 'arrancan' en 0
console.log('edificio[0]',vector[0]); // el valor 1

//último length -1
console.log(vector[vector.length - 1]);

//recorro un array? con un ciclo, for! while,do-while!
for (let piso = 0; piso < vector.length; piso++) {
    const element = vector[piso];
    console.log(element);   
}

/*
Ingresar datos de un alumno:
    - nombre
    - apellido
    - dni
    - curso
La carga finaliza con dni=0
----------------------------
Necesito un objeto alumnos
*/
const alumnos = [];
let nombre, apellido, dni, curso;

dni = Number(prompt("DNI"));
while (dni !== 0){ //Corte de control
    nombre = prompt("Nombre");
    apellido = prompt("Apellido");
    curso = prompt("curso");

    //Creo mi objeto alumno
    const alumno = {
        dni,
        nombre,
        apellido,
        curso
    }

    // Agregar el alumno al vecto de alumnos
    alumnos.push(alumno);

    //
}