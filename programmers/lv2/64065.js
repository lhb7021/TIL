// 듀플
// https://programmers.co.kr/learn/courses/30/lessons/64065

// function solution(s) {
//   let asd = s.slice(1, s.length - 1)
//   let arr = [];
//   let qwe = [];
//   let num = '';
//   let result = [];
//   for(let i = 0; i < asd.length; i++){
//     if(/\d/.test(asd[i])){
//       num += asd[i];
//     }else{
//       if(num.length){
//         qwe.push(+num);
//         num = '';
//       }
//     }
//     if(/\}/.test(asd[i])){
//       arr.push(qwe);
//       qwe = [];
//     }
//   }
//   arr.sort((a, b) => a.length - b.length);
//   for(let el of arr){
//     for(let num of el){
//       if(!result.includes(num)) result.push(num)
//     }
//   }
//   return result;
// }

function solution(s) {
  let result = JSON.parse(s.replace(/\{|\}/g, (a) => a === '{' ? '[' : ']'))
    .sort((a, b) => a.length - b.length)
    .reduce((acc, cur) => {
      for(let el of cur){
        if(!acc.includes(el)) acc.push(el);
      };
      return acc;
    }, [])
  return result;
}

let sample1 = ['{{2},{2,1},{2,1,3},{2,1,3,4}}'];
let sample2 = ['{{1,2,3},{2,1},{1,2,4,3},{2}}'];
let sample3 = ['{{20,111},{111}}'];
let sample4 = ['{{123}}'];
let sample5 = ['{{4,2,3},{3},{2,3,4,1},{2,3}}'];

console.log(solution(...sample1)); // [2, 1, 3, 4]
console.log(solution(...sample2)); // [2, 1, 3, 4]
console.log(solution(...sample3)); // [111, 20]
console.log(solution(...sample4)); // [123]
console.log(solution(...sample5)); // [3, 2, 4, 1]
