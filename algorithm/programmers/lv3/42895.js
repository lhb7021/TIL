// N으로 표현
// https://programmers.co.kr/learn/courses/30/lessons/42895

// function solution(N, number) {
//   let result = [0, [N]];
//   let str = '' + N;
//   const getNum = (num) => {
//     if(result[num]) return result[num];
//     let arr = [];
//     arr.push(+str.repeat(num));
//     for(let i = 1; i < num; i++){
//       let arr1 = getNum(i);
//       let arr2 = getNum(num - i);
//       for(let el1 of arr1){
//         for(let el2 of arr2){
//           if(!arr.includes(el1 + el2)) arr.push(el1 + el2);
//           if(el1 - el2 > 0 && !arr.includes(el1 - el2)) arr.push(el1 - el2);
//           if(!arr.includes(el1 * el2)) arr.push(el1 * el2);
//           if(el1 / el2 % 1 === 0 && !arr.includes(el1 / el2)) arr.push(el1 / el2);
//         }
//       }
//     }
//     arr.sort((a, b) => a - b);
//     result[num] = arr;
//     return arr;
//   }
//   for(let i = 1; i <= 8; i++){
//     if(getNum(i).includes(number)) return i;
//   }
//   return -1;
// }

function solution(N, number) {
  let str = '' + N;
  let result = [0, [N]];
  for(let i = 1; i < 9; i++){
    if(i > 1){
      result[i] = [];
      result[i].push(+str.repeat(i))
      for(let l = 1; l < i; l++){
        for(let el1 of result[l]){
          for(let el2 of result[i - l]){
            if(!result[i].includes(el1 + el2)) result[i].push(el1 + el2);
            if(el1 - el2 > 0 && !result[i].includes(el1 - el2)) result[i].push(el1 - el2);
            if(!result[i].includes(el1 * el2)) result[i].push(el1 * el2);
            if(el1 / el2 % 1 === 0 && !result[i].includes(el1 / el2)) result[i].push(el1 / el2);
          }
        }
      }
    }
    if(result[i].includes(number)) return i;
  }
  return -1;
}

let sample1 = [5, 12];
let sample2 = [2, 11];

console.log(solution(...sample1)); // 4
console.log(solution(...sample2)); // 3
