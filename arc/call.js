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

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}
