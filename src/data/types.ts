/**
 * Bentuk data untuk seluruh berkas di `src/data/*.json`.
 *
 * Tujuannya: salah ketik struktur ketahuan saat build, bukan saat produksi.
 * Pengurus memperbarui isi lewat CMS; tipe ini yang menjaga agar perubahan
 * mereka tidak diam-diam merusak halaman.
 */

export interface Profil {
	nama: string;
	namaPendek: string;
	tagline: string;
	diresmikan: string;
	diresmikanTeks: string;
	sk: { nomor: string; penerbit: string; label: string };
	alamat: {
		jalan: string;
		desa: string;
		kecamatan: string;
		kabupaten: string;
		provinsi: string;
		negara: string;
		kodePos: string;
		lengkap: string;
	};
	koordinat: {
		terisi: boolean;
		lat: number | null;
		long: number | null;
		tautanMaps: string;
	};
	kontak: {
		whatsapp: { sementara: boolean; nomorTampil: string; nomorInternasional: string };
		email: string;
	};
	sosmed: Array<{ nama: string; handle: string; url: string }>;
	video: { judul: string; idYoutube: string; url: string };
	visi: string;
	misi: string[];
	dasarHukum: Array<{ label: string; tentang: string }>;
	jadwalPenimbangan: { frekuensi: string; hari: string[]; lokasiUtama: string };
	areaJemput: string[];
	kebutuhan: string[];
	kendala: string[];
	companyProfilePdf: string;
}

export interface Statistik {
	perTanggal: string;
	angka: Array<{ nilai: string; label: string }>;
}

export interface Alur {
	judul: string;
	langkah: Array<{ nomor: number; judul: string; keterangan: string }>;
}

/** Kunci CTA di `whatsapp.json`. Dipakai komponen agar tidak ada string liar. */
export type KunciCta =
	| 'nasabah'
	| 'jemput'
	| 'sekolah'
	| 'mitra'
	| 'kkn'
	| 'replikasi'
	| 'jenisSampah';

export interface Whatsapp {
	cta: Record<KunciCta, { label: string; pesan: string; eventGa4: string }>;
}

export type StatusProduk = 'berjalan' | 'dalam-proses';

export interface Program {
	kelompok: Array<{
		frekuensi: string;
		program: Array<{
			slug: string;
			nama: string;
			kepanjangan: string | null;
			deskripsi: string;
			/** Bila diisi, kartu program menampilkan CTA WhatsApp-nya sendiri. */
			ctaWhatsapp: KunciCta | null;
		}>;
	}>;
	produk: Array<{ nama: string; deskripsi: string; status: StatusProduk }>;
	labelStatus: Record<StatusProduk, string>;
	rencanaPengembangan: { periode: string; butir: string[] };
}

export interface Pengurus {
	jumlah: number;
	/** Tanpa field foto — PRD §13 butir 3. Jangan tambahkan. */
	orang: Array<{ id: string; nama: string; jabatan: string; atasan: string | null }>;
	keterangan: string;
}

export interface Kkn {
	angkatan: Array<{
		nama: string;
		kampus: string;
		tahun: number;
		periode: string;
		kontribusi: string[];
		anggota: Array<{ nama: string; peran: string; bidang: string }>;
	}>;
	bentukKolaborasi: string[];
}

export interface Mitra {
	pengakuan: Array<{
		jenis: string;
		judul: string;
		keterangan: string | null;
		bukti: string | null;
	}>;
	mitraLembaga: Array<{ nama: string; kategori: string }>;
	sekolahMitra: Array<{ nama: string }>;
	mitraAkademik: Array<{ nama: string }>;
	hasilNyata: Array<{ ikon: string; judul: string; keterangan: string }>;
}

export interface Foto {
	file: string;
	alt: string;
	/** Persetujuan tayang dari yang bersangkutan. */
	izinTayang: boolean;
	/** Wajah anak terlihat. Selama izin tertulis belum ada, foto ini tidak tayang. */
	adaWajahAnak: boolean;
}

export interface Galeri {
	kategori: Array<{ slug: string; judul: string; foto: Foto[] }>;
}

export interface Faq {
	pertanyaan: Array<{ tanya: string; jawab: string }>;
}

interface Tautan {
	label: string;
	href: string;
}

/**
 * Naskah seluruh seksi beranda.
 *
 * Judul seksi dan label tombol termasuk teks konten, jadi tempatnya di sini —
 * bukan di komponen (PRD §11.2). Ini yang membuat pengurus bisa mengubah
 * kalimat lewat CMS tanpa menyentuh kode.
 */
export interface Beranda {
	s1: {
		eyebrow: string;
		judul: string;
		subjudul: string;
		ctaSekunder: { label: string; anchor: string };
		ctaVideo?: { label: string };
	};
	s2: { eyebrow: string; judulLayar: string };
	s3: {
		eyebrow: string;
		/** Dipecah tiga bagian; `tebal` yang mendapat warna hijau tua. */
		judul: { awal: string; tebal: string; akhir: string };
		pengantar: string | string[];
		/** `sumber` tidak dirender — ia jejak asal data supaya klaim bisa dilacak. */
		keunggulan: Array<{ teks: string; judul?: string; sumber?: string }>;
		/** Naskah panjang, disimpan untuk halaman /tentang. Tidak dirender di beranda. */
		paragraf: string[];
		labelFoto: string;
		labelStrip: string;
	};
	s4: { eyebrow: string; judul: string; pengantar: string; labelLangkah: string };
	s5: { eyebrow: string; judul: string; tautanSelengkapnya: Tautan };
	s6: {
		eyebrow: string;
		judul: string;
		labelJadwal: string;
		labelLokasi: string;
		labelJemput: string;
		tombolMaps: string;
	};
	s7: { eyebrow: string; judul: string };
	s8: { eyebrow: string; judul: string; pengantar: string };
	s9: {
		eyebrow: string;
		judul: string;
		labelMitra: string;
		labelSekolah: string;
		labelAkademik: string;
	};
	s10: {
		eyebrow: string;
		judul: string;
		tautanSelengkapnya: Tautan;
		labelVideo: string;
		kosong: string;
	};
	s11: {
		eyebrow: string;
		judul: string;
		jalur: Array<{
			eyebrow: string;
			judul: string;
			keterangan: string;
			cta: KunciCta;
			tautan: Tautan | null;
		}>;
		labelKebutuhan: string;
		labelKontak: string;
	};
}

export interface Nav {
	tautan: Array<{ label: string; href: string }>;
	logo: Array<{ file: string; alt: string; lebar: number; tinggi: number }>;
	labelBuka: string;
	labelTutup: string;
}
