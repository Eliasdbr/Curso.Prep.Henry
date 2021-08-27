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
  var letrasContadas = {};
  while (string.length > 0) {
    var frstChar = new RegExp(string[0],"g");
    var arrMatches = string.match(frstChar).length
    if (arrMatches !== 0) letrasContadas[string[0]] = arrMatches; 
    string = string.replace(frstChar,"");
  } 
  return letrasContadas;  //Devuelve un objeto de más...
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var str1 = "";
  var str2 = "";
  for (var i=0; i<s.length; i++) {
    if (s[i] === s[i].toUpperCase()) str1 += s[i];
    else str2 += s[i];
  }
  return str1 + str2;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var fraseInvertida = "";
  var palabras = str.split(" ");
  for (var i=0; i<palabras.length; i++) {
    var plbrInv = "";
    for (var j=palabras[i].length-1; j>=0; j--) {
      plbrInv += palabras[i][j];
    }
    fraseInvertida += plbrInv + " ";
  }
  return fraseInvertida.trim();
  /*
  Mejor forma:

  }
  */
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

  return cadena.replace(/[abc]/g,"");
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

