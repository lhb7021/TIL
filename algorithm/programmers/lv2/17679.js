// [1차]프렌즈4블록
// https://programmers.co.kr/learn/courses/30/lessons/17679#

function solution(m, n, board) {
  let matrix = board.map((data) => data.split(''));
  let arr = [];
  let count = 0;
  const findBlock = () => {
    let isFind = false;
    for(let i = 1; i < matrix.length; i++){
      for(let l = 1; l < matrix[i].length; l++){
        let x = matrix[i][l];
        if(x !== '0' && x === matrix[i][l - 1] && x === matrix[i - 1][l] && x === matrix[i - 1][l - 1]){
          let r = [[i - 1, l - 1], [i - 1, l], [i, l - 1], [i, l]];
          isFind = true;
          arr.push(...r);
        }
      }
    }
    return isFind;
  };
  while(findBlock()){
    for(let [a, b] of arr){
      if(matrix[a][b] !== '0'){
        matrix[a][b] = '0';
        count++;
      }
    }
    for(let i = 0; i < matrix[0].length; i++){
      for(let l = matrix.length - 1; l > 0; l--){
        if(matrix[l][i] === '0'){
          for(let m = l - 1; m >= 0; m--){
            if(matrix[m][i] !== '0'){
              let temp = matrix[m][i];
              matrix[m][i] = '0';
              matrix[l][i] = temp;
              break;
            }
          }
        }
      }
    }
    arr = [];
  }
  return count;
}

let sample1 = [4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']];
let sample2 = [6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']];

console.log(solution(...sample1)); // 14
console.log(solution(...sample2)); // 15
