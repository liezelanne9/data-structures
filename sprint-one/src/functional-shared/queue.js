var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.i = 0;
  someInstance.j = 0;

  extend(someInstance, queueMethods);

  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

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