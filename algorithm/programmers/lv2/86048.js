// 7주차
// https://programmers.co.kr/learn/courses/30/lessons/86048

function solution(enter, leave) {
  let obj = {};
  let room = [];
  let index = 0;
  for(let el of enter){
    obj[el] = [];
  }
  for(let i = 0; i < leave.length; i++){
    if(!room.includes(leave[i])){
      for(let l = index; l < enter.length; l++){
        room.push(enter[l]);
        if(enter[l] === leave[i]){
          index = l + 1;
          break;
        }
      }
    }
    for(let el of room){
      if(el !== leave[i]){
        if(!obj[el].includes(leave[i])) obj[el].push(leave[i]);
        if(!obj[leave[i]].includes(el)) obj[leave[i]].push(el);
      }
    }
    room.splice(room.indexOf(leave[i]), 1);
  }
  return Object.keys(obj).map((data) => obj[data].length);
}

let sample1 = [[1,3,2], [1,2,3]];
let sample2 = [[1,4,2,3], [2,1,3,4]];
let sample3 = [[3,2,1], [2,1,3]];
let sample4 = [[3,2,1], [1,3,2]];
let sample5 = [[1,4,2,3], [2,1,4,3]];

console.log(solution(...sample1)); // [0,1,1]
console.log(solution(...sample2)); // [2,2,1,3]
console.log(solution(...sample3)); // [1,1,2]
console.log(solution(...sample4)); // [2,2,2]
console.log(solution(...sample5)); // [2,2,0,2]
