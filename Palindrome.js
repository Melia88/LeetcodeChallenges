/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var answer = false;
    var arrayEquivalent = Array.from(String(x), Number);
    if (x < 0) {
        answer = false;
    } else if (arrayEquivalent.length == 1){
        answer = true;
    }else {
        var startIndex = 0;
        var endIndex = arrayEquivalent.length - 1;
        var middle = Math.floor(arrayEquivalent.length / 2);
        for (startIndex; startIndex < middle; startIndex++) {
            if (arrayEquivalent[startIndex] != arrayEquivalent[endIndex]) {
                answer = false;
                break;
            }
            answer = true;
            endIndex--;
        }
    }
    return answer;
};


/* Alternative solution using array's push and pop functions */
// Stacks LIFO
// Simple structure that is already supported by JS
var stackOfLetters = []; // This is the stack
var word = "happy";
var rword = "";

//put letters of works into stack
for (var i = 0; i < word.length; i++) {
  stackOfLetters.push(word[i]);
}

//pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += stackOfLetters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome.");
}else {
  console.log(word + " is not a palindrome.");
}

// Alternative without changing to string
public class Solution {
  public bool IsPalindrome(int x) {
      // Special cases:
      // As discussed above, when x < 0, x is not a palindrome.
      // Also if the last digit of the number is 0, in order to be a palindrome,
      // the first digit of the number also needs to be 0.
      // Only 0 satisfy this property.
      if(x < 0 || (x % 10 == 0 && x != 0)) {
          return false;
      }

      int revertedNumber = 0;
      while(x > revertedNumber) {
          revertedNumber = revertedNumber * 10 + x % 10;
          x /= 10;
      }

      // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
      // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
      // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
      return x == revertedNumber || x == revertedNumber/10;
  }
}

 
public boolean isPalindrome(int num){
  if(num < 0) return  false; 
  int reversed = 0, remainder, original = num;
  while(num != 0) {
       remainder = num % 10; // reversed integer is stored in variable
       reversed = reversed * 10 + remainder; //multiply reversed by 10 then add the remainder so it gets stored at next decimal place.
       num  /= 10;  //the last digit is removed from num after division by 10.
   }
   // palindrome if original and reversed are equal
   return original == reversed;
}