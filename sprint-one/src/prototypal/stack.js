var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.i = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.i] = value;
  this.i++;
}

stackMethods.pop = function() {
  if (this.i > 0) {
    var deleted = this.storage[(this.i - 1)];
    delete this.storage[this.i - 1];
    this.i = this.i - 1;
    return deleted;
  }
}

stackMethods.size = function() {
  return this.i;
}