let words = ['apple', 'samsung', 'xiaomi', 'sony', 'lg'];

let way = 3;

// 오름차순 정렬
if(way === 1){
  words.sort();
}else if(way === 2){
  words.sort((a, b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    if(a === b) return 0;
  })
}else if(way === 3){
  words.sort((a, b) => a.localeCompare(b));
}

console.log('words의 오름차순 정렬');
console.log(words);

//------------------------------------------------------
let word1 = 'a';
let word2 = 'b';

console.log(`a는 b보다 정렬상 앞이기 때문에 => ${word1.localeCompare(word2)}`)
console.log(`b는 a보다 정렬상 뒤이기 때문에 => ${word2.localeCompare(word1)}`)
console.log(`a와 a는 정렬상 위치가 같기 때문에 => ${word1.localeCompare('a')}`)

