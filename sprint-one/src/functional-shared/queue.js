const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  const someInstance = {};
  _.extend(someInstance, queueMethods);
  someInstance.storage = {};
  someInstance.nextKey = 0;
  return someInstance;
};

const queueMethods = {
  enqueue: function (value) {
    this.storage[this.nextKey] = value;
    this.nextKey += 1;
  },
  dequeue: function (value) {
    if (this.nextKey > 0) {
      const popped = this.storage[0];
      this.nextKey -= 1;
      for (let i = 0; i < this.nextKey; i++) {
        this.storage[i] = this.storage[i + 1];
      }
      return popped;
    }
  },
  size: function (value) {
    return this.nextKey;
  }
};

queueMethods.enqueue = function(value) {
  this.storage[this.i] = value;
  this.i++;
}

queueMethods.dequeue = function() {
  if (this.i > 0) {
    var deleted = this.storage[0];
    delete this.storage[0];

    for (var key in this.storage) {
      this.storage[this.j] = this.storage[key];
      this.j++;
    }
    
    this.j = 0;
    delete this.storage[this.i - 1];
    this.i--;
    return deleted;
  }
}

queueMethods.size = function() {
  console.log(this.storage);
  return this.i;
}