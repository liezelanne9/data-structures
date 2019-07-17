const Stack = function() {
  const someInstance = {};
  _.extend(someInstance, stackMethods);
  someInstance.storage = {};
  someInstance.nextKey = 0;
  return someInstance;
};

const stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.nextKey] = value;
  this.nextKey += 1;
};

stackMethods.pop = function (value) {
  if (this.nextKey > 0) {
    const popped = this.storage[this.nextKey - 1];
    delete this.storage[this.nextKey - 1];
    this.nextKey -= 1;
    return popped;
  }
};

stackMethods.size = function (value) {
  return this.nextKey;
}

