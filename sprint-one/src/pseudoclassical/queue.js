var Queue = function() {
  this.storage = {};
  this.i = 0;
  this.j = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.i] = value;
  this.i++;
}

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  return this.i;
}
