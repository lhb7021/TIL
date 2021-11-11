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
  // TODO: 여기에 코드를 작성합니다.
  const aux = (signsArr, table, visited, nums = []) => {
    if(nums.length === signsArr.length + 1) return nums.join("");

    const sign = signsArr[nums.length - 1];
    
    for(let i = 0; i < table.length; i++){
      const right = table[i];
      
      if(visited[right]) continue;

      if(nums.length){
        const left = nums[nums.length - 1];
      
        if(sign === "<" && left > right) continue;
        if(sign === ">" && left < right) continue;
      }

      visited[right] = true;
      let next = aux(signsArr, table, visited, nums.concat(right));
      
      if(next) return next;

      visited[right] = false;
    }
    
    return "";
  };
  let signsToArr = signs.split(" ");
  let table = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let min = aux(signsToArr, table, new Array(10).fill(false));
  let max = aux(signsToArr, table.reverse(), new Array(10).fill(false));
  return max - min;
};

let sample1 = ["<"];
let sample2 = ["< >"];
let sample3 = ["> < >"];
let sample4 = ["> > < > < >"];

console.log(inequalityNumber(...sample1)); // 88 (89 - 01)
console.log(inequalityNumber(...sample2)); // 876 (897 - 021)
console.log(inequalityNumber(...sample3)); // 8,754 (9,786 - 1,032)
console.log(inequalityNumber(...sample4)); // 7,763,088 (9,867,453 - 2,104,365) 
