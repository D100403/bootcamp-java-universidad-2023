/*
    Mostrar las N primeros números
    N se ingresa por teclado
*/

const N = Number(prompt('Ingrese N'))

// N = 10

//for:
//while:
//do_while:
let cantidadPares=0
/*
for(let i=0; i<=N ; i++ ){
    if(i > 0 && i%2 === 0){
        console.log(i)
        cantidadPares++;
    }
}
*/
/*
for(let i=N; i>=0 ; i-- ){
    console.log(i)
}
*/
// Mostrar los primero N números pares
/*
let i=N;
while(i>=0){
    if(i > 0 && i%2 === 0){
        console.log(i)
        cantidadPares++;
    }
    i--;
    }
*/
let i=N;
do {
    if(i > 0 && i%2 === 0){
        console.log(i)
        cantidadPares++;
    }
}while(i >=0);
console.log(cantidadPares)