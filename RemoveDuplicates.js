/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(numbers) {
    //RESETTING SHARED VARIABLES
    var currentNum = numbers[0];
    var endCursorIndex = 1;
    var newEncounterFlag = 0;
    
    for (let i = 1; i < numbers.length; i++) {
        if(currentNum != numbers[i]) {
            newEncounterFlag = 1;
            currentNum = numbers[i];
            numbers[endCursorIndex++] = currentNum;
        } else {
            newEncounterFlag = 0;
        }      
    }
    return endCursorIndex;
}