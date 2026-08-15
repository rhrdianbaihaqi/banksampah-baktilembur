---
name: desain-baktilembur
description: Aturan desain visual wajib untuk website Bank Sampah Bakti Lembur. Muat skill ini SEBELUM menulis atau mengubah CSS, membuat komponen .astro, menyusun seksi beranda, memilih warna/spasi/ukuran font/ikon, menambah animasi, atau meninjau tampilan. Mencegah hasil generik ("AI slop") dan menegakkan token serta arah visual liquid glass dari PRD_Banksampah.md.
---

# Aturan Desain — Bank Sampah Bakti Lembur

Acuan tunggal: `PRD_Banksampah.md`, terutama Bagian 6 (Arah Visual) dan Bagian 9 (Spesifikasi Seksi). Skill ini menegakkannya — ia tidak menambahkan selera baru di atasnya.

## Kenapa skill ini ada

PRD sudah mengunci token warna, tipografi, dan tema. Tapi **token yang benar tidak menjamin hasil yang tidak generik.** Desain generik lahir dari pola susunan — hero rata tengah, grid tiga fitur, semua elemen fade-in saat scroll — bukan dari nilai warna. Karena itu larangan di bawah menyasar pola, bukan hanya nilai.

Situs ini mewakili lembaga warga di Kp. Nagrog, Desa Sarimukti, Garut. Kalau sebuah bagian bisa dipindah ke landing page SaaS mana pun tanpa terasa aneh, bagian itu gagal.

---

## 1. Yang dilarang

Setiap larangan bisa dicek, bukan imbauan rasa.

**Warna & permukaan**
- Gradien dekoratif ungu/biru-magenta, mesh gradient, blob SVG mengambang. Palet proyek ini hijau–netral–tanah.
- `--brand-blue` (#0B19AF) untuk bidang besar atau latar panel. Warna ini sangat pekat dan menyala di atas kaca — **hanya** untuk tautan, ikon kecil, dan garis bawah aktif (§6.4).
- Nilai warna hardcode di komponen. Semua warna lewat token. `grep -rE "#[0-9a-fA-F]{3,6}" src/components/` harus nihil.
- Bayangan lembut di mana-mana untuk "kesan kedalaman". Bayangan hanya `--glass-shadow`, hanya pada permukaan kaca.
- Kaca di atas kaca. Maksimal satu lapis (§6.5 aturan 3).
- Glassmorphism sebagai hiasan tanpa foto di baliknya. §6.2: kaca tanpa apa pun di baliknya hanya dekorasi.

**Bentuk & ruang**
- Radius selain 10 / 18 / 28px (`--radius-sm|md|lg`).
- Spasi yang bukan kelipatan `--space-unit` (8px).
- Ukuran font di luar skala 56 / 40 / 30 / 24 / 18 / 16 / 14px. Mobile dikurangi ±20% dengan **minimum teks isi 16px** — pengguna target mencakup usia 40 tahun ke atas.

**Pola susunan**
- Hero pola default: teks rata tengah + dua tombol berdampingan + subjudul abu-abu. Hero proyek ini sudah dispesifikasikan berbeda di §S1 — judul langsung di atas scrim, panel kaca mengambang di sepertiga bawah.
- Grid "3 fitur berikon" generik dengan judul dua kata dan paragraf hambar.
- Seksi berfoto penuh lebih dari 6 di beranda (§6.5 aturan 8).
- `background-attachment: fixed` (§6.5 aturan 5) dan `backdrop-filter` pada elemen lebih luas dari ±40% viewport di mobile (aturan 4).
- Foto latar sebagai `background-image` CSS. Wajib elemen `<img>` supaya dapat `srcset`, AVIF/WebP, dan lazy dari `astro:assets` (aturan 6).

**Gerak**
- `fade-in-up` pada setiap elemen saat scroll. §6.7: gerak dipakai **sekali dan terukur** — pengungkapan halus saat masuk viewport dan penghitungan angka statistik. Tidak ada yang lain.
- Paralaks, animasi berlapis, hover yang mengangkat kartu, transisi halaman dekoratif.

**Isi & aset**
- Stok foto, ilustrasi generik, avatar bikinan. §6.7: foto asli mendominasi, tanpa kecuali.
- Placeholder yang menyaru foto asli. Placeholder harus jelas terlihat sebagai placeholder — blok warna token + label teks. Stok foto yang masuk repo punya kebiasaan bertahan sampai rilis.
- Emoji sebagai ikon. Ikon = Lucide, garis, ketebalan konsisten.
- Bullet berhias ("✨", "🚀"), badge "Trusted by", penghitung palsu, testimoni karangan, dark-mode toggle yang tidak diminta.
- Kalimat pemasaran kosong: "solusi terdepan", "revolusi hijau", "transformasi digital". Naskah bersumber dari Lampiran A yang datanya terverifikasi.
- Teks konten ditulis langsung di komponen. Semua dari `src/data/*.json` (§11.2).

---

## 2. Yang wajib

**Satu elemen tanda tangan, diulang dengan disiplin.** Panel Kaca Setoran (§6.3) mengambil anatomi dari slip penimbangan bank sampah:

```
eyebrow kecil huruf mono
ANGKA ATAU JUDUL BESAR
──────────── garis tipis
keterangan di bawah
```

Dipakai di hero, kartu program, blok statistik, langkah alur, lencana bukti. **Semua kebolehan visual dibelanjakan di sini. Sisanya tenang.**

**Mono untuk angka dan label kecil.** IBM Plex Mono 500 pada eyebrow, angka statistik, nomor SK, label slip. Ini meniru cetakan slip timbangan dan buku tabungan — mengikat tema ke dunia nyata bank sampah, bukan pilihan gaya kosong (§6.6).

**Scrim wajib di setiap foto latar.** Kontras diukur terhadap scrim di titik paling terang foto, bukan terhadap rata-rata foto (§6.5 aturan 2). Paragraf harus berada di dalam panel kaca; hanya judul besar yang boleh langsung di atas scrim kuat (aturan 7).

**Warna dasar semi-pekat selalu ada di bawah blur.** Kalau `backdrop-filter` tidak didukung atau dimatikan, panel tetap terbaca. Jangan pernah mengandalkan blur sebagai satu-satunya pemisah teks dari foto (§6.5 aturan 1).

**Hormati `prefers-reduced-motion` dan `prefers-reduced-transparency` — keduanya**, bukan salah satu (aturan 9).

**Indikator fokus tebal dan solid.** Fokus default browser hilang di atas permukaan tembus pandang. Gunakan `outline` warna kontras tinggi, bukan bayangan halus (§11.6).

**Ruang kosong lebih banyak daripada dorongan mengisi.** Kaca butuh ruang untuk terbaca sebagai kaca (§6.7).

**Kaca membingkai foto, bukan menutupinya.** Kalau sebuah panel membuat fotonya tidak terlihat lagi, panel itu terlalu pekat.

---

## 3. Daftar periksa sebelum menyatakan selesai

Jawab keenamnya jujur setiap kali ada perubahan visual:

1. Adakah nilai warna, radius, spasi, atau ukuran font yang tidak berasal dari token? Jalankan `grep -rE "#[0-9a-fA-F]{3,6}" src/components/` — harus nihil.
2. Komponen baru ini varian Panel Kaca Setoran? Kalau bukan, apa alasan yang bisa dipertanggungjawabkan?
3. Adakah gerak baru selain dua yang diizinkan?
4. Kalau `backdrop-filter` dimatikan paksa, apakah masih terbaca **dan** masih terlihat sengaja dirancang?
5. Apakah bagian ini masih terbaca sebagai lembaga warga Garut, atau sudah terbaca seperti landing page SaaS?
6. Berapa seksi berfoto penuh di beranda sekarang? Batasnya 6.

Bila salah satu jawabannya buruk, perbaiki sebelum melapor selesai — jangan dilaporkan sebagai catatan menyusul.

---

## 4. Batas kompromi

Kalau efek kaca terbukti patah-patah di Android kelas bawah sungguhan (§14 R1), urutan penyederhanaannya sudah ditetapkan PRD §15 dan **bukan keputusan improvisasi**:

animasi hitung dan lightbox dihapus → efek kaca disederhanakan jadi panel semi-pekat tanpa blur.

Yang tidak boleh dikorbankan dalam kondisi apa pun: beranda lengkap, S4 (cara jadi nasabah), `/kemitraan`, CTA WhatsApp, SEO dasar, kebijakan foto Bagian 13.
