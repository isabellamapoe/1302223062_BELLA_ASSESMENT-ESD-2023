const prompt = require('prompt-sync')();

function isDuplicate(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] === data[j]) {
        return true;
      }
    }
  }
  return false;
}

function main() {
  const input = prompt("Masukkan data angka (pisah dengan koma dan spasi): [");

  console.log("]");
  const data = input.split(", ");
  const hasDuplicates = isDuplicate(data);
  console.log(hasDuplicates);
}

main();
