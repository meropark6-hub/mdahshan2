const PRODUCTS = [
  {
    id: "ring-aurora",
    name: "خاتم أورورا",
    category: "ring",
    categoryLabel: "خواتم",
    price: 1850,
    karat: 21,
    icon: "ring",
  },
  {
    id: "ring-solitaire",
    name: "خاتم سوليتير",
    category: "ring",
    categoryLabel: "خواتم",
    price: 2420,
    karat: 18,
    icon: "ring",
  },
  {
    id: "necklace-noura",
    name: "سلسلة نورة",
    category: "necklace",
    categoryLabel: "سلاسل",
    price: 3180,
    karat: 21,
    icon: "necklace",
  },
  {
    id: "necklace-moon",
    name: "عقد القمر",
    category: "necklace",
    categoryLabel: "سلاسل",
    price: 2760,
    karat: 18,
    icon: "necklace",
  },
  {
    id: "bracelet-royal",
    name: "سوار ملكي",
    category: "bracelet",
    categoryLabel: "أساور",
    price: 2290,
    karat: 21,
    icon: "bracelet",
  },
  {
    id: "bracelet-silk",
    name: "أسورة الحرير",
    category: "bracelet",
    categoryLabel: "أساور",
    price: 1640,
    karat: 18,
    icon: "bracelet",
  },
];

const ICONS = {
  ring: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <ellipse cx="60" cy="72" rx="32" ry="12" fill="none" stroke="#d4af37" stroke-width="8"/>
      <circle cx="60" cy="42" r="12" fill="#e8d48b"/>
      <circle cx="60" cy="42" r="5" fill="#1b1710"/>
    </svg>`,
  necklace: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <path d="M24 28c12 38 60 38 72 0" fill="none" stroke="#d4af37" stroke-width="4"/>
      <circle cx="60" cy="78" r="10" fill="#e8d48b"/>
    </svg>`,
  bracelet: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <ellipse cx="60" cy="60" rx="34" ry="22" fill="none" stroke="#d4af37" stroke-width="8"/>
      <ellipse cx="60" cy="60" rx="18" ry="10" fill="none" stroke="#8c6b1f" stroke-width="3"/>
    </svg>`,
};

const money = (value) =>
  new Intl.NumberFormat("ar-SA", {
    style: "currency",
    currency: "SAR",
    maximumFractionDigits: 0,
  }).format(value);

const cart = new Map();
const grid = document.getElementById("products-grid");
const drawer = document.getElementById("cart-drawer");
const cartItems = document.getElementById("cart-items");
const toast = document.getElementById("toast");
const checkoutModal = document.getElementById("checkout-modal");
const nav = document.getElementById("main-nav");

function renderProducts(filter = "all") {
  const list = PRODUCTS.filter((item) => filter === "all" || item.category === filter);
  grid.innerHTML = list
    .map(
      (item) => `
      <article class="product-card">
        <div class="product-art">${ICONS[item.icon]}</div>
        <div class="product-body">
          <span class="product-cat">${item.categoryLabel} · عيار ${item.karat}</span>
          <h3>${item.name}</h3>
          <p class="price">${money(item.price)}</p>
          <button class="btn btn-gold" type="button" data-add="${item.id}">إضافة إلى السلة</button>
        </div>
      </article>`
    )
    .join("");
}

function cartQty() {
  return [...cart.values()].reduce((sum, item) => sum + item.qty, 0);
}

function cartTotal() {
  return [...cart.values()].reduce((sum, item) => sum + item.qty * item.price, 0);
}

function renderCart() {
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = cartQty();
  });
  document.querySelectorAll("[data-cart-total]").forEach((el) => {
    el.textContent = money(cartTotal());
  });

  if (!cart.size) {
    cartItems.innerHTML = `<p class="cart-empty">سلتك فارغة حالياً. أضف قطعة ذهب لتبدأ الطلب.</p>`;
    return;
  }

  cartItems.innerHTML = [...cart.values()]
    .map(
      (item) => `
      <div class="cart-row">
        <div>
          <strong>${item.name}</strong><br />
          <small>${money(item.price)} × ${item.qty}</small>
        </div>
        <div class="qty">
          <button type="button" data-dec="${item.id}" aria-label="إنقاص">−</button>
          <span>${item.qty}</span>
          <button type="button" data-inc="${item.id}" aria-label="زيادة">+</button>
        </div>
        <button class="remove" type="button" data-remove="${item.id}">حذف</button>
      </div>`
    )
    .join("");
}

function addToCart(id) {
  const product = PRODUCTS.find((item) => item.id === id);
  if (!product) return;
  const existing = cart.get(id);
  cart.set(id, { ...product, qty: existing ? existing.qty + 1 : 1 });
  renderCart();
  showToast(`تمت إضافة ${product.name} إلى السلة`);
}

function changeQty(id, delta) {
  const item = cart.get(id);
  if (!item) return;
  const next = item.qty + delta;
  if (next <= 0) cart.delete(id);
  else cart.set(id, { ...item, qty: next });
  renderCart();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function setDrawer(open) {
  drawer.classList.toggle("is-open", open);
  drawer.setAttribute("aria-hidden", String(!open));
}

function setModal(open) {
  checkoutModal.classList.toggle("is-open", open);
  checkoutModal.setAttribute("aria-hidden", String(!open));
}

function updateCalculator() {
  const weight = Number(document.getElementById("calc-weight").value) || 0;
  const karat = Number(document.getElementById("calc-karat").value) || 24;
  const gram24 = Number(document.getElementById("calc-gram-price").value) || 0;
  const makingPct = Number(document.getElementById("calc-making").value) || 0;
  const goldValue = weight * gram24 * (karat / 24);
  const making = goldValue * (makingPct / 100);
  document.getElementById("calc-gold-value").textContent = money(goldValue);
  document.getElementById("calc-making-value").textContent = money(making);
  document.getElementById("calc-total").textContent = money(goldValue + making);
  document.querySelector("[data-live-rate]").textContent = money(gram24);
}

document.querySelectorAll("[data-filter]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((el) => el.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderProducts(btn.dataset.filter);
  });
});

grid.addEventListener("click", (event) => {
  const id = event.target.closest("[data-add]")?.dataset.add;
  if (id) addToCart(id);
});

cartItems.addEventListener("click", (event) => {
  const inc = event.target.closest("[data-inc]")?.dataset.inc;
  const dec = event.target.closest("[data-dec]")?.dataset.dec;
  const remove = event.target.closest("[data-remove]")?.dataset.remove;
  if (inc) changeQty(inc, 1);
  if (dec) changeQty(dec, -1);
  if (remove) {
    cart.delete(remove);
    renderCart();
  }
});

document.querySelectorAll("[data-open-cart]").forEach((btn) => {
  btn.addEventListener("click", () => setDrawer(true));
});
document.querySelectorAll("[data-close-cart]").forEach((btn) => {
  btn.addEventListener("click", () => setDrawer(false));
});
drawer.addEventListener("click", (event) => {
  if (event.target === drawer) setDrawer(false);
});

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (!cart.size) {
    showToast("أضف منتجاً قبل إتمام الشراء");
    return;
  }
  setDrawer(false);
  setModal(true);
});

document.querySelectorAll("[data-close-checkout]").forEach((btn) => {
  btn.addEventListener("click", () => setModal(false));
});
checkoutModal.addEventListener("click", (event) => {
  if (event.target === checkoutModal) setModal(false);
});

document.getElementById("checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  cart.clear();
  renderCart();
  setModal(false);
  event.target.reset();
  showToast("تم تأكيد طلبك بنجاح. شكراً لثقتك بدار الإشراق");
});

document.querySelector("[data-menu-toggle]").addEventListener("click", (event) => {
  const open = !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", open);
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("is-open"));
});

["calc-weight", "calc-karat", "calc-gram-price", "calc-making"].forEach((id) => {
  document.getElementById(id).addEventListener("input", updateCalculator);
  document.getElementById(id).addEventListener("change", updateCalculator);
});

renderProducts();
renderCart();
updateCalculator();
