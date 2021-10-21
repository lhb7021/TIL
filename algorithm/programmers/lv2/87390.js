// n^2 배열 자르기
// https://programmers.co.kr/learn/courses/30/lessons/87390

// function solution(n, left, right) {
//     let arr = new Array(n).fill().map(() => new Array(n).fill());
//     for(let i = 0; i < n; i++){
//         for(let l = 0; l < n; l++){
//             let fill = Math.max(i, l) + 1;
//             arr[i][l] = fill;
//         }
//     }
//     return arr.reduce((acc, cur) => acc.concat(cur)).slice(left, right + 1);
// }

// function solution(n, left, right) {
//     let arr = [];
//     let count = left;
//     while(count <= right){
//         let num = Math.floor(count / n);
//         let mod = count % n;
//         let add = Math.max(num, mod);
//         arr.push(add + 1);
//         count++;
//     }
//     return arr;
// }

function solution(n, left, right) {
  return new Array(right - left + 1).fill().map((_, i) => {
      let num = Math.floor((left + i) / n);
      let mod = (left + i) % n;
      return Math.max(num, mod) + 1;
  });
}

let sample1 = [3, 2, 5];
let sample2 = [4, 7, 14];

console.log(solution(...sample1)); // [3,2,2,3]
console.log(solution(...sample2)); // [4,3,3,3,4,4,4,4]
