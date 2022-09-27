console.log("Sesion JS03 Condicionales");

//+++++++++++++Declaracion de Bloque+++++++

let nombre = "Rafa";
let ciudad ="Guadalajara";

{
    let nombre = "Fer";
    let ciudad = "CDMX";  
    let apellido ="Palapa";
    console.log(`Mi nombre es ${nombre} ${apellido}, vive en ${ciudad}`);//Fer CDMX
}

console.log(`Participante: ${nombre}, que vive en ${ciudad}`);//Rafa GDL

//++++++++++++Condicional IF++++++++++

/**
 * Sintaxis:
 * if(condicionVerdadera) Instruccion;
 * 
 *          if(condicionVerdadera){
 *                Instrucciones;
 *           }
 */

let edad = 25;
console.log("Declaracion antes del if ***");

if (edad > 24) console.log("La edad es mayor a 25");
else {
    console.log("La edad es menor a 25");
    console.log("Seguimos evaluando");
}
console.log("<----Declaracion despues del if ***");

//++++++++++++ Operador ternario ++++++++++
//sintaxis: condicion?  condicion_verdadera : condicion_falsa;

console.log(`La edad es ${ edad>24 ? "mayor" : "menor"} a 25`);
console.log(`La edad es ${ edad===25 ? "es igual" : (edad>24 ? "mayor" : "menor")} a 25`);