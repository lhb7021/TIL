// 8주차
// https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  let w = [];
  let h = [];
  sizes.forEach(([a, b]) => {
    if(a > b){
      w.push(a);
      h.push(b);
    }else{
      h.push(a);
      w.push(b);
    }
  })
  return Math.max(...w) * Math.max(...h);
}

let sample1 = [[60, 50], [30, 70], [60, 30], [80, 40]];
let sample2 = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];
let sample3 = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]];

console.log(solution(sample1)); // 4000
console.log(solution(sample2)); // 120
console.log(solution(sample3)); // 133
