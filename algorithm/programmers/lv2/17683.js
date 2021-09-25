// [3차] 방금그곡
// https://programmers.co.kr/learn/courses/30/lessons/17683

function solution(m, musicinfos) {
  const getMelody = (str) => {
    let arr = [];
    for(let i = 0; i < str.length; i++){
      if(str[i] === '#') arr[arr.length - 1] += str[i];
      else arr.push(str[i]);
    }
    return arr;
  };
  const getMin = (a, b) => {
    let [aH, aM] = a.split(':').map((data) => +data);
    let [bH, bM] = b.split(':').map((data) => +data);
    let min = bM - aM;
    if(aM > bM){
      bH--;
      min += 60;
    }
    return aH > bH ? (bH - aH + 24) * 60 + min : (bH - aH) * 60 + min;
  };
  const isMatch = (a, b) => {
    for(let i = 0; i < a.length; i++){
      if(a[i] !== b[i]) return false;
    }
    return true;
  };
  let melody = getMelody(m);
  let musicInfo = [];
  for(let i = 0; i < musicinfos.length; i++){
    let info = musicinfos[i].split(',');
    let min = getMin(info[0], info[1]);
    let song = getMelody(info[3]);
    let play = [];
    for(let i = 0; i < min; i++){
      if(i >= song.length) play.push(song[i % song.length]);
      else play.push(song[i]);
    }
    let arr = [info[2], play, min, i];
    musicInfo.push(arr);
  }
  let result = musicInfo.filter((data) => {
    for(let i = 0; i <= data[1].length - melody.length; i++){
      if(data[1][i] === melody[0]){
        if(isMatch(melody, data[1].slice(i))) return true;
      }
    }
    return false;
  });
  if(result.length){
    return result.sort((a, b) => {
      if(a[2] === b[2]) return a[3] - b[3];
      return b[2] - a[2];
    })[0][0];
  }
  return '(None)';
}

let sample1 = ['ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']];
let sample2 = ['CC#BCC#BCC#BCC#B', ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B']];
let sample3 = ['ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF']];

console.log(solution(...sample1)); // 'HELLO'
console.log(solution(...sample2)); // 'FOO'
console.log(solution(...sample3)); // 'WORLD'
