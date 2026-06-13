class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedlist {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head == null;
  }

  insertAtBeginning(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    console.log('Value inserted in the beginning', value);
  }

  insertAtPosition(value, position) {
    if (position < 0) return 'Invalid index';

    if (position == 0) {
      this.insertAtBeginning(value);
      return;
    }

    const newNode = new Node(value);
    let prev = this.head;
    let i = 0;

    while (prev != null && i < position - 1) {
      prev = prev.next;
      i++;
    }

    if (prev == null) {
      console.log('Operation not allowed, index out of reach');
      return;
    }

    newNode.next = prev.next;
    prev.next = newNode;
  }

  deleteFromBeginning() {
    if (this.isEmpty()) {
      console.log('List is empty');
      return;
    }
    console.log('Deleted value', this.head.value);

    this.head = this.head.next;
  }

  print() {
    let current = this.head;
    while (current != null) {
      console.log('Printing Value', current.value);
      current = current.next;
    }
  }
}

const ll = new SinglyLinkedlist();
ll.insertAtBeginning(5);
ll.insertAtBeginning(4);
ll.insertAtBeginning(3);
ll.insertAtBeginning(2);
ll.print();
console.log('-----break----');
ll.deleteFromBeginning();
ll.print();
console.log('-----break----');
ll.insertAtPosition(1, 2);
ll.print();
ll.insertAtPosition(11, 3);
console.log('-----break----');
ll.print();
