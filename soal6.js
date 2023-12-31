const menuMakanan = {
    "ayam bakar": 20000,
    "ayam puk puk": 13000,
    "ayam goreng": 15000,
  };
  
  const menuMinuman = {
    "esteh": 5000,
    "esjeruk": 7000,
  };
  
  const pajakMakanan = 0.05;
  const pajakMinuman = 0.03;
  const pajakTransaksi = 0.15;
  
  function hitungBiayaTransaksi(nama, pesananMakanan, pesananMinuman) {
    let totalMakanan = 0;
    let totalMinuman = 0;
  
    for (const [makanan, jumlah] of Object.entries(pesananMakanan || {})) {
      totalMakanan += menuMakanan[makanan] * jumlah || 0;
    }
  
    for (const [minuman, jumlah] of Object.entries(pesananMinuman || {})) {
      totalMinuman += menuMinuman[minuman] * jumlah || 0;
    }
  
    const pajakMakananTotal = totalMakanan * pajakMakanan;
    const pajakMinumanTotal = totalMinuman * pajakMinuman;
  
    const totalBiayaMakananMinuman = totalMakanan + totalMinuman;
  
    const biayaPajakTransaksi = totalBiayaMakananMinuman * pajakTransaksi;
  
    const totalBiayaAkhir = totalBiayaMakananMinuman + pajakMakananTotal + pajakMinumanTotal + biayaPajakTransaksi;
  
    console.log(`Biaya transaksi untuk ${nama}: Rp${totalBiayaAkhir.toFixed(2)}`);
  }
  
  const pesananRehan = {
    "ayam bakar": 2,
    "esteh": 1,
  };
  
  const pesananAmba = {
    "ayam puk puk": 1,
    "esteh": 3,
  };
  
  const pesananFaiz = {
    "ayam bakar": 1,
    "ayam goreng": 1,
    "ayam puk puk": 1,
    "esteh": 1,
    "esjeruk": 1,
  };
  
  hitungBiayaTransaksi("Rehan Whangsap", pesananRehan, {});
  hitungBiayaTransaksi("Amba Roni", pesananAmba, {});
  hitungBiayaTransaksi("Faiz Ngawi", pesananFaiz, {});
  