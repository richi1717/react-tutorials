var _ = require('lodash');

var ranIndex = _.random(0, 11);
var ranMath = _.random(0, 1);
if (ranMath === 1) {
  ranMath = 1;
} else {
  ranMath = -1;
}
var array = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

array[ranIndex] = array[ranIndex] + ranMath;
var a = array.slice(0, 4);
var b = array.slice(4, 8);
var c = array.slice(8, 12);
var d;
var e;
var winner;
a = a.join('');
b = b.join('');
c = c.join('');

if (a > b) {
  winner = a;
} else if (a < b) {
  winner = b;
} else {
  winner = c;
}

if (winner === a) {

  if (a > c) {
    console.log('a > c');
  } else if (a < c) {
    console.log('a < c');
  } else {
    winner = b;
    console.log(winner, "winner B");
  }

  console.log('a');
} else if (winner === b) {

   if (b > c) {
    console.log('b > c');
  } else if (b < c) {
    console.log('b < c');
  } else {
    winner = a;
    console.log(winner, "winner a");
  }

  console.log('b');
} else if (winner === c) {
  d = c.slice(0, 2);
  e = c.slice(2, 4);

  console.log('c', c, d);
} else {
  console.log('you made an error');
}

console.log(a, b, c, array, winner);
