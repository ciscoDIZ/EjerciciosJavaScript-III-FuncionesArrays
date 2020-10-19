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

/**
 *usado el paradigma de la programacion funcional se busca el valo maximo y minimo de un array junto con sus indices
 * @param array: array de number
 * @returns {{index: number, value: *}[]} array de objetos json que estructuran los datos recabados
 */
function maxMinIdx(array) {
    let max = array.reduce((n,m)=>Math.max(n,m)), min = array.reduce((n,m)=>Math.min(n,m));
    let maxIdx = array.indexOf(max), minIdx = array.indexOf(min);
    /*array.filter((f)=> f ===
        array.reduce((n,m)=>Math.max(n,m)) ||
        array.reduce((n,m)=>Math.min(n,m)))
        .flatMap((v) => v.concat(array.indexOf(v)));*/
    return Array.of({value: max, index: maxIdx}, {value: min, index: minIdx});
}

let array = maxMinIdx(genArray(20,-100,100));
console.log(array.length)
console.log(array.forEach((n)=>console.log("valor: "+n.value+" indice: "+n.index)));
