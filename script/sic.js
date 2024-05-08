// Fungsi untuk menyembunyikan alert setelah 3 detik
function hideAutoHideAlert() {
  // Pilih elemen alert
  const alertElement = document.getElementById("autoHideAlert");

  // Tunggu 3 detik (3000 milidetik) dan kemudian sembunyikan alert
  setTimeout(function () {
    alertElement.style.display = "none";
  }, 10000);
}

// Panggil fungsi untuk menyembunyikan alert secara otomatis
hideAutoHideAlert();

document.getElementById("guidebook").addEventListener("click", function () {
  // URL file yang ingin diunduh
  var fileUrl = "/";

  // Nama file yang akan diberikan pada pengguna saat diunduh
  var fileName = "Guidebook Geosphere 2024.pdf";

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
    window.open(url, '_blank');
}

// Fungsi untuk mengarahkan ke halaman tertentu
    function redirect(page) {
      // Ganti URL sesuai dengan halaman yang diinginkan
      window.location.href = page;
    }

function toggleMenu() {
  const links = document.querySelector(".links");
  links.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector(".what_is_child");
  const readMoreBtn = document.createElement("div");
  readMoreBtn.className = "show-more-btn";
  readMoreBtn.textContent = "Read More";
  content.appendChild(readMoreBtn);

  readMoreBtn.addEventListener("click", function () {
    content.style.maxHeight = "none";
    readMoreBtn.style.display = "none";

    const readLessBtn = document.createElement("div");
    readLessBtn.className = "show-less-btn";
    readLessBtn.textContent = "Read Less";
    content.appendChild(readLessBtn);

    readLessBtn.addEventListener("click", function () {
      content.style.maxHeight = "200px"; // Set your initial max height here
      readMoreBtn.style.display = "block";
      readLessBtn.style.display = "none";
    });
  });
});