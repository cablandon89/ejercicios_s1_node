const reverseInt = (number) => {
    if(typeof number === 'number' ){

        let numArray = String(number).split('').reverse();
        numArray = parseInt(numArray.join(''));
        if(number < 0){
            numArray = numArray * -1;
        }
        return numArray;
    }
    throw new Error("Error: Tipo de dato no admitido.");
}

module.exports = {
    reverseInt
}