/*
    Realizar una función que indicando un texto y un carácter (ambos obligatorios, comprobar que el segundo parámetro es
    realmente un único carácter), nos diga cuántas veces aparece el carácter en el texto.
*/
function contarCaracter(string, char){
    /*con esta expresión regular controlo que solo pueda haber un digito que sea letra. dando igual que */
    let re = new RegExp("^[a-zA-Z]$");
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