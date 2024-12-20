document.getElementById('kamarForm').addEventListener('submit', function(event) {
    const idKamar = document.getElementById('id_kamar').value;
    const gambar = document.getElementById('gambar').files[0];
    const harga = document.getElementById('harga').value;
    const jenis = document.getElementById('Jenis').value;
    const fasilitas = document.getElementById('fasilitas').value;

    // Validasi ID Kamar harus angka positif
    if (idKamar <= 0) {
      alert('ID Kamar harus berupa angka positif.');
      event.preventDefault();
    }

    // Validasi harga tidak boleh negatif
    if (harga <= 0) {
      alert('Harga harus lebih besar dari 0.');
      event.preventDefault();
    }

    // Validasi jenis kamar
    if (jenis.trim() === "") {
      alert('Jenis kamar tidak boleh kosong.');
      event.preventDefault();
    }

    // Validasi fasilitas
    if (fasilitas.trim() === "") {
      alert('Fasilitas tidak boleh kosong.');
      event.preventDefault();
    }

    // Validasi file gambar
    if (gambar) {
      const allowedExtensions = ['jpg', 'jpeg', 'png'];
      const fileExtension = gambar.name.split('.').pop().toLowerCase();
      if (!allowedExtensions.includes(fileExtension)) {
        alert('Hanya file gambar (JPG, JPEG, PNG) yang diizinkan.');
        event.preventDefault();
      }
    }
  });

  // Fungsi untuk reset formulir
  function resetForm() {
    document.getElementById('kamarForm').reset();
  }