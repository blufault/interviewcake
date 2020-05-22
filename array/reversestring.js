// Write a function that takes an array of characters and reverses the letters in place
const reverseString = (chars) => {
  for (let i = 0; i < Math.ceil(chars.length / 2); i++) {
    const opposite = (chars.length - 1) - i;

    // swap
    const tmp = chars[i];
    chars[i] = chars[opposite];
    chars[opposite] = tmp;
  }

  console.log(chars);
};

reverseString("hello".split(""));
reverseString("good".split(""));
reverseString("apple".split(""));
reverseString("orange".split(""));
