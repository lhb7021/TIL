// 이진 변환 반복하기
// https://programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let count = 0;
  let countZero = 0;
  let arr = s.split('');
  while(arr.length > 1){
    arr = arr.filter((data) => {
      if(data === '0'){
        countZero++;
        return false;
      }
      return true;
    }).length.toString(2).split('');
    count++;
  }
  return [count, countZero]
}

let sample1 = '110010101001';
let sample2 = '01110';
let sample3 = '1111111';

console.log(solution(sample1)); // [3,8]
console.log(solution(sample2)); // [3,3]
console.log(solution(sample3)); // [4,1]
