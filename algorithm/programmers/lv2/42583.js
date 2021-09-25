// 다리를 지나는 트럭
// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  let bridge = new Array(bridge_length).fill(0);
  let index = 0;
  let result = 0;
  while(bridge.length){
    result++;
    bridge.shift();
    let bridge_weight = bridge.reduce((acc, cur) => acc + cur, 0);
    if(index < truck_weights.length){
      if(bridge_weight + truck_weights[index] <= weight){
        bridge.push(truck_weights[index]);
        index++;
      }else{
        bridge.push(0);
      }
    }
  }
  return result;
}

let sample1 = [2, 10, [7,4,5,6]];
let sample2 = [100, 100, [10]];
let sample3 = [100, 100, [10,10,10,10,10,10,10,10,10,10]];

console.log(solution(...sample1)); // 8
console.log(solution(...sample2)); // 101
console.log(solution(...sample3)); // 110
