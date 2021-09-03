// 올바른괄호
// https://programmers.co.kr/learn/courses/30/lessons/12909

function solution(s){
  let count = 0;
  for(let i = 0; i < s.length; i++){
    if(s[i] === '(') count++;
    else count--;
    
    if(count < 0) return false;
  }
  return count === 0 ? true : false;
}

let sample1 = ['()()'];
let sample2 = ['(())()'];
let sample3 = [')()('];
let sample4 = ['(()('];

console.log(solution(...sample1)); // true
console.log(solution(...sample2)); // true
console.log(solution(...sample3)); // false
console.log(solution(...sample4)); // false
