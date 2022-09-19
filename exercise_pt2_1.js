const fatorialNum = (num) => {
  let prod = num;
  for (let index = num - 1; index > 1; index -= 1) {
    prod = prod * index;
  }
  return prod;
}

console.log(fatorialNum(15));
