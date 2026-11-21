# KOD OKUMA DOSYASI
## Sepetim — JavaScript hata ayıklama çalışması

Bu dosyayı kodları düzeltmeden önce doldur. Cevapları doğrudan bu Markdown dosyasına yazabilirsin. Amacımız kodu ezberlemek değil, okuyup ne yaptığını anlayabilmek.

### 1. Genel kod akışı

1. `products` dizisinin görevi ne? İçindeki her ürün hangi bilgilere sahip?  **Cevap: Mağazadaki satılık ürünlerin sabit listesini veritabanını tutmaktır. Her ürün id,name,price,emoji bilgilerine sahiptir.
2. `cart` değişkeni başlangıçta neden boş bir dizi? **Cevap: Kullanıcı siteye ilk girdiğinde sepeti boştur. alışveriş yaptıkça ürünler ekleneceği için let ile başlar başta boş dizi olarak tanımlanır.
3. `TAX_RATE`, `DISCOUNT_LIMIT` ve `DISCOUNT_RATE` neden `const` ile tanımlanmış olabilir? **Cevap: Vergi oranı indirim limiti, ve oranı gibi değerler uygulamanın iş kurallarıdır. uygulama çalışırken değiştirilip hesaplamaları bozmamaları için const kullanılır.
4. `querySelector()` ne yapar? Örneğin `subtotalElement` hangi HTML elemanını seçiyor? **Cevap: Html sayfasındaki etiketi bularak js in içine çeker.
5. `renderCart()` fonksiyonu uygulamada hangi işleri yapıyor? **Cevap: Ekranı günceller. Sepet dizisindeki verileri okur. bunları html'e yazar, toplam fiyatı hesaplatıp günceller sepet boşsa sepet boş ekranı gösterir.

### 2. Fonksiyonları anlama

6. `formatPrice()` fonksiyonuna `289` gönderilirse ne yapmasını bekleriz? **Cevap: para birimi formatına dönüştürür. örn: ₺289,00
7. `showToast()` fonksiyonu hangi iki işlemi gerçekleştiriyor? **Cevap: Bildirim kutusunun (toastElement) içine gösterilecek mesaj metnini yazar, 2. Kutuya .show sınıfını (class) ekleyerek ekranda görünür hale getirir
8. `addToCart()` içinde ürün önce nereden bulunuyor, daha sonra sepet içinde olup olmadığı nasıl kontrol ediliyor? **Cevap: Ürün önce ana mağaza listesinden find() metodu ile aranıp bulunur. kullanıcının sepetinde aynı ID'ye sahip ürün zaten var mı diye yine find() metoduyla kontrol edilir.
9. `changeQuantity()` fonksiyonuna `-1` gönderilirse ne olması gerekiyor? **Cevap: Gönderilen ürünün sepetteki miktarını (quantity) 1 azaltır. ürün adedi 0 veya daha aza düşerse ürünü sepetten tamamen siler.
10. `removeFromCart()` neden `filter()` kullanıyor? **Cevap: Silinmek istenen ürün ID'sini bırakıp, şartı sağlayan diğer tüm ürünleri filtreleyerek elinde tutar ve tertemiz yeni bir sepet dizisi oluşturur.
11. `calculateTotals()` hangi dört değeri hesaplayıp geri döndürüyor? **Cevap: Ara toplam, indirim tutarı, KDV tutarı ve ödenecek genel toplam değerlerini hesaplar ve bu dördünü bir obje olarak geri döndürür.
12. `renderCart()` içinde `map()` neden kullanılmış? **Cevap: Sepetteki JavaScript verilerini tek tek okuyup, ekranda görsel olarak çizilebilmesi için HTML kod bloklarına dönüştürmek amacıyla kullanılır.

### 3. Hata avı

Aşağıdaki bölümlerde sorun olabilecek satırları bul. Her biri için şu üç şeyi yaz:

- Sorunlu satır veya bölüm hangisi?
- Neden hatalı?
- Nasıl düzelttin?

| No | İncelenecek bölüm | Bulduğun sorun / açıklaman |
|---|---|---|
| 1 | Ürün ekleme butonlarının event listener bölümü | `button.dataset.id` yazılmış ama butonlarda `data-add` var, o yüzden id gelmiyordu ve ürün bulunamadı hatası veriyordu. `button.dataset.add` yaparak düzelttim. |
| 2 | `products.find()` kullanılan bölüm | `product.id = productId` kısmında karşılaştırma yerine tek eşittir kullanılmış, yani atama yapıyordu. `===` koyarak düzelttim. |
| 3 | Sepetteki ürünün adetini artıran bölüm | `existingItem.quantity + "1"` şeklinde tırnak içinde 1 ile toplanmış. String olduğu için sayıyı artırmak yerine 11, 111 diye yan yana yazıyordu. Tırnakları silip `+ 1` yaptım. |
| 4 | `calculateTotals()` içindeki `reduce()` işlemi | Başlangıç değeri `"0"` diye tırnak içinde verilmiş. Bu yüzden fiyatları toplamak yerine yazı gibi yan yana birleştiriyordu. Tırnakları kaldırıp normal `0` yaptım. |
| 5 | Toplam ürün adedini hesaplayan bölüm | `headerCountElement` kısmında `cart.length` kullanılmış ama bu toplam ürün sayısını değil sadece kaç çeşit ürün olduğunu gösteriyor. `totalQuantity` yaparak düzelttim. |
| 6 | KDV hesaplama satırı | Yukarıda `TAX_RATE = 20` tanımlanmış, o yüzden KDV hesaplarken %20 almak yerine direkt 20 ile çarpıyordu. `0.20` yaparak düzelttim. |
| 7 | Sepet boş mu kontrolü | `if (cart.length = 0)` yazılmış, tek eşittir olduğu için kontrol etmek yerine sepeti sıfırlıyordu. `===` yaparak düzelttim. |
### 4. Veri türleri

13. `products` dizisinde fiyatlardan biri neden diğerlerinden farklı davranabilir? **Cevap: products dizisindeki seramik Kupa'nın fiyatı "289" şeklinde tırnak içinde (String) tanımlanmış diğerleri Number. String olduğu için toplama işlemlerinde matematiksel hesap yapmak yerine metin birleştirme yapar.
14. `"289" + 1` işleminin sonucu ne olur? Peki `289 + 1`?
15. `typeof` operatörünü kullanarak ürün fiyatlarının türlerini nasıl kontrol edersin? **Cevap: console.log(typeof products[0].price); yazarak her bir ürünün fiyat türünü konsolda kontrol edebilirim.
16. `quantity` değerinin sayı olarak kalması neden önemli? **Cevap: sayı olarak kalmazsa fiyat çarpılırken, adet arttırılırken matematiksel işlemler bozulur.

### 5. Kendi testlerin

Aşağıdaki işlemleri uygulayıp gerçek sonucu yaz:

### 5. Kendi testlerin

Aşağıdaki işlemleri uygulayıp gerçek sonucu yaz:

| İşlem | Uygulamanın verdiği sonuç | Beklenen sonuç |
|---|---|---|
| Kupa ekle | Seramik Kupa 1 adet eklendi, ara toplam 289 TL, KDV 57,80 TL ve genel toplam 346,80 TL oldu. | Kupa 1 adet eklenmeli ve tutarlar doğru hesaplanmalı. |
| Kupa'yı tekrar ekle | Yeni satır açılmadan kupa adedi 2 oldu, ara toplam 578 TL'ye çıktı. | Aynı satırda adet 2 olmalı ve fiyat güncellenmeli. |
| Adedi azalt | Adet 1'e düştü, eksi butonuna tekrar basınca ürün sepetten kalktı. | Adet 1 azalmalı, 0 olunca sepetten silinmeli. |
| Ürünü sil | Ürün sepetten tamamen kaldırıldı, tutarlar sıfırlandı ve boş sepet ekranı geldi. | Ürün silinmeli ve boş sepet mesajı görünmeli. |
| 1.000 TL üzeri sepet oluştur | 3 ürün ekleyince ara toplam 1.067 TL oldu, %10 indirim (-106,70 TL) düştü, KDV 192,06 TL ve genel toplam 1.152,36 TL olarak hesaplandı. | %10 indirim uygulanmalı ve KDV indirim sonrası tutardan alınmalı. |
| Boş sepetle siparişi tamamla | Sipariş oluşturmadı, ekranda "Önce sepetine ürün eklemelisin." uyarısı çıktı. | Sepet boşken sipariş tamamlanmamalı ve uyarı vermeli. |

### 6. Kısa değerlendirme

17. En çok zorlandığın hata hangisiydi? Neden?
Ürün eklemeye çalışırken sürekli "Ürün bulunamadı" hatası alıyodum ve konsolda kırmızı bir hata çıkmıyordu. Sonradan event listener kısmında `dataset.id` yerine `dataset.add` olması gerektiğini fark ettim en çok o uğraştırdı.

18. Console ekranında gördüğün bir hata mesajını kendi cümlelerinle açıkla.
Kodda yazım hatası olmadığı için konsolda kırmızı bir hata çıkmadı ama mantık hataları vardı (örneğin `=` yerine `===` kullanılmaması ve string-number toplama hataları).

19. Bir sonraki benzer hatayı kendin bulabilmek için hangi adımları izlersin?
Önce konsolda hata var mı diye bakarım, yoksa çalışmayan butonun bağlı olduğu fonksiyonu bulup satır satır incelerim. Özellikle `=` ile `===` farkına ve değişkenlerin string mi number mı olduğuna bakarım.

20. Evet, mağazanın temasını basketbol ekipmanlarına çevirip kendi ürün görsellerimi koydum. Bir de sepeti tek seferde boşaltmak için "Sepeti temizle" butonu ekledim, sepet boşken görünmüyor ürün ekleyince çıkıyor. Son olarak 1.000 TL indirim sınırına ne kadar kaldığını anlık gösteren bir yazı ekledim, sepete ürün ekledikçe tutara göre güncelleniyor.

> Not: Bu dosyanın cevaplarını kendi cümlelerinle yaz. Sadece düzeltilmiş kodu teslim etmek, kodu anladığını göstermeye yetmez.
