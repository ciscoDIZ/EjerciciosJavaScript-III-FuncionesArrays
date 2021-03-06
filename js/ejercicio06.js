/*function genArray(elementos=10,min=10,max=200){
    let resultado = [];
    for (let i = 0; i < elementos; i++) {
        resultado[i] = Math.random()* (max-min)+min;
    }
    return resultado;
}*/

/**
 * funcion que a traves de recursion ordena un array.
 * tanto li como ls se usan para determinar la condición
 * de parada recursiva
 * @param array - conjunto de valores a ordenar
 * @param li - limite inferior de la recursión
 * @param ls limite superior de la recursión
 * void
 */
function ordenar(array, li, ls){
    if(li < ls){
        let pivote = intercambio(array, li, ls);
        ordenar(array, li, pivote-1);
        ordenar(array,pivote+1,ls);
    }
}

/**
 * funcion encargada del intercabio de valores en el array. adicionalmente, determina el pivote; variable
 * que representa el valor a comparar.
 * @param array - conjunto de valores a ordenar
 * @param li - limite inferior de la recursión
 * @param ls limite superior de la recursión
 * @returns {number} - nuevo pivote
 */
function intercambio(array, li, ls){
    let pivote = array[ls];
    let i = li-1;
    for(let j = li; j < ls; j++){
        if (array[j] < pivote){
            i++;
            let helper = array[i];
            array[i] = array[j];
            array[j]= helper;
        }
    }
    let helper = array[i+1];
    array[i+1] = array[ls];
    array[ls] = helper;
    return i+1;
}

let array = genArray();

ordenar(array,0, array.length-1);
console.log("array ordenado")
array.forEach(f=>console.log(f));

/**
 * desordena el array dado
 * @param array; array de enteros
 * void
 */
function desorenarArray(array){
    for (let i = 0; i <array.length; i++) {
        let posAleatoria = Math.trunc(Math.random()*array.length-1);
        let helper = array[posAleatoria];
        array[posAleatoria] = array[i];
        array[i] = helper;
    }
}
desorenarArray(array);

console.log("\narray desordenado")
array.forEach(a=>console.log(a));