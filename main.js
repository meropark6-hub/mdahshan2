// ===== Menu Data =====
const menuData = {};

menuData.appetizers = [
  { name: "Bruschetta Trio", price: "$12", desc: "Toasted ciabatta with tomato basil, mushroom truffle, and whipped ricotta.", img: "https://images.unsplash.com/photo-1572695157366-5e585ab28f5f?auto=format&fit=crop&w=600&q=80" },
  { name: "Crispy Calamari", price: "$14", desc: "Lightly fried squid, lemon aioli, and marinara dipping sauce.", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80" },
  { name: "Burrata & Prosciutto", price: "$16", desc: "Creamy burrata, aged prosciutto, arugula, and balsamic glaze.", img: "https://images.unsplash.com/photo-1608897013039-8a56cbf3233d?auto=format&fit=crop&w=600&q=80" },
  { name: "French Onion Soup", price: "$11", desc: "Caramelized onions, gruyère crouton, rich beef broth.", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80" },
  { name: "Caesar Salad", price: "$10", desc: "Romaine, parmesan, house croutons, classic Caesar dressing.", img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=600&q=80" },
  { name: "Tuna Tartare", price: "$18", desc: "Fresh ahi tuna, avocado, sesame, crispy wonton chips.", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80" }
];

menuData.mains = [
  { name: "Wood-Fired Ribeye", price: "$42", desc: "12oz prime ribeye, herb butter, roasted garlic mashed potatoes.", img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80" },
  { name: "Pan-Seared Salmon", price: "$34", desc: "Atlantic salmon, lemon dill sauce, seasonal vegetables.", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80" },
  { name: "Truffle Risotto", price: "$28", desc: "Arborio rice, wild mushrooms, parmesan, black truffle oil.", img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80" },
  { name: "Chicken Marsala", price: "$26", desc: "Pan-fried chicken, marsala wine sauce, mushrooms, polenta.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80" },
  { name: "Lobster Ravioli", price: "$38", desc: "House-made ravioli, lobster, tomato cream, basil.", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80" },
  { name: "Margherita Pizza", price: "$18", desc: "Wood-fired, San Marzano tomatoes, mozzarella, basil.", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80" }
];
menuData.desserts = [
  { name: "Tiramisu", price: "$11", desc: "Espresso-soaked ladyfingers, mascarpone, cocoa.", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80" },
  { name: "Crème Brûlée", price: "$10", desc: "Vanilla custard, caramelized sugar crust.", img: "https://images.unsplash.com/photo-1470124182917-cc6e7329eb5b?auto=format&fit=crop&w=600&q=80" },
  { name: "Chocolate Lava Cake", price: "$12", desc: "Warm molten center, vanilla bean ice cream.", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=600&q=80" },
  { name: "Panna Cotta", price: "$9", desc: "Silky cream, berry compote, mint.", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80" },
  { name: "Cheesecake", price: "$10", desc: "New York style, graham crust, strawberry topping.", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80" },
  { name: "Gelato Trio", price: "$8", desc: "Pistachio, stracciatella, and raspberry scoops.", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80" }
];

menuData.drinks = [
  { name: "House Red Wine", price: "$12", desc: "Glass of our signature Cabernet Sauvignon.", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80" },
  { name: "Craft Cocktail", price: "$14", desc: "Seasonal mixologist creation, ask your server.", img: "https://images.unsplash.com/photo-1514362543478-4d5c29235e71?auto=format&fit=crop&w=600&q=80" },
  { name: "Espresso", price: "$4", desc: "Single origin, freshly pulled shot.", img: "https://images.unsplash.com/photo-1510707577820-568a73f0e1d1?auto=format&fit=crop&w=600&q=80" },
  { name: "Sparkling Water", price: "$5", desc: "Chilled, with lemon or lime.", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" },
  { name: "Fresh Lemonade", price: "$6", desc: "House-made, mint, and honey.", img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=600&q=80" },
  { name: "Matcha Latte", price: "$7", desc: "Ceremonial grade matcha, oat milk.", img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=600&q=80" }
];

// ===== Render Menu =====
const menuGrid = document.getElementById("menuGrid");
const tabs = document.querySelectorAll(".menu-tab");

function renderMenu(category) {
  const items = menuData[category] || [];
  menuGrid.innerHTML = items
    .map(
      (item) => `
    <article class="menu-card reveal">
      <div class="menu-card-img" style="background-image:url('${item.img}')"></div>
      <div class="menu-card-body">
        <div class="menu-card-head">
          <h3 class="menu-card-name">${item.name}</h3>
          <span class="menu-card-price">${item.price}</span>
        </div>
        <p class="menu-card-desc">${item.desc}</p>
      </div>
    </article>
  `
    )
    .join("");
  observeReveals();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderMenu(tab.dataset.category);
  });
});

renderMenu("appetizers");

// ===== Navbar scroll =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// ===== Mobile nav =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.innerHTML = open
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

navLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-link");
function updateActiveNav() {
  let current = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  navAnchors.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}
window.addEventListener("scroll", updateActiveNav);
updateActiveNav();

// ===== Scroll reveal =====
function observeReveals() {
  const reveals = document.querySelectorAll(".reveal:not(.visible)");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => io.observe(el));
}
observeReveals();

// ===== Reservation form =====
const form = document.getElementById("reservationForm");
const msg = document.getElementById("formMessage");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const date = form.date.value;
  const time = form.time.value;
  const guests = form.guests.value;

  msg.className = "form-message";

  if (!name || !email || !date || !time || !guests) {
    msg.textContent = "Please fill in all required fields.";
    msg.classList.add("error");
    return;
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    msg.textContent = "Please enter a valid email address.";
    msg.classList.add("error");
    return;
  }

  const selectedDate = new Date(date + "T" + time);
  if (selectedDate < new Date()) {
    msg.textContent = "Please choose a future date and time.";
    msg.classList.add("error");
    return;
  }

  msg.textContent = `Thank you, ${name}! Your table for ${guests} is reserved on ${date} at ${time}.`;
  msg.classList.add("success");
  form.reset();
});

// ===== Newsletter =====
const newsletter = document.getElementById("newsletterForm");
newsletter.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = newsletter.querySelector("input");
  if (input.value.trim()) {
    alert("Thanks for subscribing!");
    input.value = "";
  }
});

// ===== Year =====
document.getElementById("year").textContent = new Date().getFullYear();

