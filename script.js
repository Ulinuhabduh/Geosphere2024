document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");
  var thumbnailTime = 6; // Waktu detik di mana Anda ingin menampilkan thumbnail

  video.addEventListener("loadedmetadata", function () {
    // Ambil gambar pada detik tertentu sebagai thumbnail
    var canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    var thumbnail = canvas.toDataURL("image/jpeg");

    // Atur thumbnail sebagai poster video
    video.poster = thumbnail;
  });

  video.addEventListener("timeupdate", function () {
    // Jika video mencapai waktu detik yang diinginkan, atur ulang poster
    if (video.currentTime >= thumbnailTime) {
      var canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      var thumbnail = canvas.toDataURL("image/jpeg");
      video.poster = thumbnail;
    }
  });
});
