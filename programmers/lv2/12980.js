// 점프와 순간 이동
// https://programmers.co.kr/learn/courses/30/lessons/12980

function solution(n)
{
  let distance = n;
  let count = 0;
  while(distance > 0){
    if(distance % 2 === 0){
      distance = distance / 2;
    }else{
      distance = (distance - 1) / 2;
      count++;
    }
  }
  return count;
}

let sample1 = 5;
let sample2 = 6;
let sample3 = 5000;

console.log(solution(sample1)); // 2
console.log(solution(sample2)); // 2
console.log(solution(sample3)); // 5
