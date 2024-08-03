const removeFromArray = function(array, ...elements) {
  for (let element of elements) {
    if (array.includes(element)) {
      let index = array.indexOf(element);
      array.splice(index,1);
    } else {
      continue;
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
