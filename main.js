function checkCats(CatsTuti, CatsNining) {
  let salinKucingTuti = CatsTuti; // menyalin array tuti ke variable baru
  salinKucingTuti.shift(); // menghapus data pertama pada array
  // menghapus 2 data terakhir pada array
  salinKucingTuti.pop();
  salinKucingTuti.pop();

  let koreksiKucingTuti = salinKucingTuti; // menyalin array salinTuti ke variable baru

  let gabungDataKucing = koreksiKucingTuti.concat(CatsNining); //menggabungkan array koreksi tuti dan array nining

  console.log(gabungDataKucing); // menampilkan array yg sudah digabung

  // menentukan dan menampilkan umur kucing sudah dewasa atau belum
  gabungDataKucing.forEach((usia, index) => {
    if (usia >= 3) {
      console.log(
        `Kucing Nomor ${
          index + 1
        } adalah Kucing Dewasa, dan berusia ${usia} tahun`
      );
    } else {
      console.log(
        `Kucing Nomor ${
          index + 1
        } masih Anak-Anak(Kitten), dan berusia ${usia} tahun`
      );
    }
  });
}

// Data uji 1
let CatsTuti1 = [3, 5, 2, 12, 7];
let CatsNining1 = [4, 1, 15, 8, 3];
console.log("Data Uji 1:\n");
checkCats(CatsTuti1, CatsNining1);

// Data uji 2
let CatsTuti2 = [9, 16, 6, 8, 3];
let CatsNining2 = [10, 5, 6, 1, 4];
console.log("\nData Uji 2:");
checkCats(CatsTuti2, CatsNining2);
