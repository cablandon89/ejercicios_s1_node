function arrayOfMultiples (num, length) {
  let result = [num];
  for(let i = 2; i <= length; i++) {
    result.push(num * i);
  }
  return result;
}
module.exports = arrayOfMultiples;