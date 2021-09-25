// 삼각 달팽이
// https://programmers.co.kr/learn/courses/30/lessons/68645?language=javascript

// function solution(n) {
//   let matrix = [];
//   let num = 1;
//   let count = 0;
//   let round = 0;
//   for(let i = 1; i <= n; i++){
//     matrix.push(new Array(i).fill(0));
//   }
//   for(let i = n; i > 0; i--){
//     if(count % 3 === 0){
//       for(let l = 0; l < i; l++){
//         let start = round * 2 + l;
//         matrix[start][round] = num;
//         num++;
//       }
//     }
//     if(count % 3 === 1){
//       for(let l = 0; l < i; l++){
//         let start = round + l + 1;
//         matrix[n - round - 1][start] = num;
//         num++;
//       }
//     }
//     if(count % 3 === 2){
//       for(let l = 0; l < i; l++){
//         let start = n - l - round - 2;
//         matrix[start][start - round] = num;
//         num++;
//       }
//       round++;
//     }
//     count++;
//   }
//   return matrix.reduce((acc, cur) => acc.concat(cur));
// }

function solution(n) {
  let matrix = new Array(n).fill().map((_, i) => new Array(i + 1).fill(0));
  let num = 0, row = -1, col = 0;
  for(let i = n; i > 0; i -= 3){
    for(let l = 0; l < i; l++) matrix[++row][col] = ++num;
    for(let l = 0; l < i - 1; l++) matrix[row][++col] = ++num;
    for(let l = 0; l < i - 2; l++) matrix[--row][--col] = ++num;
  }
  return matrix.flat();
}

let sample1 = 4;
let sample2 = 5;
let sample3 = 6;

console.log(solution(sample1)); // [1,2,9,3,10,8,4,5,6,7]
console.log(solution(sample2)); // [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
console.log(solution(sample3)); // [1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
