// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// TODO(PRD §17 item 5): ganti ke domain final lembaga setelah dibeli.
	// Wajib absolut — dipakai sitemap, canonical, dan og:url.
	site: 'https://banksampahbaktilembur.pages.dev',

	// PRD §6.6 — self-host, subset Latin, hanya bobot terdaftar, font-display: swap.
	// Anggaran total ≤ 120 KB. Bila terlampaui, Bricolage Grotesque yang dibuang
	// dan judul memakai Plus Jakarta Sans 700 (urutan pengorbanan ditetapkan PRD).
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Playfair Display',
			cssVariable: '--font-display',
			weights: [600, 700],
			styles: ['normal'],
			subsets: ['latin'],
			display: 'swap',
			fallbacks: ['Georgia', 'serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Plus Jakarta Sans',
			cssVariable: '--font-hero',
			weights: [700, 800],
			styles: ['normal', 'italic'],
			subsets: ['latin'],
			display: 'swap',
			fallbacks: ['system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-isi',
			weights: [400, 500, 600, 700],
			styles: ['normal'],
			subsets: ['latin'],
			display: 'swap',
			fallbacks: ['system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'IBM Plex Mono',
			cssVariable: '--font-mono',
			weights: [500],
			styles: ['normal'],
			subsets: ['latin'],
			display: 'swap',
			fallbacks: ['ui-monospace', 'monospace'],
		},
	],

	// PRD §11.4 — AVIF dengan fallback WebP, lebar responsif 640/960/1280/1920.
	image: {
		responsiveStyles: true,
		layout: 'constrained',
	},

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [sitemap()],
});
