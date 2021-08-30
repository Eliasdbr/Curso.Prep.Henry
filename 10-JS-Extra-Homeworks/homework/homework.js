// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  for (x in objeto) {
    var elemento = [x,objeto[x]];
    array.push(elemento);
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  // Primer intento:
  // var letrasContadas = {};
  // while (string.length > 0) {
  //   var frstChar = new RegExp(string[0],"g");
  //   var arrMatches = string.match(frstChar).length
  //   if (arrMatches !== 0) letrasContadas[string[0]] = arrMatches; 
  //   string = string.replace(frstChar,"");
  // } 
  // return letrasContadas;
  // Segundo intento:
  var letrasContadas = {};
  var letrasSeparadas = string.split('');
  letrasSeparadas.forEach(elemento => {
    letrasContadas[elemento] = letrasSeparadas.reduce((acc,elemRepe) => {
      return acc + (+(elemRepe === elemento));
    },0);
  });
  return letrasContadas;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var parteMayus = "";  // Parte que contiene los caracteres en mayúsculas
  var parteMinus = "";  // Parte que contiene los caracteres en minúsculas
  s.split('').forEach(elemento => {     // Para cada letra del string:
    if (elemento === elemento.toUpperCase()) //Si el caracter actual no cambia al pasarlo a Mayúscula:
      parteMayus += elemento;           // lo mandamos a la parte de las mayúsculas
    else parteMinus += elemento;        // si cambia, era minúscula, por lo tanto, va a la parte de las minúsculas.
  });
  return parteMayus + parteMinus;       // Una vez terminamos de clasificar todas las letras, unimos las dos partes
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  var palabras = str.split(' ');
  var fraseFinal = palabras.map(palActual => {
    let palInv = [];
    palActual.split('').forEach(letraActual => {
      palInv.unshift(letraActual);
    });
    return palInv.join('');
  });
  return fraseFinal.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var digitos = numero.toString();
  var digsInv = digitos.split('').reverse().join('');
  if (digitos === digsInv) return "Es capicua";
  else return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  return cadena.replace(/[abc]/g,""); // Busca por 'a', 'b' o 'c' y los reemplaza por '' (los borra).
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  function ordena(elem1,elem2) {
    return elem1.length - elem2.length;
  }
  return arr.sort(ordena);
  // tambien:
  // return arr.sort((elem1, elem2) => elem1.length - elem2.length);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  function intersec(elemento) {
    return arreglo2.indexOf(elemento) !== -1;
  }
  return arreglo1.filter(intersec);
  // tambien :
  // return arreglo1.filter(elemento => arreglo2.indexOf(elemento) !== -1);
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

