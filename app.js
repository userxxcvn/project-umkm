document.addEventListener("DOMContentLoaded", function () {
    // 1. Logika untuk Tombol Utama di Banner (Hero)
    const btnPesanUtama = document.getElementById("btnPesan");
    if (btnPesanUtama) {
        btnPesanUtama.addEventListener("click", function () {
            // Ganti nomor di bawah dengan nomor WhatsApp tokomu (gunakan kode negara 62)
            const nomorWA = "628123456789"; 
            const pesan = encodeURIComponent("Halo Bakery Lezat, saya ingin melihat menu lengkap dan melakukan pemesanan.");
            
            // Membuka chat WhatsApp di tab baru
            window.open(`https://wa.me{nomorWA}?text=${pesan}`, '_blank');
        });
    }

    // 2. Logika Otomatis untuk Kartu Produk (Jika kamu ingin menambah tombol pesan per produk di masa depan)
    const kartuProduk = document.querySelectorAll(".card");
    kartuProduk.forEach(card => {
        card.addEventListener("click", function () {
            const namaProduk = this.querySelector("h3").innerText;
            const hargaProduk = this.querySelector(".harga").innerText;
            
            console.log(`Pengguna tertarik dengan: ${namaProduk} seharga ${hargaProduk}`);
            // Di sini kamu bisa menambahkan efek pop-up detail produk jika diinginkan
        });
    });
});
