var foo = 10 + '20'; //1020 correct 
console.log(foo);
let item = "i'm a lasagna hog".split("").reverse().join("");
console.log(item); // Correct
let left = 0.1 + 0.2; // float
let right = 0.3;
console.log(left + "!=" + right);
console.log(0.1 + 0.2 == 0.3); // true // wrong answer first half is a float number result 0.30000000004
//add(2, 5); // 7
let result = 2 + 5;
console.log(result);
//??????????
//add(2)(5); // 7

// window.foo || (window.foo = "bar"); // wrong window.foo = bar because (undefined || 'bar')
//console.log(window.foo);

// var foo = "Hello";
// (function() {
//   var bar = " World";
//   alert(foo + bar);
// })();
// alert(foo + bar); //correct error bar undefined

// console.log('one');
// setTimeout(function() {
//   console.log("inside timeout"); 
//   // To the rescue comes the setTimeout(). How does it help? Because by calling 
//   // long-executing code via setTimeout, you actually create 2 events: setTimeout 
//   // execution itself, and (due to 0 timeout), separate queue entry for the code being executed.
//   // This race existed because JavaScript has a single thread of execution that is shared 
//   // with page rendering. In effect, running JavaScript blocks the updating of the DOM.
//   console.log('two');
// }, 0);
// Promise.resolve().then(function() {
//   console.log("inside promise");
//   console.log('three');
// })
// console.log('four'); //wrong onefourthree...undefined...two


///1
(function(){
  var a = b = 3; //var a = b; and b = 3; 
})();

console.log("a defined? " + (typeof a !== 'undefined')); // false
console.log("b defined? " + (typeof b !== 'undefined')); // true
/** var a = (b = 3) 
And var statement applies only to a, and not to b. check the syntax of var

Therefore a will be defined in local scope and b will be defined in global
scope. Inside function both a and b are 3 but after function returns 
registered local variable (a) is deleted. Since b is defined in global 
scope it is not deleted. */


function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return // line is ended here ---- so foo2() will return undefined
  {
      bar: "hello"
  };
}
var array = [1,2,3,4,5];
var copyArray = [...array]; //ES6 equivalent to array.slice();
console.log(array);
var duplication = copyArray.concat(array);
console.log(copyArray);
console.log(duplication);