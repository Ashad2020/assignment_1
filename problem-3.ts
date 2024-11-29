function filterEvenNumbers(arg: number[]): number[] {
  return arg.filter((value) => {
    if (value % 2 === 0) return value;
  });
}
// Sample Input:
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 35, 36]));

// Sample Output:
// [2, 4, 6]
// Sample Input:
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7]));
// Sample Output:
// (2, 4, 6)
