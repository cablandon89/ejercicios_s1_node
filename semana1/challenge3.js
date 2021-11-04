const capitalizeLetters = (str) => {
    if(typeof str === 'string'){
        //Se trata de un argumento valido
        const charArray = str.split(" ");

        for (let i = 0; i < charArray.length; i++) {
            charArray[i] = charArray[i].charAt(0).toUpperCase() + charArray[i].slice(1);
        
        }
        return charArray.join(" ");
    }

    throw new Error("Argumento no valido");
}

module.exports = {
    capitalizeLetters
}