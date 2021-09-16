// 쿼드압축 후 개수 세기
// https://programmers.co.kr/learn/courses/30/lessons/68936

function solution(arr) {
  let result = [0, 0];
  const getQuadTree = (mat) => {
    let a = mat[0][0];
    let valid = true;
    let newArr = [];
    for(let i = 0; i < mat.length; i++){
      for(let l = 0; l < mat[i].length; l++){
        if(mat[i][l] !== a){
          valid = false;
          break;
        }
      }
    }
    if(!valid){
      let arr1 = [];
      let arr2 = [];
      for(let el of mat){
        arr1.push(el.slice(0, el.length / 2));
        arr2.push(el.slice(el.length / 2));
      }
      newArr.push(arr1.slice(0, arr1.length / 2));
      newArr.push(arr2.slice(0, arr2.length / 2));
      newArr.push(arr1.slice(arr1.length / 2));
      newArr.push(arr2.slice(arr2.length / 2));
      return newArr.reduce((acc, cur) => acc.concat(getQuadTree(cur)), []);
    }
    return [mat];
  }
  let quadTree = getQuadTree(arr);
  for(let el of quadTree){
    result[el[0][0]]++;
  }
  return result;
}

let sample1 = [[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]];
let sample2 = [[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]];

console.log(solution(sample1)); // [4, 9]
console.log(solution(sample2)); // [10, 15]
