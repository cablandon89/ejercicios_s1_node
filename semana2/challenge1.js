function twoSums(numbs, target) {
  for(let i = 0; i < numbs.length; i++){
    for(let j = 0; j <numbs.length; j++){
      //console.log(`[${numbs[i]} + ${numbs[j]}] = ${numbs[i] + numbs[j]}`);
      if(j != i && (numbs[i] + numbs[j]) === target){
        return [i,j];
      }
    }
  }
}

module.exports = twoSums;