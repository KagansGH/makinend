/**
 * Merkezi ürün ağacı.
 *
 * Header mega menüsü, footer site haritası, kategori landing sayfaları,
 * breadcrumb ve ilgili ürünler bu tek kaynaktan beslenir. Aynı bilgi
 * başka bir yerde tekrar tanımlanmamalı.
 *
 * Slug'lar URL'de birebir kullanılır: küçük harf, Türkçe karaktersiz, tireli.
 */

export interface SpecRow {
	label: string;
	value: string;
}

export interface ProcessStep {
	title: string;
	body: string;
}

export interface GalleryItem {
	src: string;
	alt: string;
}

/** Ürün alt kategorisi. Zorunlu alanlar dışındakiler veri geldikçe doldurulur. */
export interface Product {
	title: string;
	slug: string;
	intro: string;
	description?: string[];
	specs?: SpecRow[];
	applications?: string[];
	advantages?: string[];
	process?: ProcessStep[];
	gallery?: GalleryItem[];
	image?: string;
}

/** Ürün ana kategorisi. Header'da tıklanamaz, kendi landing sayfası vardır. */
export interface ProductCategory {
	title: string;
	slug: string;
	intro: string;
	description?: string[];
	image?: string;
	children: Product[];
}

export interface Crumb {
	label: string;
	href: string | null;
}

export const productCategories: ProductCategory[] = [
	{
		title: "Taşıyıcı Sistemler",
		slug: "tasiyici-sistemler",
		intro:
			"Dökme malzeme ve parçaların üretim hattı içinde sürekli taşınmasına yönelik sistemler. Malzeme karakteri, kapasite ve hat yerleşimi birlikte değerlendirilerek tasarlanır.",
		description: [
			"Taşıma sistemi seçimi yalnızca kapasiteyle belirlenmez. Malzemenin tane boyu, nem oranı, aşındırıcılığı, sıcaklığı ve akış davranışı; taşıma mesafesi, yükseklik farkı ve hattın mevcut yerleşimi birlikte değerlendirilir.",
			"Bu nedenle projelere sistem seçimiyle başlıyor, mühendislik hesaplarını ve tasarımı buna göre yapıyoruz.",
		],
		children: [
			{
				title: "Elevatör Sistemleri",
				slug: "elevator-sistemleri",
				intro:
					"Dökme malzemenin düşey ya da dik açılı taşınması için kovalı elevatör sistemleri. Sınırlı alanda yükseklik kazanmanın en verimli yoludur.",
			},
			{
				title: "Helezon Konveyörler",
				slug: "helezon-konveyorler",
				intro:
					"Toz ve granül malzemenin borulu veya oluklu gövde içinde helezon burgu ile taşınması. Kapalı gövde sayesinde tozuma ve malzeme kaybı sınırlanır.",
			},
			{
				title: "Konveyör Sistemleri",
				slug: "konveyor-sistemleri",
				intro:
					"Bantlı, zincirli ve tablalı konveyörler ile dökme malzeme ve parça taşıma hatları. Hat yerleşimine göre yatay, eğimli veya çok kademeli çözülür.",
			},
			{
				title: "Vibrasyonlu Taşıma Sistemleri",
				slug: "vibrasyonlu-tasima-sistemleri",
				intro:
					"Titreşim hareketiyle malzemeyi oluk üzerinde ileten sistemler. Taşımanın yanında besleme ve dozajlama görevini de üstlenebilir.",
			},
		],
	},
	{
		title: "Roll Form ve Mekik Arabası",
		slug: "roll-form-ve-mekik-arabasi",
		intro:
			"Rulo sacdan sürekli profil üretimine yönelik roll form hatları ve hat içi malzeme transferini sağlayan mekik arabaları.",
		description: [
			"Roll form, sacın merdane setlerinden geçerek kademe kademe istenen profile dönüştüğü sürekli bir şekillendirme yöntemidir. Merdane tasarımı, kademe sayısı ve açılım hesabı profilin doğru ve tekrarlanabilir çıkmasını belirler.",
		],
		children: [
			{
				title: "Eksiz Oluk Makineleri",
				slug: "eksiz-oluk-makineleri",
				intro:
					"Yağmur oluğu profilinin tek parça, eksiz olarak üretilmesini sağlayan roll form makineleri. Sahada istenen boyda kesim yapılabilir.",
			},
			{
				title: "Roll Form Hatları",
				slug: "roll-form-hatlari",
				intro:
					"Açıcı, düzeltme, merdane grupları, delme ve kesme istasyonlarından oluşan komple profil üretim hatları. Profil geometrisine özel merdane tasarımı yapılır.",
			},
			{
				title: "Mekik Arabaları",
				slug: "mekik-arabalari",
				intro:
					"Ray üzerinde hareket ederek bobin, kalıp veya mamul transferini sağlayan arabalar. Hat düzenine ve yük ağırlığına göre tasarlanır.",
			},
		],
	},
	{
		title: "Özel Makina İmalatı",
		slug: "ozel-makina-imalati",
		intro:
			"Standart bir makinenin karşılamadığı prosesler için sıfırdan geliştirilen makineler. İhtiyaç analiziyle başlar, sahada çalışan bir sistemle sonuçlanır.",
		description: [
			"Bazen müşteri ihtiyacını bilir ancak çözümün nasıl olması gerektiğini henüz bilmez. Bizim işimiz tam olarak burada başlar: prosesi analiz eder, doğru sistemi belirler, mühendisliğini yapar ve üretilebilir hale getiririz.",
		],
		children: [
			{
				title: "Kartezyen Sistemler",
				slug: "kartezyen-sistemler",
				intro:
					"Lineer eksenler üzerine kurulu X-Y-Z hareket sistemleri. Yükleme, boşaltma, dizme ve prosese özel hareket ihtiyaçları için çözülür.",
			},
			{
				title: "Diğer Özel Makineler",
				slug: "diger-ozel-makineler",
				intro:
					"Prosese özel olarak geliştirilen makine ve istasyonlar. Mevcut hatta entegrasyon ve devreye alma dahil ele alınır.",
			},
		],
	},
	{
		title: "Konstrüksiyonlar",
		slug: "konstruksiyonlar",
		intro:
			"Makine ve tesislerin üzerine kurulduğu çelik konstrüksiyonlar. Statik hesabı yapılmış, üretilebilir ve monte edilebilir çözümler.",
		description: [
			"Konstrüksiyon yalnızca yük taşımaz; bakım erişimi, montaj sırası ve nakliye sınırlarını da belirler. Tasarımı bu üçünü birlikte gözeterek yapıyoruz.",
		],
		children: [
			{
				title: "Bunkerler",
				slug: "bunkerler",
				intro:
					"Malzemenin depolandığı ve hatta kontrollü şekilde beslendiği hunili bunkerler. Malzemenin akış davranışına göre koni açısı ve gövde tasarlanır.",
			},
			{
				title: "Platform ve Şaseler",
				slug: "platform-ve-saseler",
				intro:
					"Çelik platformlar, merdiven ve korkuluklar ile makine şaseleri. Bakım erişimi ve iş güvenliği gereklilikleri tasarıma dahil edilir.",
			},
			{
				title: "Silolar",
				slug: "silolar",
				intro:
					"Dökme malzemenin depolanmasına yönelik silolar. Kapasite, malzeme yoğunluğu ve boşaltma yöntemi birlikte hesaplanır.",
			},
		],
	},
	{
		title: "Kalıplar",
		slug: "kaliplar",
		intro:
			"Sac şekillendirme ve kesme işlemleri için tasarlanan ve imal edilen kalıplar. Parça geometrisi, malzeme ve üretim adedine göre kurgulanır.",
		description: [
			"Kalıp tasarımında parçanın tolerans beklentisi, sac kalitesi ve pres kapasitesi belirleyicidir. Kalıbın ömrü ve bakım kolaylığı da tasarım aşamasında ele alınır.",
		],
		children: [
			{
				title: "Bükme Kalıpları",
				slug: "bukme-kaliplari",
				intro:
					"Sacın istenen açı ve yarıçapta bükülmesini sağlayan kalıplar. Geri esneme dikkate alınarak tasarlanır.",
			},
			{
				title: "Delme Kalıpları",
				slug: "delme-kaliplari",
				intro:
					"Delik ve boşaltma işlemleri için delme kalıpları. Delik konumu ve tekrarlanabilirlik esas alınır.",
			},
			{
				title: "Kesme Kalıpları",
				slug: "kesme-kaliplari",
				intro:
					"Sacın dış formunu veren kesme kalıpları. Kesme boşluğu ve malzeme kullanımı optimize edilir.",
			},
			{
				title: "Progresif Kalıplar",
				slug: "progresif-kaliplar",
				intro:
					"Birden çok işlemin tek presde, kademeli istasyonlarda tamamlandığı kalıplar. Seri üretimde çevrim süresini kısaltır.",
			},
		],
	},
	{
		title: "Eleme Sistemleri",
		slug: "eleme-sistemleri",
		intro:
			"Malzemenin tane boyutuna göre ayrıştırılmasına yönelik eleme sistemleri. Kapasite ve istenen fraksiyonlara göre boyutlandırılır.",
		children: [
			{
				title: "Titreşimli Elekler",
				slug: "titresimli-elekler",
				intro:
					"Titreşim hareketiyle malzemeyi elek yüzeyinde ilerletip tane boyutuna göre ayıran elekler. Kat sayısı ve elek açıklığı istenen fraksiyonlara göre belirlenir.",
			},
		],
	},
];

/** Breadcrumb'da kullanılan, tıklanamaz "Ürünler" adımı. */
export const PRODUCTS_LABEL = "Ürünler";

export function categoryHref(category: Pick<ProductCategory, "slug">): string {
	return `/${category.slug}`;
}

export function productHref(
	category: Pick<ProductCategory, "slug">,
	product: Pick<Product, "slug">,
): string {
	return `/${category.slug}/${product.slug}`;
}

export function getCategory(slug: string): ProductCategory | undefined {
	return productCategories.find((category) => category.slug === slug);
}

export function getProduct(
	categorySlug: string,
	productSlug: string,
): { category: ProductCategory; product: Product } | undefined {
	const category = getCategory(categorySlug);
	const product = category?.children.find((item) => item.slug === productSlug);

	return category && product ? { category, product } : undefined;
}

/** Aynı ana kategorideki diğer alt kategoriler. */
export function relatedProducts(
	category: ProductCategory,
	product: Pick<Product, "slug">,
): Product[] {
	return category.children.filter((item) => item.slug !== product.slug);
}

export function breadcrumbForCategory(category: ProductCategory): Crumb[] {
	return [
		{ label: "Ana Sayfa", href: "/" },
		{ label: PRODUCTS_LABEL, href: null },
		{ label: category.title, href: categoryHref(category) },
	];
}

export function breadcrumbForProduct(
	category: ProductCategory,
	product: Product,
): Crumb[] {
	return [
		...breadcrumbForCategory(category),
		{ label: product.title, href: productHref(category, product) },
	];
}
