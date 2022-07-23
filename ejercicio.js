//crear una funcion que nos salude por nuestro nombre
//Hola fulanito. Buenas tardes.

const name = 'jonathan'

function hola (nameToGreet) { // la funcion debe retornan el string con el saludo
    return `Hola ${nameToGreet}. Buenas tardes`
}

//usar el valor de retorno de la funcion para hacer un console.log

const holaLuis = hola('luis')
const holaJonathan = hola(name)

console.log('HolaLuis: ', holaLuis)
console.log('HolaJonatrhan: ', holaJonathan)
console.log('HolaLuci: ', hola('Luci'))