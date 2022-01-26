// Stacks LIFO
// Simple structure that is already supported by JS
class StackStructure  {
  constructor () {
    this.count = 0;
    this.storage = {};
  }



//Adds a value onto the end of the stack
push = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

// Removes and returns the value at the end of the stack
pop = function() {
  if(this.count === 0) {
    return undefined;
  }
  this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}

size = function() {
  return this.count;
}

peek = () => {
  return this.storage[this.count-1];
}
}
var myStack = new StackStructure();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("Codingletters");
console.log("Stack size is " + myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());


///////////////////////////////////////////////////

// var stackOfLetters = []; // This is the stack
// var word = "happy";
// var rword = "";

// //put letters of works into stack
// for (var i = 0; i < word.length; i++) {
//   stackOfLetters.push(word[i]);
// }

// //pop off the stack in reverse order
// for (var i = 0; i < word.length; i++) {
//   rword += stackOfLetters.pop();
// }

// if (rword === word) {
//   console.log(word + " is a palindrome.");
// }else {
//   console.log(word + " is not a palindrome.");
// }