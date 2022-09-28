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
//let comparacion = edad ===25 ? "es igual": edad>24? "mayor" : "menor";
//console.log(`La edad es ${comparacion} a 25`);
console.log(`La edad es ${ edad===25 ? "es igual" : (edad>24 ? "mayor" : "menor")} a 25`);

//++++++++++++Condicional if, else if, else++++++++++++++++/
/**
 * sintaxis:
 * 
 *          if(condicionVerdadera) {
 *              instrucciones:              
 *             }
 *          else if (otraCondicion){
 *          }
 *          else if(otraCondicion){
 *          }
 *          else{
 *              instrucciones;
 *          }
 */

console.log("=== uso de if, else if, else =====");
edad=30;

if(edad> 25){
    console.log("La edad es mayor a 25");
} else if (edad === 25){
    console.log("La edad es 25");
} else console.log("La edad es menor a 25");


if (edad === 25) comparacion ="igual";
else if(edad>24) comparacion = "mayor";
else comapracion ="menor";
 
console.log (`(claru) La edad es ${comparacion} a 25` );;

//************* Conditional switch+++++++++++
/**
 * sintaxis:
 *          switch (expresion){
 *             case valor1:
 *                      instrucciones;
 *                      break;
 *             case valor2:
 *                      instrucciones;
 *                      break;
 *              case valor:
 *                      instrucciones;
 *                      break;
 *              default:
 *                      instrucciones;
 *              }
 */

edad = 25;
comparacion ="";

//Las edades seran desde 24 a 28
switch (edad){
    case 25:
        comparacion = "es igual";
        break;
    case 24:
        comparacion = "es menor";
        break;
    case 26:
        
    case 27:
        
    case 28:
        comparacion = "es mayor";
        break;
    default:
        comparacion = "No se puede saber";
        
}

console.log (`(switch)La edad es ${comparacion}a 25`)

let valor = Math.sign(25 - edad);

switch (valor) {
    case -1:
        comparacion = "mayor";
        break;
 
    case 1:
        comparacion = "menor";
        break;
    case 0:
        comparacion = "igual";
        break;
}

console.log(`La edad es ${comparacion} a 25.`);



let valorr = Math.sign(25 - edad);//math.sign solo entrega -1, 1 o sero p

switch (valor) {
    case -1:
        comparacion = "mayor";
        break;
 
    case 1:
        comparacion = "menor";
        break;
    case 0:
        comparacion = "igual";
        break;
}

console.log(`La edad es ${comparacion} a 25.`);




let numeroMes = 12;
let estacion = "", mes = "";

switch (numeroMes) {
  case 1:mes="Diciembre"
  case 2:mes= "Enero"
  case 3:mes="Febrero"
    estacion = "Invierno";
    break;
  case 4:mes="Marzo"
  case 5:mes="Abril"
  case 6:mes="Mayo"
    estacion = "Primavera";
    break;
  case 7:mes ="Junio"
  case  8:mes="Julio"
  case 9:mes="Agosto"
    estacion = "Verano";
    break;
  case 10:mes="Septiembre"
  case 11:mes="Octubre"
  case 12:mes="Noviembre"
    estacion = "Otoño";
    break;
}

console.log("El mes de " + mes + " se encuentra en la estación " + estacion);

numeroMes = 12;
estacion = "";
mes = "";

if (numeroMes === 12 || numeroMes === 1 || numeroMes === 2) {
    estacion = "Invierno";
    if (numeroMes === 12) mes = "Diciembre";
    else if (numeroMes === 1) mes = "Enero";
    else mes = "Febrero";
  }
  else if (numeroMes >= 3 && numeroMes <= 5) {
    estacion = "Primavera";
    if (numeroMes === 3) mes = "Marzo";
    else if (numeroMes === 4) mes = "Abril";
    else mes = "Mayo";
  }
  else if (numeroMes >= 6 && numeroMes <= 8) {
    estacion = "Verano";
    if (numeroMes === 6) mes = "Junio";
    else if (numeroMes === 7) mes = "Julio";
    else mes = "Agosto";
  }
  else if (numeroMes >= 9 && numeroMes <= 11) {
    estacion = "Otoño";
    if (numeroMes === 9) mes = "Septiembre";
    else if (numeroMes === 10) mes = "Octubre";
    else mes = "Noviembre";
  }
  else {
    estacion = "No se encontro";
    mes = "No se encontro";
  }
  console.log("(Alan)El mes de " + mes + " se encuentra en la estación " + estacion);



  let online = true;
  let active = true;

  /* if(online || active) {
      console.log('James');
  } */

  online && active && console.log('james')
  