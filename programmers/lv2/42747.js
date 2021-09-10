// H-index
// https://programmers.co.kr/learn/courses/30/lessons/42747#

// function solution(citations) {
//   const aux = (num) => {
//     let high = 0;
//     for(let el of citations){
//       if(el >= num) high++;
//     }
//     return high >= num;
//   }
//   let max = Math.max(...citations);
//   for(let i = 1; i <= max; i++){
//     if(!aux(i)) return i - 1;
//   }
//   return 0;
// }

function solution(citations) {
  let result = citations.slice(0)
  .sort((a, b) => b - a)
  .filter((data, index) => data >= index + 1);
  
  return result.length;
}

let sample1 = [[3, 0, 6, 1, 5]];

console.log(solution(...sample1)); // 3
