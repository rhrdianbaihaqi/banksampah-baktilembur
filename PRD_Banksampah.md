# PRD FINAL — Website Bank Sampah Bakti Lembur

**Versi:** 3.0 — Final, siap dipakai sebagai acuan development
**Tanggal:** 15 Agustus 2026
**Arsitektur:** Pure Frontend / Static Site Generation — tanpa backend, tanpa basis data
**Framework:** Astro (dikunci)
**Arah visual:** Liquid Glass di atas fotografi asli (dikunci)
**Pelaksana:** KKN 10 Sarimukti UIN Sunan Gunung Djati Bandung
**Pemilik:** Bank Sampah Bakti Lembur

---

## Status Keputusan

Seluruh keputusan besar sudah terkunci. Yang tersisa hanya 6 item operasional di Bagian 17 yang tidak menahan dimulainya pekerjaan.

| Keputusan | Hasil |
|---|---|
| Lama beroperasi | **Sejak 24 April 2024.** Klaim "3 tahun" dibatalkan dan tidak boleh muncul di mana pun |
| Jumlah nasabah | 500+ KK — akurat, boleh ditayangkan |
| Mitra MBG | Tulis jumlahnya saja (5), tanpa menyebut nama dapur |
| Harga sampah | **Tidak ditampilkan.** Diarahkan ke WhatsApp |
| Jam layanan | Tidak ada jam buka tetap — hanya jadwal penimbangan |
| Nama pengurus | Boleh tayang, 11 orang |
| Foto wajah pengurus | **Tidak ditampilkan** pada rilis pertama |
| Ejaan | **Rolah Juariah** (koreksi dari "Rlah") |
| Kepemilikan akun | Semua atas nama Bank Sampah Bakti Lembur |
| Penanggung jawab pasca-KKN | Pihak bank sampah |
| Framework | Astro |
| CMS | Decap/Sveltia CMS dipasang sebelum KKN berakhir |
| Formulir online | Tidak ada — WhatsApp saja |
| Bahasa | Bahasa Indonesia |
| Aset foto & logo | Disediakan tim KKN |

---

## 1. Ringkasan Eksekutif

Bank Sampah Bakti Lembur adalah lembaga pengelolaan sampah terpadu berbasis komunitas di Kp. Nagrog RT 001 RW 004, Desa Sarimukti, Kec. Pasirwangi, Kab. Garut. Diresmikan 24 April 2024 dengan SK Desa No. 100.3.3/KEP-03/DS-2011/2024, melayani lebih dari 500 kepala keluarga dan bermitra dengan 5 dapur MBG di Kecamatan Pasirwangi.

Website ini mengubah profil lembaga yang selama ini terkunci dalam file PPTX dan PDF menjadi kanal publik permanen, dengan tiga fungsi: **membangun kredibilitas**, **merekrut nasabah**, dan **membuka kemitraan**.

Dibangun sebagai situs statis murni frontend dengan Astro, dengan arah visual *liquid glass* — panel kaca tembus pandang di atas fotografi asli kegiatan warga.

---

## 2. Masalah yang Diselesaikan

1. **Kredibilitas tidak bisa diverifikasi cepat.** Calon mitra CSR, dinas, atau juri penghargaan tidak punya cara memvalidasi klaim tanpa meminta file.
2. **Cerita organisasi terkunci di file.** PPTX 20 slide tidak terindeks mesin pencari dan tidak nyaman dibaca di ponsel.
3. **Tidak ada jalur konversi.** Warga yang tertarik tidak tahu harus ke mana; sekolah yang ingin mengundang *Goes to School* tidak punya kanal.
4. **Kebutuhan lembaga tidak tersampaikan.** Mobil angkut, dana operasional, dan sarana penyimpanan tidak pernah terdokumentasi publik.

**Peluang:** kata kunci "bank sampah Garut" dan "bank sampah Pasirwangi" hampir tidak berkompetisi di pencarian lokal.

---

## 3. Tujuan & Metrik

### 3.1 Tujuan

| # | Tujuan | Prioritas |
|---|---|---|
| G1 | Menjadi rujukan kredibilitas tunggal untuk mitra, dinas, dan penilai penghargaan | P0 |
| G2 | Menambah nasabah baru (warga, UMKM, sekolah, instansi) | P0 |
| G3 | Membuka jalur kemitraan, CSR, dan donasi peralatan | P1 |
| G4 | Memposisikan Bakti Lembur sebagai lokasi & mitra KKN/pengabdian masyarakat | P1 |
| G5 | Memposisikan Bakti Lembur sebagai penyedia pendampingan replikasi bank sampah | P1 |
| G6 | Menjadi pusat edukasi pilah sampah untuk warga & sekolah | P2 |

### 3.2 Metrik (6 bulan pertama)

| Metrik | Target |
|---|---|
| Klik CTA WhatsApp "Daftar Jadi Nasabah" | ≥ 40/bulan |
| Klik CTA kemitraan (CSR + KKN) | ≥ 10/bulan |
| Unduh Company Profile PDF | ≥ 25/bulan |
| Peringkat "bank sampah Garut" | Halaman 1 |
| Rata-rata durasi sesi | ≥ 1 menit 30 detik |
| Scroll depth ≥ 75% | ≥ 35% sesi |
| Lighthouse mobile | Performance ≥ 85, Accessibility ≥ 95, SEO ≥ 95 |

> Target Performance diturunkan dari 90 ke 85 sebagai konsekuensi sadar dari arah visual berat-foto. Lihat Bagian 6.5.

### 3.3 Anti-tujuan

Bukan aplikasi tabungan nasabah · Bukan e-commerce · Bukan blog berjadwal · Bukan sistem administrasi internal.

---

## 4. Format & Arsitektur Informasi

**Company Profile dalam kemasan Landing Page.** Beranda satu halaman scrollable dengan CTA berulang, didukung 4 sub-halaman.

```
/                     Beranda (11 seksi)
├── /tentang          Profil, visi-misi, legalitas, 11 pengurus
├── /program          8 program + produk olahan
├── /galeri           Dokumentasi kegiatan
├── /kemitraan        Kolaborasi KKN (utama) + CSR, dinas, desa dampingan
└── /404              Halaman tidak ditemukan
```

**Yang tidak dipublikasikan:** analisis SWOT · nominal tabungan per nasabah · nomor pribadi pengurus selain CP resmi · harga sampah per kilogram.

---

## 5. Batasan Arsitektur: Pure Frontend

### 5.1 Yang tidak tersedia

Menyimpan data formulir · Mengirim email dari situs · Data dinamis (harga, total sampah terkelola) · Penghitung kunjungan yang tampil publik · Notifikasi otomatis.

### 5.2 Kompensasi

| Kebutuhan | Solusi |
|---|---|
| Pendaftaran nasabah | Tautan dalam `wa.me` dengan pesan pre-fill |
| Pengajuan kerja sama / KKN | WhatsApp + `mailto:` |
| Peta lokasi | Google Maps iframe (lazy) |
| Video | Facade YouTube |
| Analitik | GA4 sisi klien |
| Pembaruan konten oleh pengurus | Decap/Sveltia CMS — berjalan di browser, menulis ke repositori Git |

### 5.3 Larangan arsitektural

**Situs ini tidak boleh dibangun sebagai Single Page Application.** SPA mengirim HTML kosong sehingga SEO rusak (menggagalkan G1) dan memaksa Android kelas bawah mengeksekusi bundel JS sebelum apa pun tampil. Wajib SSG dengan Astro. Verifikasi: `view-source` pada setiap halaman harus memuat konten lengkap.

---

## 6. Arah Visual: Liquid Glass

### 6.1 Rekonsiliasi dua acuan

Dua acuan yang diberikan menarik ke arah berlawanan. Penyelesaiannya:

| Sumber | Yang diambil | Yang ditolak |
|---|---|---|
| `banksampah.jakarta.go.id` | **Struktur informasi**: navigasi horizontal jelas, hero berjudul-CTA, strip statistik, grid kartu program, footer padat berisi kontak & alamat | Nada visual datar-birokratis, kolom berita berkala, tabel data operasional |
| Liquid glass | **Perlakuan permukaan**: panel tembus pandang, blur latar, tepi bercahaya, kedalaman berlapis | Kaca berlebihan yang mengorbankan keterbacaan dan kecepatan |

Hasilnya: **kerangka selugas portal resmi, permukaan sehangat dan sejernih kaca.**

### 6.2 Justifikasi tema

Transparansi bukan sekadar tren visual di sini — ia adalah nilai lembaga. Bank sampah bekerja dengan buku tabungan terbuka, timbangan yang disaksikan bersama, dan hasil penjualan yang dilaporkan ke warga. Panel kaca yang membiarkan foto kegiatan tetap terlihat di baliknya adalah pernyataan visual dari cara kerja itu: **tidak ada yang ditutupi.**

Ini juga alasan kenapa foto asli wajib mendominasi. Kaca tanpa apa pun di baliknya hanya dekorasi. Yang membuat tema ini bekerja adalah apa yang terlihat menembusnya.

### 6.3 Elemen tanda tangan

**Panel Kaca Setoran.** Kartu kaca utama — dipakai di hero, kartu program, dan blok statistik — mengambil proporsi dan anatomi dari slip penimbangan bank sampah: label kecil huruf mono di atas (eyebrow), angka atau judul besar di tengah, garis tipis pemisah, keterangan di bawah. Satu elemen ini diulang di seluruh situs dengan disiplin, dan menjadi hal yang diingat orang setelah menutup halaman.

Semua kebolehan visual dibelanjakan di sini. Sisanya tenang.

### 6.4 Token desain

```css
:root {
  /* ── Merek (dikunci dari identitas Bakti Lembur) ── */
  --brand-green:        #3E7435;
  --brand-green-dark:   #285326;
  --brand-green-light:  #EAF2E8;
  --brand-blue:         #0B19AF;
  --brand-blue-dark:    #071078;
  --brand-blue-light:   #E9EBFF;

  /* ── Netral ── */
  --neutral-900:        #1A1D1A;
  --neutral-700:        #3A413A;
  --neutral-600:        #5A625A;
  --neutral-100:        #F4F6F3;
  --neutral-50:         #F9FAF8;
  --white:              #FFFFFF;

  /* ── Aksen & status ── */
  --accent-earth:       #C97B21;
  --border:             #DDE4DA;
  --success:            #3E7435;
  --danger:             #C0392B;

  /* ── Liquid Glass ── */
  --glass-light:        rgba(255, 255, 255, 0.72);
  --glass-light-strong: rgba(255, 255, 255, 0.88);
  --glass-dark:         rgba(20, 26, 20, 0.58);
  --glass-green:        rgba(62, 116, 53, 0.22);
  --glass-border:       rgba(255, 255, 255, 0.38);
  --glass-border-dark:  rgba(255, 255, 255, 0.16);
  --glass-blur:         16px;
  --glass-blur-mobile:  8px;
  --glass-saturate:     125%;
  --glass-shadow:       0 8px 32px rgba(26, 29, 26, 0.14);
  --glass-highlight:    linear-gradient(135deg,
                          rgba(255,255,255,0.55) 0%,
                          rgba(255,255,255,0.06) 42%,
                          rgba(255,255,255,0) 100%);

  /* ── Scrim wajib di atas foto ── */
  --scrim-strong:       linear-gradient(180deg,
                          rgba(14,20,14,0.68) 0%,
                          rgba(14,20,14,0.44) 55%,
                          rgba(14,20,14,0.72) 100%);
  --scrim-soft:         linear-gradient(180deg,
                          rgba(14,20,14,0.30) 0%,
                          rgba(14,20,14,0.52) 100%);

  /* ── Bentuk & ruang ── */
  --radius-sm:  10px;
  --radius-md:  18px;
  --radius-lg:  28px;
  --space-unit: 8px;
}
```

**Catatan penggunaan warna:** `--brand-blue` (#0B19AF) sangat pekat. Di atas permukaan kaca ia mudah terasa menyala. Gunakan hanya untuk tautan, ikon kecil, dan garis bawah aktif — **jangan** untuk bidang besar atau latar panel. Bidang luas memakai hijau dan netral.

### 6.5 Aturan implementasi kaca — wajib

Ini bagian yang menentukan apakah tema ini indah atau membuat situs tidak terpakai di perangkat target.

```css
.glass {
  background: var(--glass-light);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  box-shadow: var(--glass-shadow);
  /* Fallback di atas sudah cukup terbaca tanpa blur sama sekali */
}

@supports (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)) {
  .glass {
    background: rgba(255, 255, 255, 0.58);
    -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
    backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  }
}

@media (max-width: 767px) {
  .glass { backdrop-filter: blur(var(--glass-blur-mobile)) saturate(110%); }
}

@media (prefers-reduced-transparency: reduce) {
  .glass {
    background: var(--white);
    backdrop-filter: none;
  }
}
```

**Sepuluh aturan yang tidak boleh dilanggar:**

1. **Warna dasar semi-pekat selalu ada di bawah blur.** Kalau `backdrop-filter` tidak didukung atau dimatikan, panel tetap terbaca. Jangan pernah mengandalkan blur sebagai satu-satunya pemisah teks dari foto.
2. **Kontras diukur terhadap scrim, bukan terhadap foto.** Setiap foto latar wajib punya lapisan gradien scrim. Uji kontras pada titik paling terang dari foto.
3. **Jangan menumpuk kaca di atas kaca.** Maksimal satu lapis. Kaca berlapis menghancurkan kinerja dan keterbacaan sekaligus.
4. **Jangan pasang `backdrop-filter` pada elemen yang lebih luas dari ±40% viewport di mobile.** Navigasi lengket dan kartu boleh; bidang seksi penuh tidak.
5. **Jangan gunakan `background-attachment: fixed`.** Menyebabkan repaint berat dan patah-patah di iOS Safari.
6. **Foto latar dipasang sebagai elemen `<img>`, bukan `background-image` CSS.** Hanya `<img>` yang mendapat `srcset`, format modern, dan lazy-loading dari Astro. Posisikan dengan `position:absolute; inset:0; object-fit:cover;`.
7. **Teks isi tidak boleh diletakkan langsung di atas foto tanpa panel atau scrim.** Judul besar boleh di atas scrim kuat; paragraf harus di dalam panel kaca.
8. **Batas jumlah seksi berfoto penuh di beranda: 6.** Sisanya memakai latar netral atau `--brand-green-light`. Foto di mana-mana sama saja dengan foto di mana pun tidak menonjol.
9. **Hormati `prefers-reduced-motion` dan `prefers-reduced-transparency`.** Keduanya, bukan salah satu.
10. **Uji di perangkat Android kelas bawah sungguhan, bukan hanya di DevTools.** `backdrop-filter` adalah operasi GPU; simulator tidak menunjukkan patah-patahnya.

### 6.6 Tipografi

| Peran | Typeface | Bobot | Penggunaan |
|---|---|---|---|
| Display | **Bricolage Grotesque** | 600, 700 | Judul hero, judul seksi. Karakter kuat, dipakai terbatas |
| Isi | **Plus Jakarta Sans** | 400, 500, 600 | Seluruh paragraf, label tombol, navigasi |
| Utilitas | **IBM Plex Mono** | 500 | Eyebrow, angka statistik, nomor SK, label slip |

Mono untuk angka dan label kecil bukan pilihan gaya kosong: ia meniru cetakan slip timbangan dan buku tabungan, dan mengikat elemen tanda tangan ke dunia nyata bank sampah.

**Skala (desktop):** 56 / 40 / 30 / 24 / 18 / 16 / 14 px. Mobile dikurangi ±20%, dengan minimum isi **16px** — pengguna target mencakup usia 40 tahun ke atas.

**Anggaran font: maksimal 120 KB total.** Self-host, subset Latin, hanya bobot yang terdaftar di atas, `font-display: swap`. Gunakan versi variable bila tersedia. Kalau anggaran terlampaui, yang dikorbankan adalah Bricolage Grotesque — ganti judul ke Plus Jakarta Sans 700.

### 6.7 Prinsip visual

- **Foto asli mendominasi. Tidak ada stok foto.** Kekuatan lembaga ini adalah keautentikannya.
- Kaca membingkai foto, bukan menutupinya. Kalau sebuah panel membuat fotonya tidak terlihat lagi, panel itu terlalu pekat.
- Gerak dipakai sekali dan terukur: pengungkapan halus saat masuk viewport dan penghitungan angka statistik. Tidak ada paralaks berat, tidak ada animasi berlapis.
- Ikon garis dengan ketebalan konsisten (Lucide).
- Ruang kosong lebih banyak daripada dorongan mengisi. Kaca butuh ruang untuk terbaca sebagai kaca.

---

## 7. Target Pengguna

**Persona 1 — Warga calon nasabah** ("Bu Imas", 38 th). Android kelas menengah-bawah, kuota terbatas. Bertanya: sampah apa yang diterima, kapan nimbangnya, kapan uangnya bisa diambil. → Halaman ringan, bahasa sederhana, jadwal mudah ditemukan.

**Persona 2 — Pengelola CSR / staf dinas** ("Pak Yudi", 45 th). Desktop. Bertanya: legal tidak, sudah berjalan berapa lama, dampaknya terukur, butuh apa. → Legalitas terlihat jelas, angka konkret, PDF bisa diunduh.

**Persona 3 — Kepala sekolah / guru** ("Bu Rina", 41 th). Ingin mengundang *Goes to School*. → CTA tersendiri, tidak tenggelam di daftar program.

**Persona 4 — Koordinator kelompok KKN** ("Rifqi", 21 th). Bertanya: apa yang bisa dikerjakan di sini, lembaganya aktif dan legal, siapa yang dihubungi. → `/kemitraan` membuka dengan bentuk kolaborasi konkret dan dokumentasi KKN terdahulu.

**Persona 5 — Pengurus desa/RW lain** ("Pak Asep", 50 th). Ingin mendirikan bank sampah serupa. → Tawaran replikasi di bagian sekunder halaman kemitraan.

**Persona 6 — Penilai penghargaan / jurnalis.** Memverifikasi klaim. → Setiap klaim disertai bukti.

---

## 8. Ruang Lingkup

### 8.1 Rilis 1 (MVP)

Beranda 11 seksi · 4 sub-halaman · Halaman 404 · CTA WhatsApp mengambang · Peta embed · Unduh Company Profile PDF · Facade video YouTube · Tautan Instagram & TikTok · Lapisan data JSON terpisah · Decap/Sveltia CMS · SEO lokal + structured data · GA4 · Dokumen serah terima.

### 8.2 Rilis 2

Halaman jenis sampah yang diterima (tanpa harga) · Katalog produk olahan · Testimoni nasabah · Halaman kegiatan/berita bila ada pengelola tetap · Foto pengurus bila izin sudah lengkap.

### 8.3 Di luar lingkup permanen

Sistem tabungan digital · Pembayaran online · Aplikasi native · Login publik · Dashboard dampak dinamis (tidak mungkin tanpa backend) · Harga sampah.

---

## 9. Spesifikasi Seksi Beranda

Setiap seksi mencantumkan perlakuan latar. Ingat batas 6 seksi berfoto penuh.

---

### S1 — Hero · latar: **foto penuh + scrim kuat**

| Elemen | Isi |
|---|---|
| Eyebrow (mono) | `DESA SARIMUKTI · PASIRWANGI · GARUT` |
| Judul | "Sampah Terpilah, Lingkungan Bersih, Ekonomi Warga Meningkat" |
| Subjudul | "Bank Sampah Bakti Lembur — pengelolaan sampah terpadu berbasis warga. Melayani lebih dari 500 kepala keluarga sejak April 2024." |
| CTA primer | "Daftar Jadi Nasabah" → WhatsApp |
| CTA sekunder | "Lihat Cara Kerjanya" → anchor S4 |
| Lencana kaca | `SK Desa No. 100.3.3/KEP-03/DS-2011/2024` |

**Perlakuan:** foto kegiatan penimbangan sebagai `<img>` penuh layar, scrim `--scrim-strong`, judul langsung di atas scrim, subjudul dan CTA di dalam Panel Kaca Setoran yang mengambang di sepertiga bawah.

**Kriteria:** foto hero adalah elemen LCP — muat dengan `fetchpriority="high"`, tanpa lazy, versi AVIF ≤ 140 KB pada 1280px. Panel kaca hero tidak boleh melebihi 40% tinggi viewport di mobile.

---

### S2 — Angka Dampak · latar: **lanjutan foto hero (blur), tanpa foto baru**

| Angka | Label |
|---|---|
| 500+ | Kepala keluarga nasabah aktif |
| 4 | RT terlayani, plus layanan jemput |
| 5 | Dapur MBG bermitra |
| Apr 2024 | Diresmikan |

**Perlakuan:** empat Panel Kaca Setoran sejajar. Angka dengan IBM Plex Mono 500. Animasi hitung naik saat masuk viewport, dimatikan bila `prefers-reduced-motion`.

**Kriteria:** setiap angka bersumber dari data terverifikasi. Data dari `src/data/statistik.json`.

---

### S3 — Kenapa Bakti Lembur Ada · latar: **netral `--neutral-50`**

Dua paragraf dari latar belakang PPTX, dipadatkan: tradisi kerja bakti di lembur → sampah sembarangan dan saluran air tersumbat → kesepakatan warga RW 04 bersama Patriot Desa dan Pendamping PKH → Gerakan Pilah Sampah → peresmian 24 April 2024.

**Perlakuan:** teks dua kolom di desktop, disandingkan satu foto berbingkai kaca. Latar netral memberi jeda setelah dua seksi berfoto.

---

### S4 — Cara Menjadi Nasabah · latar: **foto penuh + scrim lembut**

1. Pilah sampah anorganik dan organik di rumah
2. Setorkan ke Bank Sampah Bakti Lembur, atau minta dijemput
3. Sampah ditimbang petugas
4. Hasil dicatat di buku tabungan
5. Sampah dipilah, dikemas, dijual ke offtaker
6. Tabungan diambil tiap 6 bulan, atau ditukar sembako di koperasi

**Perlakuan:** stepper enam Panel Kaca Setoran bernomor mono. Penomoran dipertahankan karena kontennya memang urutan proses, bukan hiasan. Satu kolom di mobile. Ditutup CTA WhatsApp.

**Kriteria:** seksi paling penting untuk konversi. Tidak boleh dipangkas dalam kondisi apa pun.

---

### S5 — Program · latar: **`--brand-green-light`**

| Frekuensi | Program | Deskripsi |
|---|---|---|
| Harian | **GPS** | Gerakan Pilah Sampah dari rumah oleh nasabah |
| Mingguan | **GEBERLING** | Gerakan Bebersih Lingkungan, tiap Jumat 06.00–10.00 WIB |
| Mingguan | **GESIT** | Gerakan Ekonomi Sirkular Terpadu: eco enzyme, komposter, maggot BSF |
| Bulanan | **Bakti Lembur Goes to School** | Literasi lingkungan, praktik pengolahan, dan fun games di sekolah |
| Bulanan | **ECOLAR** | Dukungan pengembang produk ekonomi sirkular menuju wisata edukasi |
| Tahunan | **Road Show Bakti Lembur** | Perluasan nasabah, jejaring mitra, pelatihan |
| Tahunan | **Studi Tour** | Peningkatan kapasitas SDM dan unit usaha |
| Tahunan | **Paket Liburan** | Apresiasi nasabah dan penguatan kampanye pilah sampah |

**Perlakuan:** grid kartu kaca, masing-masing dengan foto kecil di kepala kartu. Dikelompokkan per frekuensi dengan pemisah eyebrow mono.

**Kriteria:** kartu *Goes to School* punya CTA sendiri, "Undang ke Sekolah Kami". Data dari `src/data/program.json`. Tautan "Selengkapnya" ke `/program`.

---

### S6 — Jadwal & Lokasi Penimbangan · latar: **netral**

- **Jadwal:** dua minggu sekali, hari Rabu, Kamis, dan Jumat
- **Lokasi utama:** RT 01/04 Kp. Nagrog, rumah Bu RW
- **Layanan jemput:** RT 02/04 Kp. Legok · RT 03/04 Kp. Joglo · RT 03/05 Kp. Sukasari · home industri/UMKM · pertokoan · instansi/lembaga · sekolah · pondok pesantren · desa dampingan

**Perlakuan:** peta di kiri dalam bingkai kaca, jadwal dan daftar area jemput di kanan sebagai chip kaca kecil.

**Kriteria:** iframe peta `loading="lazy"`. Tombol "Buka di Google Maps". Tidak mencantumkan jam buka — lembaga tidak memiliki jam layanan tetap.

---

### S7 — Hasil Nyata · latar: **foto penuh + scrim kuat**

Lingkungan lebih bersih dan saluran air lancar · Sampah ke TPA berkurang · Sampah bernilai ekonomi · Kompos dimanfaatkan warga untuk pertanian · Tabungan tambahan bagi warga · Terbentuk budaya sadar lingkungan.

**Perlakuan:** enam kartu kaca berikon di atas foto lanskap kampung.

---

### S8 — Produk & Ekonomi Sirkular · latar: **netral**

Kompos · Eco enzyme · Maggot BSF melalui teknologi biokonversi · Insinerator ramah lingkungan untuk residu, **berstatus dalam proses**.

**Kriteria:** produk yang belum berjalan wajib diberi label status jujur. Jangan diklaim sudah tersedia.

---

### S9 — Bukti & Pengakuan · latar: **`--brand-green-light`**

- SK Desa Sarimukti No. 100.3.3/KEP-03/DS-2011/2024
- Bantuan sarana DLH Kabupaten Garut: bangunan TPS 8×8 m, 2 motor sampah, 10 gerobak, 2.000 ember, 1 mesin pencacah
- Sertifikat kompetensi pengolahan sampah organik dari BPVP, Kemenaker RI
- Mitra: Patriot Desa · Garut Zero Waste · DLH Garut · Pendamping PKH · PAC Fatayat NU Pasirwangi
- Kunjungan Finalis Duta Lingkungan Jawa Barat 2024
- Sekolah mitra: MI Panundaan · SDN 1 Sarimukti
- Mitra akademik: KKN 10 Sarimukti UIN SGD Bandung

**Perlakuan:** grid lencana kaca. Setiap klaim harus punya bukti foto pendukung yang bisa dibuka.

---

### S10 — Galeri Kegiatan · latar: **foto penuh + scrim lembut**

6–8 foto pilihan berketerangan, tautan "Lihat Semua Dokumentasi" ke `/galeri`, dan facade video YouTube.

**Kriteria:** semua gambar lazy dengan `width`/`height` eksplisit untuk mencegah pergeseran tata letak. Video hanya memuat iframe setelah diklik.

---

### S11 — Dukung & Hubungi Kami · latar: **foto penuh + scrim kuat**

Empat jalur, masing-masing satu Panel Kaca Setoran:

1. **Jadi nasabah** → WhatsApp
2. **Jadi mitra atau donatur CSR** → WhatsApp dan email, tautan `/kemitraan`
3. **Ajukan lokasi KKN atau pengabdian** → WhatsApp, tautan `/kemitraan`
4. **Replikasi di desa Anda** → WhatsApp

Kebutuhan yang dikomunikasikan terbuka: mobil angkut sampah · sarana penyimpanan · alat kerja · dana operasional.

Kontak: alamat lengkap · nomor WhatsApp resmi · banksampahbaktilembur@gmail.com · Instagram @bank_sampah_bakti_lembur · TikTok @banksampahbaktilembur.

---

## 10. Spesifikasi Sub-halaman

**`/tentang`** — Latar belakang lengkap · visi & misi · 6 dasar hukum (kartu kaca berlabel mono) · susunan 11 pengurus **tanpa foto wajah** · legalitas dan SK · unduh Company Profile PDF.

Bagan pengurus: pohon sederhana di desktop, daftar bertingkat di mobile. Bagan pohon horizontal tidak terbaca di layar sempit.

**`/program`** — 8 program lengkap dengan foto dokumentasi masing-masing · produk olahan · rencana pengembangan 2025–2026.

**`/galeri`** — Dokumentasi dikelompokkan per kategori kegiatan. Lightbox sederhana. **Foto yang menampilkan wajah anak sekolah tidak ditayangkan** sampai izin tertulis tersedia — lihat Bagian 13.

**`/kemitraan`** — Struktur dua lapis:

*Lapis 1 (abadi):* ajakan kolaborasi, bentuk kerja sama yang tersedia bagi kelompok KKN dan perguruan tinggi, alur pengajuan, CTA.

*Lapis 2 (riwayat, bertambah tiap angkatan):* KKN 10 Sarimukti UIN SGD Bandung 2026 — profil kelompok, 15 anggota per bidang, kontribusi (pembangunan website dan digitalisasi profil, edukasi literasi pilah sampah, produksi konten dokumentasi, pendampingan produk ekonomi sirkular, riset dan pendataan), linimasa, dokumentasi.

*Lapis 3 (sekunder):* jalur CSR, dinas, dan desa dampingan.

Struktur berlapis ini yang mencegah halaman menjadi arsip mati setelah periode KKN berakhir.

---

## 11. Persyaratan Teknis

### 11.1 Tumpukan

| Lapisan | Pilihan |
|---|---|
| Framework | **Astro** — SSG, arsitektur island |
| Styling | Tailwind CSS + token CSS kustom (Bagian 6.4) |
| Komponen interaktif | Astro Islands + React seperlunya: menu mobile, lightbox galeri, penghitung angka, akordeon FAQ |
| Gambar | `astro:assets` dengan Sharp — AVIF + WebP, srcset otomatis |
| CMS | Decap CMS atau Sveltia CMS, berbasis Git |
| Hosting | Cloudflare Pages atau Netlify, paket gratis |
| Repositori | GitHub, **atas nama akun Bank Sampah Bakti Lembur** |
| Analitik | Google Analytics 4 + Search Console |

**Dilarang:** React SPA murni (Vite/CRA), Nuxt mode SPA, framework apa pun yang membutuhkan server saat runtime.

### 11.2 Struktur berkas

```
src/
├── data/
│   ├── profil.json          # identitas, kontak, sosmed, SK
│   ├── statistik.json       # angka dampak S2
│   ├── program.json         # 8 program
│   ├── alur.json            # 6 langkah jadi nasabah
│   ├── pengurus.json        # 11 pengurus
│   ├── kkn.json             # angkatan KKN (array) + anggota
│   ├── mitra.json           # mitra & pengakuan
│   ├── galeri.json          # kategori + keterangan + izin tayang
│   ├── faq.json
│   └── whatsapp.json        # pesan pre-fill per CTA
├── components/
│   ├── glass/               # GlassPanel, GlassCard, GlassBadge, GlassChip
│   ├── sections/            # S1..S11
│   └── ui/
├── layouts/
├── pages/
└── assets/images/
public/
├── dokumen/company-profile-bakti-lembur.pdf
└── admin/                   # konfigurasi Decap CMS
```

**Aturan mutlak: tidak boleh ada teks konten yang ditulis langsung di dalam komponen.** Ini satu-satunya hal yang menentukan apakah situs masih bisa diperbarui setahun setelah KKN selesai.

### 11.3 Contoh skema data

```jsonc
// src/data/statistik.json
{
  "perTanggal": "2026-08-15",
  "angka": [
    { "nilai": "500+",    "label": "Kepala keluarga nasabah aktif" },
    { "nilai": "4",       "label": "RT terlayani, plus layanan jemput" },
    { "nilai": "5",       "label": "Dapur MBG bermitra" },
    { "nilai": "Apr 2024","label": "Diresmikan" }
  ]
}
```

```jsonc
// src/data/galeri.json — perhatikan flag izin
{
  "kategori": [
    {
      "slug": "penimbangan",
      "judul": "Kegiatan Penimbangan",
      "foto": [
        {
          "file": "penimbangan-01.jpg",
          "alt": "Petugas menimbang karung berisi plastik terpilah di halaman bank sampah",
          "izinTayang": true,
          "adaWajahAnak": false
        }
      ]
    }
  ]
}
```

Foto dengan `izinTayang: false` atau `adaWajahAnak: true` **tidak dirender**. Aturan ini ditegakkan di kode, bukan hanya di proses kerja — supaya kelalaian manusia tidak berujung foto anak tayang tanpa izin.

```jsonc
// src/data/kkn.json — struktur array angkatan (mitigasi arsip mati)
{
  "angkatan": [
    {
      "nama": "KKN 10 Sarimukti UIN SGD Bandung",
      "tahun": 2026,
      "periode": "TBD",
      "kontribusi": ["Pembangunan website & digitalisasi profil", "..."],
      "anggota": [
        { "nama": "Ishak Maulana", "peran": "Ketua", "bidang": "Inti" }
      ]
    }
  ]
}
```

### 11.4 Anggaran kinerja

Arah visual berat-foto memaksa anggaran dinaikkan dari versi sebelumnya. Ini keputusan sadar, bukan kelalaian.

| Metrik | Target | Catatan |
|---|---|---|
| Muatan viewport awal | **≤ 700 KB** | Yang benar-benar menentukan kesan pertama |
| Total beranda setelah scroll penuh | ≤ 2,5 MB | Naik dari 1,5 MB karena foto latar |
| JavaScript terkirim | ≤ 100 KB terkompresi | Astro membuat ini mudah dicapai |
| Font | ≤ 120 KB | Tiga famili, subset Latin |
| LCP | < 2,5 detik pada 4G | Tidak dinegosiasikan |
| CLS | < 0,1 | Dimensi eksplisit pada semua gambar |
| INP | < 200 ms | Ukur pada Android kelas bawah |
| Tiap foto latar | ≤ 140 KB AVIF pada 1280px | Lebar responsif: 640 / 960 / 1280 / 1920 |

**Teknik wajib:** AVIF dengan fallback WebP · LQIP blur-up sebagai pengganti sementara · `loading="lazy"` untuk semua gambar di bawah lipatan · `content-visibility: auto` pada seksi bawah · iframe peta dan video dimuat lambat.

### 11.5 SEO

- Kata kunci utama: bank sampah Garut · bank sampah Pasirwangi · pengelolaan sampah Garut · bank sampah Desa Sarimukti
- Kata kunci sekunder: cara jadi nasabah bank sampah · kompos Garut · maggot BSF Garut · lokasi KKN Garut
- Title: `Bank Sampah Bakti Lembur — Pengelolaan Sampah Terpadu di Pasirwangi, Garut`
- Meta description unik per halaman, 150–160 karakter
- Open Graph dan Twitter Card dengan `og:image` khusus — mayoritas trafik akan datang dari tautan yang dibagikan di WhatsApp, jadi pratinjau tautan adalah kesan pertama
- Structured data `Organization` + `LocalBusiness`: alamat, koordinat, telepon. **Tanpa `openingHours`** karena lembaga tidak punya jam layanan tetap
- `sitemap.xml` dan `robots.txt` otomatis dari Astro
- Alt text deskriptif pada semua gambar
- **Google Business Profile** — untuk pencarian lokal dampaknya melebihi seluruh SEO on-page. Prioritaskan

### 11.6 Aksesibilitas

WCAG 2.1 AA · navigasi keyboard penuh dengan indikator fokus terlihat jelas di atas permukaan kaca · kontras ≥ 4,5:1 diukur terhadap scrim · hormati `prefers-reduced-motion` dan `prefers-reduced-transparency` · target sentuh ≥ 44×44 px · `lang="id"`.

**Perhatian khusus tema kaca:** indikator fokus default browser sering hilang di atas permukaan tembus pandang. Gunakan `outline` tebal dengan warna solid kontras tinggi, bukan efek bayangan halus.

### 11.7 Integrasi

| Integrasi | Detail |
|---|---|
| WhatsApp | `https://wa.me/<nomor>?text=<pesan>` — nomor khusus lembaga, lihat Bagian 17 |
| Google Maps | Iframe lazy + tautan langsung |
| YouTube | Facade → `https://youtu.be/RyqIu_17jFI` |
| Instagram | `https://www.instagram.com/bank_sampah_bakti_lembur` |
| TikTok | `https://tiktok.com/@banksampahbaktilembur` |
| Email | `mailto:banksampahbaktilembur@gmail.com` |

### 11.8 Event GA4

`klik_wa_nasabah` · `klik_wa_sekolah` · `klik_wa_mitra` · `klik_wa_kkn` · `klik_wa_replikasi` · `unduh_profil` · `putar_video` · `klik_maps` · `scroll_75` · `klik_sosmed`

---

## 12. Kepemilikan & Keberlanjutan

Seluruh akun dibuat atas nama Bank Sampah Bakti Lembur sejak hari pertama, **bukan atas nama anggota KKN**:

| Akun | Keterangan |
|---|---|
| Email induk | Disarankan akun Google khusus website, terpisah dari email operasional |
| Domain | Terdaftar atas nama lembaga, tanggal jatuh tempo dicatat |
| Hosting | Cloudflare Pages / Netlify |
| GitHub | Repositori milik lembaga |
| GA4 & Search Console | Properti milik lembaga |
| Google Business Profile | Diverifikasi atas nama lembaga |

Kredensial diserahkan tertulis kepada pengurus saat serah terima. Penanggung jawab pasca-KKN adalah pihak bank sampah, dengan CMS sebagai jalur pembaruan agar tidak bergantung pada pengetahuan teknis.

---

## 13. Kebijakan Foto & Privasi

Ini bukan risiko yang dimitigasi, melainkan aturan yang ditegakkan.

1. **Foto yang menampilkan wajah anak-anak tidak ditayangkan** sampai ada izin tertulis dari pihak sekolah atau orang tua. Berlaku untuk seluruh dokumentasi MI Panundaan, SDN 1 Sarimukti, dan kegiatan *Goes to School*. Bila izin belum ada, gunakan foto dari kejauhan, dari belakang, atau foto kegiatan tanpa subjek anak.
2. **Foto warga dewasa** ditayangkan dengan sepengetahuan yang bersangkutan. Bila ragu, jangan tayangkan.
3. **Foto wajah pengurus tidak ditampilkan** pada rilis pertama sesuai keputusan lembaga. Halaman pengurus memuat nama dan jabatan saja.
4. Penegakan dilakukan di kode melalui flag `izinTayang` dan `adaWajahAnak` di `galeri.json`, sehingga kelalaian manual tidak berujung publikasi tanpa izin.
5. Tidak ada data pribadi warga, nominal tabungan, atau nomor kontak pribadi yang dipublikasikan.

---

## 14. Risiko

| # | Risiko | Dampak | Mitigasi |
|---|---|---|---|
| R1 | Efek kaca membuat situs patah-patah di Android kelas bawah | **Tinggi** — menggagalkan Persona 1 | Sepuluh aturan Bagian 6.5; uji perangkat nyata jadi kriteria penerimaan |
| R2 | Teks tidak terbaca di atas foto | **Tinggi** | Scrim wajib; kontras diukur terhadap scrim; audit setiap seksi berfoto |
| R3 | Foto beresolusi rendah dipaksakan jadi latar penuh | Sedang | Aset disediakan tim KKN dengan standar minimum 1920px; foto di bawah standar tidak dipakai sebagai latar penuh |
| R4 | Foto anak tayang tanpa izin | **Tinggi** — perlindungan anak | Kebijakan Bagian 13 ditegakkan di kode |
| R5 | Domain tidak diperpanjang, situs mati | **Tinggi** | Bayar beberapa tahun di muka; tanggal jatuh tempo masuk dokumen serah terima |
| R6 | Situs membeku setelah KKN selesai | Sedang | CMS dipasang sebelum KKN berakhir; pelatihan singkat pengurus |
| R7 | Halaman `/kemitraan` jadi arsip mati | Sedang | Struktur tiga lapis; data angkatan berupa array |
| R8 | Dibangun sebagai SPA | **Tinggi** | Larangan eksplisit; verifikasi `view-source` di kriteria penerimaan |
| R9 | Lonjakan pesan WhatsApp membebani pengurus | Sedang | FAQ lengkap; pesan pre-fill yang spesifik agar percakapan langsung ke pokok |
| R10 | Anggaran 2,5 MB terlampaui karena foto ditambah terus | Sedang | Batas 6 seksi berfoto; audit ukuran jadi kriteria penerimaan |

---

## 15. Peta Jalan

| Fase | Lingkup | Estimasi |
|---|---|---|
| **0 — Aset & naskah** | Kumpulkan foto dan logo, tulis naskah final, susun seluruh berkas JSON, konfirmasi izin foto | 1 minggu |
| **1 — Desain** | Mockup beranda dan 4 sub-halaman, uji purwarupa kaca di Android nyata sebelum lanjut | 1–2 minggu |
| **2 — Pengembangan** | Astro, komponen kaca, integrasi, optimasi gambar, SEO, GA4 | 2 minggu |
| **3 — CMS & QA** | Pasang Decap/Sveltia, uji lintas perangkat, Lighthouse, audit aksesibilitas dan kontras | 1 minggu |
| **4 — Rilis & serah terima** | Search Console, Google Business Profile, transfer kredensial, pelatihan pengurus | 3–4 hari |

**Total: 5–6 minggu.**

> Purwarupa kaca diuji di Fase 1, bukan di Fase 3. Kalau efeknya patah-patah di perangkat target, arah visual masih bisa disederhanakan tanpa membuang pekerjaan pengembangan.

**Bila waktu tidak cukup, urutan pemangkasan:** `/galeri` diringkas jadi seksi beranda → `/program` digabung ke `/tentang` → animasi hitung dan lightbox dihapus → efek kaca disederhanakan jadi panel semi-pekat tanpa blur.

**Tidak boleh dipangkas:** beranda lengkap · S4 (cara jadi nasabah) · `/kemitraan` · CTA WhatsApp · SEO dasar · kebijakan foto · dokumen serah terima.

---

## 16. Kriteria Penerimaan

**Arsitektur**
- [ ] `view-source` setiap halaman menampilkan konten lengkap — bukti SSG, bukan SPA
- [ ] Tidak ada seruan ke API atau backend saat halaman dimuat
- [ ] Seluruh konten berada di `src/data/*.json`; tidak ada teks konten di dalam komponen
- [ ] `npm run build` berhasil tanpa variabel lingkungan rahasia

**Tema kaca**
- [ ] Setiap panel kaca tetap terbaca ketika `backdrop-filter` dimatikan paksa
- [ ] Tidak ada kaca bertumpuk di atas kaca di seluruh situs
- [ ] `prefers-reduced-transparency` dan `prefers-reduced-motion` keduanya dihormati
- [ ] Diuji pada Android kelas bawah sungguhan — gulir tetap mulus, tanpa patah-patah
- [ ] Maksimal 6 seksi berfoto penuh di beranda
- [ ] Indikator fokus keyboard terlihat jelas di atas semua permukaan kaca

**Kinerja**
- [ ] Muatan viewport awal ≤ 700 KB
- [ ] Total beranda ≤ 2,5 MB, JS ≤ 100 KB terkompresi, font ≤ 120 KB
- [ ] LCP < 2,5 detik pada throttle 4G; CLS < 0,1
- [ ] Lighthouse mobile: Performance ≥ 85, Accessibility ≥ 95, SEO ≥ 95

**Konten & kepatuhan**
- [ ] Tidak ada klaim "3 tahun" di mana pun; seluruh rujukan waktu konsisten "sejak April 2024"
- [ ] Harga sampah tidak muncul di halaman mana pun
- [ ] Nama dieja benar, termasuk **Rolah Juariah**
- [ ] Tidak ada foto wajah anak yang tayang tanpa izin tertulis
- [ ] Tidak ada foto wajah pengurus
- [ ] Nama dapur MBG tidak disebutkan, hanya jumlahnya
- [ ] Semua gambar punya alt text deskriptif dan dimensi eksplisit
- [ ] Tidak ada teks placeholder tersisa

**Fungsional**
- [ ] Semua CTA WhatsApp membuka aplikasi dengan pesan pre-fill yang benar
- [ ] Peta menunjuk titik yang benar
- [ ] Company Profile PDF bisa diunduh
- [ ] Pratinjau tautan tampil benar saat dibagikan di WhatsApp
- [ ] Structured data lolos Google Rich Results Test
- [ ] GA4 terpasang, semua event terverifikasi di DebugView
- [ ] Halaman 404 kustom berfungsi

**Serah terima**
- [ ] Semua akun atas nama Bank Sampah Bakti Lembur
- [ ] CMS terpasang dan bisa dipakai pengurus
- [ ] Minimal satu pengurus sudah berhasil mengubah satu teks dan melihat hasilnya tayang
- [ ] Kredensial dan dokumen serah terima diserahkan tertulis

---

## 17. Item Operasional Tersisa

Enam item ini tidak menahan dimulainya desain dan pengembangan, tetapi harus selesai sebelum rilis.

| # | Item | Penanggung jawab | Batas |
|---|---|---|---|
| 1 | **Nomor WhatsApp khusus lembaga** — sudah diputuskan akan dibuat, nomornya belum ada. Sementara pakai 0852 2420 8050, ganti sebelum rilis | Pengurus | Sebelum rilis |
| 2 | **Koordinat lat/long** — tautan `share.google/PHDzMDgsWJA71mkXP` perlu dibuka dan diambil angka koordinatnya untuk peta dan structured data | Tim KKN | Fase 2 |
| 3 | **Izin foto anak sekolah** — belum terjawab. Selama belum ada, kebijakan Bagian 13 berlaku: tidak ditayangkan | Pengurus | Sebelum rilis |
| 4 | **Izin foto warga dewasa** — belum terjawab. Bila ragu, jangan tayangkan | Pengurus | Sebelum rilis |
| 5 | **Pilihan domain dan pembayarannya** — `.or.id` bila legalitas mencukupi, `.com` bila tidak. Disarankan dibayar beberapa tahun di muka | Tim KKN + pengurus | Fase 2 |
| 6 | **Daftar jenis sampah yang diterima** — untuk Rilis 2. Tanpa harga | Pengurus | Rilis 2 |

---

## Lampiran A — Data Terverifikasi

**Identitas**
Nama: Bank Sampah Bakti Lembur · SK Desa No. 100.3.3/KEP-03/DS-2011/2024 · Diresmikan 24 April 2024 · Kp. Nagrog RT 001 RW 004, Desa Sarimukti, Kec. Pasirwangi, Kab. Garut, Jawa Barat · banksampahbaktilembur@gmail.com · Instagram @bank_sampah_bakti_lembur · TikTok @banksampahbaktilembur · YouTube https://youtu.be/RyqIu_17jFI

**Visi**
Mewujudkan generasi yang berkontribusi bagi terciptanya lingkungan yang bersih, sehat dan dapat meningkatkan ekonomi masyarakat.

**Misi**
1. Memberikan edukasi kepada masyarakat tentang cara hidup ramah lingkungan: literasi memilah sampah, mengelola sampah organik dan anorganik, merawat penghijauan.
2. Pemberdayaan ekonomi melalui penimbangan terpilah, perluasan usaha ekonomi sirkular, pengembangan produk melalui kreativitas dan inovasi, serta pelatihan dan pembinaan bagi desa-desa dampingan.

**Dasar hukum**
UU No. 18 Tahun 2008 · PP No. 81 Tahun 2012 · PP No. 97 Tahun 2012 · Permen No. 14 Tahun 2021 · Perda No. 4 Tahun 2014 · Perbup No. 26 Tahun 2019

**Jenis sampah yang dikelola**
Anorganik: plastik, kertas, kardus, kaleng/logam, kaca. Organik: sisa sayuran, daun, limbah dapur, diolah menjadi kompos, eco enzyme, dan maggot BSF. Residu: rencana pengolahan dengan insinerator ramah lingkungan.

**Kendala yang dikomunikasikan publik**
Sebagian warga belum terbiasa memilah dari rumah · keterbatasan sarana, alat kerja, dan tempat penyimpanan · harga jual sampah fluktuatif · keterbatasan dana operasional · belum memiliki mobil angkut.

**Rencana pengembangan 2025–2026**
Pengajuan RW 04 sebagai Program Kampung Iklim · 100 lubang biopori · 1 rumah 1 biokomposter · TOGA · Kampung Kreasi · normalisasi saluran air · kemitraan Perhutani · ecofarming dan eduwisata · kolaborasi Bank Sampah–TPS3R · kemitraan dunia usaha.

---

## Lampiran B — Pesan Pre-fill WhatsApp

| CTA | Pesan |
|---|---|
| Daftar nasabah | "Halo Bank Sampah Bakti Lembur, saya ingin mendaftar menjadi nasabah. Boleh info cara daftarnya?" |
| Layanan jemput | "Halo, saya ingin menggunakan layanan penjemputan sampah. Lokasi saya di [alamat]." |
| Undang ke sekolah | "Halo, saya dari [nama sekolah]. Kami ingin mengundang program Bakti Lembur Goes to School." |
| Kerja sama / CSR | "Halo, saya dari [nama instansi/perusahaan]. Kami tertarik menjalin kerja sama dengan Bank Sampah Bakti Lembur." |
| Pengajuan KKN | "Halo, saya dari kelompok KKN [nama kampus]. Kami tertarik menjadikan Bank Sampah Bakti Lembur sebagai lokasi/mitra program." |
| Replikasi | "Halo, saya dari [nama desa]. Kami ingin belajar mendirikan bank sampah seperti Bakti Lembur." |
| Tanya harga sampah | "Halo, saya ingin tahu jenis sampah apa saja yang diterima dan harganya." |

---

## Lampiran C — Susunan Kepengurusan

```
Deni, S.P — Penasihat
│
├── Hamid — Pembina
│
└── Muhusin — Direktur
    │
    └── Nurman Mulyana — General Manager
        ├── Herman Taupik — Sekretaris
        ├── Dede Ulfatul Q — Bidang Keuangan
        │    └── Siti Halimah — Bidang Marketing dan Pengembangan Usaha
        ├── Nisa Rahmawati — Bidang Administrasi
        │    └── Sahidin — Bidang Operasional dan Produksi
        └── Imas Idah — Bidang Pemberdayaan
             └── Rolah Juariah — Bidang Penimbangan, Pemilahan dan Pengepakan
```

| No. | Nama | Jabatan |
|---|---|---|
| 1 | Deni, S.P | Penasihat |
| 2 | Hamid | Pembina |
| 3 | Muhusin | Direktur |
| 4 | Nurman Mulyana | General Manager |
| 5 | Herman Taupik | Sekretaris |
| 6 | Dede Ulfatul Q | Bidang Keuangan |
| 7 | Siti Halimah | Bidang Marketing dan Pengembangan Usaha |
| 8 | Nisa Rahmawati | Bidang Administrasi |
| 9 | Sahidin | Bidang Operasional dan Produksi |
| 10 | Imas Idah | Bidang Pemberdayaan |
| 11 | Rolah Juariah | Bidang Penimbangan, Pemilahan dan Pengepakan |

Ditampilkan tanpa foto wajah. Garis komando menunjukkan hubungan struktural; koordinasi antarbagian berjalan dalam pelaksanaan kegiatan.

---

## Lampiran D — KKN 10 Sarimukti UIN SGD Bandung

**Pengurus inti**

| Jabatan | Nama |
|---|---|
| Ketua | Ishak Maulana |
| Sekretaris | Amira Sabita |
| Bendahara | Nazwa Yulianti Munjana |

**Bidang Acara** — Alfina Dinova · Ira Niroh · Rahmah Sabila · Faiz Abdul Aziz · Septi Ainul Ramadhan

**Bidang PDD** — Isniyatul Hidayah · Farid Nur Faujan · Ainiyyah Nur Afifah A

**Bidang Humlog** — Riyan Andriyansyah · Salman Muzaki Rabbani · Mutia Susilawati · Rian Febriansyah

Total 15 anggota. Ditampilkan di `/kemitraan` sebagai grid kartu kaca dikelompokkan per bidang, bersumber dari `src/data/kkn.json` dengan struktur array angkatan.

---

## Lampiran E — Dokumen Serah Terima

Wajib selesai sebelum periode KKN berakhir:

1. Daftar akun dan kredensial: domain (registrar, tanggal jatuh tempo, biaya perpanjangan), hosting, GitHub, GA4, Search Console, Google Business Profile
2. Panduan bergambar memperbarui konten lewat CMS
3. Panduan mengganti foto: ukuran, format, dan cara menandai izin tayang
4. Panduan membaca GA4 — lima metrik utama saja
5. Daftar tanggal penting, terutama jatuh tempo domain
6. Kontak teknis darurat
7. Berita acara serah terima, ditandatangani perwakilan KKN dan pengurus bank sampah

Dokumen ini sekaligus menjadi bukti luaran KKN yang bisa dilampirkan dalam laporan akhir.
