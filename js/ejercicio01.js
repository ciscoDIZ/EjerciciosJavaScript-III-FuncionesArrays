/**
 * cuenta los caracteres que coincidentes
 * @param string: cadena de texto en la cual se quiere buscar
 * @param char: caracter que se quiere buscar
 * @returns {number} ertorna el numero de caracteres
 */
function contarCaracter(string, char){
    /*con esta expresión regular controlo que solo pueda haber un caracter que sea letra. */
    let re = new RegExp("^[a-zA-Z]$");
    //variable de retorno
    let contandoCaracter=0;
    if(re.test(char)){
        for (let i = 0; i < string.length; i++) {
            if(string.charAt(i) === char){
                contandoCaracter++;
            }
        }
    }else {
        contandoCaracter = "error el seundo parametro debe ser unico caracter";
    }
    return contandoCaracter;
}

console.log(contarCaracter("aaajiuoi","p"));