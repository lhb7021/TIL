// 방문 길이
// https://programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
  const isValid = (a, b) => {
    if(a < -5 || a > 5 || b < -5 || b > 5) return false;
    return true;
  };
  let visit = new Set();
  let y = 0, x = 0, result = 0;
  for(let i = 0; i < dirs.length; i++){
    let newY = y, newX = x;
    if(dirs[i] === 'U') newY++;
    if(dirs[i] === 'D') newY--;
    if(dirs[i] === 'R') newX++;
    if(dirs[i] === 'L') newX--;
    if(isValid(newY, newX)){
      if(!visit.has('' + y + x + newY + newX)){
        visit.add('' + y + x + newY + newX);
        visit.add('' + newY + newX + y + x);
        result++;
      }
      y = newY;
      x = newX;
    }
  }
  return result;
}

let sample1 = 'ULURRDLLU';
console.log(solution(sample1)) // 7

let sample2 = 'LULLLLLLU';
console.log(solution(sample2)) // 7