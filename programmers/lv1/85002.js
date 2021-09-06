// [6주차]
// https://programmers.co.kr/learn/courses/30/lessons/85002

function solution(weights, head2head) {
  let rate = head2head.map((data, index) => {
    let win = 0, low = 0, heavy = 0;
    for(let i = 0; i < data.length; i++){
      if(data[i] === 'W'){
        win++;
        if(weights[index] < weights[i]) heavy++;
      }
      if(data[i] === 'L') low++;
    }
    if(win + low === 0) return [0, heavy, index];
    return [win / (win + low) * 100, heavy, index];
  }).sort((a, b) => {
    if(a[0] === b[0]){
      if(a[1] === b[1]){
        if(weights[a[2]] === weights[b[2]]) a[2] - b[2];
        return weights[b[2]] - weights[a[2]];
      }
      return b[1] - a[1]
    }
    return b[0] - a[0]
  });
  let result = rate.map((data) => data[2] + 1);
  
  return result
}

let sample1 = [[50,82,75,120], ["NLWL","WNLL","LWNW","WWLN"]];
let sample2 = [[145,92,86], ["NLW","WNL","LWN"]];
let sample3 = [[60,70,60], ["NNN","NNN","NNN"]];

console.log(solution(...sample1)); // [3,4,1,2]
console.log(solution(...sample2)); // [2,3,1]
console.log(solution(...sample3)); // [2,1,3]
