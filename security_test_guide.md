# Panduan Pengujian Keamanan NUXAR 🛡️

Dokumen ini berisi langkah-langkah untuk memverifikasi bahwa sistem keamanan "NASA-Grade" yang kita terapkan di Supabase sudah bekerja dengan benar. Fokus utamanya adalah membuktikan bahwa **orang luar tidak bisa mengutak-atik data Kakak**, tapi aplikasi tetap bisa membaca data dengan lancar.

---

## 1. Tes Akses Baca (Public Read)
**Tujuan**: Memastikan pengunjung website tetap bisa melihat katalog parfum.
1. Buka website Kakak di browser.
2. Navigasi ke halaman **Katalog** atau **Produk**.
3. **Hasil yang diharapkan**: Item parfum tetap muncul sempurna. Ini membuktikan kebijakan `Public: Read Only` aktif.

---

## 2. Tes Blokir Penulisan (Public Write Block) 🛑
**Tujuan**: Memastikan orang asing tidak bisa menghapus atau mengubah harga/nama parfum lewat konsol browser.

1. Buka website Kakak.
2. Tekan `F12` atau klik kanan > **Inspect**.
3. Pilih tab **Console**.
4. Copy dan paste kode di bawah ini, lalu tekan **Enter**:

```javascript
// Mencoba menghapus satu data parfum secara paksa lewat konsol
const { data, error } = await window.supabase.from('perfumes').delete().eq('id', 'cowok-1');
console.log('Error:', error);
console.log('Data:', data);
```

5. **Hasil yang diharapkan**:
   - Muncul pesan error atau data yang kembali adalah kosong (`null`/`[]`).
   - Coba cek di database Supabase, data `cowok-1` **TIDAK AKAN TERHAPUS**.
   - Ini membuktikan kebijakan Row Level Security (RLS) Kakak sangat ketat menolak perintah hapus dari publik.

---

## 3. Tes Blokir Update Nama 🛡️
**Tujuan**: Memastikan nama parfum tidak bisa diganti oleh hacker.

1. Di konsol browser yang sama, jalankan kode ini:

```javascript
// Mencoba mengganti nama parfum jadi "Hacked"
await window.supabase.from('perfumes').update({ name: 'Hacked' }).eq('id', 'cowok-1');
```

2. **Hasil yang diharapkan**: Nama parfum di database **TIDAK AKAN BERUBAH**.
3. Refresh halaman website Kakak, nama parfum akan tetap asli sesuai data Kakak di Supabase.

---

## Kesimpulan Keamanan
Jika semua tes di atas berjalan sesuai harapan (Publik hanya bisa baca, tapi tidak bisa hapus/tulis), maka website Kakak sudah **SANGAT AMAN**. 

Sistem RLS (Row Level Security) kami bertindak sebagai "Satpam" yang memeriksa setiap orang yang mencoba menyentuh data Kakak. Hanya Kakak (lewat Dashboard Supabase) yang punya kunci untuk mengubah data tersebut. 👑🚀✨
