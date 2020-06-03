class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(x) {
    this.queue.push(x);
  }

  dequeue() {
    return this.queue.shift();
  }

  len() {
    return this.queue.length;
  }
}

const maxDepth = (root) => {
  // edge case
  if (!root || root.length < 1) {
    return 0;
  }

  let max_depth = 1;
  const queue = new Queue();

  queue.enqueue([1, root]);

  while (queue.len()) {
    const [level, node] = queue.dequeue();

    max_depth = Math.max(max_depth, level);

    if (node.left) {
      queue.enqueue([level + 1, node.left]);
    }

    if (node.right) {
      queue.enqueue([level + 1, node.right]);
    }
  }

  return max_depth
};
