# 🏀 Saha — Basketbol Ekipmanları Sepet Uygulaması

🔗 **Canlı Demo:** [Saha Sepet Uygulamasını Görüntüle](https://yusufobenay.github.io/saha-sepet-projesi/)

HTML, CSS ve JavaScript kullanılarak geliştirilmiş temel bir e-ticaret sepet uygulaması. Proje kapsamında mevcut JavaScript mantık ve hesaplama hataları giderilmiş, mağaza basketbol ekipmanları temasına uyarlanmış ve ek sepet özellikleri eklenmiştir.

## ✨ Özellikler

- **Sepet Yönetimi:** Varyant (numara/beden/kapasite) destekli ürün ekleme, adet artırma/azaltma, tekil ürün silme ve **Sepeti temizle** butonu ile tek seferde boşaltma.
- **Dinamik Hesaplama:** Ara toplam, 1.000 TL ve üzeri alışverişlerde otomatik `%10` indirim, `SAHA10` kupon koduyla ek `%5` indirim, `%20` KDV ve genel toplam hesaplaması.
- **Anlık İndirim Takibi:** 1.000 TL indirim sınırına ne kadar kaldığını sepet tutarına göre canlı gösteren bilgilendirme ve ilerleme çubuğu.
- **Katalog, Akıllı Arama & Favoriler:** Kategori filtreleme, fiyat sıralama, Türkçe karakter ve anahtar kelime toleranslı arama ile favori listesi.
- **Ürün Detayı, Canlı Yorumlar & Sipariş Geçmişi:** Ürün detay modalında beden/numara seçimi, müşteri yorumları, canlı yorum ekleme ve `localStorage` ile kalıcı sipariş geçmişi.
- **1 Adımlı Ödeme, Doğrulama & Bildirimler:** Boş sepetle sipariş verilmesini engelleyen kontrol, teslimat/ödeme ekranı ve her işlemde ekranda beliren toast bildirimleri.

## 📁 Proje Yapısı

```text
saha-sepet-projesi/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── img/
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   ├── 4.png
│   ├── 5.png
│   ├── bag.png
│   ├── ball.png
│   ├── bottle.png
│   ├── headband.png
│   ├── hero.jpg
│   ├── longsleeve.png
│   ├── shoes.png
│   ├── shorts.png
│   ├── sleeve.png
│   └── socks.png
├── GOREV.md
├── GOREV-KOD-OKUMA.md
└── README.md
'''
🖼️ Ekran Görüntüleri### 1. Ana Sayfa & Hero Alanı
![Ana Sayfa ve Hero Alanı](img/1.png)

### 2. Ekipman Kataloğu & Filtreler
![Ekipman Kataloğu ve Filtreler](img/2.png)

### 3. Ürün Kartları & Koleksiyon
![Ürün Kartları ve Koleksiyon](img/3.png)

### 4. Sepet Paneli & S.S.S.
![Sepet Paneli ve S.S.S.](img/4.png)

### 5. Teslimat ve Ödeme Bilgileri
![Teslimat ve Ödeme Bilgileri](img/5.png)
​
