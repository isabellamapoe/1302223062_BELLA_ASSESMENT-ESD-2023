function kemungkinanPelaku(urutan) {
    // Jika tamu datang sebelum Xiao, maka pasti bukan pelakunya
    return urutan >= 3;
  }
  
  const tamu = [
    { nama: "Ningguang", urutan: 1 },
    { nama: "Hutao", urutan: 2 },
    { nama: "Xiao", urutan: 3 },
    { nama: "Childe", urutan: 4 },
  ];
  
  for (const tamuData of tamu) {
    const nama = tamuData.nama;
    const urutan = tamuData.urutan;
    const kemungkinan = kemungkinanPelaku(urutan);
    console.log(`${nama} ${kemungkinan ? "mungkin" : "pasti bukan"} pelakunya.`);
  }
  