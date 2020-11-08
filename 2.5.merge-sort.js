/**
归并排序：

归并排序是第一个可以被实际使用的排序算法。
归并排序性能不错，其复杂度为O(nlogn)。

Mozilla Firefox使用归并排序作为Array.prototype.sort的实现，而Chrome使用了一个快速排序的变体。

归并排序是一种分治算法。
 */

function mergeSort(arr) {
  const len = arr.length;

  if (len < 2) { return arr; }

  const mid = Math.floor(len / 2);
  const left = arr.splice(0, mid);
  const right = arr;

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }

  return result.concat(left, right);
}

// test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(mergeSort2(arr));