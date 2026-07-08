class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertNodeAtTheBeginning(node) {
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next.prev = node;
    this.head.next = node;
  }

  deleteNode(node) {
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = node.next;
    nextNode.prev = node.prev;

    node.prev = null;
    node.next = null;
  }

  deleteLastNode() {
    const node = this.tail.prev;
    this.deleteNode(node);
    return node;
  }
}

class LRUCache {
  constructor(capacity) {
    this.maxCapacity = capacity;
    this.hashMap = new Map();
    this.dll = new DoublyLinkedList();
  }

  put(key, value) {
    if (this.hashMap.has(key)) {
      const node = this.hashMap.get(key);
      node.value = value;
      this.dll.deleteNode(node);
      this.dll.insertNodeAtTheBeginning(node);
    } else {
      if (this.hashMap.size === this.maxCapacity) {
        const evictedNode = this.dll.deleteLastNode();
        this.hashMap.delete(evictedNode.key);
      }

      const node = new Node(key, value);
      this.dll.insertNodeAtTheBeginning(node);
      this.hashMap.set(key, node);
    }
  }

  get(key) {
    if (this.hashMap.has(key)) {
      const node = this.hashMap.get(key);
      this.dll.deleteNode(node);
      this.dll.insertNodeAtTheBeginning(node);
      return node.value;
    }
    return -1;
  }
}

const lruCache = new LRUCache(3);
lruCache.put(1, 10);
lruCache.put(2, 20);
lruCache.put(3, 20);
console.log(lruCache.get(1));
lruCache.put(4, 40);
console.log(lruCache.get(2));
lruCache.put(5, 50);
console.log(lruCache.get(1));
