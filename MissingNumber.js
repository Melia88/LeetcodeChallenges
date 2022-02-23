



/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  nums.sort((a, b) => a - b);
  let numberMatcher = 0;
  
  // Checking that the list of numbers starts at 0 
  // otherwise return 0 and stop function
  if (nums[0] !== numberMatcher) {
      return 0;
  }
  
  // Checking if we are missing a number in the middle
  for (let i = 1; i < nums.length; i++) {
      numberMatcher++;
      if (numberMatcher !== nums [i]){
          // Missing a guy in the middle return where 
          // numberMatcher wasn't the same
          return numberMatcher;
      }
  }
  // If we reach here that mean there was no missing number at
  // the start and in the middle just return the next exiting number
  return numberMatcher + 1;

};