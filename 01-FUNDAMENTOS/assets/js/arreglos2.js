let juegos = ['Dante', 'kronnos', 'halo', 'vergil'];
//lenght
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

//forEach
juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

//push
let nuevojuego = juegos.push('farid');
console.log({ nuevojuego, juegos });

//unshift
nuevojuego = juegos.unshift('COD');
console.log({ nuevojuego, juegos });
//pop
let juegoEliminado = juegos.pop();
console.log({ juegoEliminado, juegos });

console.log(juegos);
//splice
let pos = 1;
let juegoBorrado = juegos.splice(pos, 2);
console.log({ juegoBorrado, juegos });

//indexOf
let haloIndex = juegos.indexOf('dante');
console.log({ haloIndex, juegos });


