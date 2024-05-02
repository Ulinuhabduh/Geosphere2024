document.getElementById('downloadButton1').addEventListener('click', function() {
    // URL file yang ingin diunduh
    var fileUrl1 = "/";

    // Nama file yang akan diberikan pada pengguna saat diunduh
    var fileName1 = 'Handbook Geosphere 2024.pdf';

    // Membuat elemen <a> untuk melakukan unduhan
    var link1 = document.createElement('a');

    // Menetapkan atribut href ke URL file
    link1.href = fileUrl1;

    // Menetapkan atribut download ke nama file
    link1.download = fileName1;

    // Menambahkan elemen ke dalam dokumen
    document.body.appendChild(link1);

    // Simulasi klik pada elemen <a> untuk memulai unduhan
    link1.click();

    // Menghapus elemen <a> setelah unduhan selesai
    document.body.removeChild(link1);
});


document.getElementById('downloadButton2').addEventListener('click', function() {
    // URL file yang ingin diunduh
    var fileUrl2 = "/";

    // Nama file yang akan diberikan pada pengguna saat diunduh
    var fileName2 = 'Guidebook Geosphere 2024.pdf';

    // Membuat elemen <a> untuk melakukan unduhan
    var link2 = document.createElement('a');

    // Menetapkan atribut href ke URL file
    link2.href = fileUrl2;

    // Menetapkan atribut download ke nama file
    link2.download = fileName2;

    // Menambahkan elemen ke dalam dokumen
    document.body.appendChild(link2);

    // Simulasi klik pada elemen <a> untuk memulai unduhan
    link2.click();

    // Menghapus elemen <a> setelah unduhan selesai
    document.body.removeChild(link2);
});

// Fungsi untuk membuka tab baru
function openNewTab(url) {
    window.open(url, '_blank');
}

// Fungsi untuk mengarahkan ke halaman tertentu
    function redirect(page) {
      // Ganti URL sesuai dengan halaman yang diinginkan
      window.location.href = page;
    }