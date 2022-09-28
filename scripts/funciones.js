console.log("Sesion JS02 Funciones");
/**
 * Este es un ejemplo de una funcion declarada 
 * (function declaration, function statement).
 * Una caracteriztica de las funciones declaradas
 * es que tien un hoisting (elevacion).
 * 
 * Realiza la multiplicación de 2 números
 * @param {Number} a multiplicando 1
 * @param {Number} b multiplicando 2
 * @returns Resultado de la multplicacion a*b
 */
function multiplica(a, b) {
    //let multiplica = a * b;
    //return multiplica
    return a*b;
}
//Llamado de la funcion declarada
console.log("Multiplica 5 * 6 = " + multiplica(5,6));

/** */
function multiplica(a, b){
}

//+++++++++ Función espresada ++++++++++
/**
 * Las funciones expresadas (funciton expressions)
 * son declarada dentro de la asignacion de una varible.
 * 
 * Estas funciones pueden ser anonimas(no tener nombre)
 * Las funciones expresadas no tienen hosting.
 */

/**
 * Sumatoria de 2 números
 * @param {Number} a 
 * @param {Number} b 
 * @returns resultado de a + b
 */
 const suma = function (a, b) { return a + b;}

console.log("El resultado de 56 + 4 = " + suma(56, 4) );

//+++++++++ Función autoinvocadas ++++++++++

/**
 * Las funciones auto invocadas (self-invoking function)
 * Pueden ser anonimas y autoejecutan() en su declaración (function)().
 */

(function (){
    console.log("================");
    console.log("Holi crayoli");
    console.log("================");
})();


//+++++++++ Función flecha ++++++++++

/**
 * Las funciones flecha funcionan similar a las funciones declaradas,
 *  pero no requierenla palabra "function" y si tienen una sola
 *  instrcuccion y es el retorno, no rrquiere la instruccion "return"
 */

/**
 * Realiza la operación de 2 números
 * @param {Number} a 
 * @param {Number} b 
 * @returns La resta de a-b
 */
const resta = (a, b) => a-b;

console.log("La resta de 10-5 = " + resta(10,5));

/**
 * Función con parametros inicializados
 */
function divide(a,b=0){
    return a/b
}

console.log("La división de /B = " + divide(4));


//+++++++++ Función recursivas ++++++++++

function factorial(num){
    if(num<=0) return 1;
    return (num* factorial(num-1));
}

console.log("Factorial de 4 = " + factorial(4));

//+++++++++ Rest Parameters ++++++++++

//(parameters) => operation;
//(param1, param2) => {

//return data
//};

function sum( a, b, ...resto){
    let suma = a+b
    resto.forEach(dato => {suma+= dato;});
    return suma;
}

console.log("El resultado de sumar varios numeros  es: " + sum(2,3,5,7,3));