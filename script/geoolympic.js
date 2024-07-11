document.getElementById("guidebook").addEventListener("click", function () {
  // URL file yang ingin diunduh
  var fileUrl = "/guidebook/Guidebook_GeoOlympic2024.pdf";

  // Nama file yang akan diberikan pada pengguna saat diunduh
  var fileName = "Guidebook GeoOlympic 2024.pdf";

  // Membuat elemen <a> untuk melakukan unduhan
  var link = document.createElement("a");

  // Menetapkan atribut href ke URL file
  link.href = fileUrl;

  // Menetapkan atribut download ke nama file
  link.download = fileName;

  // Menambahkan elemen ke dalam dokumen
  document.body.appendChild(link);

  // Simulasi klik pada elemen <a> untuk memulai unduhan
  link.click();

  // Menghapus elemen <a> setelah unduhan selesai
  document.body.removeChild(link);
});

// Fungsi untuk membuka tab baru
function openNewTab(url) {
  window.open(url, "_blank");
}

// Fungsi untuk mengarahkan ke halaman tertentu
function redirect(page) {
  // Ganti URL sesuai dengan halaman yang diinginkan
  window.location.href = page;
}
