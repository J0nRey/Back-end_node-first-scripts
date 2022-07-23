/* declaracion de funcion
 const varA = (par) => {console.log(`ejecucion: ${par}`)} 
 function varB (par) {console.log(`ejecucion: ${par}`)}

 Uso o llamada a una funcion

 varA('val')
 varB('val')

 */

// Pasar por valor o por referencia

// Declaracion de la funcion : estamos diciendo de que va a consistir ese comportamiento

function hola (name) { 
    return `Hola ${name}. Saludos`
}

// uso o llamado de la funcion

const x = hola('Jonathan') // valor
console.log('x: ', x)

const otraFuncion = hola
const a = hola
const b = otraFuncion

const respuesta = otraFuncion('Otro')
console.log('respuesta; ', respuesta)

/* Programacion funcional

 JS es un lenguaje multiparadigma, uno de los paradigmas mas importantes
 es el paradigma funcional, es decir que las variables se consideran 
 como first class citizen (Ciudadanos de primera clase), la parte mas importante de JS.
 podemos pasarlos como si fueran variables de un lado a otro, se pueden mover, cambiar de valor.
 
 En otros lenguajes no es posible
*/

const aaa = () => {}
const bbb = function () {}

bbb()


/*  funciones que se mandan a llamar a ellas solas con () => {}()
() => {
    console.log('Hola desde funcion anonima')
}()


function () {
    console.log('Hola desde funcion anonima')
} */

/* funciones que resiben otras funciones como parametro
    CallBacks

button.on('click', () => {})
button.on('click', function () {})

No se necesita un nombre solo la referencia a esa funcion

 */
function executeOnClick () {
    console.log('lo que sea')
    return 'hola'
}

button.on('click', executeOnClick)      // Referencia a la funcion => () {console.log('lo que sea') return 'hola'}
button.on('click', executeOnClick())    // Ejecucion a la funcion => 'hola'