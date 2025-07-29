const makeChange = (c) => {
  c = parseInt(c); // Ensure input is treated as an integer

  const change = {};

  change.q = Math.floor(c / 25);
  c %= 25;

  change.d = Math.floor(c / 10);
  c %= 10;

  change.n = Math.floor(c / 5);
  c %= 5;

  change.p = c;

  return change;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

