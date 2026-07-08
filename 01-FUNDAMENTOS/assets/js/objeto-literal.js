let personaje = {
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
