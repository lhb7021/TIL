// 거리두기 확인하기
// https://programmers.co.kr/learn/courses/30/lessons/81302#fn1

// function solution(places) {
//   let locations = [];
//   const getLocation = (place) => {
//     let arr = [];
//     for(let i = 0; i < place.length; i++){
//       for(let j = 0; j < place[i].length; j++){
//         if(place[i][j] === 'P') arr.push([i, j]);
//       }
//     }
//     return arr;
//   };
//   const getManhattan = (location, index) => {
//     for(let i = 0; i < location.length; i++){
//       let [r1, c1] = location[i];
//       let rest = location.slice(i + 1);
//       for(let j = 0; j < rest.length; j++){
//         let [r2, c2] = rest[j];
//         let manhattan = Math.abs(r1 - r2) + Math.abs(c1 - c2);
//         if(manhattan <= 2){
//           if(r1 === r2){
//             if(places[index][r1][(c2 + c1) / 2] !== 'X') return 0;
//           }else if(c1 === c2){
//             if(places[index][(r2 + r1) / 2][c1] !== 'X') return 0;
//           }else{
//             if(places[index][r1][c2] !== 'X' || places[index][r2][c1] !== 'X') return 0;
//           }
//         }
//       }
//     }
//     return 1;
//   }
//   for(let place of places){
//     locations.push(getLocation(place));
//   };
//   return locations.map((location, index) => getManhattan(location, index))
// }

// function solution(places) {
//   const isValidAux = (a, b, place, x, y) => {
//     if(a - 1 !== x && a > 0){
//       if(place[a - 1][b] === 'P') return false;
//     }
//     if(b + 1 !== y && b + 1 < place[a].length){
//       if(place[a][b + 1] === 'P') return false;
//     }
//     if(a + 1 !== x && a + 1 < place.length){
//       if(place[a + 1][b] === 'P') return false;
//     }
//     if(b - 1 !== y && b > 0){
//       if(place[a][b - 1] === 'P') return false;
//     }
//     return true;
//   }
//   const isValid = (a, b, place) => {
//     if(a > 0){
//       if(place[a - 1][b] === 'P') return false;
//       if(place[a - 1][b] !== 'X') return isValidAux(a - 1, b, place, a, b);
//     }
//     if(b + 1 < place[a].length){
//       if(place[a][b + 1] === 'P') return false;
//       if(place[a][b + 1] !== 'X') return isValidAux(a, b + 1, place, a, b);
//     }
//     if(a + 1 < place.length){
//       if(place[a + 1][b] === 'P') return false;
//       if(place[a + 1][b] !== 'X') return isValidAux(a + 1, b, place, a, b);
//     }
//     if(b > 0){
//       if(place[a][b - 1] === 'P') return false;
//       if(place[a][b - 1] !== 'X') return isValidAux(a, b - 1, place, a, b);
//     }
//   }
//   let result = places.map((place) => {
//     for(let i = 0; i < place.length; i++){
//       for(let l = 0; l < place[i].length; l++){
//         if(place[i][l] === 'P'){
//           if(!isValid(i, l, place)) return 0;
//         }
//       }
//     }
//     return 1;
//   })
//   return result;
// }

function solution(places) {
  return places.map((place) => {
    let covid = new Array(place.length).fill().map(() => new Array(place[0].length).fill(0));
    for(let i = 0; i < place.length; i++){
      for(let l = 0; l < place[i].length; l++){
        if(place[i][l] === 'P'){
          covid[i][l]--;
          if(i > 0) covid[i - 1][l]--;
          if(l + 1 < place[i].length) covid[i][l + 1]--;
          if(i + 1 < place.length) covid[i + 1][l]--;
          if(l > 0) covid[i][l - 1]--; 
        }
        if(place[i][l] === 'X') covid[i][l] += 3;
      }
    }
    return covid.filter((data) => data.includes(-2)).length ? 0 : 1;
  });
}

let sample1 = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];

console.log(solution(sample1)); // [1, 0, 1, 1, 1]

