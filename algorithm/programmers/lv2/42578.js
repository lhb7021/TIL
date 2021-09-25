// 위장
// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  let wardrobe = {};
  clothes.forEach(([name, type]) => wardrobe[type] ? wardrobe[type].push(name) : wardrobe[type] = [name])
  let result = Object.entries(wardrobe);
  return result.reduce((acc, cur) => acc * (cur[1].length + 1), 1) - 1
}

let sample1 = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
let sample2 = [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]];

console.log(solution(sample1)); // 5
console.log(solution(sample2)); // 3
