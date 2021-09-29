// 06_sudoku
// https://urclass.codestates.com/codeproblem/692b5f7e-cabd-4705-8a65-ebbb3cf9d74c

const sudoku = function (board) {
  // TODO: 여기에 코드를 작성합니다.
  const isWidth = (arr, num) => !arr.includes(num);
  const isHeight = (matrix, index, num) => {
    for(let el of matrix){
      if(el[index] === num) return false;
    }
    return true;
  };
  const is33 = (matrix, row, col, num) => {
    let r = row - (row % 3);
    let c = col - (col % 3);
    for(let i = 0; i < 3; i++){
      for(let l = 0; l < 3; l++){
        if(matrix[r + i][c + l] === num) return false;
      }
    }
    return true;
  };
  const aux = (matrix, row = 0, col = 0, num = 0) => {
    let nextMatrix = JSON.parse(JSON.stringify(matrix));
    if(num !== 0){
      if(isWidth(matrix[row], num) && isHeight(nextMatrix, col, num) && is33(matrix, row, col, num)) nextMatrix[row][col] = num;
      else return false;
    }
    for(let i = row; i < nextMatrix.length; i++){
      let x = 0;
      if(i === row) x = col;
      for(let l = x; l < nextMatrix[i].length; l++){
        if(nextMatrix[i][l] === 0){
          for(let m = 1; m <= 9; m++){
            let result = aux(nextMatrix, i, l, m);
            if(result) return result;
          }
          return false;
        }
      }
    }
    return nextMatrix;
  };
  return aux(board)
};

let sample1 = [
  [0, 3, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];

console.log(sudoku(sample1)); // return 값
/* [
  [4, 3, 5, 2, 6, 9, 7, 8, 1],
  [6, 8, 2, 5, 7, 1, 4, 9, 3],
  [1, 9, 7, 8, 3, 4, 5, 6, 2],
  [8, 2, 6, 1, 9, 5, 3, 4, 7],
  [3, 7, 4, 6, 8, 2, 9, 1, 5],
  [9, 5, 1, 7, 4, 3, 6, 2, 8],
  [5, 1, 9, 3, 2, 6, 8, 7, 4],
  [2, 4, 8, 9, 5, 7, 1, 3, 6],
  [7, 6, 3, 4, 1, 8, 2, 5, 9],
] */