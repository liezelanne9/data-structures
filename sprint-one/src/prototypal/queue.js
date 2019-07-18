var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.i = 0;
  someInstance.j = 0;

  return someInstance;
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
      this.j++
    }
    this.i = this.i - 1;
    delete this.storage[this.i];
    this.j = 0;
    return deleted;
  }
}

queueMethods.size = function() {
  return this.i;
}
