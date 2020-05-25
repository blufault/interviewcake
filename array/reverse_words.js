// Write a function reverse_words() that takes a message as a list of characters and reverses
//  the order of the words in place.

const reverse = (message, start, end) => {
  end = Math.ceil(end / 2);
  for (start; start < end; start++) {
    let di = (message.length - 1) - start;
    const tmp = message[start];
    message[start] = message[di];
    message[di] = tmp;
  }
  return message;
};

// How can I conclude to the fact that I can improve on space-complexity?
// How do I know I can do this with O(1) space?
const reverse_words = (message) => {
  let copyMessage = message;
  copyMessage = reverse(copyMessage, 0, copyMessage.length);
  const result = copyMessage.join('').split(' ');
  result.forEach((word, index) => {
    result[index] = reverse(word.split(''), 0, word.length).join('');
  });

  console.log(result);
};

const message = "cake pound steal".split("");

reverse_words(message);

