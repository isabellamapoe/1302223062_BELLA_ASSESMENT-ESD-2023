const readline = require('readline');

function cariAnakNackal(input) {
  let countMap = new Map();

  input.forEach((kata) => {
    countMap.set(kata, (countMap.get(kata) || 0) + 1);
  });

  let maxCount = 0;
  let mostFrequentWords = [];

  countMap.forEach((count, kata) => {
    if (count > maxCount) {
      mostFrequentWords = [kata];
      maxCount = count;
    } else if (count === maxCount) {
      mostFrequentWords.push(kata);
    }
  });

  if (mostFrequentWords.length === input.length) {
    console.log('Semuanya anak baik');
  } else if (mostFrequentWords.length === 1) {
    console.log(`${mostFrequentWords[0]} Nackal`);
  } else if (mostFrequentWords.length > 1) {
    const result = mostFrequentWords.join(' dan ') + ' Nackal';
    console.log(result);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan kata-kata dipisahkan koma: ', (inputStr) => {
  const input = inputStr.split(',').map((kata) => kata.trim());
  if (input.length > 1) {
    cariAnakNackal(input);
  } else {
    console.log('Minimal dua kata untuk diinput.');
  }
  rl.close();
});
