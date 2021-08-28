function game(number) {
  let tine = 0;
  if ((number % 10) % 3 == 0) {
    tine = number % 10;
    if (tine % 3 == 0 && number > 10) console.log("박수x2");
    else console.log("박수");
  } else {
    console.log("통과");
  }
}
game(6);
game(11);
game(18);
game(33);
game(9);
game(66);
