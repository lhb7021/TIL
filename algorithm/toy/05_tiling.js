// 05_tiling
// https://urclass.codestates.com/codeproblem/c53e45aa-095e-4742-967d-d22cb1ba9d6b

let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  let table = [0, 1, 2];
  const getCase = (num) => {
    if(table[num] === undefined) table[num] = getCase(num - 1) + getCase(num - 2);
    return table[num];
  }
  return getCase(n);
};

let sample1 = 2;
let sample2 = 4;

console.log(tiling(sample1)); // 2
console.log(tiling(sample2)); // 5
