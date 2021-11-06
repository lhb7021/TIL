// 18_getItemFromTwoSortedArrays
// https://urclass.codestates.com/codeproblem/bddd30d8-44c1-4039-8c49-134555c03552

// const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
//   // TODO: 여기에 코드를 작성합니다.
//   let x = 0;
//   let y = 0;
//   let count = 0;
//   let result;
//   while(count < k){
//     if(arr1[x] <= arr2[y]){
//       result = arr1[x];
//       x++;
//     }else{
//       result = arr2[y];
//       y++;
//     }
//     count++
//   }
//   return result;
// };

const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // TODO: 여기에 코드를 작성합니다.
  let arr1Index = 0;
  let arr2Index = 0;
  let count = k;
  while(count > 0){
    let halfCount = Math.ceil(count / 2);
    let arr1Step = halfCount;
    let arr2Step = halfCount;

    if(arr1Index === arr1.length){
      arr2Index += count;
      break;
    }
    if(arr2Index === arr2.length){
      arr1Index += count;
      break;
    }

    if(halfCount > arr1.length - arr1Index) arr1Step = arr1.length - arr1Index;
    if(halfCount > arr2.length - arr2Index) arr2Step = arr2.length - arr2Index;

    if(arr1[arr1Index + arr1Step - 1] < arr2[arr2Index + arr2Step - 1]){
      arr1Index += arr1Step;
      count -= arr1Step;
    }else{
      arr2Index += arr2Step;
      count -= arr2Step;
    }
  }
  let arr1Max = arr1[arr1Index - 1];
  let arr2Max = arr2[arr2Index - 1];

  return Math.max(arr1Max, arr2Max);
};

let sample1 = [[1, 4, 8, 10], [2, 3, 5, 9], 6];
let sample2 = [[1, 1, 2, 10], [3, 3], 4];

console.log(getItemFromTwoSortedArrays(...sample1)); // 8
console.log(getItemFromTwoSortedArrays(...sample2)); // 3
