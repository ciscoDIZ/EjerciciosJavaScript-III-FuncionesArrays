/**
 *genera array no repetido pero esta vez informa si el numero a ingresar es repetido en tal caso no lo añade de forma
 * adicional informa las veces que se ha repetido cada numero
 * @param longitud: longitud del array resultante
 * @param min: valor minimo
 * @param max: valor maximo
 * @returns {[]} array de number
 */
function genArrayNoRep(longitud,min,max){
    let i=0;
    let j=0;
    /**
     * array resultante
     * @type {{integer}[]}
     */
    let array = [];
    /**
     * array de repeticiones
     * @type {{valor:{integer} | repeticion: {integer}}[]}
     */
    let repeticiones= [];
    let msj="";
    while(i<longitud){
        let num = Math.trunc(Math.random()*(max-min)+min);
        if(!array.find(f=>f===num)){
            console.log("el numero "+num+" no esta repetido y se añade");
            array[i] = num;
            i++;
        }else {
            if(repeticiones.find(f=> f.valor === num)){
                let obj = repeticiones.find(f=> f.valor === num);
                obj.repeticion++;

            }else{
                repeticiones[j] = {valor: num, repeticion: 1};
                j++;
            }
            console.log(msj);
            i++;
        }
    }
    repeticiones.forEach(f=> console.log("el numero "+f.valor+" esta repetido "+f.repeticion+" veces y no se añade"))
    return array;
}
genArrayNoRep(50,10,20).forEach(f=>console.log(f));