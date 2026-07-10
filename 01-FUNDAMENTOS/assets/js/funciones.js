function saludar(nombre) {
    //console.log(arguments);
    //console.log('Hola ' + nombre);
    return [1, 2];
    //console.log('Soy un código que está después del return');
}

const saludar2 = function (nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola flecha');
}


const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}


const resultado = saludar('Carlos', 25, false, 'Mexico');//1
//console.log(resultado[0], resultado[1]);
//saludar2('Carlos');
//saludarFlecha();
//saludarFlecha2('Eduardo');

function sumar(a, b) {
    return a + b;
}

const sumar2 = (a, b) => {
    return a + b;
}

const sumar3 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}
const getAleatorio2 = () => Math.random();


console.log(sumar(10, 20));
console.log(sumar2(89, 20));
console.log(sumar3(0, 20));
console.log(getAleatorio());
console.log(getAleatorio2());