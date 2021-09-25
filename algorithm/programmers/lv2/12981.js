// 영어 끝말잇기
// https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  let value = 0;
  let module = 0;
  for(let i = 1; i < words.length; i++){
    let arr = words.slice(0, i);
    let lastWord = arr[arr.length - 1];
    if(arr.includes(words[i]) || lastWord[lastWord.length - 1] !== words[i][0]){
      value = Math.floor(i / n) + 1;
      module = i % n + 1;
      break;
    }
  }
  return [module, value]
}

let sample1 = [3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]];
let sample2 = [5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]];
let sample3 = [2, ["hello", "one", "even", "never", "now", "world", "draw"]];

console.log(solution(...sample1)); // [3, 3]
console.log(solution(...sample2)); // [0, 0]
console.log(solution(...sample3)); // [1, 3]
