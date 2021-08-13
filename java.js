const fruits = ["apple", "banana", "orange"];

const str1 = fruits.join();

console.log(str1);
const apple = "🍎, 🥝, 🍌, 🍒";

const arr = apple.split();

console.log(arr);
console.log(arr.length);

const array = [1, 2, 3, 4, 5];
reverse = [...array].reverse();
console.log(reverse);
array.shift();
array.shift();
console.log(array);

const result10 = array.splice(0, 2);
console.log(result10);
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const studentes = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
const result = studentes.find((student) => student.score === 90);
console.log(result);

const result1 = studentes.filter((student) => student.score < 50);
console.log(result1);

const result2 = studentes.map((student) => student.score * 2);
console.log(result2);

const result4 = studentes.some((student) => student.score < 50);
console.log(result4);
const result5 = studentes.every((student) => student.score < 50);
console.log(result5);
const result6 = studentes.reduce((prev, cur) => {
  return prev + cur.score;
}, 0);
console.log(result6);
