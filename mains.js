// 1çrea un generador de pirámides de asteriscos. El programa debe pedir al usuario la altura de la pirámide y mostrarla en la consola.

const pyramid = () => {
  let z = '*';
  for (let i = 0; i < 5; i++) {
    for (let z = 1; z <= 6; i++) {
      console.log(z + 1);
    }
  }
  return z;
};

// 2Crea una función que genere una contraseña aleatoria con letras mayúsculas,
//letras minúsculas y números. Por parámetros se indicara la longitud, con un minimum de 6 caracteres.

export const password = (number1) => {
  let abcd =
    'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ01234567890123456789';
  let password = [''];
  for (let i = 0; i < number1; i++) {
    let azar = abcd[Math.floor(Math.random() * abcd.length)];
    password.push(azar);
  }
  return password.join('');
};
// 3 Crea una función que filtre un array de nombres y devuelva solo los nombres con menos de cierta longitud.

export const names = (minimo, nombres) => {
  let result = [];
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length <= minimo) {
      result.push(nombres[i]);
    }
  }
  return result;
};
// Crea una función que sume todos los números de un array y devuelva también la media, mediana, moda y la suma total.

//Crea una función que cuente la cantidad de palabras en una frase.
export const count1 = (frase) => {
  let palabras = frase.split(' ');
  return palabras.length;
};

//Crea una función que ordene un array de nombres alfabéticamente.

export const abcd = (nombres) => {
  let orden = nombres.sort();
  return orden;
  // return nombres.sort();
};

//Generador de números pares e impares: Escribe una función que tome un número como argumento y genere dos arrays, uno con los números pares
//hasta ese número y otro con los números impares hasta ese número.

export const evensOdds = (numero) => {
  let evens = [];
  let odds = [];
  for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }

  return { evens, odds };
};

//Crea una función que reciba un texto y devuelva el mismo texto con todas las vocales acentuadas reemplazadas
// por vocales sin acentuar y todas las vocales sin acentuar reemplazadas por vocales acentuadas.
