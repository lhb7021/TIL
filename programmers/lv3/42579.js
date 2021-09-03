// 베스트앨범
// https://programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  let obj = {};
  let result = [];
  // genres를 객체에 정리
  for(let i = 0; i < genres.length; i++){
    if(!obj[genres[i]]) obj[genres[i]] = [[plays[i], i]];
    else obj[genres[i]].push([plays[i], i]);
  }
  // 재생이 많이된 장르 순서
  let chart = Object.keys(obj)
    .map((key) => {
      let sum = obj[key].sort((a, b) => b[0] - a[0])
        .reduce((acc, cur) => acc + cur[0], 0);
      return [key, sum];
    })
    .sort((a, b) => b[1] - a[1])
    .map((data) => data[0]);
  // 재생이 많이 된 장르 순으로 가장 많이 플레이된 노래를 result에 push
  for(let el of chart){
    if(obj[el].length === 1) result.push(obj[el][0][1]);
    else{
      for(let i = 0; i < 2; i++){
          result.push(obj[el][i][1]);
      };
    };
  };
  return result;
}

let sample1 = [['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]];

console.log(solution(...sample1)); // [4, 1, 3, 0]
