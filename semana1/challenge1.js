const reverseString = (str) => {
    //Validar que str sea un string
    if(typeof str === 'string' && str.length > 1 && str.length < 15){
        //Se trata de un argumento valido
        let charArray = str.split('').reverse();
        return charArray.join('');
    }

    throw new Error("Argumento no valido");
}

module.exports = {
    reverseString
}