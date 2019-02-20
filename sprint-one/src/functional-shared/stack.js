var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.i = 0;

  extend(someInstance, stackMethods);

  return someInstance;

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};
// var i = 0;

stackMethods.push = function(value) {
  this.storage[this.i] = value; // 0: 'liezel'
  this.i++ // i = 1
};

stackMethods.pop = function(value) {
  if (this.i > 0) {
     var deleted = this.storage[this.i - 1];
     delete this.storage[this.i - 1];
     this.i = this.i - 1;
     return deleted;
  }
};

stackMethods.size = function(value) {
  console.log(this.storage);
  return this.i;
};
