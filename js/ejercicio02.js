function media(num){
    let validos=0, ignorados=0;
    if(arguments.length > 0) {
        //con esta expresión discrimino cualquier cosa que no sean digitos habiendo al menos uno sin mite de ocurrencias.
        let re = new RegExp("[0-9]+");
        let sum=0;
        for (let i = 0; i < arguments.length; i++) {
            if(re.test(arguments[i])){
                sum += arguments[i];
                validos++;
            }
        }
        return sum / validos;
    }else {
        return "error";
    }
}

console.log(media(8,7,5,4,7,8,5,2,1,4,77, "b"));