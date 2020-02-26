module.exports = function countCats(matrix) {
  var count = 0;
  var matrixRows = [];
  for(var i = 0; i < matrix.length; i++){
    var matrixRows = matrix[i];
    for(var j = 0; j < matrixRows.length; j++){
      if(matrixRows[j] =="^^"){
        count++;
      }
    }
  }
  return count;
};
