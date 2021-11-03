// 15_primePassword
// https://urclass.codestates.com/codeproblem/8c366c31-4196-4392-9744-9d57aa5ecb13

const primePassword = (curPwd, newPwd) => {
  // TODO: 여기에 코드를 작성합니다.
  const isPrime = (num) => {
    if(num % 2 === 0) return false;
    let numSqrt = Math.floor(Math.sqrt(num));
    for(let i = 3; i <= numSqrt; i += 2){
      if(num % i === 0) return false;
    }
    return true;
  };
  const numSplit = (num) => num.toString().split("").map((data) => +data);
  const arrJoin = (arr) => +arr.join("");
  let isVisited = new Array(10000).fill(false);
  let queue = [[0, curPwd]];
  isVisited[curPwd] = true;

  while(queue.length){
    let [step, pwd] = queue.shift();
    if(pwd === newPwd) return step;
    
    for(let i = 0; i < 4; i++){
      let arrTemp = numSplit(pwd);
      for(let l = 0; l < 10; l++){
        if(l !== arrTemp[i]){
          arrTemp[i] = l;
          let temp = arrJoin(arrTemp);
          if(temp > 1000 && isPrime(temp) && !isVisited[temp]){
            isVisited[temp] = true;
            queue.push([step + 1, temp]);
          }
        }
      }
    }
  }
};

let sample1 = [1033, 1033];
let sample2 = [3733, 8779];

console.log(primePassword(...sample1)); // 
console.log(primePassword(...sample2)); // 
