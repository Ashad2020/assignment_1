// title (string), author (string), and publishedYear (number).
type Book = {
  title: string;
  author: string;
  publishedYear: number;
};
// Sample Input :
const book1: Book = {
  title: "Sample Book",
  author: "John Doe",
  publishedYear: 2018,
};
function isRecentBook(arg: Book): Boolean {
  let currentYear = new Date().getFullYear();
  if (currentYear - arg.publishedYear <= 5) {
    return true;
  }
  return false;
}

console.log(isRecentBook(book1));
// Sample Output:
// true;
