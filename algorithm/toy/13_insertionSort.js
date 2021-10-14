// 13_insertionSort
// https://urclass.codestates.com/codeproblem/9347b40b-4775-4ab9-92fb-63bbed16a14f

// const insertionSort = function (arr, cb = (data) => data) {
//   // TODO: 여기에 코드를 작성합니다.
//   let result = [].concat(arr);
//   for(let i = 0; i < arr.length; i++){
//     for(let l = 1; l < arr.length - i; l++){
//       if(cb(result[l - 1]) > cb(result[l])){
//         let temp = result[l];
//         result[l] = result[l - 1];
//         result[l - 1] = temp;
//       }
//     }
//   }
//   return result;
// };

const insertionSort = function (arr, cb = (data) => data) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [arr[0]];
  for(let i = 1; i < arr.length; i++){
    if(cb(arr[i]) >= cb(result[i - 1])) result.push(arr[i]);
    else{
      for(let l = 0; l < i; l++){
        if(cb(result[l]) >= cb(arr[i])){
          let left = result.slice(0, l);
          let right = result.slice(l);
          result = left.concat(arr[i], right);
          break;
        }
      }
    }
  }
  return result;
};

let sample1 = [[3, 1, 21]];
let sample2 = [[5, 4, 3, 2, 1]];
let sample3 = [[-10, -11, 2, 29], (data) => data * data];

console.log(insertionSort(...sample1)); // [1, 3, 21]
console.log(insertionSort(...sample2)); // [1, 2, 3, 4, 5]
console.log(insertionSort(...sample3)); // [2, -10, -11, 29]
