/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function linkedList(arr){
  return arr.reduceRight((next, value) => ({value, next}), null);
}

var addTwoNumbers = function(l1, l2) {
    var firstLiteral = [2, 4, 3];
    var secondLiteral = [5, 6, 4];
    var firstNumber = parseInt(firstLiteral.reverse().join('').toString());
    var secondNumber = parseInt(secondLiteral.reverse().join('').toString());
    var result = firstNumber + secondNumber;
    /************* GREAT METHOD */
    var resultArray = Array.from(String(result), Number).reverse();
    
    console.log(result);
    console.log(resultArray);
   // console.log(firstLiteral.join(''));
    return linkedList(resultArray);
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 class Node {
  constructor(data) {
      this.data = data
      this.next = null                
  }
}

class ListNode {
  constructor(head = null) {
      this.head = head
  }
}

function insertFirst(data) {
  this.head = new Node(data, this.head);
  this.size++;
}

function convertListToArray(linkedlist) {
  console.log(linkedlist);
  //let numberArray = new Array(linkedlist.length);
  //let current = linkedlist[0];
  linkedlist.forEach((e) => {
      console.log(e);
  })
  //console.log(current);
  // while(current) {
  //   console.log(current.data);
  //   current = current.next;
  // } 
}

var addTwoNumbers = function(l1, l2) {
  var firstHead = new Node(0);
  var secondHead = new Node(0);
  
  firstHead.next = l1;
  secondHead.next = l2;
  
  convertListToArray(firstHead.next);
//     var firstLiteral = [2, 4, 3];
//     var secondLiteral = [5, 6, 4];
//     var firstNumber = parseInt(firstLiteral.reverse().join('').toString());
//     var secondNumber = parseInt(secondLiteral.reverse().join('').toString());
//     var result = firstNumber + secondNumber;
//     var resultArray = Array.from(String(result), Number).reverse();
  
//     console.log(result);
//     console.log(resultArray);
  
//    // const newArr = resultArray.map(item => new ListNode(item));
//     let head = new ListNode(resultArray[0]);
  
  
//     for (let i = 1; i < resultArray.length; i++) {
//         let nextNode = new ListNode(resultArray[i]);
//         if (i == 1 ) {
//             //First Connect
//             head.next = nextNode;
//         } else {
//             nextNode.next = "happy";
//         }
      
//     }
  //console.log(newArr);
 // let list = new LinkedList(ne)
 // console.log(firstLiteral.join(''));
 // return linkedList(resultArray);
  return l1;
};
  
// function linkedList(arr){
//   return arr.reduceRight((next, value) => ({value, next}), null);
// }




