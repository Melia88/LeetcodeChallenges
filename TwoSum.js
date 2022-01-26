/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var successFlag = 0;
 var result = new Array(2);
 
 function recursiveAddingFunction (nums, cursorIndex, addingCursor, targetSum) {
     var currentSum = 0;
     successFlag = 0;
     for(let i = addingCursor; i < nums.length; i++) {
         currentSum = nums[cursorIndex] + nums[i];
         console.log("CurrentSum is " + currentSum + "TargetSum is " + targetSum);
         if (currentSum == targetSum){ 
             result= [cursorIndex, i];
             successFlag = 1;
            // console.log("Helper function found a solution");
             //console.log(nums[cursorIndex] + " + " + nums[i] + " = " + currentSum);
             break;
         } else {
             successFlag = 0;
         }
     }
   return result;
 }
 var twoSum = function(nums, target) {
     var solution = '';
     successflag = 0;
     for (let adding = 0; adding < nums.length - 1 ; adding++) {
         var added = adding + 1;
        console.log("Running method with inputs " + adding + " and " + added);
         solution = recursiveAddingFunction(nums, adding, added, target);
         if (successFlag) {
             console.log(solution);
             console.log("-----------------------");
             break; 
         }
     }
     return solution;
     
 };