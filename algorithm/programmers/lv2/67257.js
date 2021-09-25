// 수식최대화
// https://programmers.co.kr/learn/courses/30/lessons/67257

function solution(expression) {
  let operFlow = ['*+-', '*-+', '+*-', '+-*', '-*+', '-+*'];
  let result = [];
  const calculation = (arr, x, index) => {
    let a = arr.slice(0, index);
    let b = arr.slice(index);
    let c;
    if(x === '*'){
      c = +b.shift() * +b.shift() + '';
    }
    if(x === '+'){
      c = +b.shift() + +b.shift() + '';
    }
    if(x === '-'){
      c = +b.shift() - +b.shift() + '';
    }
    a.push(c);
    return a.concat(...b);
  }
  for(let oper of operFlow){
    let numArr = expression.split(/[^\d]/);
    let as = expression.split(/\d+/).filter((data) => data !== '');
    for(let i = 0; i < oper.length; i++){
      let j = as.indexOf(oper[i]);
      while(j !== -1){
        numArr = calculation(numArr, oper[i], j);
        as.splice(j, 1);
        j = as.indexOf(oper[i]);
      }
    }
    result.push(Math.abs(...numArr));
  }
  return Math.max(...result);
}

let sample1 = "100-200*300-500+20";
let sample2 = "50*6-3*2";

console.log(solution(sample1)); // 60420
console.log(solution(sample2)); // 300
