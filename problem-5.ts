interface Student {
  name: string;
  age: number;
  grades: number[];
}
// Sample Input:
const student1: Student = {
  name: "Bob",
  age: 17,
  grades: [75, 80, 82, 88, 90],
};
function calculateAverageGrade(arg: Student): number {
  let sum: number = arg.grades.reduce((pre, cur) => {
    return pre + cur;
  });
  let average: number = sum / arg.grades.length;
  return average;
}

const averageGradeForBob = calculateAverageGrade(student1);
console.log(averageGradeForBob);

// Sample Output:
// 83;
