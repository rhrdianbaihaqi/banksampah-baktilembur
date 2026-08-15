# Website Bank Sampah Bakti Lembur

Company profile Bank Sampah Bakti Lembur — lembaga pengelolaan sampah terpadu berbasis komunitas di Kp. Nagrog RT 001 RW 004, Desa Sarimukti, Kec. Pasirwangi, Kab. Garut. Dibangun tim KKN 10 Sarimukti UIN Sunan Gunung Djati Bandung, diserahkan ke pengurus bank sampah setelah periode KKN berakhir.

Situs statis murni (SSG) dengan Astro. Tanpa backend, tanpa basis data.

## Acuan

- **[PRD_Banksampah.md](PRD_Banksampah.md)** — acuan tunggal untuk isi, struktur, dan tampilan.
- **[AGENTS.md](AGENTS.md)** — aturan kerja: arsitektur, konten, desain, anggaran kinerja.
- **[.claude/skills/desain-baktilembur](.claude/skills/desain-baktilembur/SKILL.md)** — aturan desain visual yang wajib dibaca sebelum menyentuh CSS atau membuat komponen.

## Struktur

```
src/
├── data/         Seluruh teks konten dalam JSON + tipe TypeScript.
│                 index.ts adalah satu-satunya titik masuk; ia juga
│                 menegakkan kebijakan foto (izinTayang / adaWajahAnak).
├── components/
│   ├── glass/    Panel Kaca Setoran dan turunannya
│   ├── sections/ S1–S11 beranda
│   └── ui/       Seksi, PhotoBackdrop, CtaWhatsapp, VideoFacade, Ikon
├── layouts/      Layout.astro — SEO, Open Graph, structured data
├── styles/       global.css — token desain PRD §6.4 dan utilitas .glass
└── pages/
```

**Aturan yang paling menentukan:** tidak ada teks konten yang ditulis langsung di komponen. Semua dari `src/data/*.json`, supaya pengurus bisa memperbarui lewat CMS tanpa menyentuh kode.

## Perintah

| Perintah | Kegunaan |
| :--- | :--- |
| `npm install` | Pasang dependensi |
| `npx astro dev --background` | Jalankan dev server di latar belakang |
| `npx astro dev status` / `logs` / `stop` | Kelola dev server |
| `npm run build` | Build ke `./dist/` |
| `npm run preview` | Pratinjau hasil build |

## Yang belum selesai

Beranda 11 seksi sudah berdiri. Belum dikerjakan: sub-halaman `/tentang`, `/program`, `/galeri`, `/kemitraan`, halaman 404, CMS (Decap/Sveltia), GA4, dan Company Profile PDF.

Menunggu dari pengurus dan tim KKN (PRD §17): nomor WhatsApp khusus lembaga, koordinat lat/long lokasi, izin tertulis foto anak sekolah dan warga dewasa, pilihan domain, serta foto asli minimal 1920px. Selama foto belum ada, situs menampilkan placeholder berlabel — bukan foto stok.
