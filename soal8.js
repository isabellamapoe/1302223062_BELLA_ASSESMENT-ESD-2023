const readline = require('readline');

const barang = {
  elektronik: ["TV", "headphone", "kamera"],
  fashion: ["baju"],
  musik: ["gitar"],
  olahraga: ["sepatu"],
};

const pelanggan = [
  { nama: "Rina", minat: ["elektronik", "musik"] },
  { nama: "Budi", minat: ["fashion", "musik"] },
  { nama: "Hartono", minat: ["olahraga", "elektronik"] },
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rekomendasiBarang(namaPelanggan) {
  const pelangganTerpilih = pelanggan.find((p) => p.nama === namaPelanggan);

  if (!pelangganTerpilih) {
    return "Pelanggan tidak ditemukan";
  }

  let hasilRekomendasi = [];

  pelangganTerpilih.minat.forEach((kategori) => {
    hasilRekomendasi = hasilRekomendasi.concat(barang[kategori]);
  });

  hasilRekomendasi = [...new Set(hasilRekomendasi)];

  return hasilRekomendasi;
}

rl.question('Masukkan nama pelanggan: ', (namaPelanggan) => {
  const rekomendasi = rekomendasiBarang(namaPelanggan);
  console.log(`${JSON.stringify(rekomendasi)}`);
  rl.close();
});
