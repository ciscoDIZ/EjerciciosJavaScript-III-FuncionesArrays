/**
 *genera array no repetido
 * @param longitud: longitud del array resultante
 * @param min: valor minimo
 * @param max: valor maximo
 * @returns {[]} array de number
 */
function genArrayNoRep(longitud,min,max){
    let i=0, array = [];
    while(i<longitud){
        let num = Math.trunc(Math.random()*(max-min)+min);
        if(!array.find(f=>f===num)){
            console.log("el numero "+num+" no esta repetido y se añade");
            array[i] = num;
            i++;
        }else {
            console.log("el numero "+num+" esta repetido y no se añade");
            i++;
        }
    }
    return array;
}
genArrayNoRep(50,10,20).forEach(f=>console.log(f));

