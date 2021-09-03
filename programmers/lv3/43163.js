// 단어변환
// https://programmers.co.kr/learn/courses/30/lessons/43163

function solution(begin, target, words) {
  if(!words.includes(target)) return 0;
  const aux = (a, b) => {
    let count = 0;
    for(let i = 0; i < a.length; i++){
      if(a[i] !== b[i]) count++;
      if(count > 1) return false;
    }
    return true;
  }
  let word = begin;
  let result = 0;
  for(let el of words){
    if(aux(word, target)) return result + 1;
    if(aux(word, el)){
      word = el;
      result++;
    }
  }
  return 0;
}

let sample1 = ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']];
let sample2 = ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']];

console.log(solution(...sample1)); // 4
console.log(solution(...sample2)); // 0
