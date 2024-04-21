type NodeType = Node | null | undefined;

class Node {
  val: number;
  next: NodeType;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: NodeType;
  tail: NodeType;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val: number) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.size++;
    return this;
  }

  pop() {
    let tempHead: NodeType = this.head;

    if (!tempHead) {
      console.log('Can not Pop, its empty');
      return;
    }

    // Traverse to second last element
    while (tempHead?.next?.next) {
      tempHead = tempHead!?.next;
    }

    tempHead!.next = null;
    this.tail = tempHead;
    this.size--;

    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  shift() {
    // Remove 1st node
    if (this.head?.next) {
      this.head = this.head?.next;
      this.size--;
    } else {
      this.head = null;
      this.tail = null;
    }

    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  unShift(val: number) {
    // Add to 1st node
    const newNode = new Node(val);

    if (!this.head) {
      this.push(val);
      return;
    }

    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }

  print() {
    let tempHead: NodeType = this.head;

    if (tempHead === null) {
      console.log('Print - EMPTY');
      return;
    }

    let output = '';

    while (tempHead !== null) {
      if (output) output = `${output} -> ${tempHead?.val}`;
      else output = `${tempHead?.val}`;

      tempHead = tempHead!.next;
    }

    console.log(`Print (size - ${this.size}) - `, output);
  }

  get(index: number) {
    if (index < 0 || index >= this.size) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current!.next;
      counter++;
    }
    return current;
  }

  set(index: number, val: number) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index: number, val: number) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === this.size) {
      this.push(val);
      return;
    }

    if (index === 0) {
      this.unShift(val);
      return;
    }

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev!.next;
    prev!.next = newNode;
    newNode.next = temp;
    this.size++;
    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.size) return undefined;
    if (index === 0) return this.shift();
    if (index === this.size - 1) return this.pop();

    var previousNode = this.get(index - 1);
    var removed = previousNode!.next;
    previousNode!.next = removed!.next;
    this.size--;
    return removed;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next;
    let prev = null;

    for (let i = 0; i < this.size; i++) {
      next = temp?.next;
      temp!.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

const firstList = new SinglyLinkedList();
console.log('New Singly Linked List - ', firstList);

firstList.push(5);
firstList.push(10);
firstList.push(99);

console.log('push 5');
console.log('push 10');
console.log('push 99');

firstList.print();

console.log('pop 99');

firstList.pop();

firstList.print();

console.log('pop 10');

firstList.pop();

firstList.print();

console.log('pop 5');

firstList.pop();

firstList.print();

console.log('pop again');

firstList.pop();

console.log('----------------------------------------');
console.log('----------------------------------------');

const secondList = new SinglyLinkedList();
console.log('Second Singly Linked List - ', secondList);

secondList.push(5);
secondList.push(10);
secondList.push(99);
secondList.push(7);
secondList.push(9);

console.log('push 5');
console.log('push 10');
console.log('push 99');
console.log('push 7');
console.log('push 9');

secondList.print();

console.log('Shift 5');

secondList.shift();
secondList.print();

console.log('Shift 10');

secondList.shift();
secondList.print();

console.log('Un Shift 100');
secondList.unShift(100);
secondList.print();

console.log('Un Shift 68');
secondList.unShift(68);
secondList.print();

console.log('Remove 99');
secondList.remove(2);
secondList.print();

console.log('Reversing');
secondList.reverse();
secondList.print();
