class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node (data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if(!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    if(index > 0 && index > this.size) {
      this.insertLast(data); //you can also just return
    } else if (index === 0) {
      this.insertFirst(data);
    }else {
     const node = new Node(data);
     let current, previous;
     //
     current = this.head;
     let count = 0;
     while (count < index) {
       previous = current; //Node before index
       count++;
       current = current.next //Node after index
     }
     node.next = current;
     previous.next = node;
     this.size++; 
    }
  }

  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while(current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // Remove at index
  removeAt(index) {
    if(index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while(count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  //Clear list 
  clearList() {
    this.head = null;
    this.size = 0;
  }
  //Print List
  printListData() {
    let current = this.head;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

//n1.next = n2;
const n1 = new Node(100);
const n2 = new Node(200);
console.log(n1);


const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 2);

ll.printListData();

console.log(ll);
ll.getAt(1);
ll.removeAt(0);
console.log("------");
ll.printListData();
ll.clearList();
ll.printListData();
console.log(ll);