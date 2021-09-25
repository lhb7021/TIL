// (탐욕법) 구명보트
// https://programmers.co.kr/learn/courses/30/lessons/42885

// function solution(people, limit) {
//   let result = 0;
//   let sort = people.concat([]).sort((a, b) => b - a);
  
//   while(sort.length > 0){
//     let sum = sort.shift();
//     for(let i = 0; i < sort.length; i++){
//       if(sum + sort[i] <= limit){
//           sum += sort.splice(i, 1)
//       }
//     }
//     result++;
//   }
//   return result;
// }

function solution(people, limit) {
  let sort = people.concat([]).sort((a, b) => b - a);
  let left = 0;
  let right = sort.length - 1;
  let result = 0;
  while(left <= right){
    if(left === right){
      left++;
      result++;
    }else{
      if(sort[left] + sort[right] <= limit){
        sort[left] += sort[right];
        right--;
      }else{
        left++;
        result++;
      }
    }
  }
  return result;
}


let sample1 = [[70, 50, 80, 50], 100];
let sample2 = [[70, 80, 50], 100];
let sample3 = [[100,500,500,900,950], 1000];

console.log(solution(...sample1)) // 3
console.log(solution(...sample2)) // 3
console.log(solution(...sample3)) // 3
