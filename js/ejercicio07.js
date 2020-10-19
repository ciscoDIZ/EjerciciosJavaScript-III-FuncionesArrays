/**
 * funcion que genera array de n elementos entre los valores x e y
 * @param elementos: numero de elementos que queremos almacenar por defecto 10
 * @param min: valor minimo por defecto 10
 * @param max: valor maximo por defecto 200
 * @returns {[]} array de float
 */
function genArray(elementos=10,min=10,max=200){
    let resultado = [];
    for (let i = 0; i < elementos; i++) {
        resultado[i] = Math.trunc(Math.random()* (max-min)+min);
    }
    return resultado;
}
let array = genArray(15,-10,20);
let nuevoArray = [];

//imprime en cosola
function imprimirConsola() {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 10) {
            console.log("se añade " + array[i] + " al final del array. longitud: " + nuevoArray.push(array[i]));
        } else if (array[i] > 0 && array[i] < 10) {
            console.log("se añade " + array[i] + " al principio del array. longitud: " + nuevoArray.unshift(array[i]));
        } else if (array[i] <= 0 && array[i] > -5) {
            console.log("se elimina el ultimo elemento del array: " + array.pop() + ". lonhitud: " + nuevoArray.length);
        } else if (array[i] <= -5) {
            console.log("se elimina el primer elemento del array: " + array.unshift() + ". lonhitud: " + nuevoArray.length);
        }
    }
}

imprimirConsola();
console.log("array inicial")
array.forEach(e=>console.log(e))
console.log("\narray generado")
nuevoArray.forEach(e=>console.log(e))