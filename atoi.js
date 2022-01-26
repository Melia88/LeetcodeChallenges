/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  //Forming my Regex below with these requirements
  // a string that starts with these ^
  // ignore leading space char (don't ignore ``)
  // negative if '-' present
  // positive if nothing or '+'
  
  let numberRegex = '^[ ]*[-|+]?[0]*([0-9]{1,11})';

  let sign = s.search('-') >= 0 ? -1 : 1;  
  
  var numberFound = s.match(numberRegex);

  // if no match return 0
  if (numberFound === null) {
      return 0;
  }else { // we have a number
      var result = parseInt(numberFound[0]);
      // Check if number is bigger than 32 bit integer and if so clamp
      if ((sign === -1) && (result < -2147483648)) {
          return -2147483648;
      }
      if ((sign === 1) && (result > 2147483647)) {
          return 2147483647;
      }

      return result;
  }
  
};