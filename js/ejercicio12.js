/**
 *sustitue arriba por abajo en la cadena dada
 * @param cadena cadena dada
 * @returns {string}
 */
function sustituirTexto(cadena){
    if(cadena ==="arriba"){
        cadena.replace("arriba", "abajo");
    }
    return cadena;
}

console.log(sustituirTexto("abajo"));