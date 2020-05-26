// Write code that takes a long string and builds its word cloud data in a map

const { assert, isMapEqual } = require('../helper');

// input: word
// output: return bool to see if the end of the word has a punctuation
const has_punctuation = (word) => {
  const last_uni_char = word.charCodeAt(word.length - 1);
  const between_unicode = (start, end) => {
    return last_uni_char >= start && last_uni_char <= end;
  };

  return !(between_unicode(65, 90) || between_unicode(97, 122));
};

// input: word
// output: return the word without the last element
const remove_punctuation = (word) => {
  const last = word.length - 1;
  return word.split('').reduce((accum, c, r_index) => {
    if (r_index !== last) {
      accum += c;
    }
    return accum;
  }, '');
};

// output: return true or false if it lies between charCode 64 < x < 91;
const is_camel_case = (word) => {
  const code = word.charCodeAt(0);
  return code > 64 && code < 91;
};

// input: str
// output: map of key (word) and value (count)
const word_cloud = (input) => {
  const map = new Map();
  const exempt = new Set(['I']);

  input.split(' ').forEach((w) => {
    let word = w;
    if (has_punctuation(word)) {
      // strip the puncutation
      word = remove_punctuation(word);
      console.log('Removed puncutation:', { word });
    }

    if (is_camel_case(word)) {
      map.set(word, 1);
      if (!exempt.has(word) && !map.has(word)) {
        map.set(word.toLowerCase(), 1);
      }
    } else {
      if (map.has(word)) {
        let count = map.get(word);
        map.set(word, ++count);
      } else {
        map.set(word, 1);
      }
    }
  });

  console.log({ map });
  return map;
};

let desc = 'simple sentence';
let actual = word_cloud('I like cake');
let expected = new Map([['I', 1], ['like', 1], ['cake', 1]]);
assert(isMapEqual(actual, expected), desc);

desc = 'longer sentence';
actual = word_cloud('Chocolate cake for dinner and pound cake for dessert');
expected = new Map([['Chocolate', 1], ['cake', 2], ['for', 2], ['dinner', 1], ['and', 1], ['pound', 1], ['dessert', 1]]);
assert(isMapEqual(actual, expected), desc);

