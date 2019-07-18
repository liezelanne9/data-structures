var Stack = function() {
  this.storage = {};
  this.i = 0;
};


Stack.prototype.push = function(value) {
  this.storage[this.i] = value;
  this.i++;
}

Stack.prototype.pop = function() {
  if (this.i > 0) {
    var deleted = this.storage[(this.i - 1)];
    delete this.storage[this.i - 1];
    this.i = this.i - 1;
    return deleted;
  }
}

Stack.prototype.size = function() {
  return this.i;
}