var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // insert at end
  list.addToTail = function(value) {
    // new node is created
    var newTail = Node(value);

    // if list is empty
    if (list.head === null) {
      list.head = newTail;
    };

    // old tail value changes next property to new tail
    if (list.tail !== null) {
      list.tail.next = newTail; // 
    }

    list.tail = newTail; // list tail changes pointer to new tail
    console.log(list);
  };

  // remove
  list.removeHead = function() {
    var removed = list.head;

    // change current head to point to its own next value
    list.head = list.head.next;

    console.log(list)
    return removed.value;
  };

  // lookup
  list.contains = function(target) {
      if (list.tail.value === target) {
          return true;
      }

      var loopHead = list.head;

      while (loopHead.next) {
        if (loopHead.value === target) {
          return true;
        }
        loopHead = loopHead.next;
      }
      return false;
  }

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
