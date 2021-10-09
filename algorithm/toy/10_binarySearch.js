// 10_binarySearch
// https://urclass.codestates.com/codeproblem/b06d36ed-129a-44e5-a624-90a8768848ad

const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  let left = 0;
  let right = arr.length;
  while(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return arr[left] === target ? left : -1
};

let sample1 = [[0, 1, 2, 3, 4, 5, 6], 2];
let sample2 = [[4, 5, 6, 9], 100];

console.log(binarySearch(...sample1)); // 2
console.log(binarySearch(...sample2)); // -1
