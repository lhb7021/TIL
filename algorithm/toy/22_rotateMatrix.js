// 22_rotateMatrix
// https://urclass.codestates.com/codeproblem/54c08b2e-4c47-47fb-a76a-c3138bde00b1

const rotateMatrix = function (matrix, k = 1) {
  // TODO: 여기에 코드를 작성합니다.
  if(matrix.length === 0) return [];
  if(k > 3) k = k % 4;
  if(k === 0) return matrix;
  const n = matrix.length;
  const m = matrix[0].length;
  let result = [];

  for(let i = 0; i < m; i++){
    let arr = [];
    for(let l = 0; l < n; l++){
      let x = n - l - 1;
      arr.push(matrix[x][i]);
    }
    result.push(arr);
  }

  return rotateMatrix(result, k - 1);
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]
let sample1 = [matrix];
let sample2 = [matrix, 3];
let sample3 = [matrix, 4];

console.log(rotateMatrix(...sample1)); // 90도 회전
console.log(rotateMatrix(...sample2)); // 270도 회전
console.log(rotateMatrix(...sample3)); // 0도 회전
