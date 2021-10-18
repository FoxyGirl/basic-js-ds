const { NotImplementedError } = require("../extensions/index.js");
const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  let result = null;

  const addListNode = (val) => {
    if (!result) {
      result = new ListNode(val);
    } else {
      let current = result;

      while (current.next) {
        current = current.next;
      }

      current.next = new ListNode(val);
    }

    return result;
  };

  let current = l;
  while (current) {
    if (current.value !== k) {
      result = addListNode(current.value);
    }
    current = current.next;
  }

  return result;
};
