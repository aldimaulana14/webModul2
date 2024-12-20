document.getElementById('fasilitasForm').addEventListener('submit', function(event) {
    const idFasilitas = document.getElementById('id_fasilitas').value;
    const nama = document.getElementById('nama').value.trim();
    const hargaWeekend = document.getElementById('harga_weekend').value;
    const hargaWeekday = document.getElementById('harga_weekday').value;
    const kuota = document.getElementById('kuota').value;
    const jamBuka = document.getElementById('jam_buka').value;
    const jamTutup = document.getElementById('jam_tutup').value;

    // Validasi nama fasilitas tidak boleh kosong
    if (nama === "") {
      alert('Nama fasilitas tidak boleh kosong.');
      event.preventDefault();
      return;
    }

    // Validasi harga weekend dan weekday
    if (hargaWeekend < 0 || hargaWeekday < 0) {
      alert('Harga tidak boleh negatif.');
      event.preventDefault();
      return;
    }

    // Validasi kuota harus lebih dari 0
    if (kuota <= 0) {
      alert('Kuota harus lebih dari 0.');
      event.preventDefault();
      return;
    }

    // Validasi jam buka dan jam tutup
    if (jamBuka >= jamTutup) {
      alert('Jam tutup harus lebih dari jam buka.');
      event.preventDefault();
      return;
    }
  });

  // Fungsi untuk reset formulir
  function resetForm() {
    document.getElementById('fasilitasForm').reset();
  }