// 11_powerSet
// https://urclass.codestates.com/codeproblem/e7598493-e085-4931-b8c2-8225ecca4382

const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let strSet = new Set(str.split(""));
  let sort = [...strSet].sort();
  let result = [];
  const aux = (s, r = '') => {
    result.push(r);
    for(let i = 0; i < s.length; i++){
      aux(s.slice(i + 1), r + s[i]);
    }
    return;
  }
  aux(sort);
  return result;
};

// const powerSet = function (str) {
//   // TODO: 여기에 코드를 작성합니다.
//   let result = [];
//   let obj = {};
//   let uniqueSort = str.split("").sort().filter((data) => {
//     if(!obj[data]){
//       obj[data] = true;
//       return true;
//     }
//     return false;
//   });
//   const aux = (s, r = '') => {
//     result.push(r);
//     for(let i = 0; i < s.length; i++) aux(s.slice(i + 1), r + s[i]);
//   }
//   aux(uniqueSort);
//   return result;
// }

let sample1 = ['abc'];
let sample2 = ['jjump'];

console.log(powerSet(...sample1)); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']
console.log(powerSet(...sample2)); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']
