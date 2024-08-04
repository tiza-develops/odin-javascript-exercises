const sumAll = function() {

};

function range(num1,num2) {
  let array = [];
  for (let i = num1; i <= num2; ++i) {
    array.push(i);
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

console.log(sum(range(1,5)));

// Do not edit below this line
module.exports = sumAll;
