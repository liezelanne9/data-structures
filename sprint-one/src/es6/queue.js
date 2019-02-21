class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.i = 0;
    this.j = 0;
  }
  enqueue(value) {
    this.storage[this.i] = value;
    this.i++;
  }
  
  dequeue() {
    if (this.i > 0) {
      var deleted = this.storage[0];
      delete this.storage[0];
      for (var key in this.storage) {
        this.storage[this.j] = this.storage[key];
        this.j++
      }
      this.i = this.i - 1;
      delete this.storage[this.i];
      this.j = 0;
      return deleted;
    }
  }
  
  size() {
    return this.i;
  }  
}
