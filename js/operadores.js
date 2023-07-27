/*
    Relacionales
    > mayor
    < menor
    >= mayor o igual
    <= menor o igual
    != distinto | Operar lógico no relacional
    !== distinto | Operar lógico no relacional

    Todos retornan un booleano (true, false)
*/
const a = 10;
const b = 10;


let cmp = a > b;

console.log('Relacionales y dos lógicos');
console.log('>', cmp);
console.log('<', a < b);
console.log('>=', a >= b);
console.log('<=', a <= b);
console.log('!=', a != b);
console.log('!==', a !== b);

/*
    Lógicos | Retornan un booleano (true, false)
    and y ==> &&
    or o ==> ||
    not ==> !
    xor ==> ^ // alt+94
*/
const username = 'root';
const password = '1235';

//alert(username === 'root' && password === '1234')
let valido = username === 'root' && password ==='1234';
console.log('&&', username, password, valido);

valido = username === 'root' || password ==='1234';
console.log('||', username, password, valido);
console.log('!(||)', username, password, !valido);

valido = username === 'root' ^ password ==='1234';
console.log('^', username, password, valido===1);
console.log('!(^)', username, password, !(valido===1));


//Sistema de numeración
const aux = 17; //Como un numero binario = 
const aux2 = 2;

console.log(aux ^ aux2);

/*
    Evaluar varias condiciones
*/
const d = -1;
const valorVerdad = aux > 15 && aux2 < 5 || d >=0;
