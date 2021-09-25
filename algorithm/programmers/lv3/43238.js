// 입국심사
// https://programmers.co.kr/learn/courses/30/lessons/43238

function solution(n, times) {
  let { length } = times;
  
  let arr = [].concat(...times).sort((a, b) => a - b);
  let low = 0;
  let high = arr[length - 1] * n;
  let mid = Math.floor((low + high) / 2);
  let person = 0;
  while(low <= high){
    for(let el of arr)
      person += Math.floor(mid / el);
    
    if(person >= n) high = mid - 1;
    else low = mid + 1;
    
    person = 0;
    mid = Math.floor((low + high) / 2);
  };
  
  return low;
}

let sample1 = [6, [7, 10]];

console.log(solution(...sample1)); // 28
