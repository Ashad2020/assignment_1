function logString(arg: unknown): string {
  if (typeof arg !== "string") {
    throw Error("Input is not a string.");
  }
  return arg;
}

// Sample Input 1:
console.log(logString("Hello, TypeScript!"));

// Sample Output 1:
// "Hello, TypeScript!"

// Sample Input 2:
console.log(logString(42));

// Output: Error:
// Input is not a string.
