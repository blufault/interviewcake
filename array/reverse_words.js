// Write a function reverse_words() that takes a message as a list of characters and reverses
//  the order of the words in place.
const reverse_words = (message) => {
  let word = '';
  r_words = message.reduce((accum, curr, index) => {
    if (curr !== ' ') {
      word += curr;
    }

    if (index === message.length - 1 || curr === ' '){
      accum.push(word);
      word = '';
    }

    return accum;
  }, []);

  console.log(r_words.reverse());
};

const message = "cake pound steal".split("");

reverse_words(message);

