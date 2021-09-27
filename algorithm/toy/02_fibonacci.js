// 02_fibonacci
// https://urclass.codestates.com/codeproblem/089a3ba2-c65e-44a8-b832-03335c21fef9

function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.
  let table = [0, 1];
  const getFibo = (num) => {
    if(table[num] === undefined) table[num] = getFibo(num - 1) + getFibo(num - 2);
    return table[num];
  }
  return getFibo(n)
}

let sample1 = 0;
let sample2 = 1;
let sample3 = 5;
let sample4 = 9;

console.log(fibonacci(sample1)); // 0
console.log(fibonacci(sample2)); // 1
console.log(fibonacci(sample3)); // 5
console.log(fibonacci(sample4)); // 34
