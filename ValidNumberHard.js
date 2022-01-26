/**
 * @param {string} s
 * @return {bo(olean}
 */
 var isNumber = function(s) {
  // Forming my regex
  // Optional + or -
  // and 3 regex components
  // one or more digit then optional .
  // one or more digit followed by . then one or more digits
  // a dot followed by one or more digits
  
  let justPredeedingDigits = '^[+|-]?[0-9]+\.?[0-9]*([e|E][+|-]?[0-9]+)*$';
  let twoSideDigits = '^[+|-]?[0-9]+\.[0-9]+([e|E][+|-]?[0-9]+)*$';
  let justSuffixDigits = '^[+|-]?[0-9]*[\.][0-9]+([e|E][+|-]?[0-9]+)*$'
  let zeroECase = '^[0-9]+([e|E][+|-]?[/D]*)+$';
  //let zeroECase = '^[0-9]'[] 53k WONT GO thru 
  
  //let notSpecialCase = s.match(zeroECase);
 console.log("Are you the zeroCase " + s.match(zeroECase));
 let numCheck = s.match(justPredeedingDigits) || s.match(twoSideDigits) || s.match(justSuffixDigits);
  numCheck = (s.match(zeroECase) != null) ? null : numCheck;
  if (numCheck === null) {
      console.log("False for " + s);
      return false;
  }else { // we have a number
      console.log("tRUE for " + s);
      return true;
  }
};