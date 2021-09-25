// 01_orderOfPresentation
// https://urclass.codestates.com/codeproblem/55af3996-a362-4344-9da3-dcb858130220

function orderOfPresentation (N, K) {
  let saveFac = [1, 1];
  const fac = (num) => {
    if(!saveFac[num]) saveFac[num] = num * fac(num - 1);
    return saveFac[num];
  }
  let table = new Array(N).fill().map((_, i) => i + 1);
  let result = K.map((data, i) => {
    let findIndex = table.indexOf(data);
    table.splice(findIndex, 1);
    return fac(N - i - 1) * findIndex;
  });
  return result.reduce((acc, cur) => acc + cur, 0);
}

let sample1 = [3, [2, 3, 1]];
let sample2 = [5, [1, 3, 2, 4, 5]];

console.log(orderOfPresentation(...sample1)); // 3
console.log(orderOfPresentation(...sample2)); // 6
