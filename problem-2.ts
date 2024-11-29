function findLargestNumber(param: number[]): number {
  let result: number = param.reduce((pre, cur) => {
    if (pre > cur) {
      return pre;
    } else {
      return cur;
    }
  });
  return result;
}
// Sample Input:
console.log(findLargestNumber([10, 5, 8, 20, 3]));

// Sample Output:
20;
