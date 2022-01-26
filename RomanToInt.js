/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  // Substract Cases are taken care of by substituing them with our own new literals 
   // A = 4 // B = 9 // E = 40 // F = 90 // G = 400 // H = 900
  var myOwnLiteral = s.replace("IV", "A")
      .replace("IX", "B")
      .replace("XL", "E")
      .replace("XC", "F")
      .replace("CD", "G")
      .replace("CM", "H");
  
  var valueLiteral = myOwnLiteral.split("");
  var value = 0;
  valueLiteral.forEach(function(literal) {
  switch(literal) {
      case 'M':
          value += 1000;
          break;
      case 'D':
          value += 500;
          break;
      case 'C':
          value += 100;
          break;
        case 'L':
          value += 50;
          break;
      case 'X':
          value += 10;
          break;
      case 'V':
          value += 5;
          break;
      case 'I':
          value += 1;
          break;
      case 'A':
          value += 4;
          break;
      case 'B':
          value += 9;
          break;
      case 'E':
          value += 40;
          break;
      case 'F':
          value += 90;
          break;
      case 'G':
          value += 400;
          break;
      case 'H':
          value += 900;
          break;
      default:
          break;
      }
  });
  return value;
};