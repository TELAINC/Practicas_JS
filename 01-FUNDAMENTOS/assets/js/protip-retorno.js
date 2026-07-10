const crearPersona = (nombre, apellido) => ({ nombre, apellido });
const persona = crearPersona('Carlos', 'Cruz');
console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
}
//imprimeArgumentos(10, true, false, 'Carlos', 'Cruz');

const imprimeArgumentos2 = (edad, ...args) => {
    //console.log({ edad, args });
    return args;
}
const [casado, vive, nombre, fawfw] = imprimeArgumentos2(10, true, false, 'Carlos', 'dgs');
console.log({casado, vive, nombre, fawfw});