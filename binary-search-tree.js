class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) this.root = newNode;
    else {
      let current = this.root;
      while (current) {
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return newNode;
          } else current = current.left;
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return newNode;
          } else {
            console.log(current);
            current = current.right;
          }
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    } else {
      if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val);
          return this;
        } else return this.insertRecursively(val, current.left);
      } else if (val > current.right) {
        if (!current.right) {
          current.right = new Node(val);
          return this;
        } else return this.insertRecursively(val, current.right);
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) return current;
      else if (val > current.val) {
        if (current.right) current = current.right;
        else break;
      } else {
        if (current.left) current = current.left;
        else break;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (current.val === val) return current;
    else if (val > current.val) {
      if (current.right) return this.findRecursively(val, current.right);
    } else {
      if (current.left) return this.findRecursively(val, current.left);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];
    const visit = (node) => {
      visited.push(node.val);
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
    };
    visit(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visited = [];
    const visit = (node) => {
      if (node.left) visit(node.left);
      visited.push(node.val);

      if (node.right) visit(node.right);
    };
    visit(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];
    const visit = (node) => {
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
      visited.push(node.val);
    };
    visit(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visited = [this.root];
    let arr = [];
    while (visited.length) {
      let current = visited.shift();
      arr.push(current.val);
      if (current.left) visited.push(current.left);
      if (current.right) visited.push(current.right);
    }
    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// console.log(binarySearchTree.root.val); // 15
// console.log(binarySearchTree.root.right.val); // 20
// console.log(binarySearchTree.root.left.right.val); // 12

// console.log(binarySearchTree);

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insertRecursively(15);
// console.log(binarySearchTree.root.value); // 15
// console.log(binarySearchTree.root.left); // null
// console.log(binarySearchTree.root.right); // null

// var binarySearchTree = new BinarySearchTree();

// console.log(binarySearchTree.insertRecursively(15));
// binarySearchTree.insertRecursively(20);
// binarySearchTree.insertRecursively(10);
// binarySearchTree.insertRecursively(12);
// console.log(binarySearchTree.root.val); // 15
// console.log(binarySearchTree.root.right.val); // 20
// console.log(binarySearchTree.root.left.right.val); // 12

// console.log(binarySearchTree);

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// var foundNode = binarySearchTree.find(20);
// console.log(foundNode.val); // 20
// console.log(foundNode.left); // null
// console.log(foundNode.right); // null

// var binarySearchTree = new BinarySearchTree();

// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// var foundNode = binarySearchTree.find(120);
// console.log(foundNode); // undefined

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// var foundNode = binarySearchTree.findRecursively(20);
// console.log(foundNode.val); // 20
// console.log(foundNode.left); // null
// console.log(foundNode.right); // null

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// var foundNode = binarySearchTree.findRecursively(120);
// console.log(foundNode); // undefined

// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// binarySearchTree.insert(1);
// binarySearchTree.insert(5);
// binarySearchTree.insert(50);

// console.log(binarySearchTree);

// console.log(binarySearchTree.dfsPreOrder());
// console.log(binarySearchTree.dfsInOrder());
// console.log(binarySearchTree.dfsPostOrder());
// console.log(binarySearchTree.bfs());

module.exports = BinarySearchTree;
