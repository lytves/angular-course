// Uso de Let y Const
let nombre: string = "Ricardo Tapia";
let edad: number = 23;

const PERSONAJE = {
  nombre: nombre,
  edad: edad
};

// Cree una interfaz que sirva para validar el siguiente objeto
let batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};

// RESOLVED
interface Batman {
  nombre: string;
  artesMarciales: String[];
}

let myBatman: Batman = {
  nombre: "name",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};

// Convertir esta funcion a una funcion de flecha
function resultadoDoble(a, b) {
  return (a + b) * 2;
}

// RESOLVED
let resultadoDobleResolved = (a: number, b: number) => (a + b) * 2;

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
  var mensaje;
  if (poder) {
    mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  } else {
    mensaje = `${nombre} tiene un ${poder}`;
  }
}

let getAvengerResolved = (
  nombre: string,
  poder?: string,
  arma: string = "arco"
) => {
  let mensaje: string;
  if (poder) {
    mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  } else {
    mensaje = `${nombre} tiene un ${poder}`;
  }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
  constructor(public base: number, public altura: number) {}

  calc(): number {
    return this.base * this.altura;
  }
}
