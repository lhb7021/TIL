// 16_quickSort
// https://urclass.codestates.com/codeproblem/c18f247f-563b-48fd-a46a-039d0dfd4082

const quickSort = function (arr, cb = (item) => item) {
  // TODO: 여기에 코드를 작성합니다.
  if(arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];
  for(let i = 1; i < arr.length; i++){
    if(cb(arr[i]) < cb(pivot)) left.push(arr[i]);
    else right.push(arr[i]);
  }
  const leftSort = quickSort(left, cb);
  const rightSort = quickSort(right, cb);

  return leftSort.concat(pivot, rightSort);
};




let sample1 = [3, 1, 21];

console.log(quickSort(sample1)); // [1, 3, 21]
