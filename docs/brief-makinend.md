# CURSOR PROMPT — MAKINEND WEB SİTESİ

Uygulama planı: [plan-site-iskeleti.md](./plan-site-iskeleti.md)

## Amaç

Mevcut örnek web sitesi tasarımını ve mevcut proje yapısını temel alarak **Makinend** için kurumsal bir endüstriyel mühendislik / makine imalat web sitesi oluştur.

Bu aşamada **ana sayfayı tasarlama**. Öncelik:

1. Ortak site iskeleti
2. Header
3. Footer
4. Ürün ana kategori sayfaları
5. Ürün alt kategori detay sayfaları
6. Projeler sayfası için yapı
7. Hakkımızda sayfası
8. İletişim sayfası

Ana sayfa daha sonra ele alınacak. Ancak ana sayfa tasarımında örnek sitedeki alternatifler arasından **yalnızca `Worker` tasarım tipi kullanılacak**. Diğer ana sayfa tasarım alternatiflerini kullanma.

Görsel kaynak: [Lightwire Worker](https://templates.framework-y.com/lightwire/pages/index-worker.html) — ilk açılış hali.

---

## 1. Genel Site Mimarisi

Site ortak bir layout yapısı kullanmalı:

```text
App
├── Header
├── Main / Body
│   └── Route'a göre değişen sayfa içeriği
└── Footer
```

- Header tüm sayfalarda ortak
- Footer tüm sayfalarda ortak
- Yalnızca Main / Body route'a göre değişmeli
- Astro + Cloudflare korunmalı
- Site masaüstü, tablet ve mobilde düzgün çalışmalı

## 2. Header Ana Menü

Header'da toplam 5 ana menü item bulunacak:

**ANA SAYFA | ÜRÜNLER | PROJELER | HAKKIMIZDA | İLETİŞİM**

### Header davranışı

**Ana Sayfa** — tıklanabilir, `/`

**Ürünler** — dropdown / mega menu. Ürün ana kategorileri navbar içinde doğrudan tıklanabilir link olmasın. Ana kategoriler yalnızca alt kategorileri açan / gruplayan öğeler olarak davranmalı. Ana kategori URL'leri uygulamada geçerli route olarak bulunmalı.

Örnek:

```text
Ürünler
  Taşıyıcı Sistemler
    Elevatör Sistemleri
    Helezon Konveyörler
    ...
```

**Projeler** — bağımsız üst seviye menü: `/projeler`

**Hakkımızda** — `/hakkimizda`

**İletişim** — `/iletisim`

## 3. Ürün Menü Ağacı

### Taşıyıcı Sistemler

```text
Taşıyıcı Sistemler
├── Elevatör Sistemleri
├── Helezon Konveyörler
├── Konveyör Sistemleri
└── Vibrasyonlu Taşıma Sistemleri
```

- `/tasiyici-sistemler`
- `/tasiyici-sistemler/elevator-sistemleri`
- `/tasiyici-sistemler/helezon-konveyorler`
- `/tasiyici-sistemler/konveyor-sistemleri`
- `/tasiyici-sistemler/vibrasyonlu-tasima-sistemleri`

### Roll Form ve Mekik Arabası

```text
Roll Form ve Mekik Arabası
├── Eksiz Oluk Makineleri
├── Roll Form Hatları
└── Mekik Arabaları
```

- `/roll-form-ve-mekik-arabasi`
- `/roll-form-ve-mekik-arabasi/eksiz-oluk-makineleri`
- `/roll-form-ve-mekik-arabasi/roll-form-hatlari`
- `/roll-form-ve-mekik-arabasi/mekik-arabalari`

### Özel Makina İmalatı

```text
Özel Makina İmalatı
├── Kartezyen Sistemler
└── Diğer Özel Makineler
```

- `/ozel-makina-imalati`
- `/ozel-makina-imalati/kartezyen-sistemler`
- `/ozel-makina-imalati/diger-ozel-makineler`

### Konstrüksiyonlar

```text
Konstrüksiyonlar
├── Bunkerler
├── Platform ve Şaseler
└── Silolar
```

- `/konstruksiyonlar`
- `/konstruksiyonlar/bunkerler`
- `/konstruksiyonlar/platform-ve-saseler`
- `/konstruksiyonlar/silolar`

### Kalıplar

```text
Kalıplar
├── Bükme Kalıpları
├── Delme Kalıpları
├── Kesme Kalıpları
└── Progresif Kalıplar
```

- `/kaliplar`
- `/kaliplar/bukme-kaliplari`
- `/kaliplar/delme-kaliplari`
- `/kaliplar/kesme-kaliplari`
- `/kaliplar/progresif-kaliplar`

### Eleme Sistemleri

```text
Eleme Sistemleri
└── Titreşimli Elekler
```

- `/eleme-sistemleri`
- `/eleme-sistemleri/titresimli-elekler`

## 4. Ana Kategori Sayfalarının Davranışı

Header içerisinde alt kategorisi olan ana ürün kategorileri doğrudan tıklanabilir olmayacak.

Kullanıcı URL'yi manuel olarak açarsa (ör. `/tasiyici-sistemler`) 404 veya redirect olmamalı. Kategori landing page açılmalı.

Gereksinimler: kategori adı, kısa intro, alt kategori kart/grid (görsel, başlık, kısa açıklama opsiyonel, detay linki), responsive grid, sade endüstriyel hover, URL hiyerarşisi.

Aynı yapı tüm ana ürün kategorilerinde reusable / data-driven olmalı.

## 5. Alt Kategori Detay Sayfaları

Örnek: `/tasiyici-sistemler/elevator-sistemleri`

Ortak component sistemi. İhtiyaç oldukça:

- Ürün / sistem başlığı
- Hero veya ana ürün görseli
- Kısa tanıtım
- Detaylı açıklama
- Teknik özellikler
- Kullanım alanları
- Avantajlar
- Proses / çalışma prensibi
- Galeri
- İlgili projeler
- İlgili ürünler
- Teklif / iletişim CTA

İçerik merkezi data/config’te tutulacak; koda dağınık hard-code edilmeyecek.

## 6. Projeler

`/projeler` — ürün kategorisi değil, bağımsız menü. Şimdilik temiz, ölçeklenebilir listeleme / kart altyapısı.

## 7. Hakkımızda

Route: `/hakkimizda`

Makinend, mühendisliği yalnızca tasarımla değil, çalışan ve sürdürülebilir sistemlerle sonuçlandırmak için kuruldu.

Ekibimizin deneyimi; farklı sektörlerde gerçekleştirilen konveyör ve taşıma sistemlerinden roll form hatlarına, kırma ve ayrıştırma tesislerinden belirli proseslere özel geliştirilen makinelere kadar geniş bir mühendislik ve imalat geçmişine dayanıyor.

Bugüne taşıdığımız bu deneyim yalnızca makine tasarımından ibaret değil. Bir projenin ilk ihtiyacının belirlenmesinden mühendislik hesaplarına, tasarım ve maliyetlendirmeden hammadde ve komponent tedariğine, imalattan lojistiğe, saha montajından devreye almaya kadar projenin bütününü yönetme tecrübesine sahibiz.

### Uçtan Uca Mühendislik

Bir makinenin iyi çalışması için yalnızca doğru çizilmesi yeterli değildir. Üretilebilir, kurulabilir, bakım yapılabilir ve gerçek çalışma koşullarında uzun süre verimli şekilde çalışabilir olması gerekir.

Bu nedenle projelerimize yalnızca bir makine üreticisi gözüyle yaklaşmıyoruz. İhtiyacı ve prosesi analiz ediyor, doğru sistemi belirliyor, mühendislik hesaplarını ve tasarımını gerçekleştiriyor, üretim yöntemini planlıyor ve sistemi sahada çalışan bir çözüme dönüştürüyoruz.

Deneyim alanlarımız arasında;

- konveyör ve taşıma sistemleri,
- roll form hatları,
- eleme, kırma ve ayrıştırma sistemleri,
- özel amaçlı makineler,
- çelik konstrüksiyonlar,
- kalıp ve üretim ekipmanları,
- proses geliştirme,
- enerji verimliliği ve sistem ömrünün iyileştirilmesine yönelik mühendislik çalışmaları

yer alıyor.

### Tasarımdan Sahaya

Makinend'in arkasındaki mühendislik birikimi, yurt içi ve yurt dışında farklı ölçeklerde yürütülen çok sayıda endüstriyel projede kazanıldı.

Bu projelerde ihtiyaç analizi, konsept geliştirme, mühendislik hesapları, makine ve sistem tasarımı, maliyetlendirme, satın alma, hammadde ve komponent tedariği, imalat koordinasyonu, lojistik, saha montajı ve devreye alma süreçlerinin tamamında aktif sorumluluk üstlenildi.

Bu geçmiş bize önemli bir avantaj sağlıyor: Bir projeye yalnızca tasarım masasından değil, üretim sahasından, montaj noktasından ve müşterinin gerçek ihtiyacından bakabiliyoruz.

### Mühendislik Merkezli Bir Yapı

Makinend'in temelinde makine mühendisliği ve sürekli gelişim anlayışı bulunuyor. Akademik çalışmalarla desteklenen mühendislik altyapımızı, yıllar içerisinde edinilen imalat ve saha deneyimiyle bir araya getiriyoruz.

Üniversite ve teknoloji geliştirme projelerinde de mühendislik ve imalat danışmanlığı sağlıyor; ileri mühendislik gerektiren çalışmaların tasarımdan üretilebilir hale getirilmesine kadar farklı aşamalarında görev alıyoruz.

Bizim için özel makine imalatı, müşterinin tarif ettiği bir makineyi yalnızca üretmek değildir. Bazen müşteri ihtiyacını bilir ancak çözümün nasıl olması gerektiğini henüz bilmez.

Bizim işimiz tam olarak burada başlar.

İhtiyacı anlar, mühendisliğini yapar ve onu çalışan bir sisteme dönüştürürüz.

**Makinend**

İhtiyaçtan tasarıma.  
Tasarımdan üretime.  
Üretimden çalışan sisteme.

## 8. Footer

Tüm sayfalarda ortak. Yalnızca iletişim değil; tam site navigasyonu / site haritası.

- E-posta: `info@makinend.com` → `mailto:info@makinend.com`
- Telefon: `+90 531 232 5423` → `tel:+905312325423`
- Adres: Hacı Halil Mah. 1207 Sok. No:1/5 Match Office, Gebze, Kocaeli

## 9. Footer Navigasyon Yapısı

Kolonlar: Kurumsal, Ürünler (parent landing linkli + children), Projeler, İletişim.

Header’da ana kategori tıklanmaz. Footer’da site haritası mantığıyla ana kategori landing page’e gidilebilir.

Alt şerit: `© Makinend`. İleride KVKK, gizlilik, çerez, sosyal medya için yapı bırak.

## 10. Tasarım Dili

Teknik, güvenilir, mühendislik odaklı, modern, güçlü, sade, kurumsal, saha gerçekliğine yakın.

Kaçınılacaklar: startup estetiği, aşırı yuvarlak UI, aşırı animasyon, gereksiz gradient, her bölümde farklı dil, lorem ipsum.

## 11. Ana Sayfa Kararı

Bu aşamada Worker homepage bitirilmez. İleride yalnızca Worker varyantı kullanılacak.

## 12. Routing ve SEO

Türkçe karaktersiz, küçük harf, `-` ayraç. Trailing slash tek standart. Title / meta altyapısı. 404 var. Parent kategori 404 olmaz.

## 13. Breadcrumb

- Detay: Ana Sayfa > Ürünler > Taşıyıcı Sistemler > Helezon Konveyörler
- Landing: Ana Sayfa > Ürünler > Taşıyıcı Sistemler

## 14. Component / Data Yapısı

Tek merkezi ürün ağacı. Header, Footer, kategori landing, breadcrumb, related products aynı veriyi kullanır.

## 15. Yapılmayacaklar

Ana sayfayı bitirme, Worker dışı homepage, yeni kategori uydurma, “Proje”yi ürünlere koyma, parent URL’leri kaldırma, header’da parent’ı link yapmak, footer’ı yalnızca iletişim bırakmak, lorem, stack’i yeniden yazmak.

## 16. Uygulama önceliği

Fazlar: [plan-site-iskeleti.md](./plan-site-iskeleti.md)

1. Temel iskelet
2. Header + footer
3. Ürün sayfaları
4. Kurumsal sayfalar
5. Kalite
6. Worker ana sayfa (sonra)
