// 09_power
// https://urclass.codestates.com/codeproblem/ae2499d8-36cf-4039-9958-17c3abfd7a87

// function power(base, exponent) {
//   // todo: 여기에 코드를 작성합니다.
//   let table = [1, base];
//   const aux = (num) => {
//     if(!table[num]) table[num] = (aux(num - 1) * base) % 94906249;
//     return table[num];
//   }
//   return aux(exponent);
// }

function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  let table = [1, base];
  const aux = (num) => {
    if(!table[num]){
      let half = Math.floor(num / 2);
      let temp = aux(half);
      table[num] = temp * temp % 94906249;
      if(num % 2 === 1) table[num] = table[num] * base % 94906249;
    }
    return table[num];
  }
  return aux(exponent);
}

let sample1 = [2, 3];
let sample2 = [3, 40];

console.log(power(...sample1)); // 8
console.log(power(...sample2)); // 19334827
