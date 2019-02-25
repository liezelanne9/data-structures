

// Instantiate a new graph
var Graph = function() {
    this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    var newNode = {};
    newNode.value = node;
    newNode.edge = {};
    this.nodes.push(newNode);
    
    return this.nodes;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].value === node) {
            return true;
        }
    }
    return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    var removed;
    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].edge.value === node) {
            this.nodes[i].edge = {};
        }
        if (this.nodes[i].value === node) {
            removed = this.nodes[i].value;
            this.nodes.splice(i, 1);
        }
    }
    return removed;
};

// Returns a boolean indicating whether two specified nodes are connected.  
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    var firstNode;
    var secondNode;
    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].value === fromNode) {
            firstNode = this.nodes[i];
        }
        if (this.nodes[i].value === toNode) {
            secondNode = this.nodes[i];
        }
    }
    if (!firstNode || !secondNode) {
        return false;
    }
    return firstNode.edge.value === secondNode.value;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    var firstNode;
    var secondNode;
    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].value === fromNode) {
            firstNode = this.nodes[i];
        }
        if (this.nodes[i].value === toNode) {
            secondNode = this.nodes[i];
        }
    }
    firstNode.edge = secondNode;
    secondNode.edge = firstNode;
    console.log(this.nodes);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    var firstNode = {};
    var secondNode = {};
    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].value === fromNode) {
            firstNode = this.nodes[i];
        }
        if (this.nodes[i].value === toNode) {
            secondNode = this.nodes[i];
        }
    }
    firstNode.edge = {};
    secondNode.edge = {};
    console.log(this.nodes);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for (var i = 0; i < this.nodes.length; i++) {
        cb(this.nodes[i].value);
    }
    // cb.apply(this, arguments)
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


