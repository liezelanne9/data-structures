var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
    
  if (this.value === target) {
    return true;
  };
  for (var i = 0; i < this.children.length; i++) {
    console.log(this.children[i]);


    if ((this.children[i]).value === target) {
        return true;
    } else if (this.children[i].contains(target) === true) {
        return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

