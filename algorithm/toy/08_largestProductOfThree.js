// 08_largestProductOfThree
// https://urclass.codestates.com/codeproblem/7c2e6de0-96ae-4569-84b6-df734c7360e5

const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let { length } = arr;
  let table = [].concat(arr).sort((a, b) => a - b);
  let sample1 = table[length - 1] * table[length - 2] * table[length - 3];
  let sample2 = table[0] * table[1] * table[length - 1];
  return Math.max(sample1, sample2);
};

let sample1 = [2, 1, 3, 7];
let sample2 = [-1, 2, -5, 7];

console.log(largestProductOfThree(sample1)); // 42
console.log(largestProductOfThree(sample2)); // 35
