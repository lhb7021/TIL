// 거스름돈
// https://programmers.co.kr/learn/courses/30/lessons/12907

function solution(n, money) {
  let table = [1].concat(new Array(n).fill(0));
  money.forEach((data) => {
    for(let i = 1; i <= n; i++){
      if(i >= data) table[i] = (table[i] + table[i - data]) % 1000000007;
    }
  })
  return table[n];
}

let sample1 = [5, [1, 2, 5]];

console.log(solution(...sample1)); // 4
