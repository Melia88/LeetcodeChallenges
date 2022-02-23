/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
  var firstPositive = true;
  var prev, current, gap;
  var result = 1;
  
  // Numerical sort
  var copyA = nums.sort((a, b) => a - b);
  
  for (var i = 0; i < copyA.length; i++) {
      //skip negatives
      if (copyA[i] >= 1) {
          current = copyA[i];
          if (firstPositive) {
              firstPositive = false;
              prev = current;
              if (prev != 1) {
                  break;
              }
          }
          gap = current - prev;
          if (gap === 1 | gap === 0) {
              prev = current;
              result = prev + 1;
          } else {
              //there is a big gap
              break
          }
      }
  }
  return result;
  
};