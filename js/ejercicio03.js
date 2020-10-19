const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKET";

/**
 * genera la letra de un dni español
 * @param num parte numerica del dni justos 8 digitos
 * @returns {string} letra generada
 */
function genLetraDNI(num){
    /**
     * este patron hara coincidencia con un numero de 8 digitos justos
     * @type {RegExp}
     */
    let re = new RegExp("^[0-9]{8}$")

    let resultado;
    //se aplica la expresion regular en caso que el formato se correcto se calcula la letra en el contrario mensaje error
    if(re.test(num)){
        resultado = LETRAS.charAt(num%23);
    }else{
        resultado = "error de formato";
    }
    return resultado;
}
console.log(genLetraDNI(78716585));