
exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0
}
  for (let i=0;i<array.length;i++){
  let tet = array.sort((a,b) => a-b);
  return tet[0]; 
  }
}


exports.max = function max (array) {
  if (!array || array.length === 0) {
    return 0
}
  for (let i=0;i<array.length;i++){
    let tet = array.sort((a,b) => b-a);
    return tet[0];
    }
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) {
    return 0
}
  for (let i=0;i<array.length;i++){
   let tet = array.reduce((a,b) => (a+b)) / array.length;
   return tet;
  }
}
