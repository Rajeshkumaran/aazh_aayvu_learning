class Stack {
  constructor(maxCapacity) {
    this.maxCapacity = maxCapacity;
    this.data = new Array(maxCapacity);
    this.top = -1;
  }

  push(value) {
    if (this.top === this.maxCapacity - 1) {
      console.log('Stack is already full');
      return;
    }
    this.top++;
    this.data[this.top] = value;
  }

  pop() {
    if (this.top === -1) {
      console.log('Stack is already empty');
      return;
    }
    return this.data[this.top--];
  }

  print() {
    for (let i = 0; i <= this.top; i++) {
      console.log('Element is', this.data[i]);
    }
  }
}

const stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
stack.push(6);
console.log(stack.pop());
stack.print();
