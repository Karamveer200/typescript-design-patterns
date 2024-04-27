type NodeType = Node | null;

class Node {
  value;
  left: NodeType;
  right: NodeType;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Each node has two child max
// Stored sorted values
class BST {
  root: NodeType;

  constructor() {
    this.root = null;
  }

  // BIG O - O(log N)
  insert(newValue: number) {
    if (!this.root) {
      this.root = new Node(newValue);
      return this.root;
    }

    this.insertHelper(this.root, newValue);
  }

  private insertHelper(root: NodeType, newValue: number) {
    if (root?.value === newValue) {
      console.log('DUPLICATE value not permitted - ', newValue);
      return;
    }

    if (newValue < root!.value) {
      !root!.left ? (root!.left = new Node(newValue)) : this.insertHelper(root!.left, newValue);
    } else {
      !root!.right ? (root!.right = new Node(newValue)) : this.insertHelper(root!.right, newValue);
    }
  }

  remove(value: number) {
    this.root = this.removeHelper(this.root, value);
  }

  private removeHelper(root: NodeType, value: number) {
    if (!root) return null;

    if (value === root.value) {
      if (!root.left) {
        console.log('REMOVED - ', value);
        return root.right;
      }
      if (!root.right) {
        console.log('REMOVED - ', value);
        return root.left;
      }

      root.value = this.minValue(root.right);
      root.right = this.removeHelper(root.right, root.value);
      return root;
    }

    if (value < root.value) {
      root.left = this.removeHelper(root.left, value);
    } else {
      root.right = this.removeHelper(root.right, value);
    }

    return root;
  }

  minValue(node: NodeType) {
    let minv = node!?.value;
    while (node!?.left) {
      minv = node!?.left.value;
      node = node!?.left;
    }
    return minv;
  }

  // BIG O - O(log N)
  find(value: number) {
    return this.findHelper(this.root, value);
  }

  private findHelper(root: NodeType, value: number): boolean {
    if (!root) return false;

    if (root?.value === value) {
      return true;
    }

    return value < root!?.value ? this.findHelper(root!?.left, value) : this.findHelper(root!?.right, value);
  }

  //      10
  //    6    15
  //  3   8    20
  // ans - [10, 6, 15, 3, 8, 20]
  bfsTraversal() {
    const queue = [];
    const visited = [];

    const currentNode = this.root;

    queue.push(currentNode);

    while (queue.length) {
      const curr = queue.shift();
      visited.push(curr);

      if (curr?.left) {
        queue.push(curr.left);
      }
      if (curr?.right) {
        queue.push(curr.right);
      }
    }

    return visited.map((item) => item!.value);
  }
}

const tree = new BST();
console.log('EMPTY TREE CREATED');

console.log('insert 10 - ', tree.insert(10));
console.log('insert 20 - ', tree.insert(20));
console.log('insert 5 - ', tree.insert(5));
console.log('insert 4 - ', tree.insert(4));
console.log('insert 6 - ', tree.insert(6));

console.log('----------------------\n');

console.log('FIND 10 - ', tree.find(10));
console.log('FIND 20 - ', tree.find(20));
console.log('FIND 5 - ', tree.find(5));
console.log('FIND 6 - ', tree.find(6));
console.log('FIND 3 (false) - ', tree.find(3));
console.log('FIND 4 - ', tree.find(4));
console.log('FIND 18 (false) - ', tree.find(18));

console.log('----------------------\n');

tree.remove(4);
tree.remove(20);
tree.remove(5);

console.log('----------------------\n');

console.log('FIND 4 - ', tree.find(4));
console.log('FIND 20 - ', tree.find(20));
console.log('FIND 5 - ', tree.find(5));

console.log('----------------------\n');

console.log('insert 4 - ', tree.insert(4));
console.log('insert 20 - ', tree.insert(20));
console.log('FIND 4 - ', tree.find(4));
console.log('FIND 20 - ', tree.find(20));

console.log('----------------------\n');

tree.remove(4);
tree.remove(20);
tree.remove(10);
tree.remove(6);

console.log('----------------------\n');

console.log('insert 10 - ', tree.insert(10));
console.log('insert 6 - ', tree.insert(6));
console.log('insert 15 - ', tree.insert(15));
console.log('insert 3 - ', tree.insert(3));
console.log('insert 8 - ', tree.insert(8));
console.log('insert 2 - ', tree.insert(20));

console.log('BFS Traversal -, expected - [10, 6, 15, 3, 8, 20], received -  ', tree.bfsTraversal());
