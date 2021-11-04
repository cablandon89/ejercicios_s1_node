function divisibleByLeft(n) {
    const numArray = String(n).split('').map(Number);
    let result = [false];
    for(let i = 0; i < numArray.length; i++) {
      if(i !== 0){
        result.push((numArray[i] % numArray[i-1]) == 0);
      }
    }
    return result;
}
module.exports = divisibleByLeft;