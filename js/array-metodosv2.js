const vector = [10,30,50,60,30,78];

let valorBuscado = 30;
const filtrados = vector.filter( v => v === valorBuscado);

//Filter | Map | Reduce
console.log(filtrados);

//Mayores a 50
valorBuscado = 50;
const filtrados50 = vector.filter( v => v >= valorBuscado);
console.log(filtrados50);

const alumnos = [
    {
        id: Math.random(),
        name:'mar',
        age: 20,
        subjects:[
            'algebra', 'analisis1', 'progra1',
        ]
    },
    {
        id: Math.random(),
        name:'juan',
        age: 40,
        subjects:[
            ',algebra2', 'analisis1', 'progra2',
        ]
    },
    {
        id: Math.random(),
        name:'pepe',
        age: 40,
        subjects:[
            ',analisis3', 'progra1',
        ]
    }
]

const isAlgo = (alumno, materia) => {
    return alumno.subjects.includes('analisis1') && alumno.age >= 40;
}

//Filtrar los alumnos que cursan analisis1
const materia = 'analisis1'
const filtraAlumnos = alumnos.filter( v => v.subjects.includes(materia) && v.age >= 40);
const filtraAlumnos2 = alumnos.filter( alumno => isAlgo(alumno, materia));
console.log(filtraAlumnos);

//quiero solo id de alumnos
//.map
const ids = alumnos.map(x => x.id);
console.log(ids);

//quiero el id y age
const objs = alumnos.map (x => {
    const miObj ={
        id:x.id, age: x.age
    }
    return miObj;
});

console.log(objs);

const recortarAlumno = (alumno) => {
    const miObj = {
        id: alumno.id,
        age: alumno.age
    }
    return miObj;
}
//.map con una funcion
const objsV2 = alumnos.map(x => recortarAlumno(x));

//.findIndex
const idx = alumnos.findIndex(x => x.name === 'pepe');
console.log(idx);

//existe alguno que cumple "tal" condicion
//.some()
//Existe algun alumno con edad > 35 años?
const existe = alumnos.some(x => x.age > 50);
console.log(existe);

//Todos cursan anlisis1?
const todosCumplen = alumnos.every(x => x.subjects.includes('analisis1'));
console.log('todosCumplen: ',todosCumplen);

//Son todos mayores de 35?
const todos35 = alumnos.every(x => x.age > 19);
console.log('todos > 35: ',todos35);

//Reduce
//sumar las edadaes de los alumnos
const sumaEdades = alumnos.reduce((prev,curr) => prev + curr.age, 0);
console.log(sumaEdades);

const sumaMaterias = alumnos.reduce((prev,curr) => prev.concat(curr.subjects), []);
console.log(sumaMaterias);
//Filtrar:set([]) permite filtrar duplicados
const materiasSinDuplicados = new Set(sumaMaterias);
console.log(materiasSinDuplicados);

const aux = alumnos
    .filter(x => x.aage > 10)
    .map(y => y.id)
    .reduce((prev,curr) => prev+curr, 0);

console.log(aux);

//eliminar un elemento del array (último)

const ultimo = alumnos.pop();
console.log(alumnos);
console.log(ultimo);

//Agregar al principio
alumnos.unshift(ultimo);
console.log(alumnos);

//Sacar el primer elemento del array
const primero = alumnos.shift();
console.log(primero);

//agrego al final
alumnos.push(primero);

//.splice(startIdx, 1) Quitar de una posicion determinada
console.log('ALUMNOS', JSON.stringify(alumnos));

alumnos.splice(1,1);

console.log('ALUMNOS', alumnos);

//mas!!