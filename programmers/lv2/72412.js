// 순위 검색
// https://programmers.co.kr/learn/courses/30/lessons/72412

// function solution(info, query) {
//   let userInfo = info.map((data) => data.split(' '));
//   let queries = query.map((data) => data.split(' ').filter((el) => el !== 'and'));
//   let result = queries.map((data) => {
//     let count = 0;
//     for(let user of userInfo){
//       let valid = true;
//       for(let i = 0; i < data.length; i++){
//         if(data[i] !== '-'){
//           if(/\d/.test(data[i])){
//             if(+data[i] > +user[i]){
//               valid = false;
//               break;
//             }
//           }else{                        
//             if(data[i] !== user[i]){
//               valid = false;
//               break;
//             }
//           }
//         }
//       }
//       if(valid) count++;
//     }
//     return count;
//   })
//   return result;
// }

// function solution(info, query) {
//   let userInfo = info.map((data) => data.split(' '));
//   let queries = query.map((data) => data.split(' ').filter((el) => el !== 'and'));
//   let result = queries.map((data) => {
//     let arr = userInfo.filter((user) => +user[4] >= +data[4]);
//     for(let q = 0; q < data.length - 1; q++){
//       if(data[q] !== '-'){
//         arr = arr.filter((user) => user[q] === data[q]);
//       }
//     }
//     return arr.length;
//   })
//   return result;
// }

// function solution(info, query) {
//   let userInfo = [];
//   let queries = [];
//   let result = [];
//   for(let i = 0; i < info.length; i++){
//     let arr = info[i].split(' ');
//     userInfo.push(arr);
//   }

//   for(let i = 0; i < query.length; i++){
//     let arr = query[i].split(' ').filter((data) => data !== 'and');
//     queries.push(arr);
//   }

//   for(let i = 0; i < queries.length; i++){
//     let count = 0;
//     for(let user of userInfo){
//       let valid = true;
//       for(let q = 0; q < queries[i].length; q++){
//         if(queries[i][q] !== '-'){
//           if(/\d/.test(queries[i][q])){
//             if(+queries[i][q] > +user[q]){
//               valid = false;
//               break;
//             }
//           }else{
//             if(queries[i][q] !== user[q]){
//               valid = false;
//               break;
//             }
//           }
//         }
//       }
//       if(valid) count++;
//     }
//     result.push(count);
//   }
//   return result;
// }

function solution(info, query) {
  let obj = {};
  const aux = (arr, score, start = 0) => {
    let str = arr.join('');
    if(obj[str]){
      obj[str].push(score);
    }else{
      obj[str] = [score];
    }

    for(let i = start; i < arr.length; i++){
      let temp = [].concat(arr);
      temp[i] = '-';
      aux(temp, score, i + 1);
    }
  };
  let result = [];
  for(let user of info){
    let userInfo = user.split(' ');
    let score = userInfo.pop();
    aux(userInfo, +score);
  }

  for(let el in obj){
    obj[el].sort((a, b) => a - b);
  }

  for(let q of query){
    let queries = q.replace(/and /g, '').split(' ');
    let score = queries.pop();
    let key = queries.join('');
    let arr = obj[key];
    if(arr){
      let left = 0;
      let right = arr.length;
      while(left < right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] >= score){
          right = mid;
        }else{
          left = mid + 1;
        }
      }
      result.push(arr.length - left);
    }else{
      result.push(0);
    }
  }
  return result;
}

let sample1 = [["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]];

console.log(solution(...sample1)); // [1,1,1,1,2,4]
