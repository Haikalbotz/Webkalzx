// Fungsi untuk menampilkan waktu
function updateDateTime() {
  const dateTimeElement = document.getElementById('datetime');
  const now = new Date();

  const hari = now.toLocaleDateString('id-ID', { weekday: 'long' });
  const tanggal = now.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  const jam = now.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  dateTimeElement.textContent = `${hari}, ${tanggal} | ${jam}`;
}

// Perbarui setiap detik
setInterval(updateDateTime, 1000);
updateDateTime(); // Panggil saat halaman dimuat

// Tampilkan overlay saat halaman dimuat
window.onload = function() {
  document.getElementById('welcomeOverlay').style.display = 'flex';
};

// Fungsi untuk menutup overlay
function closeOverlay() {
  document.getElementById('welcomeOverlay').style.display = 'none';
}
