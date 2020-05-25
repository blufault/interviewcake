// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes)
// and returns a boolean indicating whether there are two numbers in movieLength whose sum equals flightLength

const { AssertDeepEqual } = require('../helper');

// A Set is better because I want a way to know if that movie_length exists
const areSumsEqualToFlight = (flightLength, movieLengths) => {
  const cache = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const movie_length = movieLengths[i];
    const diff = Math.abs(flightLength - movie_length);
    if (cache.has(movie_length)) {
      return true;
    }

    cache.add(diff);
  }

  return false;
};

let desc = 'short flight';
let actual = areSumsEqualToFlight(1, [2, 4]);
let expected = false;
AssertDeepEqual(actual, expected, desc);

desc = 'long flight';
actual = areSumsEqualToFlight(6, [2, 4]);
expected = true;
AssertDeepEqual(actual, expected, desc);

desc = 'one movie half flight length';
actual = areSumsEqualToFlight(6, [3, 8]);
expected = false;
AssertDeepEqual(actual, expected, desc);

desc = 'two movie half flight length';
actual = areSumsEqualToFlight(6, [3, 8, 3]);
expected = true;
AssertDeepEqual(actual, expected, desc);

desc = 'lots of possible pairs';
actual = areSumsEqualToFlight(7, [1, 2, 3, 4, 5, 6]);
expected = true;
AssertDeepEqual(actual, expected, desc);

desc = 'not using first movie';
actual = areSumsEqualToFlight(5, [4, 3, 2]);
expected = true;
AssertDeepEqual(actual, expected, desc);

desc = 'only one movie';
actual = areSumsEqualToFlight(6, [6]);
expected = false;
AssertDeepEqual(actual, expected, desc);

desc = 'no movies';
actual = areSumsEqualToFlight(2, []);
expected = false;
AssertDeepEqual(actual, expected, desc);
