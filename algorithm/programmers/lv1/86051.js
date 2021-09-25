// 없는 숫자 더하기
// https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  let result = 0;
  for(let i = 0; i < 10; i++){
    if(!numbers.includes(i)) result += i;
  }
  return result;
}

let sample1 = [1,2,3,4,6,7,8,0];
let sample2 = [5,8,4,0,6,7,9];

console.log(solution(sample1)); // 14
console.log(solution(sample2)); // 6
