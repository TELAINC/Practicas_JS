const personaje = {
    nombre: 'jhon',
    codeName: 'Jefe Maestro',
    vivo: true,
    edad: 45,
    coords: {
        lat: 423.76,
        lng: 32.65
    },
    trajes: ['Mark IV', 'Mark V', 'Mark VI'],
    direccion: {
        zip: '342, 5252',
        ubicacion: 'Nueva bombasa, Colombia'
    },
    'ultimo-juego': 'Halo infinite'
};
console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Dirección: ', personaje['direccion']);
console.log('Coordenadas: ', personaje['coords']);

console.log('No. trajes: ', personaje.trajes.length);
console.log('ultimo traje: ', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo: ', personaje[x]);
console.log('ultimo juego: ', personaje['ultimo-juego']);

delete personaje.edad;
console.log(personaje);

personaje.casado = false;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//personaje = true;

console.log(personaje);

Object.freeze(personaje);
personaje.dinero = 4124123123;
personaje.casado = true;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});