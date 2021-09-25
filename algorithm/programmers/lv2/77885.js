// 2개 이하로 다른 비트
// https://programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
  const findNumber = (num) => {
    let numTo2 = num.toString(2)
    if(numTo2.match('01')){
      let next = numTo2.split('').reverse().join('')
      .replace('10', '01').split('').reverse().join('');
      return parseInt(next, 2);
    }
    return parseInt(numTo2.replace('1', '10'), 2);
  }
  return numbers.map((data) => data % 2 === 0 ? data + 1 : findNumber(data));
}

let sample1 = [2,7];

console.log(solution(sample1)); // [3,11]
