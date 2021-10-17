// 나머지가 1이 되는 수 찾기
// https://programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
  for(let i = 0; i < n; i++){
      if(n % i === 1) return i;
  }
}

let sample1 = 10;
let sample2 = 12;

console.log(solution(sample1)); // 3
console.log(solution(sample2)); // 11
