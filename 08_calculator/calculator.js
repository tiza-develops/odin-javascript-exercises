const add = function(summand1, summand2) {
	return summand1 + summand2;
};

const subtract = function(minuend, substrahend) {
  return minuend - substrahend;
};

const sum = function(summands) {
  const result = summands.reduce((total,currentItem) => {
    total + currentItem;
  },0);
  return result;
};


const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
