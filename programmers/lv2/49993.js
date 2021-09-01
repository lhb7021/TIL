// 스킬트리
// https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  const aux = (str) => {
    let index = 0;
    for(let i = 0; i < str.length; i++){
      if(skill.includes(str[i])){
        if(skill[index] !== str[i]){
          return false;
        }
        index++;
      };
    };
    return true;
  }
  return skill_trees.filter((data) => aux(data)).length;
}

let sample1 = ["CBD", ["BACDE", "CBADF", "AECB", "BDA"]];

console.log(solution(...sample1)) // 2