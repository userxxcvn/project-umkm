// 1. FITUR NAVBAR MOBILE (HAMBURGER MENU)
const menuToggle = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('aktif');
    navMenu.classList.toggle('aktif');
});

// Tutup menu otomatis jika salah satu link navigasi diklik
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('aktif');
        navMenu.classList.remove('aktif');
    });
});


// 2. FITUR ANIMASI MUNCUL SAAT DI-SCROLL (INTERSECTION OBSERVER)
const elemenMuncul = document.querySelectorAll('.muncul');

const opsiObserver = {
    threshold: 0.15 // Animasi mulai berjalan jika 15% elemen sudah masuk layar
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aktif');
            observer.unobserve(entry.target); // Stop observe jika animasi sudah jalan sekali
        }
    });
}, opsiObserver);

elemenMuncul.forEach(elemen => {
    observer.observe(elemen);
});


// 3. FITUR DIALOG PESANAN INSTAN KE WHATSAPP
const tombolPesan = document.querySelector('#btn-pesan');

tombolPesan.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah link pindah halaman langsung
    
    // Ganti nomor di bawah dengan nomor WhatsApp bisnis UMKM Anda (Gunakan kode negara 62)
    const nomorWA = "628123456789"; 
    
    // Teks otomatis yang akan dikirim oleh pembeli
    const pesanTeks = "Halo Bakery Lezat, saya tertarik untuk memesan produk roti/kue Anda. Bagaimana cara pemesanannya? Terima kasih.";
    
    // Melakukan encode teks agar aman dibaca oleh URL browser
    const urlWA = `https://wa.me{nomorWA}?text=${encodeURIComponent(pesanTeks)}`;
    
    // Membuka tab baru menuju WhatsApp chat
    window.open(urlWA, '_blank');
});
