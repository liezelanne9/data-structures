var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var i = 0;
  someInstance.enqueue = function(value) {
    storage[i] = value;
    i++;
  };

  someInstance.dequeue = function() {
    var deleted = storage[0];
    var j = 0;

    delete storage[0];
    
    for (var key in storage) {
      storage[j] = storage[key];
      j++;
    };
    delete storage[Object.keys(storage).length - 1];
    i--;
    return deleted;
  };

  someInstance.size = function() {
    console.log(storage);
    return Object.keys(storage).length;
  };

  return someInstance;
};