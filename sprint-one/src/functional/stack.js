/* eslint-disable func-names */
const Stack = function () {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  let nextKey = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    storage[nextKey] = value;
    nextKey += 1;
  };

  someInstance.pop = function () {
    if (nextKey > 0) {
      const popped = storage[nextKey - 1];
      delete storage[nextKey - 1];
      nextKey -= 1;
      return popped;
    }
  };

  someInstance.size = function () {
    return nextKey;
  };

  return someInstance;
};
