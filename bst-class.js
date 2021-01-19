class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
      this.count = 0;
    }
  
    insert(key, value) {
      if (this.key == null) {
        this.key = key;
        this.value = value;
      }
      else if (key < this.key) {
        if (this.left == null) {
          this.left = new BinarySearchTree(key, value, this)
        }
        else {
          this.left.insert(key, value);
        }
      }
      else {
        if (this.right == null) {
          this.right = new BinarySearchTree(key, value, this)
        }
        else {
          this.right.insert(key, value)
        }
      }
  
    }
  
    find(key) {
      if (this.key == key) {
        return this.value
      }
      else if (key < this.key && this.left) {
        this.left.find(key)
      }
      else if (key > this.key && this.right) {
        this.right.find(key)
      }
      else {
        throw new Error('Key error')
      }
    }
  
    remove(key) {
      if (this.key == key) {
        if (this.left && this.right) {
          const successor = this.right._findMin();
          this.key = successor.key;
          this.value = successor.value;
          successor.remove(successor.key)
        }
        else if (this.left) {
          this._replaceWith(this.left)
        }
        else if (this.right) {
          this._replaceWith(this.right)
        }
        else {
          this._replaceWith(null)
        }
      }
      else if (key < this.key && this.left) {
        this.left.remove(key);
      }
      else if (key > this.key && this.right) {
        this.right.remove(key);
      }
      else {
        throw new Error('Key error')
      }
    }
  
    findElementCount() {
      if (this.key != null) {
        this.count++
      }
    }
  
  
  }
  
  module.exports = BinarySearchTree