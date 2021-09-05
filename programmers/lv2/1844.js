// 게임 맵 최단거리
// https://programmers.co.kr/learn/courses/30/lessons/1844

// function solution(maps) {
//   let result = [];
//   const findRoad = (map, a = 0, b = 0, move = 1) => {
//     if(a === map.length - 1 && b === map[0].length - 1) return result.push(move);
//     let updateMap = [].concat(map);
//     updateMap[a][b] = 0;
//     if(b + 1 < updateMap[0].length){
//       if(updateMap[a][b + 1]) findRoad(updateMap, a, b + 1, move + 1);
//     }
//     if(a + 1 < updateMap.length){
//       if(updateMap[a + 1][b]) findRoad(updateMap, a + 1, b, move + 1);
//     }
//     if(b - 1 >= 0){
//       if(updateMap[a][b - 1]) findRoad(updateMap, a, b - 1, move + 1);
//     }
//     if(a - 1 >= 0){
//       if(updateMap[a - 1][b]) findRoad(updateMap, a - 1, b, move + 1);
//     }
//     return;
//   };
//   findRoad(maps);
//   return result.length ? Math.min(...result) : -1;
// }

function solution(maps) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const n = maps.length;
  const m = maps[0].length;
  let updateMap = [].concat(maps);
  let result = 1;
  let queue = [];
  
  queue.push([0, 0]);
  updateMap[0][0] = 0;
  while(queue.length > 0){
    let queueSize = queue.length;
    for(let i = 0; i < queueSize; i++){
      let [x, y] = queue.shift();
      for(let j = 0; j < 4; j++){
        let nx = x + dx[j];
        let ny = y + dy[j];
        if(nx >= 0 && nx < n && ny >= 0 && ny < m && updateMap[nx][ny] === 1){
          if(nx == n - 1 && ny == m - 1) return ++result;
          queue.push([nx, ny]);
          updateMap[nx][ny] = 0;
        };
      };
    };
    result++;
  };
  return -1;
}

let sample1 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
let sample2 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];

console.log(solution(sample1)); // 11
console.log(solution(sample2)); // -1
