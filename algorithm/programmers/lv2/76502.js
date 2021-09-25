// 괄호 회전하기
// https://programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  let changeStr = s;
  let result = 0;
  const aux = (str) => {
    let stack = [];
    for(let i = 0; i < str.length; i++){
      let a = str[i];
      if(/\{|\[|\(/.test(a)){
        stack.push(a);
      }
      else{
        if(a === '}'){
          if(stack[stack.length - 1] !== '{') return false;
        }
        if(a === ']'){
          if(stack[stack.length - 1] !== '[') return false;
        }
        if(a === ')'){
          if(stack[stack.length - 1] !== '(') return false;
        }
        stack.pop();
      }
    }
    return stack.length ? false : true;
  }
  do{
    changeStr = changeStr.slice(1) + changeStr[0];
    if(aux(changeStr)) result++;
  }while(changeStr !== s);
  return result;
}

let sample1 = ['[](){}'];
let sample2 = ['}]()[{'];
let sample3 = ['[)(]'];
let sample4 = ['}}}'];
let sample5 = ['([{)}]'];

console.log(solution(...sample1)); // 3
console.log(solution(...sample2)); // 2
console.log(solution(...sample3)); // 0
console.log(solution(...sample4)); // 0
console.log(solution(...sample5)); // 0
