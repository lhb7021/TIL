// 땅따먹기
// https://programmers.co.kr/learn/courses/30/lessons/12913#

function solution(land) {
  let result = land.reduce((acc, cur) => {
    let sortAcc = [].concat(acc).sort((a, b) => b - a);
    let max = sortAcc[0];
    let nextMax = sortAcc[1];
    let index = acc.indexOf(max);
    
    return cur.map((data, idx) => {
      if(idx !== index) return max + data;
      return nextMax + data;
    });
  })
  return Math.max(...result);
}

let sample1 = [[1,2,3,5],[5,6,7,8],[4,3,2,1]];
let sample2 = [[1,2,3,5],[5,6,7,100],[4,3,2,1]];

console.log(solution(sample1)); // 16
console.log(solution(sample2)); // 107
