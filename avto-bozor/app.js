// =========================================================
// AVTOTRADE PRO - DESKTOP AUTOMOTIVE MARKETPLACE LOGIC
// =========================================================

const EXCHANGE_RATE = 12850; // 1 USD = 12,850 UZS

// Default initial vehicle dataset
const INITIAL_CARS = [
  {
    id: "car-1",
    make: "Chevrolet",
    model: "Cobalt Style AT",
    year: 2024,
    priceUsd: 13400,
    mileage: 6200,
    fuel: "Benzin",
    transmission: "Avtomat",
    body: "Sedan",
    city: "Toshkent",
    image: "https://images.unsplash.com/photo-1590362891988-f77804702088?auto=format&fit=crop&w=800&q=80",
    sellerName: "Jasur Raximov",
    sellerPhone: "+998 90 912 34 56",
    description: "Ideal holatda, yangi salon, 4-pozitsiya avtomat. Magicar 908 pult, 7D polik, keramika qilingan. Kraska toza 100%. Gaz qo'yilmagan.",
    badge: "hot",
    dateAdded: "2026-10-10"
  },
  {
    id: "car-2",
    make: "BYD",
    model: "Song Plus Champion EV",
    year: 2024,
    priceUsd: 27500,
    mileage: 8400,
    fuel: "Elektr",
    transmission: "Avtomat",
    body: "Krossover",
    city: "Toshkent",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    sellerName: "Apex Motors Avtosalon",
    sellerPhone: "+998 71 200 44 88",
    description: "Rasmiy kafolat bilan, 605 km yurish masofasi (CLTC). Panoramik tom, 360 kamera, Dynaudio audio tizimi. Uyda zaryadlovchi stansiya sovg'aga beriladi.",
    badge: "ev",
    dateAdded: "2026-10-11"
  },
  {
    id: "car-3",
    make: "BMW",
    model: "X5 xDrive40i M-Sport",
    year: 2023,
    priceUsd: 88000,
    mileage: 18500,
    fuel: "Benzin",
    transmission: "Avtomat",
    body: "Krossover",
    city: "Toshkent",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    sellerName: "Premium Car Gallery",
    sellerPhone: "+998 97 700 88 99",
    description: "M Sport paketi, lazer faralar, pnevmo-podveska, Harman Kardon audiotizimi. Butun kuzov bronplyonka bilan himoyalangan. Servis tarixi BMW markazida.",
    badge: "vip",
    dateAdded: "2026-10-09"
  },
  {
    id: "car-4",
    make: "Chevrolet",
    model: "Gentra Elegance Plus AT",
    year: 2023,
    priceUsd: 14200,
    mileage: 22000,
    fuel: "Gaz/Benzin",
    transmission: "Avtomat",
    body: "Sedan",
    city: "Samarqand",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    sellerName: "Sherzod Aliyev",
    sellerPhone: "+998 93 333 44 55",
    description: "4-chi avlod italyan gaz uskunasi, lyuk, ABS, disklar yangi yumshoq shinalar bilan. Moyi har 6000 kmda almashtirilgan.",
    badge: null,
    dateAdded: "2026-10-08"
  },
  {
    id: "car-5",
    make: "Li Auto",
    model: "L7 Max Extended Range",
    year: 2024,
    priceUsd: 46000,
    mileage: 9100,
    fuel: "Gibrid",
    transmission: "Avtomat",
    body: "Krossover",
    city: "Toshkent",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    sellerName: "Electro Auto Tashkent",
    sellerPhone: "+998 99 800 11 22",
    description: "Maksimal komplektatsiya. 1315 km gibrid zaxirasi. Lidar avtopilot, 3 ta OLED monitor, massaj va shamollatish o'rindiqlari. Rus tili dasturi o'rnatilgan.",
    badge: "ev",
    dateAdded: "2026-10-12"
  },
  {
    id: "car-6",
    make: "Kia",
    model: "K5 GT-Line",
    year: 2023,
    priceUsd: 28500,
    mileage: 19000,
    fuel: "Benzin",
    transmission: "Avtomat",
    body: "Sedan",
    city: "Farg'ona",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    sellerName: "Otabek Umarov",
    sellerPhone: "+998 91 120 30 40",
    description: "Rasmiy Kia kafolati (5 yil). Qora patalog, qizil charm salon, proeksiya oynaga (HUD), Bose audio. Kraskasi top-toza, o'zim haydaganman.",
    badge: "hot",
    dateAdded: "2026-10-05"
  },
  {
    id: "car-7",
    make: "Mercedes-Benz",
    model: "E-Class E300 AMG Line",
    year: 2022,
    priceUsd: 52000,
    mileage: 34000,
    fuel: "Benzin",
    transmission: "Avtomat",
    body: "Sedan",
    city: "Toshkent",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    sellerName: "Avto Elite Salon",
    sellerPhone: "+998 90 111 22 33",
    description: "AMG Line styling, Burmester atrof-muhit ovozi, ko'p zonali iqlim nazorati. Mashina ideal saqlangan, faqat AI-98 benzin quyilgan.",
    badge: "vip",
    dateAdded: "2026-10-04"
  },
  {
    id: "car-8",
    make: "Chevrolet",
    model: "Tracker 2 Premier",
    year: 2024,
    priceUsd: 18900,
    mileage: 5000,
    fuel: "Benzin",
    transmission: "Avtomat",
    body: "Krossover",
    city: "Andijon",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    sellerName: "Doniyorbek",
    sellerPhone: "+998 94 400 50 60",
    description: "Eng so'nggi Premier pozitsiya. Qizil chokli qora salon, simsiz zaryadlash, kor ko'rish datchiklari. Hech qanday xarajatsiz yangi mashina.",
    badge: null,
    dateAdded: "2026-10-07"
  },
  {
    id: "car-9",
    make: "Tesla",
    model: "Model Y Dual Motor AWD",
    year: 2023,
    priceUsd: 41500,
    mileage: 14000,
    fuel: "Elektr",
    transmission: "Avtomat",
    body: "Krossover",
    city: "Toshkent",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80",
    sellerName: "Tesla Tashkent Club",
    sellerPhone: "+998 90 999 00 11",
    description: "Batareya 100% sog'lom, FSD (Full Self-Driving) litsenziyasi aktiv. 505 km yurish zaxirasi. Yevropa standarti CCS2 porti bilan.",
    badge: "ev",
    dateAdded: "2026-10-06"
  },
  {
    id: "car-10",
    make: "Toyota",
    model: "Camry 2.5 Elegance (75)",
    year: 2022,
    priceUsd: 34000,
    mileage: 41000,
    fuel: "Benzin",
    transmission: "Avtomat",
    body: "Sedan",
    city: "Namangan",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
    sellerName: "Bekzod Qodirov",
    sellerPhone: "+998 93 111 55 77",
    description: "Afsonaviy yapon ishonchliligi. Toyota markazida to'liq texnik ko'rikdan o'tgan. Kraska toza, birinchi egasidan sotilmoqda.",
    badge: null,
    dateAdded: "2026-10-03"
  },
  {
    id: "car-11",
    make: "Hyundai",
    model: "Santa Fe Calligraphy",
    year: 2023,
    priceUsd: 39000,
    mileage: 26000,
    fuel: "Benzin",
    transmission: "Avtomat",
    body: "Krossover",
    city: "Toshkent",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
    sellerName: "Hyundai Sergeli Salon",
    sellerPhone: "+998 71 222 33 44",
    description: "7 o'rindiqli qulay oilaviy SUV. Nappa charm salon, to'liq xavfsizlik assistentlari (SmartSense), KRELL audio tizimi.",
    badge: "vip",
    dateAdded: "2026-10-02"
  },
  {
    id: "car-12",
    make: "Chevrolet",
    model: "Onix Premier 2 Turbo",
    year: 2023,
    priceUsd: 14900,
    mileage: 16500,
    fuel: "Benzin",
    transmission: "Avtomat",
    body: "Sedan",
    city: "Buxoro",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    sellerName: "Akmal Hamroyev",
    sellerPhone: "+998 91 444 88 99",
    description: "Turbo motor, yarim avtomatik parkovka, lyuk, simsiz zaryadlash, orqa o'rindiqlar isitish tizimi. Moyi faqat GM Dexos1 quyilgan.",
    badge: null,
    dateAdded: "2026-10-01"
  }
];

// App State
let cars = [];
let favorites = JSON.parse(localStorage.getItem("avtotrade_favs") || "[]");
let comparisonList = JSON.parse(localStorage.getItem("avtotrade_compare") || "[]");
let currentCurrency = localStorage.getItem("avtotrade_currency") || "USD"; // USD or UZS

// Filter States
let currentFilters = {
  search: "",
  brand: "Barchasi",
  fuel: "all",
  bodyType: "all",
  maxPrice: 150000,
  sort: "newest"
};

// ================= INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
  initCarsDatabase();
  setupNavigation();
  setupFilters();
  setupSellForm();
  setupCalculator();
  setupCurrencyToggle();
  startClock();
  renderMarketplace();
  updateFavoritesCount();
  updateCompareCount();
  updateRibbonStats();
});

// Load cars from localStorage or fallback
function initCarsDatabase() {
  const storedCars = localStorage.getItem("avtotrade_cars");
  if (storedCars) {
    try {
      cars = JSON.parse(storedCars);
    } catch (e) {
      cars = [...INITIAL_CARS];
    }
  } else {
    cars = [...INITIAL_CARS];
    saveCarsToStorage();
  }
}

function saveCarsToStorage() {
  localStorage.setItem("avtotrade_cars", JSON.stringify(cars));
}

// Format numbers
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Convert and format price based on selected currency
function formatPrice(usdPrice) {
  if (currentCurrency === "USD") {
    return `$${formatNumber(usdPrice)}`;
  } else {
    const uzs = Math.round(usdPrice * EXCHANGE_RATE);
    return `${formatNumber(uzs)} so'm`;
  }
}

function getSecondaryPrice(usdPrice) {
  if (currentCurrency === "USD") {
    const uzs = Math.round(usdPrice * EXCHANGE_RATE);
    return `~ ${formatNumber(uzs)} so'm`;
  } else {
    return `~ $${formatNumber(usdPrice)}`;
  }
}

// ================= NAVIGATION =================
function setupNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  const views = document.querySelectorAll(".content-view");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const viewId = item.dataset.view;
      
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");

      views.forEach(v => {
        v.classList.remove("active");
        if (v.id === `view-${viewId}`) {
          v.classList.add("active");
        }
      });

      // Special triggers on view change
      if (viewId === "favorites") {
        renderFavorites();
      } else if (viewId === "comparison") {
        renderComparison();
      }
    });
  });

  // "Mashina Sotish" button in top bar navigates to sell view
  const openAddModalBtn = document.getElementById("openAddModalBtn");
  if (openAddModalBtn) {
    openAddModalBtn.addEventListener("click", () => {
      document.querySelector('[data-view="sell"]').click();
    });
  }

  // Cancel sell button
  const cancelSellBtn = document.getElementById("cancelSellBtn");
  if (cancelSellBtn) {
    cancelSellBtn.addEventListener("click", () => {
      document.querySelector('[data-view="marketplace"]').click();
    });
  }
}

// ================= CURRENCY TOGGLE =================
function setupCurrencyToggle() {
  const toggleBtn = document.getElementById("currencyToggleBtn");
  const currentCurrencyDisplay = document.getElementById("currentCurrency");

  updateCurrencyDisplay();

  toggleBtn.addEventListener("click", () => {
    currentCurrency = currentCurrency === "USD" ? "UZS" : "USD";
    localStorage.setItem("avtotrade_currency", currentCurrency);
    updateCurrencyDisplay();
    renderMarketplace();
    renderFavorites();
    updateCalculatorResults();
    showToast(`Valyuta ${currentCurrency} ga o'zgartirildi`);
  });

  function updateCurrencyDisplay() {
    currentCurrencyDisplay.textContent = currentCurrency === "USD" ? "USD ($)" : "UZS (so'm)";
  }
}

// ================= FILTERS & SEARCH =================
function setupFilters() {
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const sortSelect = document.getElementById("sortSelect");
  const fuelButtons = document.querySelectorAll("#fuelFilters .pill-btn");
  const bodyTypeFilter = document.getElementById("bodyTypeFilter");
  const priceRange = document.getElementById("priceRange");
  const priceRangeDisplay = document.getElementById("priceRangeDisplay");
  const brandChips = document.querySelectorAll(".chip-btn");
  const resetFiltersBtn = document.getElementById("resetFiltersBtn");

  // Search input
  searchInput.addEventListener("input", (e) => {
    currentFilters.search = e.target.value.toLowerCase().trim();
    renderMarketplace();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentFilters.search = "";
    renderMarketplace();
    searchInput.focus();
  });

  // Sort
  sortSelect.addEventListener("change", (e) => {
    currentFilters.sort = e.target.value;
    renderMarketplace();
  });

  // Fuel tabs
  fuelButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      fuelButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilters.fuel = btn.dataset.fuel;
      renderMarketplace();
    });
  });

  // Body type
  bodyTypeFilter.addEventListener("change", (e) => {
    currentFilters.bodyType = e.target.value;
    renderMarketplace();
  });

  // Price slider
  priceRange.addEventListener("input", (e) => {
    const val = parseInt(e.target.value, 10);
    currentFilters.maxPrice = val;
    priceRangeDisplay.textContent = `$${formatNumber(val)}`;
    renderMarketplace();
  });

  // Brand quick chips
  brandChips.forEach(chip => {
    chip.addEventListener("click", () => {
      brandChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilters.brand = chip.dataset.brand;
      renderMarketplace();
    });
  });

  // Reset filters
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentFilters.search = "";
      currentFilters.brand = "Barchasi";
      currentFilters.fuel = "all";
      currentFilters.bodyType = "all";
      currentFilters.maxPrice = 150000;
      currentFilters.sort = "newest";

      priceRange.value = 150000;
      priceRangeDisplay.textContent = "150 000 $";
      bodyTypeFilter.value = "all";
      sortSelect.value = "newest";

      fuelButtons.forEach(b => b.classList.remove("active"));
      fuelButtons[0].classList.add("active");

      brandChips.forEach(c => c.classList.remove("active"));
      brandChips[0].classList.add("active");

      renderMarketplace();
      showToast("Barcha filtrlar qayta tiklandi");
    });
  }
}

// Filter and Sort algorithm
function getFilteredCars() {
  return cars.filter(car => {
    // Search
    if (currentFilters.search) {
      const q = currentFilters.search;
      const matchText = `${car.make} ${car.model} ${car.city} ${car.description || ''}`.toLowerCase();
      if (!matchText.includes(q)) return false;
    }

    // Brand
    if (currentFilters.brand !== "Barchasi" && car.make.toLowerCase() !== currentFilters.brand.toLowerCase()) {
      return false;
    }

    // Fuel
    if (currentFilters.fuel !== "all" && car.fuel !== currentFilters.fuel) {
      return false;
    }

    // Body
    if (currentFilters.bodyType !== "all" && car.body !== currentFilters.bodyType) {
      return false;
    }

    // Price
    if (car.priceUsd > currentFilters.maxPrice) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    switch (currentFilters.sort) {
      case "price-asc": return a.priceUsd - b.priceUsd;
      case "price-desc": return b.priceUsd - a.priceUsd;
      case "year-desc": return b.year - a.year;
      case "mileage-asc": return a.mileage - b.mileage;
      case "newest":
      default:
        return (new Date(b.dateAdded || 0)) - (new Date(a.dateAdded || 0));
    }
  });
}

// ================= RENDER MARKETPLACE =================
function renderMarketplace() {
  const grid = document.getElementById("carsGrid");
  const emptyState = document.getElementById("emptyState");
  const filtered = getFilteredCars();

  document.getElementById("totalCarsCount").textContent = cars.length;
  document.getElementById("activeFilterSummary").textContent = `Ko'rsatilmoqda: ${filtered.length} ta mashina (${currentFilters.brand})`;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  grid.innerHTML = filtered.map(car => createCarCardHTML(car)).join("");
  attachCardListeners(grid);
}

// Generate single car card HTML
function createCarCardHTML(car) {
  const isFav = favorites.includes(car.id);
  const isCompared = comparisonList.includes(car.id);

  let badgeMarkup = "";
  if (car.badge === "ev") {
    badgeMarkup = '<span class="badge-tag ev">⚡ Elektr</span>';
  } else if (car.badge === "hot") {
    badgeMarkup = '<span class="badge-tag hot">🔥 Ommabop</span>';
  } else if (car.badge === "vip") {
    badgeMarkup = '<span class="badge-tag vip">💎 Premium</span>';
  }

  return `
    <article class="car-card" data-id="${car.id}">
      <div class="car-image-container">
        <img class="car-image" src="${car.image}" alt="${car.make} ${car.model}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'">
        <div class="car-badges">${badgeMarkup}</div>
        <button class="btn-card-fav ${isFav ? 'active' : ''}" data-action="fav" title="Saqlash">
          <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      <div class="car-card-content">
        <div class="car-card-header">
          <div class="car-title-grp">
            <h3>${car.make} ${car.model}</h3>
            <span class="car-subtitle">${car.year}-yil • ${car.city}</span>
          </div>
          <div class="car-price-box">
            <div class="car-price-main">${formatPrice(car.priceUsd)}</div>
            <div class="car-price-sub">${getSecondaryPrice(car.priceUsd)}</div>
          </div>
        </div>

        <div class="car-specs-grid">
          <div class="spec-cell">
            <span class="spec-cell-label">Probeg</span>
            <span class="spec-cell-value">${formatNumber(car.mileage)} km</span>
          </div>
          <div class="spec-cell">
            <span class="spec-cell-label">Yoqilg'i</span>
            <span class="spec-cell-value">${car.fuel}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-cell-label">Uzatma</span>
            <span class="spec-cell-value">${car.transmission}</span>
          </div>
        </div>

        <div class="car-card-footer">
          <button class="btn-details" data-action="detail">Batafsil Ko'rish</button>
          <button class="btn-compare ${isCompared ? 'active' : ''}" data-action="compare" title="Solishtirishga qo'shish">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

// Attach event listeners to car cards
function attachCardListeners(container) {
  container.querySelectorAll(".car-card").forEach(card => {
    const carId = card.dataset.id;
    const car = cars.find(c => c.id === carId);
    if (!car) return;

    // Favorite Button
    const favBtn = card.querySelector('[data-action="fav"]');
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(carId);
    });

    // Compare Button
    const compareBtn = card.querySelector('[data-action="compare"]');
    compareBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleComparison(carId);
    });

    // Details Modal
    const detailBtn = card.querySelector('[data-action="detail"]');
    detailBtn.addEventListener("click", () => {
      openDetailModal(car);
    });

    // Clicking anywhere on card opens details
    card.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      openDetailModal(car);
    });
  });
}

// Ribbon statistics
function updateRibbonStats() {
  document.getElementById("marketTotalCount").textContent = `${cars.length} ta`;
  
  const evCount = cars.filter(c => c.fuel === "Elektr" || c.fuel === "Gibrid").length;
  document.getElementById("marketEvCount").textContent = `${evCount} ta`;

  const avgPrice = Math.round(cars.reduce((acc, c) => acc + c.priceUsd, 0) / (cars.length || 1));
  document.getElementById("marketAvgPrice").textContent = `$${formatNumber(avgPrice)}`;
}

// ================= FAVORITES =================
function toggleFavorite(carId) {
  const index = favorites.indexOf(carId);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast("Mashina sevimlilardan olib tashlandi");
  } else {
    favorites.push(carId);
    showToast("Mashina sevimli ro'yxatingizga qo'shildi ❤️");
  }
  localStorage.setItem("avtotrade_favs", JSON.stringify(favorites));
  updateFavoritesCount();
  renderMarketplace();
  renderFavorites();
}

function updateFavoritesCount() {
  document.getElementById("favCount").textContent = favorites.length;
}

function renderFavorites() {
  const grid = document.getElementById("favoritesGrid");
  const emptyState = document.getElementById("emptyFavorites");
  const favCars = cars.filter(c => favorites.includes(c.id));

  if (favCars.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  grid.innerHTML = favCars.map(car => createCarCardHTML(car)).join("");
  attachCardListeners(grid);
}

// ================= COMPARISON =================
function toggleComparison(carId) {
  const index = comparisonList.indexOf(carId);
  if (index > -1) {
    comparisonList.splice(index, 1);
    showToast("Solishtirish ro'yxatidan chiqarildi");
  } else {
    if (comparisonList.length >= 4) {
      showToast("Maksimal 4 ta mashinani solishtirish mumkin!");
      return;
    }
    comparisonList.push(carId);
    showToast("Solishtirish ro'yxatiga qo'shildi ⚖️");
  }
  localStorage.setItem("avtotrade_compare", JSON.stringify(comparisonList));
  updateCompareCount();
  renderMarketplace();
  renderComparison();
}

function updateCompareCount() {
  document.getElementById("compareCount").textContent = comparisonList.length;
}

function renderComparison() {
  const container = document.getElementById("comparisonContainer");
  const comparedCars = cars.filter(c => comparisonList.includes(c.id));

  if (comparedCars.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <div class="empty-icon">⚖️</div>
        <h3>Taqqoslash uchun mashina tanlanmagan</h3>
        <p>Bozordagi mashinalar kartasidagi solishtirish tugmasini bosib, ularni bir-biri bilan taqqoslang.</p>
        <button class="btn-primary" onclick="document.querySelector('[data-view=\\'marketplace\\']').click()">Bozorga O'tish</button>
      </div>
    `;
    return;
  }

  container.innerHTML = comparedCars.map(car => `
    <div class="compare-card">
      <img src="${car.image}" alt="${car.make} ${car.model}" class="compare-head-img" onerror="this.src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'">
      <h3 style="color:#fff; font-size:1.15rem;">${car.make} ${car.model}</h3>
      <span style="color:var(--accent-cyan); font-weight:700; font-size:1.1rem; margin-top:4px;">${formatPrice(car.priceUsd)}</span>
      
      <table class="compare-specs-table">
        <tr><td>Yili:</td><td>${car.year}</td></tr>
        <tr><td>Probeg:</td><td>${formatNumber(car.mileage)} km</td></tr>
        <tr><td>Yoqilg'i:</td><td>${car.fuel}</td></tr>
        <tr><td>Uzatma:</td><td>${car.transmission}</td></tr>
        <tr><td>Kuzov:</td><td>${car.body}</td></tr>
        <tr><td>Shahar:</td><td>${car.city}</td></tr>
      </table>

      <button class="btn-outline" style="margin-top:16px; width:100%;" onclick="toggleComparison('${car.id}')">
        Olib tashlash
      </button>
    </div>
  `).join("");
}

// ================= CAR DETAIL MODAL =================
function openDetailModal(car) {
  const modal = document.getElementById("detailModal");
  const modalBody = document.getElementById("detailModalBody");

  modalBody.innerHTML = `
    <div class="modal-hero">
      <img src="${car.image}" alt="${car.make} ${car.model}">
      <div class="modal-hero-overlay">
        <div class="modal-title-box">
          <h2>${car.make} ${car.model}</h2>
          <p>${car.year}-yil • ${car.city} • Kod: #${car.id}</p>
        </div>
        <div class="modal-price-box">
          <div class="price-usd">${formatPrice(car.priceUsd)}</div>
          <div class="price-uzs">${getSecondaryPrice(car.priceUsd)}</div>
        </div>
      </div>
    </div>

    <div class="modal-body-content">
      <div class="modal-specs-tiles">
        <div class="spec-tile">
          <span>Yurgan masofasi</span>
          <strong>${formatNumber(car.mileage)} km</strong>
        </div>
        <div class="spec-tile">
          <span>Yoqilg'i turi</span>
          <strong>${car.fuel}</strong>
        </div>
        <div class="spec-tile">
          <span>Uzatma qutisi</span>
          <strong>${car.transmission}</strong>
        </div>
        <div class="spec-tile">
          <span>Kuzov turi</span>
          <strong>${car.body}</strong>
        </div>
      </div>

      <div class="modal-desc-box">
        <h4>Sotuvchining Tavsifi</h4>
        <p>${car.description || "Qo'shimcha ma'lumot kiritilmagan."}</p>
      </div>

      <div class="modal-seller-box">
        <div class="seller-info">
          <h4>Sotuvchi: ${car.sellerName || "Diler"}</h4>
          <p>📞 ${car.sellerPhone || "+998 90 000 00 00"} • Manzil: ${car.city}</p>
        </div>
        <div class="seller-actions">
          <a href="tel:${car.sellerPhone}" class="btn-phone">
            📞 Qo'ng'iroq Qilish
          </a>
          <button class="btn-telegram" onclick="alert('Telegram botimiz orqali sotuvchi bilan bog\\'lanish so\\'rovi yuborildi!')">
            ✈️ Telegramda Yozish
          </button>
        </div>
      </div>

      <div style="display:flex; gap:12px; justify-content:flex-end;">
        <button class="btn-outline" onclick="openCarInCalc(${car.priceUsd})">
          🧮 Ushbu mashinani kreditga hisoblash
        </button>
      </div>
    </div>
  `;

  modal.classList.add("active");

  const closeBtn = document.getElementById("closeDetailModal");
  closeBtn.onclick = () => modal.classList.remove("active");
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove("active");
  };
}

// Jump from modal to calculator with car's price
function openCarInCalc(priceUsd) {
  document.getElementById("detailModal").classList.remove("active");
  document.querySelector('[data-view="calculator"]').click();
  const slider = document.getElementById("calcPriceSlider");
  slider.value = priceUsd;
  updateCalculatorResults();
}

// ================= SELL CAR FORM =================
function setupSellForm() {
  const form = document.getElementById("sellCarForm");
  const presetBtns = document.querySelectorAll(".preset-img-btn");
  let selectedImage = presetBtns[0].dataset.img;

  presetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      presetBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedImage = btn.dataset.img;
      document.getElementById("carImageUrl").value = "";
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const customUrl = document.getElementById("carImageUrl").value.trim();
    const finalImage = customUrl || selectedImage;

    const newCar = {
      id: "car-" + Date.now(),
      make: document.getElementById("carMake").value,
      model: document.getElementById("carModel").value.trim(),
      year: parseInt(document.getElementById("carYear").value, 10),
      priceUsd: parseInt(document.getElementById("carPrice").value, 10),
      mileage: parseInt(document.getElementById("carMileage").value, 10),
      fuel: document.getElementById("carFuel").value,
      transmission: document.getElementById("carTransmission").value,
      body: document.getElementById("carBody").value,
      city: document.getElementById("carCity").value,
      sellerPhone: document.getElementById("carPhone").value.trim(),
      sellerName: "Siz (Foydalanuvchi)",
      description: document.getElementById("carDesc").value.trim(),
      image: finalImage,
      badge: "hot",
      dateAdded: new Date().toISOString().split("T")[0]
    };

    cars.unshift(newCar);
    saveCarsToStorage();

    form.reset();
    presetBtns.forEach(b => b.classList.remove("active"));
    presetBtns[0].classList.add("active");
    selectedImage = presetBtns[0].dataset.img;

    updateRibbonStats();
    showToast("Mashina muvaffaqiyatli savdoga qo'yildi! 🎉");

    // Return to marketplace view
    document.querySelector('[data-view="marketplace"]').click();
    renderMarketplace();
  });
}

// ================= CREDIT CALCULATOR =================
function setupCalculator() {
  const priceSlider = document.getElementById("calcPriceSlider");
  const downSlider = document.getElementById("calcDownSlider");
  const termSlider = document.getElementById("calcTermSlider");
  const rateSlider = document.getElementById("calcRateSlider");

  [priceSlider, downSlider, termSlider, rateSlider].forEach(slider => {
    slider.addEventListener("input", updateCalculatorResults);
  });

  updateCalculatorResults();
}

function updateCalculatorResults() {
  const price = parseInt(document.getElementById("calcPriceSlider").value, 10);
  const downPercent = parseInt(document.getElementById("calcDownSlider").value, 10);
  const termMonths = parseInt(document.getElementById("calcTermSlider").value, 10);
  const annualRate = parseInt(document.getElementById("calcRateSlider").value, 10);

  // Label updates
  document.getElementById("calcPriceDisplay").textContent = `$${formatNumber(price)}`;
  document.getElementById("downPercentDisplay").textContent = `${downPercent}%`;
  
  const downAmount = Math.round(price * (downPercent / 100));
  document.getElementById("downAmountDisplay").textContent = `$${formatNumber(downAmount)}`;
  document.getElementById("termDisplay").textContent = `${termMonths} oy (${(termMonths / 12).toFixed(1)} yil)`;
  document.getElementById("rateDisplay").textContent = `${annualRate}%`;

  // Mathematical credit annuity formula
  const loanAmount = price - downAmount;
  const monthlyRate = (annualRate / 100) / 12;

  let monthlyPayment = 0;
  if (monthlyRate > 0) {
    monthlyPayment = Math.round(loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1));
  } else {
    monthlyPayment = Math.round(loanAmount / termMonths);
  }

  const grandTotal = downAmount + (monthlyPayment * termMonths);
  const totalInterest = grandTotal - price;
  const monthlyUzs = Math.round(monthlyPayment * EXCHANGE_RATE);

  // Render results
  document.getElementById("monthlyPaymentResult").textContent = `$${formatNumber(monthlyPayment)} / oy`;
  document.getElementById("monthlyPaymentUzs").textContent = `~ ${formatNumber(monthlyUzs)} so'm / oy`;
  document.getElementById("resTotalCar").textContent = `$${formatNumber(price)}`;
  document.getElementById("resDownPay").textContent = `$${formatNumber(downAmount)}`;
  document.getElementById("resLoanAmount").textContent = `$${formatNumber(loanAmount)}`;
  document.getElementById("resTotalInterest").textContent = `$${formatNumber(totalInterest)}`;
  document.getElementById("resGrandTotal").textContent = `$${formatNumber(grandTotal)}`;
}

// ================= LIVE CLOCK =================
function startClock() {
  const clockEl = document.getElementById("liveClock");
  function updateTime() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString("uz-UZ", { hour12: false });
  }
  updateTime();
  setInterval(updateTime, 1000);
}

// ================= TOAST NOTIFICATION =================
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
