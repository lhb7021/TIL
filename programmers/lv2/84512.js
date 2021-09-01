// 5주차
// https://programmers.co.kr/learn/courses/30/lessons/84512

// function solution(dirs) {
//   let table = 'AEIOU';
//   let result = [];
//   const aux = (str = '') => {
//     if(str === dirs) return false;
//     result.push(str)
//     if(str.length === 5) return true;
//     for(let i = 0; i < 5; i++){
//       if(!aux(str + table[i])) return false;
//     }
//     return true;
//   }
//   aux();
//   console.log(result);
//   return result.length;
// }

function solution(dirs) {
  return dirs.split('').reduce((acc, cur, index) => acc + [781, 156, 31, 6, 1][index] * 'AEIOU'.indexOf(cur) + 1, 0);
}

let sample1 = 'AAAAE';
let sample2 = 'AAAE';
let sample3 = 'I';
let sample4 = 'EIO';

console.log(solution(sample1)) // 6
console.log(solution(sample2)) // 10
console.log(solution(sample3)) // 1563
console.log(solution(sample4)) // 1189
