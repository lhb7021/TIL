// 03_isSubsetOf
// https://urclass.codestates.com/codeproblem/a4cb0a65-985a-40fb-8063-103167db909a

// const isSubsetOf = function (base, sample) {
//   for(let el of sample){
//     if(!base.includes(el)) return false;
//   }
//   return true;
// };

// 시간복잡도 개선
const isSubsetOf = function (base, sample) {
  let table = new Set();
  for(let el of base){
    table.add(el);
  }
  for(let el of sample){
    if(!table.has(el)) return false;
  }
  return true;
};

let sample1 = [[1, 2, 3, 4, 5], [1, 3]];
let sample2 = [[1, 2, 3, 4, 5], [6, 7]];
let sample3 = [[1, 2, 3, 4, 5], [11, 100, 99, 123]];

console.log(isSubsetOf(...sample1)); // true
console.log(isSubsetOf(...sample2)); // false
console.log(isSubsetOf(...sample3)); // false
