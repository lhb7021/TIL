// 14_rotatedArraySearch
// https://urclass.codestates.com/codeproblem/45d1d1e7-a134-475d-86b1-bf747f1f159c

const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  let left = 0;
  let right = rotated.length - 1;
  while(left <= right){
    let mid = Math.floor((left + right + 1) / 2);
    if(rotated[mid] === target) return mid;
    if(rotated[left] < rotated[mid]){
      if(target <= rotated[mid] && target >= rotated[left]) right = mid - 1;
      else left = mid + 1;
    }else{
      if(target >= rotated[mid] && target <= rotated[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
};

let sample1 = [[4, 5, 6, 0, 1, 2, 3], 2];
let sample2 = [[4, 5, 6, 0, 1, 2, 3], 100];
let sample3 = [[4, 5, 6, 0, 1, 2, 3], 1];

console.log(rotatedArraySearch(...sample1)); // 5
console.log(rotatedArraySearch(...sample2)); // -1
console.log(rotatedArraySearch(...sample3)); // 4
