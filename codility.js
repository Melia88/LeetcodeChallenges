/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  // Remove all unwanted characters using a regex
  let transformedInput = s.toLowerCase().replace(/[^a-z0-9]+|\s+/gmi, "");
  let inputArray = transformedInput.split('');
  let reverseArray = inputArray.slice().reverse();

  for( let i of s) {//= 0; i < inputArray.length; i++) {
      if(inputArray[i] !== reverseArray[i]) {
          // this is not a palindrome if the input in reverse is not exactly 
          // the same as the original string 
          return false;
      }
  }
  // If we reach the end of the loop then all checks did not find any difference.
  // It is a palindrome
  return true;
  
};
console.log("Palindrome");
console.log(isPalindrome("ra"));
