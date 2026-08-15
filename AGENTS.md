# Bank Sampah Bakti Lembur — Website

Company profile Bank Sampah Bakti Lembur (Kp. Nagrog RT 001 RW 004, Desa Sarimukti, Kec. Pasirwangi, Kab. Garut) dalam kemasan landing page. Dibangun tim KKN 10 Sarimukti UIN Sunan Gunung Djati Bandung, diserahkan ke pengurus bank sampah setelah periode KKN.

**`PRD_Banksampah.md` adalah acuan tunggal.** Bila ada pertanyaan tentang isi, struktur, atau tampilan — jawabannya di sana. Jangan mengarang keputusan yang belum ada di PRD; tanyakan.

## Aturan arsitektural

Tidak boleh dilanggar (PRD §5.3, §11.2, §13):

- **Wajib SSG dengan Astro. Dilarang dibangun sebagai SPA.** Tidak ada panggilan API atau backend saat halaman dimuat. Verifikasi: `view-source` setiap halaman harus memuat konten lengkap.
- **Tidak ada teks konten ditulis langsung di komponen.** Semua dari `src/data/*.json`. Ini satu-satunya hal yang menentukan apakah situs masih bisa diperbarui setahun setelah KKN selesai — pengurus memperbarui lewat CMS, bukan lewat kode.
- **Foto latar dipasang sebagai elemen `<img>` via `astro:assets`**, bukan `background-image` CSS. Hanya `<img>` yang dapat `srcset`, AVIF/WebP, dan lazy-loading.
- **Foto dengan `izinTayang: false` atau `adaWajahAnak: true` di `galeri.json` tidak dirender.** Ditegakkan di kode, bukan hanya di proses kerja, supaya kelalaian manusia tidak berujung foto anak tayang tanpa izin.

## Aturan konten

- Tidak ada klaim "3 tahun" di mana pun. Seluruh rujukan waktu: **"sejak April 2024"**.
- **Harga sampah tidak ditampilkan** di halaman mana pun. Diarahkan ke WhatsApp.
- **Nama dapur MBG tidak disebutkan** — hanya jumlahnya (5).
- **Tidak ada jam buka.** Lembaga tidak punya jam layanan tetap, hanya jadwal penimbangan. Termasuk: tanpa `openingHours` di structured data.
- Ejaan **Rolah Juariah** (bukan "Rlah").
- Tidak ada foto wajah pengurus pada rilis pertama. Halaman pengurus memuat nama dan jabatan saja.
- Tidak ada data pribadi warga, nominal tabungan, atau nomor kontak pribadi.
- Bahasa Indonesia. `lang="id"`.

## Aturan desain

**Sebelum menulis atau mengubah CSS, membuat komponen `.astro`, memilih warna/spasi/ukuran font/ikon, menambah animasi, atau meninjau tampilan — muat skill `desain-baktilembur`.** Skill itu memuat daftar larangan lengkap dan daftar periksa; jangan diduplikasi di berkas ini supaya tidak ada dua versi yang berbeda.

Ringkasnya:

- Dilarang hardcode warna, radius, spasi, atau ukuran font. **Hanya token PRD §6.4.** Butuh nilai di luar token? Itu permintaan perubahan token, bukan nilai lokal.
- Setiap elemen visual baru harus bisa menjawab: "ini varian dari Panel Kaca Setoran, atau kenapa bukan?"
- Gerak dipakai dua kali saja di seluruh situs: pengungkapan halus saat masuk viewport, dan penghitungan angka statistik.
- `prefers-reduced-motion` dan `prefers-reduced-transparency` dihormati keduanya.

## Anggaran kinerja

Angka konkret yang wajib dicek sebelum menyatakan pekerjaan selesai (PRD §11.4):

| Metrik | Batas |
|---|---|
| Muatan viewport awal | ≤ 700 KB |
| Total beranda setelah scroll penuh | ≤ 2,5 MB |
| JavaScript terkirim | ≤ 100 KB terkompresi |
| Font (tiga famili, subset Latin) | ≤ 120 KB |
| Tiap foto latar | ≤ 140 KB AVIF pada 1280px |
| LCP pada 4G | < 2,5 detik — tidak dinegosiasikan |
| CLS | < 0,1 |
| Lighthouse mobile | Performance ≥ 85, Accessibility ≥ 95, SEO ≥ 95 |

Perangkat target adalah Android kelas menengah-bawah dengan kuota terbatas. DevTools tidak menunjukkan patah-patahnya `backdrop-filter` — uji di perangkat sungguhan.

## Development

Jalankan dev server dalam mode background:

```
astro dev --background
```

Kelola dengan `astro dev stop`, `astro dev status`, dan `astro dev logs`.

## Dokumentasi

Dokumentasi lengkap: https://docs.astro.build

- [Menambah halaman, rute dinamis, atau middleware](https://docs.astro.build/en/guides/routing/)
- [Bekerja dengan komponen Astro](https://docs.astro.build/en/basics/astro-components/)
- [Komponen framework (React dll.)](https://docs.astro.build/en/guides/framework-components/)
- [Menambah atau mengelola konten](https://docs.astro.build/en/guides/content-collections/)
- [Menambah gaya atau memakai Tailwind](https://docs.astro.build/en/guides/styling/)
- [Optimasi gambar dengan astro:assets](https://docs.astro.build/en/guides/images/)
