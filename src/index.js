module.exports = function reverse(n) {
  n = n + '';
  let arr = [];
  for (let i = 0; i < n.length; i++) {
    arr.unshift(n[i]);
  }
  if (arr[arr.length - 1] == '-') {
    arr.pop(-1);
  }
  n = arr.join('');
  return n;
}
