var sentence = "According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be in the right place. The rest can be a total mess and you can still read it without a problem. This is because the human mind does not read every letter by itself, but the word as a whole. Such a condition is appropriately called Typoglycemia.";

const words = sentence.split(' ');
const newWords = [];
words.forEach((word) => {
  let newWord = '';
  // const chars = word.split('');

  let indexesToRandomize = [];

  for (let i=0; i<word.length; i++) {
    if(word[i].match(/^[a-z]+$/i) !== null) {
      indexesToRandomize.push(i);
    }
  }
  indexesToRandomize.shift();
  indexesToRandomize.pop();
  let remainingIndexes = indexesToRandomize.slice();

  if (indexesToRandomize.length > 0) {
    let tmpWord = [];
    for (let i=0; i<word.length; i++) {
      if(!indexesToRandomize.includes(i)) {
        tmpWord.push(word[i]);
      } else {
        let randomIndex = Math.floor(Math.random() * remainingIndexes.length);
        tmpWord.push(word[remainingIndexes[randomIndex]]);
        remainingIndexes.splice(randomIndex,1);
      }
    }
    newWord = tmpWord.join('');

  } else {
    newWord = word;
  }

  newWords.push(newWord);
})

const newSentence = newWords.join(' ');
console.log(sentence);
console.log('');
console.log(newSentence);
