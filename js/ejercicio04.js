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
        resultado[i] = Math.random()* (max-min)+min;
    }
    return resultado;
}

