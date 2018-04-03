'use strict';

let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

function decode(input) {
  let inputArr = input.split(' ');
  return inputArr.reduce(function(total, currentValue){
    if (currentValue.length === 3) {
      total += ' ';
    } else {
      total += currentValue[currentValue.length-1].toUpperCase();
    }
    return total; 
  }, '');
}

console.log(decode(input));