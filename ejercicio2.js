// 1.
const jedi = {nombre: "Luke Skywalker", edad: 19};
jedi.edad = 25;
console.log(jedi);

// 2.
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

// 3.
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

let precioTotal = sable1.precio + sable2.precio;
console.log("El precio total de los sables es: " + precioTotal + " créditos.");

// 4.
let precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 0};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 0};

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("Nuevo precio final de " + nave1.nombre + ": " + nave1.precioFinal + " créditos.");
console.log("Nuevo precio final de " + nave2.nombre + ": " + nave2.precioFinal + " créditos.");
