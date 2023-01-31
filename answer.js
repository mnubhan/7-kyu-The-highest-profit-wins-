function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

function minMax(arr){
  return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}
