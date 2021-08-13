console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("2");
console.log("3");

function printImmediately(print) {
  print();
}

function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
printImmediately(() => console.log("hello"));
printWithDelay(() => console.log("async callback"), 2000);
