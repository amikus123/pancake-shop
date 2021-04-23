
const arr = [3, 3, 1, -1, 2, 3, 4];
const findPeak = (arr) => {
  const middle = Math.floor(arr.length / 2);
  console.log(arr, middle);
  if (arr[middle] < arr[middle - 1]) {
    //left
    console.log("left");
    arr.splice(middle);
    findPeak(arr);
  } else if (arr[middle] < arr[middle + 1]) {
    console.log("right");
    findPeak(arr.splice(middle + 1));
  } else {
    console.log(arr[middle]);
    return arr[middle];
  }
};
// findPeak(arr)
// 2d vesrion
const mat = [
  [10, 8, 10, 10],
  [10, 8, 10, 1],
  [14, 13, 12, 12],
  [15, 9, 11, 2],
];
// pick middle column j = m/2
// find global max on column j an i j
// compare left and right
// left
const matfiz = (mat) => {
  const j = Math.ceil(mat[0].length / 2 );
  const length = mat[0].length
  const middleColumn = [];
  mat.forEach((item) => {
    middleColumn.push(item[j]);
  });
  const max = Math.max(...middleColumn);
  const i = middleColumn.indexOf(max);
  console.log(mat,max,middleColumn,"len -j" ,length,j);
  // comparing
  if(length ===1){
    const x = []
    mat.forEach(item=>x.push(item[0]))
    console.log("fin", Math.max(...x))
  } 
  else if (mat[i][j] < mat[i][j - 1]) {
    //left
    console.log("left");
    mat.forEach(item=>{
      for(let i=0;i<length-j;i++){
        item.pop()
      }
    })
    matfiz(mat)
  } else if (mat[i][j] < mat[i][j + 1]) {
    // right
    console.log("right");
    mat.forEach(item=>{
      for(let i=0;i<length-j;i++){
        item.shift()
      }
    })
    matfiz(mat)
  }
  else {
    console.log(mat[i][j], "peak");
  }
};
matfiz(mat);
