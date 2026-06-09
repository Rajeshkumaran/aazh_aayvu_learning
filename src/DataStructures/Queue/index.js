class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
    console.log('Element pushed into the queue', value);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
    } else {
      const value = this.front.value;
      this.front = this.front.next;
      this.size--;
      console.log('Dequeue value is', value);
      if (this.front == null) this.rear = null;
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return;
    }
    return this.front.value;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.peek());
