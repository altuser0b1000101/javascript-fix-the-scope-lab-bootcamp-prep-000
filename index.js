var animal = 'dog';

function myAnimal() {
  // You should not need to modify this function
  return animal;
}
function yourAnimal(animal) {
animal = 'cat';
return animal;
}

function add2(n) {
return n + 2;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
var theFunk = 'FUNKY!';
