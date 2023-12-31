const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

rl.question('Masukkan kata atau frasa: ', (input) => {
  if (isPalindrome(input)) {
    console.log('eureeka!');
  } else {
    console.log('suka blyat');
  }

  rl.close();
});
