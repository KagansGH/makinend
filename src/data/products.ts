/**
 * Merkezi ürün ağacı.
 *
 * Header mega menüsü, footer site haritası, kategori landing sayfaları,
 * breadcrumb ve ilgili ürünler bu tek kaynaktan beslenir. Aynı bilgi
 * başka bir yerde tekrar tanımlanmamalı.
 *
 * Slug'lar URL'de birebir kullanılır: küçük harf, Türkçe karaktersiz, tireli.
 * Görseller slug'a göre `product-media.json`'dan gelir
 * (`scripts/build-product-media.mjs`).
 */

import media from "./product-media.json";

export interface SpecRow {
	label: string;
	value: string;
}

export interface Feature {
	title: string;
	body: string;
}

/** Ürün alt kategorisi. Zorunlu alanlar dışındakiler veri geldikçe doldurulur. */
export interface Product {
	title: string;
	slug: string;
	intro: string;
	headline?: string;
	description?: string[];
	purpose?: string;
	features?: Feature[];
	applications?: string[];
	/** Tip / kullanım alanı eşleşmeleri (ör. konveyör tipleri). */
	types?: SpecRow[];
	specs?: SpecRow[];
	edge?: string;
}

/** Ürün ana kategorisi. Header'da tıklanamaz, kendi landing sayfası vardır. */
export interface ProductCategory {
	title: string;
	slug: string;
	intro: string;
	description?: string[];
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
			"Bu nedenle projelere sistem seçimiyle başlıyor, mühendislik hesaplarını ve tasarımı buna göre yapıyoruz. Tasarımdan imalata, kurulumdan devreye almaya kadar tüm süreci tek elden yönetiyoruz.",
		],
		children: [
			{
				title: "Elevatör Sistemleri",
				slug: "elevator-sistemleri",
				intro:
					"Dökme malzemenin düşey ya da dik açılı taşınması için kovalı elevatör sistemleri. Sınırlı alanda yükseklik kazanmanın en verimli yoludur.",
				headline: "Kovalı Elevatörler: Sınırlı Alanda Yüksek Kapasiteli Düşey Taşıma",
				description: [
					"Kovalı elevatörler; tahıl, un, çimento, granül ve benzeri dökme malzemeleri tabandan üst kota, yatay alan ihtiyacı olmadan taşır. Bant veya zincir üzerine dizilmiş kovalar malzemeyi alt ayakta doldurur, üst kafada merkezkaç ya da yer çekimiyle boşaltır.",
					"Kova tipi, kova aralığı, bant hızı ve boşaltma geometrisi malzemenin akış davranışına göre hesaplanır. Böylece geri dökülme, tozuma ve aşınma en aza indirilir.",
				],
				purpose:
					"Dökme malzemenin bir kottan diğerine, kapalı gövde içinde, sürekli ve kontrollü bir debiyle düşey olarak aktarılmasını sağlar.",
				features: [
					{ title: "Bantlı veya zincirli tahrik", body: "Malzeme sıcaklığı, aşındırıcılığı ve kapasiteye göre bant ya da zincir seçimi." },
					{ title: "Toz sızdırmaz gövde", body: "Contalı bağlantılar ve kapalı kasa ile tozsuz çalışma ortamı." },
					{ title: "Geri dönüş engelleyici", body: "Enerji kesintisinde yüklü kovaların geri dönmesini önleyen backstop düzeneği." },
					{ title: "Güvenlik sensörleri", body: "Hız, kayma ve bant kaçıklığı izleme ile erken arıza tespiti." },
					{ title: "Bakım dostu tasarım", body: "Ayak ve kafa bölümünde geniş müdahale kapakları, kolay gerdirme sistemi." },
				],
				applications: [
					"Un, yem ve tahıl tesisleri",
					"Çimento ve yapı kimyasalları",
					"Gübre ve kimya tesisleri",
					"Maden ve agrega hatları",
				],
				edge: "Kova dizilimi ve boşaltma geometrisini malzemeye özel hesaplıyoruz; daha düşük motor gücüyle aynı kapasiteye ulaşırken geri dökülmeyi ve bakım duruşlarını azaltıyoruz.",
			},
			{
				title: "Helezon Konveyörler",
				slug: "helezon-konveyorler",
				intro:
					"Toz ve granül malzemenin borulu veya oluklu gövde içinde helezon burgu ile taşınması. Kapalı gövde sayesinde tozuma ve malzeme kaybı sınırlanır.",
				headline: "Endüstriyel Helezon Konveyörler: Güçlü ve Verimli Toz/Granül Aktarımı",
				description: [
					"Dökme malzemelerin, tozların ve granül yapıdaki ham maddelerin transferi için geliştirilen helezon sistemlerimiz, sızdırmazlık ve yüksek dayanıklılık odağıyla tasarlanır.",
					"Kapalı sistem yapısı sayesinde malzemenizi çevresel faktörlerden korurken tesis içi temizliği de en üst düzeyde tutar.",
				],
				purpose:
					"Yatay veya açılı konumlarda, dairesel bir mil üzerine sarılı kanatlar yardımıyla malzemeyi kayıpsız ve kontrollü bir debiyle bir noktadan diğerine taşır.",
				features: [
					{ title: "Yüksek sızdırmazlık", body: "Tozsuz bir çalışma ortamı sağlayan tam kapalı gövde tasarımı." },
					{ title: "Dayanıklı kanat yapısı", body: "Aşınmaya karşı dirençli çelik veya paslanmaz çelik helezon yaprakları." },
					{ title: "Hassas dozajlama", body: "Değişken hız sürücüleri ile taşınan ürün miktarını tam kontrol altında tutma imkânı." },
					{ title: "Kompakt tasarım", body: "Dar alanlarda dahi yüksek verimlilikle çalışabilen, yer tasarrufu sağlayan yapı." },
					{ title: "Kolay temizlik ve bakım", body: "Hızlı müdahale kapakları sayesinde düşük işletme maliyeti." },
				],
				applications: [
					"Çimento ve yapı kimyasalları",
					"Gıda (un, şeker, baharat) işleme tesisleri",
					"Maden ve agrega tesisleri",
					"Plastik granül transfer sistemleri",
				],
				edge: "Sektöre özel optimize edilen hatve tasarımlarımız sayesinde enerji tüketimini en aza indirirken en zorlu akışkanlığa sahip malzemelerde bile tıkanmasız performans sunuyoruz.",
			},
			{
				title: "Konveyör Sistemleri",
				slug: "konveyor-sistemleri",
				intro:
					"Bantlı, zincirli ve tablalı konveyörler ile dökme malzeme ve parça taşıma hatları. Hat yerleşimine göre yatay, eğimli veya çok kademeli çözülür.",
				headline: "Özel Tasarım Konveyör Sistemleri: Verimli, Güvenli ve Uzun Ömürlü Taşıma",
				description: [
					"Üretim hattınızın akış hızı, taşıma sisteminizin kalitesiyle doğru orantılıdır. Konveyör sistemleri malzemelerin, ürünlerin veya parçaların güvenli ve hızlı şekilde taşınmasını sağlar; iş gücünü azaltırken üretkenliği artırır.",
					"Sektörün ihtiyaçlarına göre proje bazlı tasarladığımız konveyör hatlarıyla standart çözümlerin ötesinde bir taşıma gücü sunuyoruz. Tekil bir birim ya da entegre bir hat olsun, ürünlerinizi minimum enerjiyle taşır.",
				],
				purpose:
					"Parçaların, paketlerin veya ham maddelerin manuel müdahaleye gerek kalmadan istasyonlar arasında hızlı, güvenli ve düzenli şekilde transfer edilmesini sağlar.",
				features: [
					{ title: "Modüler tasarım", body: "Mevcut hatlara kolayca entegre edilebilen, ihtiyaca göre genişletilebilen yapı." },
					{ title: "Yüksek taşıma kapasitesi", body: "Farklı ağırlık ve boyutlar için optimize edilmiş dayanıklı çelik şase." },
					{ title: "Hız kontrolü", body: "Operasyon hassasiyetine göre ayarlanabilen invertör destekli motor sistemleri." },
					{ title: "Düşük bakım maliyeti", body: "Uzun ömürlü rulo ve bant bileşenleri ile minimum duruş süresi." },
					{ title: "İş güvenliği", body: "Ergonomik tasarım ve acil durdurma sistemleri ile tam kullanıcı koruması." },
					{ title: "Otomasyona uygun", body: "Sensörler ve PLC kontrol sistemleriyle tam entegre çalışma." },
				],
				types: [
					{ label: "PVC bantlı konveyör", value: "Hafif ve orta yükler, paketleme hatları" },
					{ label: "Kauçuk bantlı konveyör", value: "Ağır sanayi, maden, agrega taşıma" },
					{ label: "Modüler bantlı konveyör", value: "Gıda, ilaç, hijyen gerektiren alanlar" },
					{ label: "Rulolu konveyör", value: "Palet, kasa, depolama sistemleri" },
					{ label: "Zincirli konveyör", value: "Ağır yükler, otomotiv, palet taşıma" },
					{ label: "Teleskopik konveyör", value: "Tır yükleme/boşaltma, lojistik merkezleri" },
				],
				specs: [
					{ label: "Bant genişliği", value: "300 – 2000 mm (isteğe bağlı)" },
					{ label: "Taşıma kapasitesi", value: "50 kg – 5000+ kg (proje bazlı)" },
					{ label: "Bant hızı", value: "5 – 60 m/dk (değişken hızlı motor)" },
					{ label: "Eğim açısı", value: "0° – 45° standart, özel tasarımda 90°'ye kadar" },
					{ label: "Gövde malzemesi", value: "Sıcak daldırma galvaniz / boyalı çelik / paslanmaz (304/316)" },
					{ label: "Bant tipi", value: "PVC, kauçuk, PU, modüler, teflon, metal" },
					{ label: "Motor gücü", value: "0,37 kW – 30+ kW" },
					{ label: "Kontrol sistemi", value: "Manuel, otomatik, PLC kontrollü, sensör entegrasyonlu" },
					{ label: "Güç kaynağı", value: "380 / 400 / 415 V – 50/60 Hz" },
				],
				applications: [
					"Gıda işleme ve paketleme hatları",
					"Otomotiv montaj ve parça taşıma",
					"Madencilik ve agrega",
					"Lojistik ve depoculuk",
					"İnşaat ve beton santralleri",
					"Geri dönüşüm ve atık ayırma",
					"Ambalaj ve basım",
					"İlaç ve kimya",
				],
				edge: "İşletmenize özel projelendirdiğimiz konveyör çözümleriyle yalnızca taşıma yapmıyor; çevrim sürelerinizi düşürerek üretim kapasitenizi somut biçimde artırıyoruz.",
			},
			{
				title: "Vibrasyonlu Taşıma Sistemleri",
				slug: "vibrasyonlu-tasima-sistemleri",
				intro:
					"Titreşim hareketiyle malzemeyi oluk üzerinde ileten sistemler. Taşımanın yanında besleme ve dozajlama görevini de üstlenebilir.",
				headline: "Titreşimli Taşıyıcılar: Hassas ve Kesintisiz Ürün Transferi",
				description: [
					"Üretim hatlarınızda dökme ürünlerin güvenli, hijyenik ve kontrollü şekilde transferi için tasarlanan titreşimli taşıyıcılarımız, yüksek performanslı sönümleme teknolojisiyle donatılır.",
					"Mekanik titreşim prensibiyle çalışan sistemlerimiz, hassas ürünlerin yapısını bozmadan yüksek hızda nakledilmesini sağlar.",
				],
				purpose:
					"Taneli, toz veya parça halindeki ürünlerin depolama birimlerinden işleme ya da paketleme ünitelerine, minimum sürtünme ve maksimum akışkanlıkla taşınmasına olanak tanır.",
				features: [
					{ title: "Ayarlanabilir frekans", body: "Ürün karakterine göre optimize edilebilen titreşim hızı ve genliği." },
					{ title: "Hijyenik tasarım", body: "Gıda ve ilaç normlarına uygun paslanmaz çelik gövde yapısı." },
					{ title: "Düşük bakım gereksinimi", body: "Hareketli parça sayısını en aza indiren kompakt, dayanıklı mekanik tasarım." },
					{ title: "Sessiz çalışma", body: "Gürültüyü azaltan özel gövde ve sönümleme ayakları." },
					{ title: "Modüler yapı", body: "Mevcut tesis yerleşimine ve hat hızına kolayca entegre edilebilir." },
				],
				applications: [
					"Gıda işleme tesisleri",
					"Kimya sektörü",
					"Otomotiv yedek parça montaj hatları",
					"Plastik enjeksiyon",
					"İlaç endüstrisi",
				],
				edge: "Düşük enerji tüketimi ve yüksek taşıma hassasiyeti sayesinde operasyonel maliyetlerinizi düşürürken hattınızın genel ekipman verimliliğini (OEE) artırıyoruz.",
			},
		],
	},
	{
		title: "Roll Form ve Mekik Arabası",
		slug: "roll-form-ve-mekik-arabasi",
		intro:
			"Rulo sacdan sürekli profil üretimine yönelik roll form hatları, sahada eksiz oluk üreten mobil makineler ve yüksek yoğunluklu depolama için mekik arabaları.",
		description: [
			"Roll form, sacın merdane setlerinden geçerek kademe kademe istenen profile dönüştüğü sürekli bir şekillendirme yöntemidir. Merdane tasarımı, kademe sayısı ve açılım hesabı profilin doğru ve tekrarlanabilir çıkmasını belirler.",
			"Her hattı ürününüze özel kalıp ve silindir dizilimiyle tasarlıyor; kurulum, eğitim, yedek parça ve devreye alma dahil satış sonrasında da yanınızda oluyoruz.",
		],
		children: [
			{
				title: "Eksiz Oluk Makineleri",
				slug: "eksiz-oluk-makineleri",
				intro:
					"Yağmur oluğu profilinin tek parça, eksiz olarak üretilmesini sağlayan roll form makineleri. Sahada istenen boyda kesim yapılabilir.",
				headline: "Eksiz Oluk Makinesi: Yüksek Hassasiyetli Rulo Form Sistemleri",
				description: [
					"Eksiz oluk makinelerimiz, metal ruloları yerinde işleyerek sızıntı riskini ortadan kaldıran, kesintisiz ve estetik yağmur indirme sistemleri üretir.",
					"İleri rulo form teknolojisi sayesinde sahada ihtiyaç duyulan uzunlukta oluklar yüksek hassasiyetle ve dakikalar içinde imal edilir.",
				],
				purpose:
					"İstenilen uzunlukta, ek yeri olmayan metal profillerin seri ve fire vermeden şekillendirilmesine olanak tanır.",
				features: [
					{ title: "Hassas form teknolojisi", body: "Yüksek toleranslı ve pürüzsüz yüzey kalitesi." },
					{ title: "Yerinde imalat", body: "Mobilite avantajı sayesinde sahada kesintisiz ve hızlı üretim." },
					{ title: "Ayarlanabilir kesim", body: "İhtiyaca göre tam uzunlukta, çapak bırakmayan otomatik kesim." },
					{ title: "Endüstriyel gövde", body: "Uzun ömürlü kullanım için ağır hizmet tipi şasi." },
					{ title: "Pratik operasyon", body: "Hızlı kalıp değişimi ve kolay operatör arayüzü." },
				],
				applications: [
					"Konut çatı sistemleri",
					"Endüstriyel tesisler",
					"Ticari binalar",
					"Yağmur suyu tahliye projeleri",
				],
				edge: "Sızıntısız ve estetik çözümler sunarak montaj süresini kısaltır; firesiz üretim özelliğiyle malzeme maliyetlerinizde doğrudan tasarruf sağlar.",
			},
			{
				title: "Roll Form Hatları",
				slug: "roll-form-hatlari",
				intro:
					"Açıcı, düzeltme, merdane grupları, delme ve kesme istasyonlarından oluşan komple profil üretim hatları. Profil geometrisine özel merdane tasarımı yapılır.",
				headline: "Size Özel Roll Form Hatları: Yüksek Hassasiyet, Uzun Ömür ve Satış Sonrası Destek",
				description: [
					"Üretim hattınızın kalbi olacak roll form makineleri yalnızca sacı profile dönüştürmez; verimliliğinizi, kârlılığınızı ve pazar avantajınızı şekillendirir.",
					"Roll form makinesi, sac bobini sırayla dizilmiş silindirler arasından geçirerek kesintisiz ve aynı kesitte profil haline getirir. Soğuk şekillendirme prensibiyle çalışan bu makineler yüksek hız, tekrarlanabilir kalite ve minimum fire sağlar.",
				],
				purpose: "Sacı, ihtiyacınız olan profile sürekli, hızlı ve tekrarlanabilir şekilde dönüştürür.",
				features: [
					{ title: "Yüksek hassasiyet", body: "Milimetrik sapmaları en aza indiren tasarım, her parçada aynı kalite." },
					{ title: "Maksimum verimlilik", body: "Sürekli üretim, duruş sürelerini azaltır ve birim üretimi artırır." },
					{ title: "Düşük fire", body: "Soğuk şekillendirme malzeme kaybını neredeyse sıfırlar." },
					{ title: "Esnek üretim", body: "Aynı hat ile farklı profil tiplerine hızlı geçiş (opsiyonel)." },
					{ title: "Düşük enerji tüketimi", body: "Geleneksel pres sistemlerine kıyasla daha ekonomik." },
					{ title: "Uzun ömürlü gövde", body: "Ağır hizmet tipi rulmanlar, sertleştirilmiş silindirler, endüstriyel redüktör ile 7/24 çalışma." },
				],
				specs: [
					{ label: "Sac kalınlığı", value: "0,3 – 4,0 mm (isteğe bağlı)" },
					{ label: "İşleme genişliği", value: "100 – 800 mm" },
					{ label: "İlerleme hızı", value: "10 – 25 m/dk (proje bazlı artırılabilir)" },
					{ label: "Kontrol", value: "Servo motor veya mekanik redüktör + opsiyonel otomasyon" },
					{ label: "Malzeme", value: "Galvaniz, alüminyum, boyalı sac, paslanmaz çelik" },
					{ label: "Güç kaynağı", value: "380 / 400 / 415 V – 50/60 Hz" },
				],
				applications: [
					"İnşaat ve yapı: çatı kaplama, C ve U taşıyıcı profiller, asma tavan",
					"Otomotiv yan sanayi: kızak profilleri, tampon takviyeleri, şasi bileşenleri",
					"Enerji: güneş paneli taşıyıcıları, kablo kanalları, direk profilleri",
					"Beyaz eşya ve raf sistemleri: raf ayakları, panel kapak profilleri",
				],
				edge: "Hazır kalıp yok: ürününüze özel kalıp ve silindir dizilimi tasarlıyor, yurt içi ve yurt dışı farklı standartlara, voltajlara ve lojistik koşullara uygun hatlar teslim ediyoruz.",
			},
			{
				title: "Mekik Arabaları",
				slug: "mekik-arabalari",
				intro:
					"Derin raf koridorlarında paletleri otomatik taşıyan mekik arabası (shuttle car) depolama sistemleri. Forklift trafiğini azaltır, depo hacmini büyütür.",
				headline: "Mekik Arabası (Shuttle Car) Depolama Sistemleri",
				description: [
					"Mekik arabası, depo yönetiminde maksimum hacim ve operasyonel hız isteyen işletmeler için tasarlanmış akıllı bir istifleme çözümüdür.",
					"Forklift trafiğini en aza indiren bu sistem, derinlemesine raf koridorlarında paletlerin otomatik, hızlı ve güvenli şekilde taşınmasını sağlar.",
				],
				purpose:
					"Depo alanının her santimetresini verimli kullanarak depolama kapasitesini %80'e varan oranlarda artırır; giriş-çıkış süreçlerini standart raf sistemlerine göre çok daha hızlı hale getirir.",
				features: [
					{ title: "Maksimum alan verimliliği", body: "Koridor ihtiyacını azaltarak yüksek yoğunluklu depolama." },
					{ title: "Hızlı ve hassas istifleme", body: "Yüksek hızda palet transferi ile kısa operasyon süresi." },
					{ title: "Esnek çalışma modu", body: "Hem LIFO hem FIFO prensiplerine tam uyum." },
					{ title: "Gelişmiş güvenlik", body: "Raf çarpmalarını önleyen akıllı engel algılama sensörleri." },
					{ title: "Kolay kontrol", body: "Kullanıcı dostu uzaktan kumanda paneli." },
				],
				applications: [
					"Soğuk hava depoları ve gıda lojistiği",
					"Hızlı tüketim ürünleri dağıtım merkezleri",
					"Otomotiv ve beyaz eşya depoları",
					"Yüksek hacimli paletli ürün stoklayan tesisler",
				],
				edge: "Personel ve ekipman maliyetlerini düşürürken geleneksel yöntemlere kıyasla çok daha düşük hata payı ve yüksek iş güvenliği sunar.",
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
			"Tasarım ve üretimin ardından yerinde kurulum, kalibrasyon ve ekip eğitimi yapıyor; satış sonrası teknik destekle makinenin her zaman en yüksek verimde kalmasını sağlıyoruz.",
		],
		children: [
			{
				title: "Kartezyen Sistemler",
				slug: "kartezyen-sistemler",
				intro:
					"Lineer eksenler üzerine kurulu X-Y-Z hareket sistemleri. Yükleme, boşaltma, dizme ve prosese özel hareket ihtiyaçları için çözülür.",
				headline: "Kartezyen Sistemler: Prosese Özel, Tekrarlanabilir Hareket",
				description: [
					"Kartezyen sistemler, lineer eksenler üzerinde doğrusal hareket eden bir taşıyıcı ile parçayı tanımlı noktalar arasında hassasiyetle konumlandırır. Yükleme-boşaltma, dizme, paletleme ve besleme gibi tekrarlayan görevlerde operatör yükünü kaldırır.",
					"Eksen boyları, yük kapasitesi ve tutucu (gripper) tasarımı prosese göre belirlenir; mevcut makine ve hatlarla entegrasyon tasarımın bir parçası olarak ele alınır.",
				],
				purpose:
					"Parçanın X-Y-Z eksenlerinde hızlı, güvenli ve tekrarlanabilir şekilde taşınmasını ve konumlandırılmasını sağlar.",
				features: [
					{ title: "Rijit gövde", body: "Uzun eksenlerde sehimi ve titreşimi sınırlayan, analizi yapılmış çelik/alüminyum konstrüksiyon." },
					{ title: "Hassas konumlama", body: "Servo tahrik, lineer kızak ve kremayer/vidalı mil ile yüksek tekrarlanabilirlik." },
					{ title: "Prosese özel tutucu", body: "Vakumlu, mekanik veya manyetik tutucular parça geometrisine göre tasarlanır." },
					{ title: "Entegre kontrol", body: "PLC ve operatör paneliyle hat sinyallerine bağlı otomatik çalışma." },
					{ title: "Güvenlik", body: "Koruma çitleri, ışık perdeleri ve acil durdurma devreleri." },
				],
				applications: [
					"Pres ve tezgâh yükleme-boşaltma",
					"Paletleme ve dizme hücreleri",
					"Montaj hatlarında parça besleme",
					"Depolama ve sıralama sistemleri",
				],
				edge: "Hareket sistemini, tutucuyu ve konstrüksiyonu aynı ekip tasarlıyor; FEA ile doğrulanmış gövde ve tek elden entegrasyonla ilk devreye almada hedef çevrim süresine ulaşıyoruz.",
			},
			{
				title: "Diğer Özel Makineler",
				slug: "diger-ozel-makineler",
				intro:
					"Prosese özel olarak geliştirilen makine ve istasyonlar. Mevcut hatta entegrasyon ve devreye alma dahil ele alınır.",
				headline: "Fikirden Gerçeğe: Müşteriye Özel Makine Tasarım ve İmalat Çözümleri",
				description: [
					"Her fabrikanın, her atölyenin ve her projenin kendine has dinamikleri, fiziksel kısıtları ve hedefleri vardır. Standart seri üretim makinelerin çözüm sunamadığı noktalarda, tamamen iş akışınıza özel yapılandırılmış makineler tasarlıyor ve imal ediyoruz.",
					"Süreç sizi dinleyerek başlar. Talepleri birer teknik veri değil, çözülmesi gereken mühendislik problemleri olarak ele alıyor; makinenin her detayını imalattan önce dijital ortamda modelliyor, simülasyon ve analizlerle doğruluyoruz.",
					"Onaylanan tasarımı endüstriyel standartlara tam uyumla imalata alıyoruz: talaşlı imalattan kaynaklı montaja, hidrolik ve pnömatik sistemlerin entegrasyonuna kadar her adımda yüksek hassasiyetle çalışıyoruz.",
				],
				purpose:
					"Üretimdeki darboğazları ortadan kaldırır, iş gücü maliyetlerini optimize eder ve standart makinelerin sunamadığı esnekliği sağlar.",
				features: [
					{ title: "Mühendislik ve tasarım", body: "İleri CAD araçlarıyla modelleme, simülasyon ve teknik analiz." },
					{ title: "Kaliteli imalat", body: "Talaşlı imalat, kaynaklı montaj, hidrolik ve pnömatik entegrasyon." },
					{ title: "Kullanıcı dostu arayüz", body: "Operatörün kolayca yönetebileceği kontrol ve dayanıklı mekanik aksam." },
					{ title: "Kurulum ve eğitim", body: "Yerinde kurulum, kalibrasyon ve ekibinize kapsamlı kullanım eğitimi." },
					{ title: "Satış sonrası destek", body: "Sürekli iletişim ve teknik destekle uzun yıllar yüksek verim." },
				],
				applications: [
					"Prosese özel üretim istasyonları",
					"Mevcut hatlara entegre otomasyon",
					"Test, kontrol ve montaj tezgâhları",
					"Retrofit ve modernizasyon projeleri",
				],
				edge: "Siz yalnızca ihtiyacınızı belirleyin; o ihtiyacı en küçük vidasından en karmaşık yazılımına kadar tasarlıyor, üretiyor ve iş akışınıza entegre ediyoruz.",
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
			"Bunker, silo, platform ve şaseleri helezon, konveyör ve elevatör sistemleriyle birlikte tasarladığımız için tesis içinde kusursuz bağlantı uyumu sağlıyoruz.",
		],
		children: [
			{
				title: "Bunkerler",
				slug: "bunkerler",
				intro:
					"Malzemenin depolandığı ve hatta kontrollü şekilde beslendiği hunili bunkerler. Malzemenin akış davranışına göre koni açısı ve gövde tasarlanır.",
				headline: "Endüstriyel Bunker ve Stoklama Çözümleri: Güvenli ve Kesintisiz Akış",
				description: [
					"Üretim süreçlerinde ham maddenin depolanması ve hatlara düzenli aktarılması sistem verimliliğinin temel taşıdır.",
					"İleri mühendislik standartlarıyla tasarladığımız bunker sistemleri, malzemeyi dış etkenlerden korurken tıkanma ve köprülenme gibi akış sorunlarını ortadan kaldırarak operasyonun sürekliliğini sağlar.",
				],
				purpose:
					"Kum, tahıl, maden, kimyasal gibi dökme malzemelerin güvenle depolanmasını ve yer çekimi ya da mekanik yardımcılarla hatta kontrollü boşaltılmasını yönetir.",
				features: [
					{ title: "Optimize edilmiş geometri", body: "Malzemenin akışkanlığına göre tasarlanan, köprülenme ve yapışma yapmayan iç yüzey." },
					{ title: "Yüksek mukavemetli gövde", body: "Aşındırıcı ve ağır yüklü malzemelere dayanıklı, güçlendirilmiş çelik konstrüksiyon." },
					{ title: "Hassas boşaltma kontrolü", body: "Manuel, pnömatik veya elektrik tahrikli klape ve kapak sistemleri." },
					{ title: "Modüler kapasite", body: "Litre bazlı küçük hacimlerden tonajlı stoklama ünitelerine kadar esnek üretim." },
					{ title: "Kolay entegrasyon", body: "Helezon, konveyör ve elevatör sistemleriyle kusursuz bağlantı." },
				],
				applications: [
					"Madencilik ve agrega tesisleri",
					"Gıda, un ve yem fabrikaları",
					"Plastik ve kimyasal ham madde stoklama",
					"Geri dönüşüm ve atık yönetimi tesisleri",
				],
				edge: "Yalnızca bir depolama haznesi değil, akış dinamiği hesaplanmış bir mühendislik ürünü sunuyoruz; özel iç kaplama seçenekleriyle sürtünmeyi azaltarak enerji verimliliğinizi artırıyoruz.",
			},
			{
				title: "Platform ve Şaseler",
				slug: "platform-ve-saseler",
				intro:
					"Çelik platformlar, merdiven ve korkuluklar ile makine şaseleri. Bakım erişimi ve iş güvenliği gereklilikleri tasarıma dahil edilir.",
				headline: "Makine Şaseleri ve Endüstriyel Platformlar: Üretimin Sağlam Temeli",
				description: [
					"Bir makinenin ömrünü ve hassasiyetini belirleyen en kritik unsur, üzerine inşa edildiği gövdedir. Şaselerimiz tüm bileşenleri dengede tutarak yüksek hızlarda bile titreşimsiz ve stabil çalışma sunar.",
					"Tesisteki operasyonel verimlilik ve personel güvenliği doğru kurgulanmış bir platformla başlar. Platform sistemlerimiz makinelere tam erişim sağlarken iş akışını kesintisiz ve emniyetli hale getirir.",
				],
				purpose:
					"Mekanik aksamların doğru eksende sabitlenmesini ve dinamik yüklerin sönümlenmesini sağlar; üst kotlara erişim, bakım ve operatör yönetimi için güvenli bir çalışma zemini oluşturur.",
				features: [
					{ title: "Yüksek rijitlik", body: "Ağır yüklere ve sürekli çalışmaya dayanıklı, esneme yapmayan çelik yapı." },
					{ title: "Hassas işleme", body: "Bağlantı ve yataklama yüzeylerinde milimetrik toleranslar." },
					{ title: "Titreşim sönümleme", body: "Rezonansı azaltan gövde tasarımıyla aksamların ömrü uzar." },
					{ title: "Kaymaz zemin", body: "Tırtıklı sac, ızgara veya özel kaplama seçenekleri." },
					{ title: "İSG uyumlu korkuluk ve merdiven", body: "Uluslararası iş güvenliği standartlarına uygun emniyet bariyerleri." },
					{ title: "Korozyon koruması", body: "Galvaniz kaplama veya endüstriyel boya uygulamaları." },
				],
				applications: [
					"Roll form ve sac işleme makineleri",
					"Konveyör ve elevatör gövdeleri",
					"Makine üstü bakım ve gözlem noktaları",
					"Mezanin, hat geçiş köprüleri ve operatör kürsüleri",
					"Silo ve bunker erişim kuleleri",
					"Robotik hücreler",
				],
				edge: "Kaynak gerilimi giderilmiş şaselerimizle makinenizin ilk günkü geometrik hassasiyetini yıllarca koruyor; yerleşiminize milimetrik uyum sağlayan platformlarla atıl alanları çalışma bölgelerine dönüştürüyoruz.",
			},
			{
				title: "Silolar",
				slug: "silolar",
				intro:
					"Dökme malzemenin depolanmasına yönelik silolar. Kapasite, malzeme yoğunluğu ve boşaltma yöntemi birlikte hesaplanır.",
				headline: "Yüksek Kapasiteli Silo Sistemleri: Güvenli ve Kesintisiz Depolama",
				description: [
					"Endüstriyel tesislerin dökme katı ve sıvı malzeme depolama ihtiyaçları için tasarlanan silo sistemlerimiz, maksimum alan tasarrufu ve minimum fire ile güvenli depolama sunar.",
					"Malzemeyi nem, ısı ve haşere gibi dış etkenlerden izole ederek kalitesini korur; üretim hatları arasında güçlü bir köprü kurarak kesintisiz malzeme akışı sağlar.",
				],
				purpose:
					"Tahıl, çimento, maden ve kimyasal gibi dökme yüklerin dış ortamdan etkilenmeden, hijyenik ve düzenli şekilde dikey olarak depolanmasını sağlar.",
				features: [
					{ title: "Maksimum koruma", body: "Isı, nem ve zararlılara karşı tam sızdırmazlık." },
					{ title: "Uzun süreli muhafaza", body: "Malzeme yapısını bozmayan havalandırma opsiyonları." },
					{ title: "Proses entegrasyonu", body: "Hatlarda duruşları önleyen tampon stoklama görevi." },
					{ title: "Dayanıklı gövde", body: "Korozyona dayanıklı, yüksek mukavemetli yapı." },
					{ title: "Modüler tasarım", body: "Tesis alanına ve ihtiyaca göre optimize edilen dikey mimari." },
				],
				applications: [
					"Tarım ve gıda: tahıl, un, yem stoklama",
					"Çimento ve yapı kimyasalları",
					"Madencilik ve enerji: kömür, mineral",
					"Kimya ve plastik sanayii",
				],
				edge: "Silolarımız yalnızca bir depolama alanı değil; üretim süreçlerinizde kayıpları azaltan ve operasyonel verimliliğinizi artıran güvenilir bir işletme ortağıdır.",
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
			"Simülasyon destekli tasarım, CNC ve tel erozyon ile işlenmiş kesici elemanlar ve özel kaplamalarla ilk vuruşta doğru parça hedefliyoruz.",
		],
		children: [
			{
				title: "Bükme Kalıpları",
				slug: "bukme-kaliplari",
				intro:
					"Sacın istenen açı ve yarıçapta bükülmesini sağlayan kalıplar. Geri esneme dikkate alınarak tasarlanır.",
				headline: "Endüstriyel Bükme Kalıpları: Kusursuz Form ve Geri Esneme Kontrolü",
				description: [
					"Sac metalin tasarımındaki açı ve ölçülere tam sadık kalarak form alması, montaj hassasiyetinin anahtarıdır.",
					"Malzemenin yapısını ve geri esneme (spring-back) paylarını hesaba katan mühendislik teknikleriyle bükme kalıpları tasarlıyor; karmaşık geometrileri yüzeyde iz bırakmadan ve çatlama riski oluşturmadan hayata geçiriyoruz.",
				],
				purpose:
					"Düz sac levhaların pres kuvveti altında belirli bir açı veya formda kalıcı olarak, yapısal bütünlük bozulmadan ve yüksek tekrarlanabilirlikle şekillendirilmesini sağlar.",
				features: [
					{ title: "Geri esneme kompanzasyonu", body: "Malzeme cinsi ve kalınlığına göre esnemeyi önceden hesaplayan geometri." },
					{ title: "Yüzey koruma", body: "Paslanmaz ve boyalı saclarda iz ve çizilmeyi önleyen özel radüs ve kaplamalar." },
					{ title: "Yüksek mukavemetli yapı", body: "Yük altında formunu koruyan sertleştirilmiş kalıp gövdeleri." },
					{ title: "Hassas ayarlanabilirlik", body: "Farklı kalınlıklara uyum sağlayan modüler alt ve üst kalıplar." },
					{ title: "Üniform büküm", body: "Bükme hattı boyunca eşit basınç dağılımıyla her noktada aynı açı." },
				],
				applications: [
					"Otomotiv panel ve profil şekillendirme",
					"Beyaz eşya gövde ve iç aksam",
					"Asansör kabin ve kapı sistemleri",
					"Metal mobilya ve raf sistemleri",
				],
				edge: "Simülasyon destekli tasarımla en zorlu büküm açılarında bile ilk vuruşta doğru parça prensibiyle çalışıyor; deneme-yanılmayı, fireyi ve ayar süresini en aza indiriyoruz.",
			},
			{
				title: "Delme Kalıpları",
				slug: "delme-kaliplari",
				intro:
					"Delik ve boşaltma işlemleri için delme kalıpları. Delik konumu ve tekrarlanabilirlik esas alınır.",
				headline: "Endüstriyel Delme Kalıpları: Kusursuz Geometri ve Yüksek Çevrim Hızı",
				description: [
					"Seri üretimde sac üzerinde istenen çap ve geometride deliklerin açılması, parçanın montaj kalitesini doğrudan etkiler.",
					"Yüksek tekrarlanabilirlik ve hassasiyet odaklı delme kalıplarıyla üretim hatlarınızda sıfır hatalı delik operasyonları hedefliyoruz.",
				],
				purpose:
					"Malzeme üzerinde teknik resme uygun konum, çap ve formlarda deliklerin hızlı, çapaksız ve deformasyonsuz şekilde seri olarak açılmasını sağlar.",
				features: [
					{ title: "Konumlanma hassasiyeti", body: "Delik merkezlerinde yüksek doğruluk sunan kılavuzlama sistemleri." },
					{ title: "Aşınmaya dirençli zımba ve matris", body: "Özel ısıl işlemden geçmiş, sertliği ve tokluğu optimize edilmiş kesici uçlar." },
					{ title: "Etkin sıyırma", body: "Malzemenin zımbaya yapışmasını engelleyen güçlü sıyırıcı ve baskı mekanizması." },
					{ title: "Hızlı değiştirilebilir bileşenler", body: "Aşınan zımbaların hattı durdurmadan değiştirilmesini sağlayan standart yuvalar." },
					{ title: "Isıl ve mekanik kararlılık", body: "Genleşmeyi azaltan soğutma ve yağlama kanalları." },
				],
				applications: [
					"Otomotiv şase ve gövde delme",
					"Çelik konstrüksiyon ve bağlantı elemanları",
					"Elektrik panoları ve kablo kanalları",
					"Beyaz eşya ve mutfak ekipmanları",
				],
				edge: "TiN ve TiAlN gibi kaplamalarla zımba ömrünü %40'a kadar uzatıyor; daha az bileme ihtiyacıyla üretiminizi kesintisiz bir akışa dönüştürüyoruz.",
			},
			{
				title: "Kesme Kalıpları",
				slug: "kesme-kaliplari",
				intro:
					"Sacın dış formunu veren kesme kalıpları. Kesme boşluğu ve malzeme kullanımı optimize edilir.",
				headline: "Endüstriyel Kesme Kalıpları: Yüksek Hassasiyet ve Maksimum Ömür",
				description: [
					"Sac metal işlemede parçanın geometrik doğruluğunu ve yüzey kalitesini belirleyen en kritik unsur kalıp kalitesidir.",
					"En zorlu toleranslarda bile milyonlarca vuruş boyunca formunu koruyan kesme kalıpları tasarlıyor ve imal ediyoruz; üretim hızınızı artırırken çapak ve ölçüsel sapmayı en aza indiriyoruz.",
				],
				purpose:
					"Sac levha veya rulo malzemenin belirlenmiş formlarda milimetrik hassasiyetle kesilmesini sağlayarak seri üretimde standart ve hatasız parça elde edilmesini sağlar.",
				features: [
					{ title: "Üstün malzeme seçimi", body: "Isıl işlem görmüş, aşınma direnci yüksek özel kalıp çelikleri." },
					{ title: "Hassas tolerans", body: "CNC işleme ve tel erozyonla elde edilen hassas kesme boşlukları." },
					{ title: "Optimize tahliye", body: "Parça ve hurdaların sorunsuz uzaklaştırılmasını sağlayan kanallar." },
					{ title: "Kolay bakım", body: "Modüler çekirdek yapısıyla aşınan kısımların kalıbı sökmeden yenilenmesi." },
					{ title: "Yüksek vuruş hızı uyumu", body: "Eksantrik ve hidrolik preslere uygun, titreşimi sönümlenmiş gövde." },
				],
				applications: [
					"Otomotiv gövde ve parça imalatı",
					"Beyaz eşya ve panel üretimi",
					"Elektrik-elektronik metal aksamlar",
					"İnşaat ve yapı elemanları",
				],
				edge: "Özel kaplama teknikleri ve hassas bileme standartlarıyla bileme aralıklarını uzatıyor; duruşları azaltarak birim parça maliyetinizde somut tasarruf sağlıyoruz.",
			},
			{
				title: "Progresif Kalıplar",
				slug: "progresif-kaliplar",
				intro:
					"Birden çok işlemin tek preste, kademeli istasyonlarda tamamlandığı kalıplar. Seri üretimde çevrim süresini kısaltır.",
				headline: "Progresif Kalıplar: Tek Preste, Her Vuruşta Bitmiş Parça",
				description: [
					"Progresif kalıplarda sac şerit, her pres vuruşunda bir istasyon ilerler; delme, kesme, bükme ve şekillendirme işlemleri sırayla tamamlanır ve son istasyonda bitmiş parça ayrılır.",
					"Şerit yerleşimi (strip layout), istasyon sırası ve pilot konumları malzeme kullanımını ve parça kalitesini belirler. Tasarımı simülasyonla doğrulayarak imalata geçiyoruz.",
				],
				purpose:
					"Çok operasyonlu sac parçaların tek pres üzerinde, yüksek hızda ve tekrarlanabilir kalitede seri üretilmesini sağlar.",
				features: [
					{ title: "Optimize şerit yerleşimi", body: "Malzeme firesini en aza indiren istasyon kurgusu." },
					{ title: "Pilotlu hassas ilerleme", body: "Her istasyonda şeridi doğru konumlayan pilot ve kılavuz sistemi." },
					{ title: "Modüler istasyonlar", body: "Aşınan zımba ve matrislerin hızlı değişimi." },
					{ title: "Sensör koruması", body: "Hatalı besleme ve parça sıkışmasına karşı kalıp içi sensörler." },
					{ title: "Yüksek çevrim hızı", body: "Yüksek vuruş sayılarına uygun rijit kalıp seti." },
				],
				applications: [
					"Otomotiv bağlantı ve takviye parçaları",
					"Elektrik terminalleri ve klemensler",
					"Beyaz eşya küçük metal aksamları",
					"Mobilya ve hırdavat parçaları",
				],
				edge: "Tek kalıpta birden çok operasyonu birleştirerek ara taşıma ve operatör ihtiyacını kaldırıyor, yüksek adetli üretimde birim maliyeti belirgin biçimde düşürüyoruz.",
			},
		],
	},
	{
		title: "Eleme Sistemleri",
		slug: "eleme-sistemleri",
		intro:
			"Malzemenin tane boyutuna göre ayrıştırılmasına yönelik eleme sistemleri. Kapasite ve istenen fraksiyonlara göre boyutlandırılır.",
		description: [
			"Doğru eleme sistemi, nihai ürün kalitenizin garantisidir. Malzemenin nemi, yapışkanlığı, tane dağılımı ve istenen kapasite; titreşimli, döner veya yıldız elek arasındaki seçimi belirler.",
			"Elek tipini prosesinize göre seçiyor, kat sayısını, elek açıklıklarını ve tahrik sistemini buna göre boyutlandırıyoruz.",
		],
		children: [
			{
				title: "Titreşimli Elekler",
				slug: "titresimli-elekler",
				intro:
					"Titreşim hareketiyle malzemeyi elek yüzeyinde ilerletip tane boyutuna göre ayıran elekler. Kat sayısı ve elek açıklığı istenen fraksiyonlara göre belirlenir.",
				headline: "Yüksek Verimli Vibro Elek Sistemleri: Toz Ayırma, Sınıflandırma ve Özel Tasarım",
				description: [
					"Vibro elek, malzemeleri tane boyutuna göre ayırmak, toz ve yabancı maddelerden arındırmak için kullanılan endüstriyel bir eleme makinesidir. Ham madde girişinden son ürün çıkışına kadar her aşamada saf ve homojen malzeme sunar.",
					"Titreşim motorlarının oluşturduğu dairesel veya doğrusal hareketle malzeme elek üzerinde zıplar; elek gözünden küçük partiküller alt kata geçer, büyük olanlar yoluna devam eder.",
				],
				purpose:
					"Ham maddeyi, ürünü veya mamulü istenilen tane boyutuna göre sınıflandırır ve tozdan arındırır.",
				features: [
					{ title: "Yüksek eleme verimliliği", body: "Üstün titreşim teknolojisiyle maksimum eleme performansı." },
					{ title: "Hızlı eleme", body: "Yüksek frekanslı titreşimle kısa sürede büyük miktarda işlem." },
					{ title: "Kolay elek değişimi", body: "Pratik bağlantı mekanizması ile minimum duruş, hızlı ürün dönüşümü." },
					{ title: "Ayarlanabilir titreşim", body: "Vibro motorlarda vurma şiddeti malzemeye göre ayarlanabilir." },
					{ title: "Enerji verimliliği", body: "Düşük motor gücüyle yüksek performans." },
					{ title: "Kompakt tasarım", body: "Az yer kaplar, kolay montaj ve entegrasyon." },
				],
				specs: [
					{ label: "Kat sayısı", value: "1 – 4 kat (isteğe bağlı)" },
					{ label: "Kapasite", value: "200 kg/saat – 10+ ton/saat (proje bazlı)" },
					{ label: "Motor gücü", value: "0,475 kW – 4+ kW" },
					{ label: "Gövde malzemesi", value: "Karbon çelik (ST37) / paslanmaz (304/316)" },
					{ label: "Elek gözü", value: "Projeye özel açıklık seçenekleri" },
					{ label: "Titreşim sistemi", value: "1 veya 2 vibro motor, ayarlanabilir şiddet" },
					{ label: "Bağlantı", value: "Esnek körüklerle toz sızdırmazlık" },
					{ label: "Yüzey işlemi", value: "Boyalı / paslanmaz doğal / galvaniz" },
					{ label: "Güç kaynağı", value: "380 / 400 V – 50/60 Hz" },
				],
				applications: [
					"Yem fabrikaları",
					"Un ve irmik değirmenleri",
					"Gıda işleme ve tohum temizleme",
					"Kimyasallar ve gübre üretimi",
					"Madencilik ve inşaat",
					"Geri dönüşüm ve plastik endüstrisi",
				],
				edge: "İhtiyacınıza göre 1 ila 4 kat arasında, istenen ölçüde, paslanmaz veya çelik gövdeli özel imalat yapıyor; kurulum, eğitim ve yedek parça dahil sistem çalıştığı sürece yanınızda oluyoruz.",
			},
			{
				title: "Döner Elekler",
				slug: "doner-elekler",
				intro:
					"Eğimli dönen tambur içinde malzemeyi santrifüj etkisiyle ayıran döner elekler (trommel). Kaba ve nemli malzemede tıkanmadan yüksek kapasite sağlar.",
				headline: "Döner Elek Sistemleri: Hassas ve Yüksek Kapasiteli Ayrıştırma",
				description: [
					"Farklı boyutlardaki malzemelerin süratle ayrılması için tasarlanan döner eleklerimiz, santrifüj etkisiyle yüksek eleme verimi sağlar.",
					"Toz, granül veya kaba malzemelerin sınıflandırılmasında tıkanma riskini azaltan yapısıyla kesintisiz operasyon sunar.",
				],
				purpose:
					"Dönen tambura giren karışık boyutlu malzemenin merkezkaç kuvveti ve yer çekimi yardımıyla istenen ölçülerde elenmesini ve gruplandırılmasını sağlar.",
				features: [
					{ title: "Yüksek eleme verimi", body: "Eğimli tambur açısı ve ayarlanabilir devir hızıyla optimize ayrıştırma." },
					{ title: "Tıkanma önleyici fırçalar", body: "Nemli ve yapışkan malzemede elek gözlerini açık tutan temizleme düzeneği." },
					{ title: "Değiştirilebilir elek", body: "Farklı delik çaplarına sahip modüler paneller." },
					{ title: "Toz ve ses izolasyonu", body: "Opsiyonel kapalı gövdeyle toz yayılımı ve gürültü sınırlanır." },
					{ title: "Düşük işletme maliyeti", body: "Basit tahrik ve uzun ömürlü yataklama." },
				],
				applications: [
					"Geri dönüşüm ve atık ayrıştırma",
					"Madencilik ve agrega (kum, çakıl)",
					"Tarımsal ürünler ve gübre hatları",
					"Kimya ve inşaat ham madde sanayii",
				],
				edge: "Mühendislik hesaplarıyla belirlenen tambur geometrimiz sayesinde benzerlerine göre daha düşük enerjiyle %30'a varan daha fazla eleme kapasitesi sağlıyoruz.",
			},
			{
				title: "Yıldız Elekler",
				slug: "yildiz-elekler",
				intro:
					"Dönen esnek yıldız disklerle nemli, lifli ve yapışkan malzemeyi tıkanmadan ayıran elekler. Kompost, biyokütle ve atık hatları için idealdir.",
				headline: "Yıldız Elek Sistemleri: Dinamik ve Yüksek Hızlı Ayrıştırma",
				description: [
					"Nemli, yapışkan ve karmaşık yapıdaki malzemelerin sınıflandırılması için geliştirilen yıldız elekler, geleneksel yöntemlerin yetersiz kaldığı noktalarda üstün performans gösterir.",
					"Esnek yıldız disklerin yarattığı yüksek ivmeli hareket malzemenin topaklanmasını önler ve en zorlu şartlarda bile hassas ayrıştırma yapar.",
				],
				purpose:
					"Yan yana dizilmiş millerdeki dönen yıldız diskler sayesinde küçük parçalar aşağı süzülürken büyük parçalar ileri taşınır.",
				features: [
					{ title: "Tıkanma karşıtı yapı", body: "Esnek yıldızlar ıslak, lifli ve yapışkan malzemenin gözenekleri tıkamasını engeller." },
					{ title: "Yüksek geçirgenlik", body: "Sürekli ve dinamik hareketle yüksek hızda eleme." },
					{ title: "Hassas boyutlandırma", body: "Mil devri ayarlanarak eleme hassasiyeti anlık kontrol edilir." },
					{ title: "Modüler yıldızlar", body: "Farklı aşınma direncinde polimer veya çelik yıldız seçenekleri." },
					{ title: "Kendi kendini temizleme", body: "Dönüş sırasında yıldızların birbirini sıyırmasıyla otomatik temizlik." },
				],
				applications: [
					"Kompost ve biyokütle işleme",
					"Ağaç kabuğu, talaş ve orman ürünleri",
					"Katı atık ve geri dönüşüm (MSW) hatları",
					"Nemli toprak ve kum eleme",
				],
				edge: "Düşük devirde bile yüksek verim sağlayan tahrik sistemimiz enerji sarfiyatını azaltırken, darbe emici yıldız yapısı makinenin mekanik ömrünü diğer elek tiplerine göre iki katına çıkarır.",
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

export interface ProductMedia {
	hero?: string;
	render?: string;
	gallery: string[];
}

export function productMedia(product: Pick<Product, "slug">): ProductMedia {
	return (media as Record<string, ProductMedia>)[product.slug] ?? { gallery: [] };
}
