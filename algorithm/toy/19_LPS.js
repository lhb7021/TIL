// 19_LPS
// https://urclass.codestates.com/codeproblem/b1777c51-0f96-4053-9d9f-3c7cd7333055

// const LPS = function (str) {
//   // TODO: 여기에 코드를 작성합니다.
//   const r = Math.floor(str.length / 2);
//   let result = 0;
//   for(let i = 0; i < r; i++){
//     let temp = str.slice(0, i + 1);
//     let left = new RegExp('^' + temp);
//     let right = new RegExp(temp + '$');
//     if(left.test(str) && right.test(str)){
//       if(temp.length > result) result = temp.length;
//     }
//   }
//   return result;
// };

const LPS = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = new Array(str.length).fill(0);
  let leftIndex = 0;
  let rightIndex = Math.ceil(str.length / 2);

  while(rightIndex < str.length){
    if(str[leftIndex] === str[rightIndex]){
      result[rightIndex++] = ++leftIndex;
    }else{
      if(leftIndex){
        leftIndex = 0;
      }else{
        rightIndex++;
      }
    }
  }
  return str.length ? result[str.length - 1] : 0
};

let sample1 = ['abbbcc'];
let sample2 = ['aaaa'];
let sample3 = ['aaaaa'];
let sample4 = ['abcdabbb'];
let sample5 = ['acbcab'];

console.log(LPS(...sample1)); // 0
console.log(LPS(...sample2)); // 2
console.log(LPS(...sample3)); // 2
console.log(LPS(...sample4)); // 0
console.log(LPS(...sample5)); // 0
