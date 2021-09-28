// 04_bubbleSort
// https://urclass.codestates.com/codeproblem/59f6934a-fe46-4dbe-956a-d1d21d12b797

const bubbleSort = function (arr) {
  let isChange;
  let sort = [].concat(arr);
  do{
    isChange = false;
    for(let i = 0; i < sort.length - 1; i++){
      if(sort[i] > sort[i + 1]){
        isChange = true;
        let temp = sort[i + 1];
        sort[i + 1] = sort[i];
        sort[i] = temp;
      }
    }
  }while(isChange);
  return sort;
};

let sample1 = [2, 1, 3];

console.log(bubbleSort(sample1)); // [1, 2, 3]
