// 큰 수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  let table = '9876543210'
  let restNumber = number.slice(0)
  let start = 0;
  let end = k + 1;
  let result = '';
  const getMaxNumber = (a) => {
    let str = restNumber.slice(0, a);
    for(let i = 0; i < table.length; i++){
      let index = str.indexOf(table[i]);
      if(index !== -1) return [table[i], index];
    }
  }
  for(let i = 0; i < number.length - k; i++){
    let [max, index] = getMaxNumber(end);
    restNumber = restNumber.slice(index + 1);
    start = index;
    end -= start;
    result += max;
  }
  return result;
}

let sample1 = ['1924', 2];
let sample2 = ['1231234', 3];
let sample3 = ['4177252841', 4];

console.log(solution(...sample1)); // '94'
console.log(solution(...sample2)); // '3234'
console.log(solution(...sample3)); // '775841'
