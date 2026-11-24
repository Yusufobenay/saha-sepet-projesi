// SAHA — Basketbol Ekipmanları E-Ticaret Uygulaması

const products = [
  {
    id: "ball",
    name: "Outdoor Basketbol Topu",
    category: "top",
    categoryLabel: "Toplar",
    price: 450,
    rating: 4.9,
    reviews: 128,
    badge: "ÇOK SATAN",
    image: "img/ball.png",
    shortDesc: "No. 7 · Asfalt ve salon uyumlu",
    description: "Açık saha beton zeminlerine özel aşınmaya dayanıklı kompozit kaplama ve derin kanal yapısı ile üstün top kontrolü sağlar.",
    keywords: "top basketbol topu ball outdoor indoor no 7 mac topu sokak",
    variantLabel: "Boyut",
    variants: ["No. 6", "No. 7"],
    defaultVariant: "No. 7",
    specs: ["Standart resmi maç ölçüsü", "Yüksek tutuşlu pütürlü dış yüzey", "İç ve dış saha kullanımına uygun"],
    customerReviews: [
      { author: "Mert K.", date: "12 Kas 2026", rating: 5, text: "Sahil betonunda 2 aydır oynuyorum, tutuşu hâlâ ilk günkü gibi." },
      { author: "Emre T.", date: "4 Kas 2026", rating: 5, text: "Şişik ve kutulu geldi, kanal derinliği şut hissi için çok iyi." }
    ]
  },
  {
    id: "headband",
    name: "Spor Kafa Bandı",
    category: "aksesuar",
    categoryLabel: "Aksesuar",
    price: 220,
    rating: 4.8,
    reviews: 74,
    badge: "YENİ",
    image: "img/headband.png",
    shortDesc: "Ter emici · Esnek nefes alan kumaş",
    description: "Yüksek tempolu maçlarda teri hızla emerek odağını korumanı sağlar. Kaymayan iç dokusuyla başı sıkmadan sabit durur.",
    keywords: "kafa bandi headband bant ter bandi sac bandi aksesuar",
    variantLabel: "Beden",
    variants: ["Standart"],
    defaultVariant: "Standart",
    specs: ["Hızlı kuruyan mikrofiber kumaş", "Kaymaz ergonomik tasarım", "Makinede yıkanabilir"],
    customerReviews: [
      { author: "Caner A.", date: "18 Kas 2026", rating: 5, text: "Koşarken hiç kaymıyor ve teri göze indirmiyor, tam aradığım bant." },
      { author: "Selin D.", date: "9 Kas 2026", rating: 4, text: "Kumaşı yumuşak, sıkmıyor. Yıkayınca formunu koruyor." }
    ]
  },
  {
    id: "bottle",
    name: "Çelik Spor Matarası",
    category: "ekipman",
    categoryLabel: "Çanta & Matara",
    price: 380,
    rating: 4.9,
    reviews: 96,
    badge: null,
    image: "img/bottle.png",
    shortDesc: "800 ml · Çift duvarlı ısı yalıtımı",
    description: "Paslanmaz çelik gövdesi sayesinde suyunu 12 saate kadar soğuk tutar. Tek elle açılabilen sızdırmaz spor kapağına sahiptir.",
    keywords: "matara suluk termos su sisesi bottle celik",
    variantLabel: "Kapasite",
    variants: ["800 ml", "1000 ml"],
    defaultVariant: "800 ml",
    specs: ["İdeal antrenman kapasitesi", "BPA içermeyen 304 paslanmaz çelik", "Sızdırmaz kilitli kapak"],
    customerReviews: [
      { author: "Burak Y.", date: "15 Kas 2026", rating: 5, text: "Sırt çantasında akıtma yapmıyor, suyu saatlerce buz gibi tutuyor." },
      { author: "Arda S.", date: "2 Kas 2026", rating: 5, text: "Tek elle açıp içmesi maç aralarında çok pratik." }
    ]
  },
  {
    id: "socks",
    name: "Pro Basketbol Çorabı",
    category: "aksesuar",
    categoryLabel: "Aksesuar",
    price: 190,
    rating: 4.7,
    reviews: 52,
    badge: null,
    image: "img/socks.png",
    shortDesc: "Yastıklamalı taban · Bilek destekli",
    description: "Sıçrama ve ani yön değiştirmelerde darbe emici taban desteği sunar. Üst file bölgeleri ayakların nefes almasını sağlar.",
    keywords: "corap basketbol corabi socks uzun corap bilek aksesuar",
    variantLabel: "Numara",
    variants: ["38-41", "42-45"],
    defaultVariant: "42-45",
    specs: ["Güçlendirilmiş topuk ve burun bölgesi", "Orta ayak kemer sıkıştırma bandı", "Nefes alan üst file dokuma"],
    customerReviews: [
      { author: "Oğuzhan B.", date: "10 Kas 2026", rating: 5, text: "Tabanı kalın ve destekli, ayakkabı içinde ayak kaymasını kesiyor." },
      { author: "Kaan M.", date: "1 Kas 2026", rating: 4, text: "Kalitesi çok güzel, 2 çift daha almayı düşünüyorum." }
    ]
  },
  {
    id: "sleeve",
    name: "Kompresyon Şut Kolluğu",
    category: "aksesuar",
    categoryLabel: "Aksesuar",
    price: 290,
    rating: 4.8,
    reviews: 63,
    badge: "FAVORİ",
    image: "img/sleeve.png",
    shortDesc: "Kas desteği · UV korumalı doku",
    description: "Şut ritmini koruyan hafif kompresyon yapısı kol kaslarını sıcak tutar ve açık hava maçlarında güneşten korur.",
    keywords: "kolluk sut kollugu sleeve kompresyon kol bandi aksesuar",
    variantLabel: "Beden",
    variants: ["S/M", "L/XL"],
    defaultVariant: "S/M",
    specs: ["Dört yöne esneyen likralı yapı", "Üst kısımda kaymaz silikon şerit", "Tekli paket (sağ/sol uyumlu)"],
    customerReviews: [
      { author: "Ege R.", date: "14 Kas 2026", rating: 5, text: "Üstteki silikon şerit sayesinde maç boyu aşağı kaymıyor." },
      { author: "Tuna V.", date: "5 Kas 2026", rating: 5, text: "Kolu tam sarıyor, soğuk havalarda açık sahada çok iş görüyor." }
    ]
  },
  {
    id: "bag",
    name: "Saha Spor Sırt Çantası",
    category: "ekipman",
    categoryLabel: "Çanta & Matara",
    price: 890,
    rating: 4.9,
    reviews: 41,
    badge: "SINIRLI STOK",
    image: "img/bag.png",
    shortDesc: "32 L · Ayrı top ve ayakkabı bölmesi",
    description: "Basketbol topu, ayakkabı ve mataranı düzenli taşıman için tasarlandı. Su itici tabanı sayesinde saha kenarında güvenle kullanılır.",
    keywords: "canta sirt cantasi spor cantasi bag ekipman",
    variantLabel: "Hacim",
    variants: ["32 L Standart"],
    defaultVariant: "32 L Standart",
    specs: ["No. 7 top sığan geniş ön bölme", "Hava delikli ayrı ayakkabı gözü", "Su itici güçlendirilmiş alt taban"],
    customerReviews: [
      { author: "Umut G.", date: "19 Kas 2026", rating: 5, text: "Hem top hem 44 numara ayakkabı aynı anda rahatça sığıyor." },
      { author: "Deniz Ö.", date: "7 Kas 2026", rating: 5, text: "Fermuarları ve alt tabanı çok sağlam, tam spor çantası." }
    ]
  },
  {
    id: "shoes",
    name: "Court Pro Basketbol Ayakkabısı",
    category: "giyim",
    categoryLabel: "Giyim & Ayakkabı",
    price: 3450,
    rating: 4.9,
    reviews: 84,
    badge: "YENİ SEZON",
    image: "img/shoes.png",
    shortDesc: "Yüksek zemin tutuşu · Hızlı tepki veren taban",
    description: "Ani yön değiştirmeler ve sert duruşlar için tasarlanmış çok yönlü kauçuk dış taban ve hafif yastıklama sistemi sunar.",
    keywords: "ayakkabi basketbol ayakkabisi sneaker shoes spor ayakkabi giyim",
    variantLabel: "Numara",
    variants: ["41", "42", "43", "44", "45"],
    defaultVariant: "43",
    specs: ["Açık ve kapalı saha zeminine uygun taban", "Bilek destekli nefes alan üst saya", "Hafif ve tepkili orta taban köpüğü"],
    customerReviews: [
      { author: "Berkay Ç.", date: "20 Kas 2026", rating: 5, text: "Yön değiştirmelerde zemini jilet gibi tutuyor, tam numaranızı alın." },
      { author: "Furkan E.", date: "11 Kas 2026", rating: 5, text: "Yastıklaması çok rahat, 2 saatlik maçtan sonra bile ayak yormuyor." }
    ]
  },
  {
    id: "shorts",
    name: "Dri-Fit Basketbol Şortu",
    category: "giyim",
    categoryLabel: "Giyim & Ayakkabı",
    price: 680,
    rating: 4.8,
    reviews: 59,
    badge: null,
    image: "img/shorts.png",
    shortDesc: "Hafif file kumaş · Derin yan cepler",
    description: "Maç boyunca hareket özgürlüğü sağlayan geniş kesimi ve teri hızla uzaklaştıran nefes alan file dokusuyla maksimum konfor verir.",
    keywords: "sort basketbol sortu shorts dri fit file giyim",
    variantLabel: "Beden",
    variants: ["S", "M", "L", "XL"],
    defaultVariant: "L",
    specs: ["%100 geri dönüştürülmüş hafif polyester", "Kordonlu esnek bel bandı", "Diz üstü rahat basketbol kesimi"],
    customerReviews: [
      { author: "Hakan N.", date: "17 Kas 2026", rating: 5, text: "Kumaşı aşırı hafif, ter tutmuyor ve kalıbı tam basketbol şortu gibi." },
      { author: "Yiğit P.", date: "6 Kas 2026", rating: 4, text: "Cepleri derin, renkleri fotoğraftaki gibi canlı." }
    ]
  },
  {
    id: "longsleeve",
    name: "Chicago Bulls Uzun Kollu Tişört",
    category: "giyim",
    categoryLabel: "Giyim & Ayakkabı",
    price: 2799,
    rating: 4.9,
    reviews: 47,
    badge: "FAVORİ",
    image: "img/longsleeve.png",
    shortDesc: "NBA Koleksiyonu · Nefes alan pamuklu doku",
    description: "Maç öncesi ısınma ve günlük sokak stili için tasarlanan uzun kollu basketbol tişörtü. Yumuşak dokusu ve rahat kalıbıyla gün boyu konfor sunar.",
    keywords: "tisort t-shirt uzun kollu nba chicago bulls forma ust giyim sweatshirt",
    variantLabel: "Beden",
    variants: ["S", "M", "L", "XL"],
    defaultVariant: "L",
    specs: ["Yumuşak ve nefes alan pamuklu kumaş", "Esnek ribanalı yaka ve manşetler", "Günlük ve antrenman öncesi kullanıma uygun"],
    customerReviews: [
      { author: "Alp K.", date: "21 Kas 2026", rating: 5, text: "Kumaş kalitesi ve duruşu çok iyi, hem ısınmada hem dışarıda giyiyorum." },
      { author: "Sinan D.", date: "13 Kas 2026", rating: 5, text: "Manşetleri sıkmıyor, tam bedeninizi alabilirsiniz." }
    ]
  }
];

// İş Kuralları
const TAX_RATE = 0.20;
const DISCOUNT_LIMIT = 1000;
const DISCOUNT_RATE = 0.10;
const COUPON_CODE = "SAHA10";
const COUPON_RATE = 0.05;

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// Türkçe karakter toleranslı arama yardımcısı
function normalizeText(text) {
  return String(text || "")
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ç", "c")
    .replaceAll("ğ", "g")
    .replaceAll("ı", "i")
    .replaceAll("ö", "o")
    .replaceAll("ş", "s")
    .replaceAll("ü", "u")
    .trim();
}

function loadCartFromStorage() {
  try {
    const raw = JSON.parse(localStorage.getItem("saha_cart")) || [];
    return raw.map(item => {
      const variant = item.variant || item.defaultVariant || "Standart";
      return {
        ...item,
        variant,
        cartKey: item.cartKey || `${item.id}__${variant}`
      };
    });
  } catch {
    return [];
  }
}

// Uygulama Durumu
let cart = loadCartFromStorage();
let favorites = JSON.parse(localStorage.getItem("saha_favs")) || [];
let orders = JSON.parse(localStorage.getItem("saha_orders")) || [];
let customReviews = JSON.parse(localStorage.getItem("saha_reviews")) || {};
let activeCategory = "all";
let searchQuery = "";
let sortBy = "featured";
let showFavoritesOnly = false;
let appliedCoupon = null;
let selectedModalVariant = null;

// DOM Elemanları
const productGrid = document.querySelector("#product-grid");
const catalogTitle = document.querySelector("#catalog-title");
const categoryPills = document.querySelector("#category-pills");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const favoritesToggle = document.querySelector("#favorites-toggle");
const favCountElement = document.querySelector("#fav-count");

const ordersToggle = document.querySelector("#orders-toggle");
const ordersCountElement = document.querySelector("#orders-count");
const ordersModal = document.querySelector("#orders-modal");
const closeOrdersBtn = document.querySelector("#close-orders-btn");
const ordersListElement = document.querySelector("#orders-list");

const overlay = document.querySelector("#overlay");
const cartDrawer = document.querySelector("#cart-drawer");
const openCartBtn = document.querySelector("#open-cart-btn");
const heroCartBtn = document.querySelector("#hero-cart-btn");
const closeCartBtn = document.querySelector("#close-cart-btn");

const cartItemsElement = document.querySelector("#cart-items");
const subtotalElement = document.querySelector("#subtotal");
const discountElement = document.querySelector("#discount");
const couponRow = document.querySelector("#coupon-row");
const couponDiscountElement = document.querySelector("#coupon-discount");
const taxElement = document.querySelector("#tax");
const grandTotalElement = document.querySelector("#grand-total");
const cartCountElement = document.querySelector("#cart-count");
const headerCountElement = document.querySelector("#header-count");
const discountNoteElement = document.querySelector("#discount-note");
const discountProgress = document.querySelector("#discount-progress");
const clearCartButton = document.querySelector("#clear-cart-button");
const couponForm = document.querySelector("#coupon-form");
const couponInput = document.querySelector("#coupon-input");

const productModal = document.querySelector("#product-modal");
const modalContent = document.querySelector("#modal-content");
const closeModalBtn = document.querySelector("#close-modal-btn");

const checkoutModal = document.querySelector("#checkout-modal");
const closeCheckoutBtn = document.querySelector("#close-checkout-btn");
const checkoutForm = document.querySelector("#checkout-form");
const checkoutItemsCount = document.querySelector("#checkout-items-count");
const checkoutTotalAmount = document.querySelector("#checkout-total-amount");
const cardFields = document.querySelector("#card-fields");

const orderModal = document.querySelector("#order-modal");
const orderCodeElement = document.querySelector("#order-code");
const orderSummaryText = document.querySelector("#order-summary-text");
const closeOrderBtn = document.querySelector("#close-order-btn");

const faqList = document.querySelector("#faq-list");
const newsletterForm = document.querySelector("#newsletter-form");
const toastElement = document.querySelector("#toast");

function saveState() {
  localStorage.setItem("saha_cart", JSON.stringify(cart));
  localStorage.setItem("saha_favs", JSON.stringify(favorites));
  localStorage.setItem("saha_orders", JSON.stringify(orders));
  localStorage.setItem("saha_reviews", JSON.stringify(customReviews));
}

function formatPrice(amount) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY"
  }).format(amount);
}

let toastTimer;
function showToast(message) {
  toastElement.textContent = message;
  toastElement.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastElement.classList.remove("show"), 2200);
}

function getProductReviews(product) {
  const userAdded = customReviews[product.id] || [];
  return [...userAdded, ...product.customerReviews];
}

function getReviewCount(product) {
  return product.reviews + (customReviews[product.id] ? customReviews[product.id].length : 0);
}

// Ürün Listeleme ve Akıllı Arama
function getFilteredProducts() {
  let list = [...products];

  if (showFavoritesOnly) {
    list = list.filter(p => favorites.includes(p.id));
  }

  if (activeCategory !== "all") {
    list = list.filter(p => p.category === activeCategory);
  }

  const q = normalizeText(searchQuery);
  if (q !== "") {
    list = list.filter(p =>
      normalizeText(p.name).includes(q) ||
      normalizeText(p.shortDesc).includes(q) ||
      normalizeText(p.categoryLabel).includes(q) ||
      normalizeText(p.keywords).includes(q)
    );

    // Ürün adında eşleşenleri en üstte göster
    list.sort((a, b) => {
      const aInName = normalizeText(a.name).includes(q) ? 1 : 0;
      const bInName = normalizeText(b.name).includes(q) ? 1 : 0;
      return bInName - aInName;
    });
  }

  if (sortBy === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  }

  return list;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  favCountElement.textContent = favorites.length;
  ordersCountElement.textContent = orders.length;
  favoritesToggle.classList.toggle("active", showFavoritesOnly);
  catalogTitle.textContent = showFavoritesOnly ? "Favori Ekipmanlarım" : "Tüm Ekipmanlar";

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <h3>Aradığın kriterde ürün bulunamadı</h3>
        <p>Filtreleri temizleyerek tüm basketbol ekipmanlarına göz atabilirsin.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered.map(product => {
    const isFav = favorites.includes(product.id);
    const totalReviews = getReviewCount(product);
    return `
      <article class="product-card">
        <div class="product-visual" data-open-modal="${product.id}">
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
          <button class="fav-btn ${isFav ? "is-fav" : ""}" data-fav="${product.id}" type="button" aria-label="Favorilere ekle">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <img src="${product.image}" alt="${product.name}" onerror="this.outerHTML='<div class=img-placeholder><svg width=36 height=36 viewBox=0 0 24 24 fill=none stroke=currentColor stroke-width=1.5><rect x=3 y=3 width=18 height=18 rx=2></rect><circle cx=8.5 cy=8.5 r=1.5></circle><polyline points=21 15 16 10 5 21></polyline></svg><span>${product.name}</span></div>'">
        </div>
        <div class="product-meta">
          <span>${product.categoryLabel}</span>
          <span class="rating">
            <svg width="13" height="13" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            ${product.rating} (${totalReviews})
          </span>
        </div>
        <h3 data-open-modal="${product.id}">${product.name}</h3>
        <p class="product-desc">${product.shortDesc}</p>
        <div class="product-footer">
          <div class="price-wrap"><strong>${formatPrice(product.price)}</strong></div>
          <div class="card-actions">
            <button class="btn-outline-sm" data-open-modal="${product.id}" type="button">İncele</button>
            <button class="add-button" data-add="${product.id}" type="button">Sepete Ekle</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Ürün Detay Modalı (Beden/Numara + Yorumlar + Canlı Yorum Ekleme)
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  selectedModalVariant = product.defaultVariant;
  const allReviews = getProductReviews(product);
  const totalReviews = getReviewCount(product);

  const reviewsHtml = allReviews.map(rev => `
    <div class="review-card">
      <div class="review-top">
        <span class="review-author">${escapeHtml(rev.author)}</span>
        <span class="review-date">${escapeHtml(rev.date)}</span>
      </div>
      <div class="review-stars">${"★".repeat(rev.rating)}${"☆".repeat(5 - rev.rating)}</div>
      <p class="review-text">${escapeHtml(rev.text)}</p>
    </div>
  `).join("");

  modalContent.innerHTML = `
    <div class="modal-grid">
      <div class="modal-visual">
        <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
      </div>
      <div class="modal-details">
        <span class="eyebrow">${product.categoryLabel.toUpperCase()}</span>
        <h3>${product.name}</h3>
        <div class="modal-price">${formatPrice(product.price)}</div>
        <p class="modal-desc">${product.description}</p>

        <div class="variant-section">
          <div class="variant-label">
            <span>${product.variantLabel} Seçimi</span>
            <span id="selected-variant-label">${selectedModalVariant}</span>
          </div>
          <div class="variant-options" id="variant-options">
            ${product.variants.map(v => `
              <button class="variant-btn ${v === selectedModalVariant ? "selected" : ""}" data-variant="${v}" type="button">${v}</button>
            `).join("")}
          </div>
        </div>

        <ul class="modal-specs">
          ${product.specs.map(spec => `<li>${spec}</li>`).join("")}
        </ul>
        <button class="btn-primary" data-modal-add="${product.id}" type="button" style="width: 100%; justify-content: center;">
          Sepete Ekle — ${formatPrice(product.price)}
        </button>
      </div>
    </div>

    <div class="modal-reviews">
      <h4>Müşteri Değerlendirmeleri (${totalReviews})</h4>
      <div class="review-list">${reviewsHtml}</div>

      <form class="review-form" id="review-form" data-product-id="${product.id}">
        <div class="review-form-row">
          <input type="text" id="review-author" placeholder="Adın (Örn. Kerem Y.)" required>
          <select id="review-rating" aria-label="Puan">
            <option value="5">★★★★★ (5)</option>
            <option value="4">★★★★☆ (4)</option>
            <option value="3">★★★☆☆ (3)</option>
            <option value="2">★★☆☆☆ (2)</option>
            <option value="1">★☆☆☆☆ (1)</option>
          </select>
        </div>
        <textarea id="review-text" rows="2" placeholder="Ürün hakkındaki deneyimini yaz..." required></textarea>
        <button class="btn-outline-sm" type="submit" style="align-self: flex-start;">Yorum Gönder</button>
      </form>
    </div>
  `;

  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
}

function closeProductModal() {
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
}

// Sipariş Geçmişi Modalı
function renderOrders() {
  ordersCountElement.textContent = orders.length;

  if (orders.length === 0) {
    ordersListElement.innerHTML = `
      <div class="empty-cart" style="padding: 40px 16px;">
        <h4>Henüz siparişin yok</h4>
        <p>Tamamladığın siparişler burada kayıtlı olarak görünür.</p>
      </div>
    `;
    return;
  }

  ordersListElement.innerHTML = orders.map(order => `
    <div class="order-history-card">
      <div class="order-history-top">
        <span class="order-history-code">${escapeHtml(order.code)}</span>
        <span class="order-status-pill">Hazırlanıyor</span>
      </div>
      <div class="order-history-items">
        ${order.items.map(item => `<span>• ${escapeHtml(item.name)} (${escapeHtml(item.variant)}) × ${item.quantity}</span>`).join("")}
      </div>
      <div class="order-history-footer">
        <span>${escapeHtml(order.date)} · ${escapeHtml(order.city)} (${escapeHtml(order.paymentMethod)})</span>
        <strong>${formatPrice(order.total)}</strong>
      </div>
    </div>
  `).join("");
}

function openOrdersModal() {
  renderOrders();
  ordersModal.classList.add("open");
  ordersModal.setAttribute("aria-hidden", "false");
}

function closeOrdersModal() {
  ordersModal.classList.remove("open");
  ordersModal.setAttribute("aria-hidden", "true");
}

// Sepet Paneli (Drawer)
function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
}

// Mini Checkout Modalı
function openCheckoutModal() {
  const totals = calculateTotals();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  checkoutItemsCount.textContent = totalQuantity;
  checkoutTotalAmount.textContent = formatPrice(totals.grandTotal);

  closeCart();
  checkoutModal.classList.add("open");
  checkoutModal.setAttribute("aria-hidden", "false");
}

function closeCheckoutModal() {
  checkoutModal.classList.remove("open");
  checkoutModal.setAttribute("aria-hidden", "true");
}

// Sepet İşlemleri (Varyant destekli)
function addToCart(productId, chosenVariant = null) {
  const selectedProduct = products.find(product => product.id === productId);
  if (!selectedProduct) return;

  const variant = chosenVariant || selectedProduct.defaultVariant || "Standart";
  const cartKey = `${selectedProduct.id}__${variant}`;
  const existingItem = cart.find(item => item.cartKey === cartKey);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: selectedProduct.id,
      cartKey,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
      variant,
      quantity: 1
    });
  }

  saveState();
  renderCart();
  showToast(`${selectedProduct.name} (${variant}) sepete eklendi.`);
}

function changeQuantity(cartKey, amount) {
  const item = cart.find(product => product.cartKey === cartKey);
  if (!item) return;

  item.quantity += amount;
  if (item.quantity <= 0) {
    cart = cart.filter(product => product.cartKey !== cartKey);
  }

  saveState();
  renderCart();
}

function removeFromCart(cartKey) {
  cart = cart.filter(product => product.cartKey !== cartKey);
  saveState();
  renderCart();
}

function toggleFavorite(productId) {
  if (favorites.includes(productId)) {
    favorites = favorites.filter(id => id !== productId);
    showToast("Favorilerden çıkarıldı.");
  } else {
    favorites.push(productId);
    showToast("Favorilere eklendi.");
  }
  saveState();
  renderProducts();
}

function calculateTotals() {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const autoDiscount = subtotal >= DISCOUNT_LIMIT ? subtotal * DISCOUNT_RATE : 0;
  const couponDiscount = appliedCoupon === COUPON_CODE ? (subtotal - autoDiscount) * COUPON_RATE : 0;
  const taxableAmount = subtotal - autoDiscount - couponDiscount;
  const tax = taxableAmount * TAX_RATE;
  const grandTotal = taxableAmount + tax;

  return { subtotal, autoDiscount, couponDiscount, tax, grandTotal };
}

function renderCart() {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  cartCountElement.textContent = totalQuantity;
  headerCountElement.textContent = totalQuantity;
  clearCartButton.style.display = cart.length === 0 ? "none" : "inline-block";

  if (cart.length === 0) {
    appliedCoupon = null;
    cartItemsElement.innerHTML = `
      <div class="empty-cart">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        <h4>Sepetin henüz boş</h4>
        <p>Saha ekipmanlarını inceleyip sepetine ekleyebilirsin.</p>
      </div>
    `;
  } else {
    cartItemsElement.innerHTML = cart.map(item => `
      <div class="cart-row">
        <div class="cart-thumb">
          <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'">
        </div>
        <div class="cart-info">
          <h4>${item.name}</h4>
          <span class="cart-variant-tag">Seçim: ${item.variant}</span>
          <p>${formatPrice(item.price)} / adet</p>
          <div class="quantity">
            <button data-action="decrease" data-key="${item.cartKey}" type="button" aria-label="Azalt">−</button>
            <span>${item.quantity}</span>
            <button data-action="increase" data-key="${item.cartKey}" type="button" aria-label="Artır">+</button>
          </div>
        </div>
        <div class="cart-right">
          <strong>${formatPrice(item.price * item.quantity)}</strong>
          <button class="remove-btn" data-action="remove" data-key="${item.cartKey}" type="button">Kaldır</button>
        </div>
      </div>
    `).join("");
  }

  const totals = calculateTotals();
  subtotalElement.textContent = formatPrice(totals.subtotal);
  discountElement.textContent = "- " + formatPrice(totals.autoDiscount);
  taxElement.textContent = formatPrice(totals.tax);
  grandTotalElement.textContent = formatPrice(totals.grandTotal);

  if (totals.couponDiscount > 0) {
    couponRow.style.display = "flex";
    couponDiscountElement.textContent = "- " + formatPrice(totals.couponDiscount);
  } else {
    couponRow.style.display = "none";
  }

  const progressPct = Math.min((totals.subtotal / DISCOUNT_LIMIT) * 100, 100);
  discountProgress.style.width = `${progressPct}%`;

  if (totals.subtotal === 0) {
    discountNoteElement.textContent = "₺ 1.000 ve üzeri alışverişte %10 otomatik indirim.";
  } else if (totals.subtotal < DISCOUNT_LIMIT) {
    const remaining = DISCOUNT_LIMIT - totals.subtotal;
    discountNoteElement.textContent = `%10 indirim için ${formatPrice(remaining)} daha ekle.`;
  } else {
    discountNoteElement.textContent = "Tebrikler! %10 otomatik indirim sepetine uygulandı.";
  }
}

// Event Listeners
productGrid.addEventListener("click", event => {
  const favBtn = event.target.closest("[data-fav]");
  if (favBtn) {
    toggleFavorite(favBtn.dataset.fav);
    return;
  }

  const addBtn = event.target.closest("[data-add]");
  if (addBtn) {
    addToCart(addBtn.dataset.add);
    return;
  }

  const modalTrigger = event.target.closest("[data-open-modal]");
  if (modalTrigger) {
    openProductModal(modalTrigger.dataset.openModal);
  }
});

modalContent.addEventListener("click", event => {
  const variantBtn = event.target.closest("[data-variant]");
  if (variantBtn) {
    selectedModalVariant = variantBtn.dataset.variant;
    modalContent.querySelectorAll(".variant-btn").forEach(btn => btn.classList.remove("selected"));
    variantBtn.classList.add("selected");
    const label = modalContent.querySelector("#selected-variant-label");
    if (label) label.textContent = selectedModalVariant;
    return;
  }

  const modalAdd = event.target.closest("[data-modal-add]");
  if (modalAdd) {
    addToCart(modalAdd.dataset.modalAdd, selectedModalVariant);
    closeProductModal();
    openCart();
  }
});

// Canlı Yorum Gönderme
modalContent.addEventListener("submit", event => {
  const form = event.target.closest("#review-form");
  if (!form) return;
  event.preventDefault();

  const productId = form.dataset.productId;
  const author = form.querySelector("#review-author").value.trim();
  const rating = Number(form.querySelector("#review-rating").value);
  const text = form.querySelector("#review-text").value.trim();
  if (!author || !text) return;

  const today = new Date().toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  if (!customReviews[productId]) customReviews[productId] = [];
  customReviews[productId].unshift({ author, date: today, rating, text });

  saveState();
  renderProducts();
  openProductModal(productId);
  showToast("Değerlendirmen eklendi.");
});

categoryPills.addEventListener("click", event => {
  const pill = event.target.closest(".pill");
  if (!pill) return;

  showFavoritesOnly = false;
  activeCategory = pill.dataset.category;
  categoryPills.querySelectorAll(".pill").forEach(btn => btn.classList.remove("active"));
  pill.classList.add("active");
  renderProducts();
});

searchInput.addEventListener("input", event => {
  searchQuery = event.target.value;
  renderProducts();
});

sortSelect.addEventListener("change", event => {
  sortBy = event.target.value;
  renderProducts();
});

favoritesToggle.addEventListener("click", () => {
  showFavoritesOnly = !showFavoritesOnly;
  renderProducts();
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
});

ordersToggle.addEventListener("click", openOrdersModal);
closeOrdersBtn.addEventListener("click", closeOrdersModal);
ordersModal.addEventListener("click", event => {
  if (event.target === ordersModal) closeOrdersModal();
});

openCartBtn.addEventListener("click", openCart);
heroCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
closeModalBtn.addEventListener("click", closeProductModal);
closeCheckoutBtn.addEventListener("click", closeCheckoutModal);

productModal.addEventListener("click", event => {
  if (event.target === productModal) closeProductModal();
});

checkoutModal.addEventListener("click", event => {
  if (event.target === checkoutModal) closeCheckoutModal();
});

cartItemsElement.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const { key, action } = button.dataset;
  if (action === "increase") changeQuantity(key, 1);
  if (action === "decrease") changeQuantity(key, -1);
  if (action === "remove") removeFromCart(key);
});

clearCartButton.addEventListener("click", () => {
  cart = [];
  appliedCoupon = null;
  saveState();
  renderCart();
  showToast("Sepet temizlendi.");
});

couponForm.addEventListener("submit", event => {
  event.preventDefault();
  if (cart.length === 0) {
    showToast("Kupon kullanmak için önce ürün ekle.");
    return;
  }

  const code = couponInput.value.trim().toUpperCase();
  if (code === COUPON_CODE) {
    appliedCoupon = COUPON_CODE;
    couponInput.value = "";
    renderCart();
    showToast("SAHA10 kuponu uygulandı (%5 ek indirim).");
  } else {
    showToast("Geçersiz kupon kodu. (İpucu: SAHA10)");
  }
});

// Sepetten Ödemeye Geç
document.querySelector("#checkout-button").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Önce sepetine ürün eklemelisin.");
    return;
  }
  openCheckoutModal();
});

// Ödeme Yöntemi Değişimi (Kart alanlarını aç/kapat)
checkoutForm.querySelectorAll('input[name="payment-method"]').forEach(radio => {
  radio.addEventListener("change", event => {
    const isCard = event.target.value === "Kredi / Banka Kartı";
    cardFields.style.display = isCard ? "flex" : "none";
    cardFields.querySelectorAll("input").forEach(input => {
      input.required = isCard;
    });
  });
});

// Siparişi Onayla ve Geçmişe Kaydet
checkoutForm.addEventListener("submit", event => {
  event.preventDefault();

  const customerName = document.querySelector("#customer-name").value.trim();
  const customerCity = document.querySelector("#customer-city").value;
  const paymentMethod = checkoutForm.querySelector('input[name="payment-method"]:checked').value;
  const totals = calculateTotals();
  const randomOrder = "#SH-2026-" + Math.floor(1000 + Math.random() * 9000);
  const orderDate = new Date().toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  orders.unshift({
    code: randomOrder,
    date: orderDate,
    customerName,
    city: customerCity,
    paymentMethod,
    total: totals.grandTotal,
    items: [...cart]
  });

  orderCodeElement.textContent = randomOrder;
  orderSummaryText.textContent = `Teşekkürler ${customerName}! ${formatPrice(totals.grandTotal)} tutarındaki (${paymentMethod}) siparişin ${customerCity} adresine gönderilmek üzere alındı.`;

  cart = [];
  appliedCoupon = null;
  saveState();
  renderCart();
  renderOrders();
  checkoutForm.reset();
  cardFields.style.display = "flex";
  closeCheckoutModal();

  orderModal.classList.add("open");
  orderModal.setAttribute("aria-hidden", "false");
});

closeOrderBtn.addEventListener("click", () => {
  orderModal.classList.remove("open");
  orderModal.setAttribute("aria-hidden", "true");
});

// SSS Akordeon
faqList.addEventListener("click", event => {
  const btn = event.target.closest(".faq-question");
  if (!btn) return;

  const item = btn.closest(".faq-item");
  const answer = item.querySelector(".faq-answer");
  const isOpen = item.classList.contains("active");

  faqList.querySelectorAll(".faq-item").forEach(other => {
    other.classList.remove("active");
    other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    other.querySelector(".faq-answer").style.maxHeight = null;
  });

  if (!isOpen) {
    item.classList.add("active");
    btn.setAttribute("aria-expanded", "true");
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
});

newsletterForm.addEventListener("submit", event => {
  event.preventDefault();
  newsletterForm.reset();
  showToast("Bülten aboneliğin alındı.");
});

// İlk Yükleme
renderProducts();
renderCart();
renderOrders();