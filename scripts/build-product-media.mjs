/**
 * content-source klasöründeki ürün görsellerini web için WebP'ye çevirir ve
 * src/data/product-media.json manifest'ini yazar.
 *
 * Kullanım: node scripts/build-product-media.mjs [content-source yolu]
 */
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SOURCE = path.resolve(process.argv[2] ?? "../../content-source");
const OUT_DIR = "public/images/products";
const MANIFEST = "src/data/product-media.json";

const T = "TAŞIYICI SİSTEMLER";
const R = "ROLL FORM VE MEKİK ARABASI";
const O = "ÖZEL MAKİNA İMALATI";
const K = "KONSTRÜKSYONLAR";
const KL = "KALIPLAR";
const E = "ELEME SİSTEMLERİ";

/** slug → { hero: ortam görseli, render: şeffaf PNG, gallery: gerçek fotoğraflar } */
const map = {
	"elevator-sistemleri": {
		hero: `${T}/ORTAM GÖRSELLERİ/elevatör.jpg`,
		render: `${T}/Elevatör Gölgeli2.png`,
		gallery: [`${T}/ELEVATOR GERÇEK.jpg`, `${T}/ELEVATOR GERÇEK3.jpg`, `${T}/ELEVATOR GERÇEK5.jpg`, `${T}/ELEVATOR GERÇEK7.jpg`],
	},
	"helezon-konveyorler": {
		hero: `${T}/ORTAM GÖRSELLERİ/helezon1.jpg`,
		render: `${T}/Helezon4 Gölgeli.png`,
		gallery: [`${T}/HELEZON GERÇEK.jpg`, `${T}/HELEZON GERÇEK2.jpg`, `${T}/HELEZON GERÇEK3.jpg`, `${T}/HELEZON GERÇEK4.jpg`],
	},
	"konveyor-sistemleri": {
		hero: `${T}/ORTAM GÖRSELLERİ/konveyör_makina2.jpg`,
		render: `${T}/KONVEYOR (6) GÖLGELİ.png`,
		gallery: [`${T}/KONVEYOR GERÇEK.jpg`, `${T}/KONVEYOR GERÇEK3.jpg`, `${T}/KONVEYOR GERÇEK7.jpg`, `${T}/KONVEYOR GERÇEK14.jpg`],
	},
	"vibrasyonlu-tasima-sistemleri": {
		hero: `${T}/ORTAM GÖRSELLERİ/vibrasyon makina1 copy.jpg`,
		render: `${T}/Titreşimli Taşıyıcı4 gölgeli.png`,
		gallery: [
			`${T}/TİTREŞİMLİ TAŞIYICI GERÇEK1.jpg`,
			`${T}/TİTREŞİMLİ TAŞIYICI GERÇEK.webp`,
			`${T}/TİTREŞİMLİ TAŞIYICI GERÇEK2.webp`,
			`${T}/TİTREŞİMLİ TAŞIYICI GERÇEK3.webp`,
		],
	},
	"eksiz-oluk-makineleri": {
		hero: `${R}/ORTAM GÖRSELLERİ/eksiz oluk_ copy.jpg`,
		render: `${R}/Eksiz Oluk - Mobil Rollform (6) Gölgeli.png`,
		gallery: [`${R}/ORTAM GÖRSELLERİ/eksiz oluk_3 copy.jpg`, `${R}/Eksiz Oluk - Mobil Rollform (1).jpg`, `${R}/Eksiz Oluk - Mobil Rollform (2).jpg`],
	},
	"roll-form-hatlari": {
		hero: `${R}/ORTAM GÖRSELLERİ/MAKİNE1 copy.jpg`,
		render: `${R}/Rollform Hattı (5) gölgeli TAM.png`,
		gallery: [`${R}/ROLLFORM GERÇEK.jpg`, `${R}/ROLLFORM GERÇEK2.jpg`, `${R}/ROLLFORM GERÇEK3.jpg`, `${R}/ROLLFORM GERÇEK4.jpg`],
	},
	"mekik-arabalari": {
		hero: `${R}/ORTAM GÖRSELLERİ/MAKİNE3 copy.jpg`,
	},
	"kartezyen-sistemler": {
		hero: `${O}/ORTAM GÖRSELLERİ/kartezyen copy.jpg`,
		render: `${O}/Kartezyen Proje5 Gölgeli.png`,
		gallery: [`${O}/KARTEZYEN PROJE GERÇEK.jpg`, `${O}/KARTEZYEN PROJE GERÇEK2.jpg`, `${O}/KARTEZYEN PROJE GERÇEK3.jpg`, `${O}/KARTEZYEN PROJE GERÇEK4.jpg`],
	},
	"diger-ozel-makineler": {
		hero: `${O}/ORTAM GÖRSELLERİ/kartezyen1 copy.jpg`,
		gallery: [`${O}/KARTEZYEN PROJE GERÇEK5.jpg`, `${O}/KARTEZYEN PROJE GERÇEK6.jpg`],
	},
	bunkerler: {
		hero: `${K}/ORTAM GÖRSELLERİ/bunker1 copy.jpg`,
		render: `${K}/Bunker4 Gölgeli.png`,
		gallery: [`${K}/BUNKER GERÇEK.webp`, `${K}/BUNKER GERÇEK2.jpg`, `${K}/BUNKER GERÇEK3.jpg`, `${K}/BUNKER GERÇEK4.jpeg`],
	},
	"platform-ve-saseler": {
		hero: `${K}/ORTAM GÖRSELLERİ/platform ve şase copy.jpg`,
		render: `${K}/Platform ve Şase 3 Gölgeli.png`,
		gallery: [`${K}/PLATFORM VE ŞASE GERÇEK.jpg`, `${K}/PLATFORM VE ŞASE GERÇEK2.jpg`, `${K}/PLATFORM VE ŞASE GERÇEK3.jpg`, `${K}/PLATFORM VE ŞASE GERÇEK5.png`],
	},
	silolar: {
		hero: `${K}/ORTAM GÖRSELLERİ/SİLO copy.jpg`,
		render: `${K}/silo 4 Gölgeli.png`,
		gallery: [`${K}/SİLO GERÇEK.jpg`, `${K}/SİLO GERÇEK2.jpg`, `${K}/SİLO GERÇEK3.jpg`, `${K}/SİLO GERÇEK9.jpg`],
	},
	"bukme-kaliplari": { hero: `${KL}/ORTAM GÖRSELLERİ/kalıp_2 copy.jpg` },
	"delme-kaliplari": { hero: `${KL}/ORTAM GÖRSELLERİ/kalıp_2 copy.jpg` },
	"kesme-kaliplari": { hero: `${KL}/ORTAM GÖRSELLERİ/kalıp_2 copy.jpg` },
	"progresif-kaliplar": {
		hero: `${KL}/ORTAM GÖRSELLERİ/kalıp_2 copy.jpg`,
		render: `${KL}/Progressive Kalıp (3) Gölgeli.png`,
		gallery: [
			`${KL}/Progressive Kalıp Gerçek (1).jpeg`,
			`${KL}/Progressive Kalıp Gerçek (2).jpg`,
			`${KL}/Progressive Kalıp Gerçek (3).jpg`,
			`${KL}/Progressive Kalıp Gerçek (4).jpg`,
		],
	},
	"titresimli-elekler": {
		hero: `${E}/ORTAM GÖRSELLERİ/titreşimli elek copy.jpg`,
		render: `${E}/Titreşimli Elek (3) Gölgeli.png`,
		gallery: [`${E}/Titreşimli Elek Gerçek.jpg`, `${E}/Titreşimli Elek Gerçek2.jpg`, `${E}/Titreşimli Elek Gerçek6.jpg`, `${E}/Titreşimli Elek Gerçek3.webp`],
	},
	"doner-elekler": { hero: `${E}/ORTAM GÖRSELLERİ/titreşimli elek1 copy.jpg` },
	"yildiz-elekler": { hero: `${E}/ORTAM GÖRSELLERİ/titreşimli elek2 copy.jpg` },
};

async function convert(src, out, width, quality, alpha = false) {
	const file = path.join(SOURCE, src);
	if (!existsSync(file)) {
		console.warn(`  eksik: ${src}`);
		return null;
	}
	const image = sharp(file).rotate().resize({ width, withoutEnlargement: true });
	await (alpha ? image.trim() : image).webp({ quality, alphaQuality: 90 }).toFile(path.join(OUT_DIR, out));
	return `/images/products/${out}`;
}

await mkdir(OUT_DIR, { recursive: true });
const manifest = {};

for (const [slug, media] of Object.entries(map)) {
	console.log(slug);
	const entry = { gallery: [] };
	if (media.hero) entry.hero = await convert(media.hero, `${slug}-hero.webp`, 1800, 70);
	if (media.render) entry.render = await convert(media.render, `${slug}-render.webp`, 1100, 80, true);
	for (const [i, src] of (media.gallery ?? []).entries()) {
		const url = await convert(src, `${slug}-${i + 1}.webp`, 1400, 72);
		if (url) entry.gallery.push(url);
	}
	manifest[slug] = entry;
}

await writeFile(MANIFEST, `${JSON.stringify(manifest, null, "\t")}\n`);
console.log(`manifest → ${MANIFEST}`);
