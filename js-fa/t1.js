function camelize(str) {
    const words = str.split("-");
    const filtered = words.filter(word => words.indexOf(word) >= 1);
    const upp = filtered.map(f => f.charAt(0).toUpperCase() + f.slice(1));
    upp.unshift(words[0])
    console.log(upp.join(""));
}

camelize("border-left-width");

/* Solution from docs
function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
 */