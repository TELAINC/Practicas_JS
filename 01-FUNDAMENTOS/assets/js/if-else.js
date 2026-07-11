let a = 9;

if (a >= 10) {
    console.log("a es mayor o igual a 10");
} else {
    console.log("a es menor a 10");
}

//console.log("Fin del programa");

//const hoy = new Date();
//let dia = hoy.getDay();
//console.log(hoy);
//console.log({ dia });

//if (dia === 0) {
//  console.log("Domingo");
//} else {
//   console.log("No es domingo");
//}

let dia = 3;

const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado'
};

const diasLetras2 = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

console.log(diasLetras2[dia]);
