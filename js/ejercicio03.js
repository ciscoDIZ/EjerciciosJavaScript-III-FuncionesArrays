const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKET";
function genLetraDNI(num){
    let re = new RegExp("[0-9]{8}")
    let resultado;
    if(re.test(num)){
        resultado = LETRAS.charAt(num%23);
    }else{
        resultado = "error de formato";
    }
    return resultado;
}
console.log(genLetraDNI(78716585));