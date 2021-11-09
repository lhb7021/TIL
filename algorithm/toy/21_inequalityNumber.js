// 21_inequalityNumber
// https://urclass.codestates.com/codeproblem/1cfb56ab-cee1-4474-9337-aa147a70fbc8

// const inequalityNumber = function (signs) {
//   // TODO: 여기에 코드를 작성합니다.
//   let signsArr = signs.split(" ");
//   let size = signsArr.length + 1;
//   let table = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let isVisit = new Array(table.length).fill(false);
//   let result = [];
//   const isValid = (arr) => {
//     for(let i = 0; i < signsArr.length; i++){
//       if(signsArr[i] === '<'){
//         if(arr[i] > arr[i + 1]) return false;
//       }else{
//         if(arr[i] < arr[i + 1]) return false;
//       }
//     }
//     return true;
//   }
//   const aux = (nums, visited, arr = []) => {
//     // console.log(arr)
//     if(arr.length === size){
//       if(isValid(arr)){
//         return +arr.join("");
//       }
//       return false
//     }
//     for(let i = 0; i < nums.length; i++){
//       if(!visited[i]){
//         let visit = [].concat(visited);
//         visit[i] = true;
//         let result = aux(nums, visit, arr.concat(nums[i]));
//         if(result) return result;
//       }
//     }
//   }

//   let min = aux(table, isVisit);
//   let max = aux(table.reverse(), isVisit);
//   return max - min;
// };

const inequalityNumber = function (signs) {
  
}

let sample1 = ["<"];
let sample2 = ["< >"];
let sample3 = ["> < >"];

console.log(inequalityNumber(...sample1)); // 88 (89 - 01)
console.log(inequalityNumber(...sample2)); // 876 (897 - 021)
console.log(inequalityNumber(...sample3)); // 8,754 (9,786 - 1,032)
