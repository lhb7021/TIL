// 17_balancedBrackets
// https://urclass.codestates.com/codeproblem/ecff6b4c-be78-4cc6-9005-920976f1e826

const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  const table = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const opener = Object.keys(table);
  const closer = Object.values(table);
  let stack = [];
  for(let i = 0; i < str.length; i++){
    if(opener.includes(str[i])) stack.push(str[i]);
    if(closer.includes(str[i])){
      let pair = stack.pop();
      if(str[i] !== table[pair]) return false;
    }
  }
  return stack.length === 0;
};


let sample1 = ["("];
let sample2 = ["()"];
let sample3 = ["[](){}"];
let sample4 = ["[({})]"];
let sample5 = ["[(]{)}"];

console.log(balancedBrackets(...sample1)); // false
console.log(balancedBrackets(...sample2)); // true
console.log(balancedBrackets(...sample3)); // true
console.log(balancedBrackets(...sample4)); // true
console.log(balancedBrackets(...sample5)); // false
