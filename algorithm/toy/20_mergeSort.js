// 20_mergeSort
// https://urclass.codestates.com/codeproblem/309d61f0-bb41-47aa-b514-0a209a9d637f

const mergeSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  const aux = (data) => {
    if(data.length < 2) return data;

    let middle = Math.ceil(data.length / 2);
    let left = data.slice(0, middle);
    let right = data.slice(middle);

    return merge(aux(left), aux(right));
  };
  const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let size = left.length + right.length;

    for(let i = 0; i < size; i++){
      if(leftIndex >= left.length){
        result.push(right[rightIndex++]);
      }else if(rightIndex >= right.length){
        result.push(left[leftIndex++]);
      }else{
        if(left[leftIndex] < right[rightIndex]){
          result.push(left[leftIndex++]);
        }else{
          result.push(right[rightIndex++]);
        }
      }
    }

    return result;
  };
  
  return aux(arr);
};

let sample1 = [[3, 1, 21]];

console.log(mergeSort(...sample1)); // [1, 3, 21]
