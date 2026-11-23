// Saha - Basketbol Ekipmanları Sepet Uygulaması

const products = [
  { id: "ball", name: "Outdoor Basketbol Topu", price: 450, image: "img/ball.png" },
  { id: "headband", name: "Spor Kafa Bandı", price: 220, image: "img/headband.png" },
  { id: "bottle", name: "Çelik Spor Matarası", price: 380, image: "img/bottle.png" }
];

let cart = [];
const TAX_RATE = 0.20;
const DISCOUNT_LIMIT = 1000;
const DISCOUNT_RATE = 0.10;

const cartItemsElement = document.querySelector("#cart-items");
const subtotalElement = document.querySelector("#subtotal");
const discountElement = document.querySelector("#discount");
const taxElement = document.querySelector("#tax");
const grandTotalElement = document.querySelector("#grand-total");
const cartCountElement = document.querySelector("#cart-count");
const headerCountElement = document.querySelector("#header-count");
const discountNoteElement = document.querySelector("#discount-note");
const clearCartButton = document.querySelector("#clear-cart-button");
const toastElement = document.querySelector("#toast");

function formatPrice(amount) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY"
  }).format(amount);
}

function showToast(message) {
  toastElement.textContent = message;
  toastElement.classList.add("show");
  setTimeout(() => toastElement.classList.remove("show"), 1800);
}

function addToCart(productId) {
  const selectedProduct = products.find(product => product.id === productId);

  if (!selectedProduct) {
    showToast("Ürün bulunamadı.");
    return;
  }

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...selectedProduct,
      quantity: 1
    });
  }

  renderCart();
  showToast(selectedProduct.name + " sepete eklendi.");
}

function changeQuantity(productId, amount) {
  const item = cart.find(product => product.id === productId);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== productId);
  }

  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(product => product.id !== productId);
  renderCart();
}

function calculateTotals() {
  let subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  let discount = 0;

  if (subtotal >= DISCOUNT_LIMIT) {
    discount = subtotal * DISCOUNT_RATE;
  }

  const taxableAmount = subtotal - discount;
  const tax = taxableAmount * TAX_RATE;
  const grandTotal = taxableAmount + tax;

  return { subtotal, discount, tax, grandTotal };
}

function renderCart() {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  cartCountElement.textContent = totalQuantity;
  headerCountElement.textContent = totalQuantity;
  clearCartButton.style.display = cart.length === 0 ? "none" : "inline-block";

  if (cart.length === 0) {
    cartItemsElement.innerHTML = `
      <div class="empty-cart">
        <span style="display: inline-flex; justify-content: center; margin-bottom: 8px; color: #555;">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        </span>
        <h3>Sepetin henüz boş</h3>
        <p>Saha ekipmanlarını sepete ekleyerek başlayabilirsin.</p>
      </div>
    `;
  } else {
    cartItemsElement.innerHTML = cart.map(item => `
      <div class="cart-row">
        <div class="cart-thumb" style="padding: 6px; overflow: hidden; background: #f4f4f6;">
          <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: contain; mix-blend-mode: multiply;">
        </div>
        <div class="cart-product">
          <h4>${item.name}</h4>
          <p>${formatPrice(item.price)} / adet</p>
        </div>
        <div class="quantity">
          <button data-action="decrease" data-id="${item.id}" aria-label="Azalt">−</button>
          <span>${item.quantity}</span>
          <button data-action="increase" data-id="${item.id}" aria-label="Artır">+</button>
        </div>
        <strong>${formatPrice(item.price * item.quantity)}</strong>
        <button class="remove-button" data-action="remove" data-id="${item.id}">Sil</button>
      </div>
    `).join("");
  }

  const totals = calculateTotals();
  subtotalElement.textContent = formatPrice(totals.subtotal);
  discountElement.textContent = "- " + formatPrice(totals.discount);
  taxElement.textContent = formatPrice(totals.tax);
  grandTotalElement.textContent = formatPrice(totals.grandTotal);

  if (totals.subtotal === 0) {
    discountNoteElement.textContent = "₺ 1.000 ve üzeri alışverişte %10 indirim fırsatı.";
  } else if (totals.subtotal < DISCOUNT_LIMIT) {
    const remaining = DISCOUNT_LIMIT - totals.subtotal;
    discountNoteElement.textContent = `%10 indirim için ${formatPrice(remaining)} daha ekle.`;
  } else {
    discountNoteElement.textContent = "Tebrikler! %10 indirim sepetine uygulandı.";
  }
}

document.querySelectorAll("[data-add]").forEach(button => {
  button.addEventListener("click", function () {
    addToCart(button.dataset.add);
  });
});

cartItemsElement.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const productId = button.dataset.id;
  const action = button.dataset.action;

  if (action === "increase") changeQuantity(productId, 1);
  if (action === "decrease") changeQuantity(productId, -1);
  if (action === "remove") removeFromCart(productId);
});

clearCartButton.addEventListener("click", () => {
  cart = [];
  renderCart();
  showToast("Sepet temizlendi.");
});

document.querySelector("#checkout-button").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Önce sepetine ürün eklemelisin.");
    return;
  }

  showToast("Siparişin başarıyla oluşturuldu!");
  cart = [];
  renderCart();
});

renderCart();