// 예상 대진표
// https://programmers.co.kr/learn/courses/30/lessons/12985#

function solution(n,a,b)
{
  let x = a;
  let y = b;
  let result = 0;
  while(x !== y){
    x = Math.ceil(x / 2);
    y = Math.ceil(y / 2);
    result++
  }
  return result;
}

let sample1 = [8, 4, 7];
let sample2 = [8, 4, 5];

console.log(solution(...sample1)); // 3
console.log(solution(...sample2)); // 3
