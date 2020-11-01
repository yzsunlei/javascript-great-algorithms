// 线性查找
// 顺序搜索是最低效的一种搜索算法。
function linearSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
      return i;
    }
  }
  return -1;
}