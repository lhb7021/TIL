// 순위
// https://programmers.co.kr/learn/courses/30/lessons/49191#

function solution(n, results) {
  let matrix = new Array(n).fill().map(() => new Array(n).fill(0));
  let result = 0;
  // 모름: 0, 승리: 1, 패배: 2
  results.forEach(([a, b]) => {
    matrix[a - 1][b - 1] = 1;
    matrix[b - 1][a - 1] = 2;
  })
  for(let i = 0; i < matrix.length; i++){
    for(let l = 0; l < matrix[i].length; l++){
      if(matrix[i][l] === 1){
        for(let j = 0; j < matrix[l].length; j++){
          if(matrix[l][j] === 1){
            matrix[i][j] = 1;
            matrix[j][i] = 2;
          }
        }
      }
      if(matrix[i][l] === 2){
        for(let j = 0; j < matrix[l].length; j++){
          if(matrix[l][j] === 2){
            matrix[i][j] = 2;
            matrix[j][i] = 1;
          }
        }
      }
    }
  }
  matrix.forEach((arr) => {
    if(arr.filter((data) => !data).length === 1) result++;
  })

  return result;
}

let sample1 = [5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]];

console.log(solution(...sample1)); // 2
