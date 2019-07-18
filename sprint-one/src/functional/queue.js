const Queue = function () {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {}; 
  let nextKey = 0;

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[nextKey] = value;
    nextKey += 1;
  };

  someInstance.dequeue = function () {
    if (nextKey > 0) {
      const dequeued = storage[0];
      nextKey -= 1;
      for (let i = 0; i < nextKey; i++) {
        storage[i] = storage[i + 1];
      }
      return dequeued;
    }
  };

  someInstance.size = function () {
    return nextKey;
  };

  return someInstance;
};