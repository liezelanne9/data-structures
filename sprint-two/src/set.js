var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = 1;
};

setPrototype.contains = function(item) {
  return Object.keys(this._storage).includes(item);
};

setPrototype.remove = function(item) {
  for (var key in this._storage) {
    if (key === item) {
      delete this._storage[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
