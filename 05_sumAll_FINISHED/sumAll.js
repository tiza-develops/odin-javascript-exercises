function range(num1,num2) {
  let array = [];
  if (num1 < num2) {
    for (let i = num1; i <= num2; ++i) {
      array.push(i);
    }
  } else {
    for (let j = num2; j <= num1; ++j) {
      array.push(j);
    }
  }
  return array;
};

function sum(array) {
  let total = 0;
  for (const element of array) {
    total += element;
  }
  return total;
}

const sumAll = function(arg1,arg2) {
  if (Number.isInteger(arg1) && arg1 > 0 && Number.isInteger(arg2) && arg2 > 0) {
    return sum(range(arg1,arg2));
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
