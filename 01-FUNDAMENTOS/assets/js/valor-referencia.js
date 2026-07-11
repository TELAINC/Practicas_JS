
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { nombre: "Juan" };
let ana = { ...juan };
ana.nombre = "Ana";
console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => {
    persona.nombre = "Tony";
    return persona;
}


let peter = { nombre: "Peter" };
let tony = cambiaNombre(peter);
console.log({ peter, tony });

//arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = [...frutas];
otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });