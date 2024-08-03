const removeFromArray = function(array, ...elements) {
  for (let element of elements) {
    while (array.includes(element)) {
      let index = array.indexOf(element);
      array.splice(index,1);
    }
  }
  return array;
};
let array = [1,2,2,2,3];
removeFromArray(array,2);
console.log(array);

// Do not edit below this line
module.exports = removeFromArray;
