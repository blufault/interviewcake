// Write an efficient function that checks whether any permutation of an input string is a palindrome.

const exclusive_get = (index, input) => {
  return input.split('').reduce((accum, value, r_index) => {
    if (r_index !== index) {
      accum.push(value);
    }
    return accum;
  }, []);
};

const permutate = (index, mod_input, original_input) => {
  // input[index] is what we want to keep
  if (original_input.length === 1) {
    return [original_input];
  }
  console.log('permuatate: ', { index: original_input[index], mod_input, original_input });
  let string = '';
  const result = [];

  for (let i = 0; i< mod_input.length; i++) {
    string = original_input[index];
    if (i === 0) {
      string += mod_input.join('');
    } else {
      string += mod_input[i] + mod_input[0]
    }

    result.push(string);
  }

  return result;
};

const permutation = (input) => {
  const set = [];
  for (let i = 0; i < input.length; i++) {
    set.push(...permutate(i, exclusive_get(i, input), input));
  }

  console.log({ set });
};

permutation('a');
permutation('ab');
permutation('abc');
permutation('abcd');
//permutation('tom');

