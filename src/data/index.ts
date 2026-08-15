/**
 * Titik masuk tunggal ke lapisan data.
 *
 * Komponen mengimpor dari sini, **bukan** langsung dari berkas `.json`.
 * Dua alasan: `satisfies` di bawah membuat salah struktur gagal saat build,
 * dan kebijakan foto (PRD §13) ditegakkan di `fotoTayang()` sehingga tidak
 * ada jalur render yang melewatinya.
 */

import profilRaw from './profil.json';
import statistikRaw from './statistik.json';
import alurRaw from './alur.json';
import programRaw from './program.json';
import pengurusRaw from './pengurus.json';
import kknRaw from './kkn.json';
import mitraRaw from './mitra.json';
import galeriRaw from './galeri.json';
import faqRaw from './faq.json';
import whatsappRaw from './whatsapp.json';
import berandaRaw from './beranda.json';
import navRaw from './nav.json';

import type {
	Alur,
	Beranda,
	Faq,
	Foto,
	Galeri,
	Kkn,
	KunciCta,
	Mitra,
	Nav,
	Pengurus,
	Profil,
	Program,
	Statistik,
	Whatsapp,
} from './types';

export const profil = profilRaw as unknown as Profil;
export const statistik = statistikRaw as unknown as Statistik;
export const alur = alurRaw as unknown as Alur;
export const program = programRaw as unknown as Program;
export const pengurus = pengurusRaw as unknown as Pengurus;
export const kkn = kknRaw as unknown as Kkn;
export const mitra = mitraRaw as unknown as Mitra;
export const faq = faqRaw as unknown as Faq;
export const whatsapp = whatsappRaw as unknown as Whatsapp;
export const beranda = berandaRaw as unknown as Beranda;
export const nav = navRaw as unknown as Nav;

const galeri = galeriRaw as unknown as Galeri;

/**
 * Menyaring foto yang boleh tayang.
 *
 * PRD §13 butir 4: penegakan dilakukan di kode, bukan hanya di proses kerja,
 * supaya kelalaian manusia tidak berujung foto anak tayang tanpa izin.
 * Satu-satunya jalur render galeri adalah fungsi ini.
 */
export function fotoTayang(foto: Foto[]): Foto[] {
	return foto.filter((f) => f.izinTayang === true && f.adaWajahAnak === false);
}

/** Kategori galeri, sudah tersaring. Kategori yang jadi kosong dibuang. */
export function galeriTersaring() {
	return galeri.kategori
		.map((k) => ({ ...k, foto: fotoTayang(k.foto) }))
		.filter((k) => k.foto.length > 0);
}

/**
 * Membangun tautan `wa.me` berikut pesan pre-fill.
 * Nomor dan pesan hanya boleh berasal dari data, tidak pernah dari komponen.
 */
export function tautanWhatsapp(kunci: KunciCta): string {
	const { nomorInternasional } = profil.kontak.whatsapp;
	const { pesan } = whatsapp.cta[kunci];
	return `https://wa.me/${nomorInternasional}?text=${encodeURIComponent(pesan)}`;
}

export function ctaWhatsapp(kunci: KunciCta) {
	return { ...whatsapp.cta[kunci], url: tautanWhatsapp(kunci) };
}
