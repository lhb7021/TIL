// 9주차_전력망을 둘로 나누기
// https://programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
  const getDifferent = (a, obj) => {
    let visit = new Array(n).fill(false);
    let queue = [a];
    while(queue.length){
      let x = queue.shift();
      visit[x - 1] = true;
      if(obj[x].length){
        obj[x].forEach((data) => {
          if(!visit[data - 1]) queue.push(data);
        });
      }
    }
    
    let result = visit.filter((data) => data).length;
    return Math.abs(result * 2 - n);
  };
  let result = [];
  for(let i = 0 ; i < wires.length; i++){
    let arr;
    if(i === 0) arr = wires.slice(1);
    else{
      let arr1 = wires.slice(0, i);
      let arr2 = wires.slice(i + 1);
      arr = arr1.concat(arr2);
    }
    
    let obj = {};
    arr.forEach(([a, b]) => {
      if(!obj[a]) obj[a] = [];
      if(!obj[b]) obj[b] = [];
      obj[a].push(b);
      obj[b].push(a);
    });
    
    result.push(getDifferent(arr[0][0], obj));
  }
  
  return Math.min(...result);
}

let sample1 = [9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]];
let sample2 = [4, [[1,2],[2,3],[3,4]]];
let sample3 = [7, [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]];

console.log(solution(...sample1)); // 3
console.log(solution(...sample2)); // 0
console.log(solution(...sample3)); // 1
