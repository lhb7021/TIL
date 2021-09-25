// 제목
// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  let sum = brown + yellow;
  for(let i = 3; i <= sum / i; i++){
    if(sum % i === 0){
      let width = sum / i;
      if((width - 2 ) * (i - 2) === yellow) return [width, i];
    }
  }
  return 'Not found';
}

let sample1 = [10, 2];
let sample2 = [8, 1];
let sample3 = [24, 24];

console.log(solution(...sample1)); // [4, 3]
console.log(solution(...sample2)); // [3, 3]
console.log(solution(...sample3)); // [8, 6]
