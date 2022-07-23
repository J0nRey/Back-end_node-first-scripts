// Callback

//Cuando lleges a casa avisame que llegaste...

function irAcasa (avisar) {
    console.log('LLendo a casa...')
    console.log('LLegamos a casa')
    avisar()
}


function llamarAmama () {
    console.log('Hola ma ya llegue a casa')
}

irAcasa(llamarAmama)
irAcasa(()=> {
    console.log('callback con funcion anonima')
})


/*
LLendo a casa...
LLegamos a casa
Hola ma ya llegue a casa
*/

/*
irAcasa(llamarAmama())
llamarAmama() => lo ejecuta primero y ...
irAcasa(undefined) => irAcasa es como si lo pasaramos a indefinido
Hola ma ya llegue a casa
LLendo a casa...
LLegamos a casa
C:\Users\Jonathan\desktop\kodemia\back-end\node-first-scripts\callbacks.js:8
    avisar()
    ^

TypeError: avisar is not a function // undefined()
    at irAcasa (C:\Users\Jonathan\desktop\kodemia\back-end\node-first-scripts\callbacks.js:8:5)
    at Object.<anonymous> (C:\Users\Jonathan\desktop\kodemia\back-end\node-first-scripts\callbacks.js:16:1)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)    
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47


*/

// Factory functions : Es una funcion a la que le damos un parametro con la cual construye una funcion de regreso

function a (b) { // => (b)
    console.log('a')

    return function () {
        console.log('b: ',b) // => b
    }
}

a('Hola')
//a('Hola')()


//Es como 
const funcB = a('Hola')
funcB()


function c (d) { // => (d)
    console.log('c')

    return function () {
        console.log('d: ',d) // => d
        return 'Hola'
    }()
}

c('Hola')
console.log(c('Hola'))

/*  sin parentecis return function () {}
c
c
[Function (anonymous)]

    con parentecis return function () {} ()
c
d:  Hola
c
d:  Hola
Hola

*/
console.log('-------------------')

// ejemplo

function generadorDeValidadoresDeRoles (roles) {
    return function (rol) {
        if(roles.includes(rol)){
            console.log('Permitido')
        }else{
            console.log('Denegado')
        }
    }
}

const soloAdmin = generadorDeValidadoresDeRoles (['admin'])
const adminYuser = generadorDeValidadoresDeRoles (['admin', 'user'])

soloAdmin('admin')  //Permitido
soloAdmin('user')   //Denegado

console.log('-------------------')

adminYuser('admin')
adminYuser('user')

