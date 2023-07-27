/*
    Ingresar usuario y password
    si el usuario es root y la password es 1234
     > mostrar un alreta 'login ok'
     > de lo contrario 'login fail'
*/
const username = prompt('username')
const password = prompt('password')

const usernameValid = username === 'root'
const passwordValid = Number(password) === 1234

if (usernameValid && passwordValid) {
    alert('Login ok')
}else {
    alert('Login fail')
}

// Operador ternario
// Cond ? true : false

usernameValid && passwordValid ? alert('login ok') : alert('login fail')

const valorA = 'c'
if(valorA === 'A'){
    
}else if (valorA === 'B'){

}else if (valorA === 'c'){

}else{

}
