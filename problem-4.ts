function reverseArray<Type>(arg: Type[]): Type[] {
  return arg.reverse();
}

// Sample Input 1:
console.log(reverseArray(["apple", "banana", "cherry"]));

// Sample Output 1:
//["cherry", "banana", "apple"]

// Sample Input 2:
console.log(reverseArray([10, 20, 30]));

// Sample Output 2:
//[30, 20, 10]
