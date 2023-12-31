const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hitungKembalian(totalPembayaran, totalBelanja) {
  let kembalian = totalPembayaran - totalBelanja;
  const pecahanUang = [50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
  const hasil = {};

  for (let i = 0; i < pecahanUang.length; i++) {
    const pecahan = pecahanUang[i];
    const jumlahPecahan = Math.floor(kembalian / pecahan);

    if (jumlahPecahan > 0) {
      hasil[pecahan] = jumlahPecahan;
      kembalian = kembalian % pecahan;
    }
  }

  return hasil;
}

rl.question('Masukkan total pembayaran: ', (totalPembayaran) => {
  rl.question('Masukkan total belanja: ', (totalBelanja) => {
    const hasilKembalian = hitungKembalian(parseInt(totalPembayaran), parseInt(totalBelanja));

    console.log("Kembalian:");
    console.log(hasilKembalian);

    rl.close();
  });
});
