// tahun
let tahun = document.querySelector(".tahun");
let getYear = new Date();

tahun.textContent = getYear.getFullYear();
//card
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    card.style.backgroundColor = "#0883f7";
  });
  card.addEventListener("mouseleave", (e) => {
    card.style.backgroundColor = "#fff";
  });
});
// Zoom Gambar//
document.addEventListener('DOMContentLoaded', function () {
  const classCards = document.querySelectorAll('.cards .card');

  classCards.forEach(function (card) {
      const img = card.querySelector('.img img');

      img.addEventListener('mouseenter', function () {
          img.style.transform = 'scale(1.1)';
          img.style.transition = 'transform 0.5s ease';
      });

      img.addEventListener('mouseleave', function () {
          img.style.transform = 'scale(1)';
          img.style.transition = 'transform 0.5s ease';
      });
  });
});

// zoom gambar banner//
  document.addEventListener('DOMContentLoaded', function () {
    const rightDiv = document.querySelector('.right');

    function zoomIn() {
        rightDiv.style.transform = 'scale(1.1)';
        rightDiv.style.transition = 'transform 0.5s ease';
    }

    function zoomOut() {
        rightDiv.style.transform = 'scale(1)';
        rightDiv.style.transition = 'transform 0.5s ease';
    }

    // Add event listeners for mouse enter and mouse leave
    rightDiv.addEventListener('mouseenter', zoomIn);
    rightDiv.addEventListener('mouseleave', zoomOut);
});

// kotak notification di Bar//
document.addEventListener("DOMContentLoaded", function () {
    // Menampilkan kotak bar setelah halaman dimuat
    showNotificationBar();
});


