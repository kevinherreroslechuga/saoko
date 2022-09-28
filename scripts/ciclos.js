console.log("Sesion J04 Ciclos");


/**
 * La razon del por que se recomiendo declarar 
 * un arreglo u objeto con const, es para evitar
 * que se cambie el *tipo* de dato:
 * 
 */
 let arrayLet = [1,2,3,4];
 const myArray = [10, 11, 12];
//arrayLet = "Holi Crayoli";
 myArray.push("Holi Crayoli 2");//indice 3
myArray[myArray.length] = "Holi crayoli 3";//indice 4
myArray[5]="xd"; //indice 5

//console.log(arrayLet);
myArray[3]= "Mel";//seremplaza holi crayoli2

function reemplazar(myArray){
for (let index = 0; index < myArray.length; index++){
    if(myArray[index] === "Holi crayoli 3") myArray[index] = "omar";
}
return myArray;
}


console.log(reemplazar(myArray));
console.log(reemplazarOInsertar(myArray, "Holi crayoli 3", "Rodrigo"));
console.log(myArray);
//---------------------------------------------------------------------
/**
 * FIFO:
 *          E3   E2 E1 --->  [ arreglo ] --->  E3   E2  E1
 * LIFO:
 *          E3  E2  E1 --->  [ arreglo ] --->   E3  E2  E1
 */

console.log("#### FIFO LIFO #####")
                    //    0         1          2
const perecederos = ["manzanas", "quesos", "fresas"];

//Agregamos elemento al inicio del arreglo:
perecederos.unshift("leche");//sera mi 4to elemento
console.log(perecederos);
//sacamos el primer elemento del arreglo:
console.log("Elemento eliminado: " + perecederos.shift())
console.log(perecederos));
//Sacamos el ultimo elemento en entrar
console.log("Elemento eliminado: " + perecederos.shift());
console.log(perecederos);

//LIFO
console.log("/n ----- LIFO --------");
const tienda = [...perecederos];//se clona arreglo const tienda = perecederos.slice();
// const tienda = perecederos;
console.log(tienda);
//Arreglamos un elemento al final del arreglo:
tienda.push("el amor"); // sera mi 4to elemento
console.log(tienda);
//Sacamos el ultimo elemento en entrar
console.log("Elemento eliminado: " + tienda.pop());
console.log(tienda);
//-------------------------------------------------
//Modificar el arreglo
//[2, 3, 4, 5, 6]; x 2 = [4,8,10,12]

const arrayNumbers = [1,2,3,4,5];
let total = []

function duplicar (array1){
    let total =[ ...array1];
    for (let i=0; i<array1.length; i++){
        //array1[i]*= 2;//  array[i] = array[i] * 2;
        //total.push(array1[i] * 2);
        total[i]*=2;
    }
    return total;
}

const duplicated = arrayNumbers.map(num => num * 2)

console.log("original " + arrayNumbers);
console.log(duplicar (arrayNumbers));
console.log(duplicated);


//------------------------------------------------
console.log("###Calcular el factorial de un numero ###");

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  factorialize(5);

  // se realiza con una recursion
  function factorialOmar(num) {
    if (num <= 1) {
        retrun 1;
    } else {
        return num * factorialOmar(num - 1);
    }
  }

function factorialVictor(n){
    return (n == 1 || n == 0) ? 1 : n * factorialVictor (n - 1);
}
console.log(factorial(m));
console.log(factorialOmar(m));
console.log(factorialVictor(m));
//-----------------------------------------------------------
console.log('/n ##### De la palabra "Pepe Pecas Pica Papas" saber cuantas "e"(3) tiene ######');
function countE(word) {
    const arrayOfChar = word.split("")
    const arrayOfLetterE =  arrayOfChar.filter((char) => char === "e")
    return arrayOfLetterE.length
  }
console.log(countE("Pepe Pecas Pica Papas pero"));

console.log(Array.from(`pepe pecas pica papas pero`).map(element=> (element == "e") * 1 ).reduce((a,b)=>a+b));
  console.log('/n #### De la palabra "Pepe pecas pica papas" saber cuantas "e" (3) tiene ####');
