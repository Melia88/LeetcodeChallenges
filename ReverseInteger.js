/**
 * @param {number} x
 * @return {number}
 */

 function convertArrayToInt(array) {
  return parseInt(array.join('').toString());
}

var reverse = function(x) {
  var sign = 1;
  var number = x;
  if (number < 0) {
      sign = -1;
      number *= sign; // To make it positive
  }
  
var arrayX = Array.from(String(number), Number).reverse();
  // Base case no need for reverse 
  if (arrayX.length == 1) {
      return x;
  }  else if (arrayX.length >= 10) { // Check for boundary case
 
      var shiftedInteger = convertArrayToInt(arrayX.slice(0, 9));
      var shiftedDecimal = parseFloat(arrayX[9])/ 10.0;
      
      var shiftedNum = shiftedInteger + shiftedDecimal;

      if ((( sign == 1) && (shiftedNum > 214748364.7)) || ((sign == -1) && (shiftedNum > 214748364.8))) {
              return 0;
      }  
  }
  // Everything is within bounds
 return convertArrayToInt(arrayX) * sign;
};