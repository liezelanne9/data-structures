class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.i = 0;
  }
  push(value) {
    this.storage[this.i] = value;
    this.i++;
  }
  
  pop() {
    if (this.i > 0) {
      var deleted = this.storage[(this.i - 1)];
      delete this.storage[this.i - 1];
      this.i = this.i - 1;
      return deleted;
    }
  }
  
  size() {
    return this.i;
  }
}