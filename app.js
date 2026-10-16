// Definicje 12 grup kolorów z etykietami i kolorami kropek
const COLOR_CATEGORIES = [
  { key: "czarne", label: "Czarne", dot: "#000000" },
  { key: "szare", label: "Szare", dot: "#8B9BB4" },
  { key: "biale", label: "Białe", dot: "#FFFFFF" },
  { key: "czerwone", label: "Czerwone", dot: "#FF0000" },
  { key: "pomaranczowe", label: "Pomarańczowe", dot: "#FF8C00" },
  { key: "brazowe", label: "Brązowe", dot: "#784437" },
  { key: "zolte", label: "Żółte", dot: "#FFFF00" },
  { key: "zielone", label: "Zielone", dot: "#00FF00" },
  { key: "niebieskie", label: "Niebieskie", dot: "#00A8FF" },
  { key: "fioletowe", label: "Fioletowe", dot: "#9B59B6" },
  { key: "rozowe", label: "Różowe", dot: "#FF69B4" },
  { key: "pastelowe", label: "Pastelowe", dot: "#FFAEC9" }
];

// Presety grup
const PRESETS = {
  "all": [], // puste = wszystkie
  "black-red": ["czarne", "czerwone"],
  "camo": ["zielone", "brazowe", "czarne"],
  "ice": ["biale", "niebieskie", "szare"],
  "cyber": ["czarne", "fioletowe", "niebieskie", "rozowe"],
  "pastel": ["pastelowe", "rozowe", "biale"]
};

// Stały domyślny zestaw kolorów (Region 0: kolor ID 6, Regiony 1-5: kolory ID 1-5)
const DEFAULT_COLOR_IDS = [6, 1, 2, 3, 4, 5];

function getColorById(id) {
  return ARK_COLORS.find(c => c.id === id) || ARK_COLORS[0];
}

// Stan aplikacji: 6 regionów (0 - 5) + aktywne filtry losowania
const state = {
  activeModalRegion: null,
  activeFilters: new Set(), // jeśli puste -> cała baza 227 kolorów
  activePreset: "all",      // aktualnie wybrany preset
  favOnlyMode: false,
  modalFilter: null, // pojedynczy filtr w modalu
  regions: [
    { regionIndex: 0, color: getColorById(6), enabled: true },
    { regionIndex: 1, color: getColorById(1), enabled: true },
    { regionIndex: 2, color: getColorById(2), enabled: true },
    { regionIndex: 3, color: getColorById(3), enabled: true },
    { regionIndex: 4, color: getColorById(4), enabled: true },
    { regionIndex: 5, color: getColorById(5), enabled: true }
  ]
};

// Pomocnicza funkcja do kontrastowego koloru tekstu (czarny / biały)
function getContrastColor(hexColor) {
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#000000" : "#FFFFFF";
}

// Renderowanie paska podglądu 6 regionów
function renderPreviewBar() {
  const bar = document.getElementById("preview-bar");
  bar.innerHTML = "";

  state.regions.forEach((reg) => {
    const tile = document.createElement("div");
    tile.className = "preview-tile";
    if (reg.enabled) {
      tile.style.backgroundColor = reg.color.hex;
      const textCol = getContrastColor(reg.color.hex);
      tile.style.color = textCol;
      tile.innerHTML = `
        <span class="tile-title" style="color: ${textCol}">R${reg.regionIndex}</span>
        <span class="tile-color-name" style="color: ${textCol}">${reg.color.name}</span>
      `;
    } else {
      tile.style.backgroundColor = "#1b2330";
      tile.style.color = "#55657e";
      tile.innerHTML = `
        <span class="tile-title">R${reg.regionIndex}</span>
        <span class="tile-color-name">[Wyłączony]</span>
      `;
    }
    tile.addEventListener("click", () => openColorModal(reg.regionIndex));
    bar.appendChild(tile);
  });
}

// Renderowanie siatki regionów
function renderRegionsGrid() {
  const grid = document.getElementById("regions-grid");
  grid.innerHTML = "";

  state.regions.forEach((reg) => {
    const card = document.createElement("div");
    card.className = `region-card ${reg.enabled ? "" : "disabled"}`;

    card.innerHTML = `
      <div class="region-card-header">
        <div class="region-title-group">
          <div class="region-number">${reg.regionIndex}</div>
          <div class="region-title">Region ${reg.regionIndex}</div>
        </div>
        <label class="region-toggle-label">
          <input type="checkbox" ${reg.enabled ? "checked" : ""} data-reg="${reg.regionIndex}" class="region-toggle">
          Aktywny
        </label>
      </div>

      <div class="region-card-body">
        <div class="color-swatch-large" style="background-color: ${reg.color.hex}" title="Kliknij, aby zmienić kolor"></div>
        <div class="region-info">
          <div class="color-info-name">${reg.color.name}</div>
          <div class="color-info-meta">
            <span>ID:</span>
            <input type="number" class="region-id-input" value="${reg.color.id}" min="1" max="254" data-reg="${reg.regionIndex}" title="Wpisz numer ID koloru i wciśnij Enter">
            <span class="color-meta-divider">|</span>
            <span>HEX: ${reg.color.hex}</span>
          </div>
        </div>
      </div>

      <div class="region-actions">
        <button class="btn btn-secondary btn-sm btn-pick" data-reg="${reg.regionIndex}">🎨 Wybierz</button>
        <button class="btn btn-secondary btn-sm btn-rand-one" data-reg="${reg.regionIndex}">🎲 Losuj</button>
        <button class="btn btn-secondary btn-sm btn-copy-one" data-reg="${reg.regionIndex}" title="Kopiuj komendę dla tego regionu">📋 Kopiuj</button>
      </div>
    `;

    // Zdarzenia
    const swatch = card.querySelector(".color-swatch-large");
    const pickBtn = card.querySelector(".btn-pick");
    const randBtn = card.querySelector(".btn-rand-one");
    const copyBtn = card.querySelector(".btn-copy-one");
    const toggle = card.querySelector(".region-toggle");
    const idInput = card.querySelector(".region-id-input");

    swatch.addEventListener("click", () => openColorModal(reg.regionIndex));
    pickBtn.addEventListener("click", () => openColorModal(reg.regionIndex));
    randBtn.addEventListener("click", () => randomizeSingle(reg.regionIndex));
    copyBtn.addEventListener("click", () => {
      const singleCmd = `cheat settargetdinocolor ${reg.regionIndex} ${reg.color.id}`;
      navigator.clipboard.writeText(singleCmd).then(() => {
        showToast(`Skopiowano: ${singleCmd}`);
      });
    });
    toggle.addEventListener("change", (e) => {
      reg.enabled = e.target.checked;
      updateAll();
    });

    // Edycja bezpośrednia pola ID
    idInput.addEventListener("click", (e) => e.stopPropagation());
    const handleIdChange = (e) => {
      const val = parseInt(e.target.value.trim(), 10);
      if (!isNaN(val)) {
        const found = ARK_COLORS.find(c => c.id === val);
        if (found) {
          reg.color = found;
          reg.enabled = true;
          updateAll();
        } else {
          // Jeśli nie znaleziono koloru o takim ID
          showToast(`Nie znaleziono koloru o ID: ${val}`);
          e.target.value = reg.color.id;
        }
      } else {
        e.target.value = reg.color.id;
      }
    };
    idInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.target.blur();
      }
    });
    idInput.addEventListener("change", handleIdChange);

    grid.appendChild(card);
  });
}

// Flaga zapobiegająca nadpisywaniu pola komendy podczas gdy użytkownik w nim pisze
let isEditingAdminCmd = false;
let isEditingChatCmd = false;

// Aktualizacja wygenerowanych komend
function updateCommands() {
  const adminCmdElem = document.getElementById("admin-cmd");
  const chatCmdElem = document.getElementById("chat-cmd");

  // Admin format: cheat settargetdinocolor <reg> <id> | ...
  if (!isEditingAdminCmd && adminCmdElem) {
    const adminParts = state.regions
      .filter((r) => r.enabled)
      .map((r) => `settargetdinocolor ${r.regionIndex} ${r.color.id}`);

    if (adminParts.length > 0) {
      adminCmdElem.value = `cheat ${adminParts.join(" | ")} |`;
    } else {
      adminCmdElem.value = "cheat (żaden region nie jest aktywny)";
    }
    // Automatyczne dopasowanie wysokości do zawiniętego tekstu
    adminCmdElem.style.height = "auto";
    adminCmdElem.style.height = `${adminCmdElem.scrollHeight}px`;
  }

  // Chat plugin format: /color <0> <1> <2> <3> <4> <5>
  if (!isEditingChatCmd && chatCmdElem) {
    const chatValues = state.regions.map((r) => (r.enabled ? r.color.id : 0));
    chatCmdElem.value = `/color ${chatValues.join(" ")}`;
    chatCmdElem.style.height = "auto";
    chatCmdElem.style.height = `${chatCmdElem.scrollHeight}px`;
  }
}

// Zbiorcza aktualizacja interfejsu
function updateAll(skipRegionsGrid = false) {
  renderPreviewBar();
  if (!skipRegionsGrid) {
    renderRegionsGrid();
  }
  updateCommands();
}

// Losowanie pojedynczego regionu
function randomizeSingle(regionIdx) {
  const randomColor = ARK_COLORS[Math.floor(Math.random() * ARK_COLORS.length)];
  state.regions[regionIdx].color = randomColor;
  updateAll();
}

// Pamięć podręczna LocalStorage
const STORAGE_KEYS = {
  FAVORITES: "ark_color_favorites_v1",
  HISTORY: "ark_color_history_v1",
  SINGLE_FAVORITES: "ark_single_color_favorites_v1"
};

function getFavoriteColorIds() {
  return new Set(getStorage(STORAGE_KEYS.SINGLE_FAVORITES, []));
}

function toggleFavoriteColor(colorId) {
  const favs = getFavoriteColorIds();
  if (favs.has(colorId)) {
    favs.delete(colorId);
    showToast("Usunięto kolor z ulubionych");
  } else {
    favs.add(colorId);
    showToast("Dodano kolor do ulubionych ⭐");
  }
  setStorage(STORAGE_KEYS.SINGLE_FAVORITES, Array.from(favs));
}

function getStorage(key, defaultVal = []) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultVal;
  } catch (e) {
    return defaultVal;
  }
}

function setStorage(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
}

let activeTab = "favorites"; // "favorites" lub "history"

// Zapisz obecny zestaw do historii (max 50 wpisów)
function pushToHistory() {
  const history = getStorage(STORAGE_KEYS.HISTORY, []);
  const snapshot = {
    id: Date.now(),
    date: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
    regions: state.regions.map(r => ({
      regionIndex: r.regionIndex,
      color: { id: r.color.id, name: r.color.name, hex: r.color.hex },
      enabled: r.enabled
    }))
  };

  // Nie dodawaj duplikatu pod rząd
  if (history.length > 0) {
    const last = history[0];
    const isSame = last.regions.every((lr, i) => 
      lr.enabled === snapshot.regions[i].enabled && 
      lr.color.id === snapshot.regions[i].color.id
    );
    if (isSame) return;
  }

  history.unshift(snapshot);
  if (history.length > 50) history.pop();
  setStorage(STORAGE_KEYS.HISTORY, history);
  updateLibraryBadges();
}

// Zapisz obecny zestaw do ulubionych
function saveCurrentToFavorites(customName) {
  const favorites = getStorage(STORAGE_KEYS.FAVORITES, []);
  const name = customName && customName.trim() ? customName.trim() : `Kompozycja #${favorites.length + 1}`;
  
  const favItem = {
    id: Date.now(),
    name: name,
    date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    regions: state.regions.map(r => ({
      regionIndex: r.regionIndex,
      color: { id: r.color.id, name: r.color.name, hex: r.color.hex },
      enabled: r.enabled
    }))
  };

  favorites.unshift(favItem);
  setStorage(STORAGE_KEYS.FAVORITES, favorites);
  updateLibraryBadges();
  showToast(`Zapisano "${name}" do ulubionych!`);
}

// Załaduj zapisany zestaw do edytora
function applySet(set) {
  set.regions.forEach(savedR => {
    const fullColor = ARK_COLORS.find(c => c.id === savedR.color.id) || savedR.color;
    state.regions[savedR.regionIndex].color = fullColor;
    state.regions[savedR.regionIndex].enabled = savedR.enabled;
  });
  updateAll(false);
  closeLibraryModal();
  showToast("Wczytano wybrany zestaw kolorów!");
}

// Usunięcie wpisu z ulubionych / historii
function removeItem(key, id) {
  let list = getStorage(key, []);
  list = list.filter(item => item.id !== id);
  setStorage(key, list);
  updateLibraryBadges();
  renderLibrary();
}

// Czyszczenie bieżącej zakładki
function clearActiveTab() {
  const key = activeTab === "favorites" ? STORAGE_KEYS.FAVORITES : STORAGE_KEYS.HISTORY;
  const label = activeTab === "favorites" ? "ulubionych" : "historii";
  if (confirm(`Czy na pewno chcesz wyczyścić całą listę ${label}?`)) {
    setStorage(key, []);
    updateLibraryBadges();
    renderLibrary();
    showToast(`Wyczyszczono listę ${label}!`);
  }
}

// Aktualizacja liczników w UI
function updateLibraryBadges() {
  const favs = getStorage(STORAGE_KEYS.FAVORITES, []);
  const hists = getStorage(STORAGE_KEYS.HISTORY, []);

  const favCount = document.getElementById("fav-count");
  const histCount = document.getElementById("hist-count");
  const libCount = document.getElementById("library-count");

  if (favCount) favCount.textContent = favs.length;
  if (histCount) histCount.textContent = hists.length;
  if (libCount) libCount.textContent = favs.length;
}

// Renderowanie listy w oknie biblioteki
function renderLibrary() {
  const container = document.getElementById("library-list");
  const isFav = activeTab === "favorites";
  const key = isFav ? STORAGE_KEYS.FAVORITES : STORAGE_KEYS.HISTORY;
  const list = getStorage(key, []);

  document.getElementById("lib-info-text").textContent = isFav
    ? "Twoje zapisane ulubione zestawy barw"
    : "Ostatnio wylosowane lub zmodyfikowane zestawy";

  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `
      <div class="lib-empty">
        ${isFav ? "Brak zapisanych ulubionych. Kliknij <strong>⭐ Zapisz zestaw</strong> na górze strony!" : "Brak historii zmian."}
      </div>
    `;
    return;
  }

  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "saved-set-card";

    // Pasek mini podglądu kafelków 0 - 5
    const previewHtml = item.regions
      .map(r => {
        if (!r.enabled) {
          return `<div class="mini-swatch disabled" title="Region ${r.regionIndex}: Wyłączony">R${r.regionIndex}</div>`;
        }
        const textCol = getContrastColor(r.color.hex);
        return `<div class="mini-swatch" style="background-color: ${r.color.hex}; color: ${textCol}" title="Region ${r.regionIndex}: ${r.color.name} (ID: ${r.color.id})">R${r.regionIndex}</div>`;
      })
      .join("");

    const titleText = isFav ? item.name : `Zestaw z godziny ${item.date}`;

    card.innerHTML = `
      <div class="saved-set-info">
        <div class="saved-set-title">
          ${isFav ? "⭐" : "🕒"} ${titleText}
          <span class="saved-set-date">${item.date}</span>
        </div>
        <div class="saved-set-preview">
          ${previewHtml}
        </div>
      </div>
      <div class="saved-set-actions">
        <button class="btn btn-primary btn-sm btn-apply-set">Wczytaj</button>
        <button class="btn btn-secondary btn-sm btn-del-set" title="Usuń ten wpis">🗑️</button>
      </div>
    `;

    card.querySelector(".btn-apply-set").addEventListener("click", () => applySet(item));
    card.querySelector(".btn-del-set").addEventListener("click", () => removeItem(key, item.id));

    container.appendChild(card);
  });
}

// Otwieranie / zamykanie modala biblioteki
function openLibraryModal(tab = "favorites") {
  activeTab = tab;
  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.tab === activeTab);
  });
  renderLibrary();
  document.getElementById("library-modal").classList.add("active");
}

function closeLibraryModal() {
  document.getElementById("library-modal").classList.remove("active");
}

// Obsługa modala nazwy ulubionych
function openSaveNameModal() {
  const input = document.getElementById("set-name-input");
  input.value = "";
  document.getElementById("save-name-modal").classList.add("active");
  input.focus();
}

function closeSaveNameModal() {
  document.getElementById("save-name-modal").classList.remove("active");
}

// Zdarzenia przycisków biblioteki i zapisu
document.getElementById("btn-save-fav").addEventListener("click", openSaveNameModal);
document.getElementById("btn-open-library").addEventListener("click", () => openLibraryModal("favorites"));
document.getElementById("library-modal-close").addEventListener("click", closeLibraryModal);
document.getElementById("save-modal-close").addEventListener("click", closeSaveNameModal);
document.getElementById("btn-cancel-save").addEventListener("click", closeSaveNameModal);

document.getElementById("btn-confirm-save").addEventListener("click", () => {
  const name = document.getElementById("set-name-input").value;
  saveCurrentToFavorites(name);
  closeSaveNameModal();
});

document.getElementById("set-name-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const name = document.getElementById("set-name-input").value;
    saveCurrentToFavorites(name);
    closeSaveNameModal();
  }
});

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    activeTab = btn.dataset.tab;
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderLibrary();
  });
});

document.getElementById("btn-clear-tab").addEventListener("click", clearActiveTab);

// Zamknięcie modali kliknięciem w tło
document.getElementById("library-modal").addEventListener("click", (e) => {
  if (e.target.id === "library-modal") closeLibraryModal();
});
document.getElementById("save-name-modal").addEventListener("click", (e) => {
  if (e.target.id === "save-name-modal") closeSaveNameModal();
});

// Pobierz bieżącą pulę kolorów na podstawie aktywnych filtrów
function getFilteredColorPool() {
  if (state.favOnlyMode) {
    const favs = getFavoriteColorIds();
    return ARK_COLORS.filter(col => favs.has(col.id));
  }
  if (state.activeFilters.size === 0) {
    return ARK_COLORS;
  }
  return ARK_COLORS.filter(col => {
    if (!col.tags) return false;
    return col.tags.some(t => state.activeFilters.has(t));
  });
}

// Renderowanie pastylek/filtrów w sekcji głównej
function renderFilterChips() {
  const container = document.getElementById("filter-chips-grid");
  if (!container) return;
  container.innerHTML = "";

  COLOR_CATEGORIES.forEach(cat => {
    // Policz ile kolorów ma dany tag
    const count = ARK_COLORS.filter(c => c.tags && c.tags.includes(cat.key)).length;
    const isActive = state.activeFilters.has(cat.key);

    const chip = document.createElement("div");
    chip.className = `filter-chip ${isActive ? "active" : ""}`;
    chip.innerHTML = `
      <span class="filter-chip-dot" style="background-color: ${cat.dot}"></span>
      <span>${cat.label}</span>
      <span class="filter-chip-count">(${count})</span>
    `;

    chip.addEventListener("click", () => {
      state.favOnlyMode = false;
      if (state.activeFilters.has(cat.key)) {
        state.activeFilters.delete(cat.key);
      } else {
        state.activeFilters.add(cat.key);
      }
      // Sprawdź czy pasuje do jakiegoś presetu
      detectActivePreset();
      updateFilterUI();
    });

    container.appendChild(chip);
  });

  updateFilterPoolInfo();
}

// Wykryj czy bieżący zestaw filtrów odpowiada któremuś presetowi
function detectActivePreset() {
  if (state.favOnlyMode) {
    state.activePreset = "fav-colors";
    return;
  }
  if (state.activeFilters.size === 0) {
    state.activePreset = "all";
    return;
  }
  for (const [key, list] of Object.entries(PRESETS)) {
    if (key === "all") continue;
    if (list.length === state.activeFilters.size && list.every(c => state.activeFilters.has(c))) {
      state.activePreset = key;
      return;
    }
  }
  state.activePreset = null; // ręczny zestaw użytkownika
}

// Aktualizacja informacji o rozmiarze puli
function updateFilterPoolInfo() {
  const pool = getFilteredColorPool();
  const info = document.getElementById("filters-pool-info");
  if (info) {
    info.textContent = `(pula: ${pool.length} kolorów)`;
  }
}

// Aktualizacja stanu chipów i puli
function updateFilterUI() {
  // Aktualizuj kafelki poszczególnych kategorii
  const chips = document.querySelectorAll("#filter-chips-grid .filter-chip");
  COLOR_CATEGORIES.forEach((cat, idx) => {
    if (chips[idx]) {
      chips[idx].classList.toggle("active", !state.favOnlyMode && state.activeFilters.has(cat.key));
    }
  });

  // Aktualizuj podświetlenie przycisków presetów
  document.querySelectorAll(".preset-chip").forEach(btn => {
    const isAct = btn.dataset.preset === state.activePreset;
    btn.classList.toggle("active", isAct);
  });

  updateFilterPoolInfo();
}

// Obsługa presetów
document.querySelectorAll(".preset-chip").forEach(btn => {
  btn.addEventListener("click", () => {
    const presetKey = btn.dataset.preset;
    if (presetKey === "fav-colors") {
      const favCount = getFavoriteColorIds().size;
      if (favCount === 0) {
        showToast("Nie masz jeszcze żadnych ulubionych kolorów! Dodaj je gwiazdką w oknie wyboru.");
        return;
      }
      state.favOnlyMode = true;
      state.activePreset = "fav-colors";
      state.activeFilters.clear();
      updateFilterUI();
      showToast("Losowanie wyłącznie z Twoich ulubionych kolorów ⭐");
      return;
    }

    state.favOnlyMode = false;
    state.activePreset = presetKey;
    const categories = PRESETS[presetKey] || [];
    state.activeFilters = new Set(categories);
    updateFilterUI();
    showToast(`Ustawiono preset: ${btn.textContent.trim()}`);
  });
});

// Losowanie pojedynczego regionu (z uwzględnieniem aktywnej puli)
function randomizeSingle(regionIdx) {
  const pool = getFilteredColorPool();
  if (pool.length === 0) {
    showToast("Brak kolorów w wybranej puli!");
    return;
  }
  const randomColor = pool[Math.floor(Math.random() * pool.length)];
  state.regions[regionIdx].color = randomColor;
  updateAll(true);
}

// Losowanie wszystkich aktywnych regionów (z uwzględnieniem aktywnej puli)
function randomizeAll() {
  const pool = getFilteredColorPool();
  if (pool.length === 0) {
    showToast("Brak kolorów w wybranej puli!");
    return;
  }
  state.regions.forEach((r) => {
    r.color = pool[Math.floor(Math.random() * pool.length)];
  });
  updateAll(true);
}

// Resetowanie do domyślnych (stały zestaw: 6 1 2 3 4 5)
function resetAll() {
  state.regions.forEach((r, idx) => {
    const targetId = DEFAULT_COLOR_IDS[idx];
    r.color = getColorById(targetId);
    r.enabled = true;
  });
  updateAll(true);
  showToast("Przywrócono domyślny zestaw kolorów (6, 1, 2, 3, 4, 5)!");
}

// Zbiorcza aktualizacja interfejsu (z opcją zapisu do historii)
function updateAll(saveHistory = false) {
  renderPreviewBar();
  renderRegionsGrid();
  updateCommands();
  if (saveHistory) {
    pushToHistory();
  }
}

// Modal wyboru koloru
function openColorModal(regionIdx) {
  state.activeModalRegion = regionIdx;
  state.modalFilter = null;
  document.getElementById("modal-title").textContent = `Wybierz kolor dla Regionu ${regionIdx}`;
  document.getElementById("color-search").value = "";
  renderModalFilterChips();
  filterAndRenderModalPalette();
  document.getElementById("color-modal").classList.add("active");
  document.getElementById("color-search").focus();
}

function closeModal() {
  document.getElementById("color-modal").classList.remove("active");
  state.activeModalRegion = null;
  state.modalFilter = null;
}

// Renderowanie filtrów kategorii w modalu
function renderModalFilterChips() {
  const container = document.getElementById("modal-category-filters");
  if (!container) return;
  container.innerHTML = "";

  const favCount = getFavoriteColorIds().size;

  // Przycisk "Wszystkie"
  const allChip = document.createElement("div");
  allChip.className = `filter-chip ${state.modalFilter === null ? "active" : ""}`;
  allChip.innerHTML = `<span>Wszystkie</span>`;
  allChip.addEventListener("click", () => {
    state.modalFilter = null;
    updateModalFilterChips();
    filterAndRenderModalPalette();
  });
  container.appendChild(allChip);

  // Przycisk "⭐ Ulubione"
  const favChip = document.createElement("div");
  favChip.className = `filter-chip ${state.modalFilter === "favorites" ? "active" : ""}`;
  favChip.innerHTML = `<span>⭐ Ulubione (${favCount})</span>`;
  favChip.addEventListener("click", () => {
    state.modalFilter = state.modalFilter === "favorites" ? null : "favorites";
    updateModalFilterChips();
    filterAndRenderModalPalette();
  });
  container.appendChild(favChip);

  COLOR_CATEGORIES.forEach(cat => {
    const chip = document.createElement("div");
    chip.className = `filter-chip ${state.modalFilter === cat.key ? "active" : ""}`;
    chip.innerHTML = `
      <span class="filter-chip-dot" style="background-color: ${cat.dot}"></span>
      <span>${cat.label}</span>
    `;
    chip.addEventListener("click", () => {
      state.modalFilter = state.modalFilter === cat.key ? null : cat.key;
      updateModalFilterChips();
      filterAndRenderModalPalette();
    });
    container.appendChild(chip);
  });
}

function updateModalFilterChips() {
  const chips = document.querySelectorAll("#modal-category-filters .filter-chip");
  if (!chips.length) return;
  chips[0].classList.toggle("active", state.modalFilter === null);
  chips[1].classList.toggle("active", state.modalFilter === "favorites");
  const favCount = getFavoriteColorIds().size;
  chips[1].innerHTML = `<span>⭐ Ulubione (${favCount})</span>`;

  COLOR_CATEGORIES.forEach((cat, idx) => {
    if (chips[idx + 2]) {
      chips[idx + 2].classList.toggle("active", state.modalFilter === cat.key);
    }
  });
}

// Filtruj i renderuj paletę w modalu
function filterAndRenderModalPalette() {
  const query = document.getElementById("color-search").value.toLowerCase().trim();
  let list = ARK_COLORS;
  const favs = getFavoriteColorIds();

  if (state.modalFilter === "favorites") {
    list = list.filter(c => favs.has(c.id));
  } else if (state.modalFilter) {
    list = list.filter(c => c.tags && c.tags.includes(state.modalFilter));
  }

  if (query) {
    list = list.filter((col) => {
      const nameMatch = col.name.toLowerCase().includes(query);
      const idMatch = col.id.toString() === query || col.id.toString().startsWith(query);
      return nameMatch || idMatch;
    });
  }

  renderPalette(list);
}

function renderPalette(list) {
  const container = document.getElementById("modal-palette");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 30px;">Nie znaleziono pasujących kolorów</div>`;
    return;
  }

  const favs = getFavoriteColorIds();

  list.forEach((col) => {
    const item = document.createElement("div");
    item.className = "palette-item";
    const isFav = favs.has(col.id);

    item.innerHTML = `
      <div class="palette-swatch-wrapper">
        <div class="palette-swatch" style="background-color: ${col.hex}"></div>
        <button class="palette-fav-btn ${isFav ? "is-fav" : ""}" title="${isFav ? "Usuń z ulubionych" : "Dodaj do ulubionych"}">
          ${isFav ? "★" : "☆"}
        </button>
      </div>
      <div class="palette-name" title="${col.name}">${col.name}</div>
      <div class="palette-id">ID: ${col.id}</div>
    `;

    // Kliknięcie w gwiazdkę
    const favBtn = item.querySelector(".palette-fav-btn");
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavoriteColor(col.id);
      updateModalFilterChips();
      filterAndRenderModalPalette();
      updateFilterPoolInfo();
    });

    // Kliknięcie w kafelek
    item.addEventListener("click", () => {
      if (state.activeModalRegion !== null) {
        state.regions[state.activeModalRegion].color = col;
        state.regions[state.activeModalRegion].enabled = true;
        closeModal();
        updateAll(true);
      }
    });

    container.appendChild(item);
  });
}

// Wyszukiwanie w modalu
document.getElementById("color-search").addEventListener("input", filterAndRenderModalPalette);

// Toast powiadomienie
function showToast(text) {
  const toast = document.getElementById("toast");
  toast.textContent = text || "Skopiowano do schowka!";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

// Kopiowanie do schowka
document.querySelectorAll(".btn-copy").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const elem = document.getElementById(targetId);
    const code = elem ? (elem.value !== undefined ? elem.value : elem.textContent) : "";
    navigator.clipboard.writeText(code).then(() => {
      showToast("Skopiowano komendę do schowka!");
    });
  });
});

// Dwukierunkowa integracja z polami komend:
// 1. Parser i synchronizacja dla komendy admina (cheat settargetdinocolor ...)
const adminCmdInput = document.getElementById("admin-cmd");
if (adminCmdInput) {
  adminCmdInput.addEventListener("focus", () => {
    isEditingAdminCmd = true;
  });

  const parseAndApplyAdminCmd = () => {
    const text = adminCmdInput.value;
    // Dopasuj wszystkie pary: settargetdinocolor <reg> <id>
    const regex = /settargetdinocolor\s+(\d+)\s+(\d+)/gi;
    let match;
    let foundAny = false;
    const seenRegions = new Set();

    while ((match = regex.exec(text)) !== null) {
      foundAny = true;
      const regIdx = parseInt(match[1], 10);
      const colorId = parseInt(match[2], 10);

      if (regIdx >= 0 && regIdx <= 5) {
        seenRegions.add(regIdx);
        const col = ARK_COLORS.find(c => c.id === colorId);
        if (col) {
          state.regions[regIdx].color = col;
          state.regions[regIdx].enabled = true;
        }
      }
    }

    if (foundAny) {
      // Wyłącz regiony, które nie występują w komendzie admina
      state.regions.forEach(r => {
        if (!seenRegions.has(r.regionIndex)) {
          r.enabled = false;
        }
      });
      updateAll();
      showToast("Zsynchronizowano kolory z komendy admina!");
    } else {
      // Jeśli format jest niepoprawny, przywróć aktualny stan
      updateCommands();
    }
  };

  adminCmdInput.addEventListener("input", () => {
    adminCmdInput.style.height = "auto";
    adminCmdInput.style.height = `${adminCmdInput.scrollHeight}px`;
  });

  adminCmdInput.addEventListener("blur", () => {
    isEditingAdminCmd = false;
    parseAndApplyAdminCmd();
  });

  adminCmdInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      adminCmdInput.blur();
    }
  });
}

// 2. Parser i synchronizacja dla komendy pluginu /color (/color <r0> <r1> <r2> <r3> <r4> <r5>)
const chatCmdInput = document.getElementById("chat-cmd");
if (chatCmdInput) {
  chatCmdInput.addEventListener("focus", () => {
    isEditingChatCmd = true;
  });

  const parseAndApplyChatCmd = () => {
    const text = chatCmdInput.value.trim();
    // Szukaj liczb po /color lub samych 6 liczb
    const cleaned = text.replace(/^\/color\s*/i, "").trim();
    const numbers = cleaned.split(/\s+/).map(n => parseInt(n, 10)).filter(n => !isNaN(n));

    if (numbers.length > 0) {
      let applied = false;
      numbers.slice(0, 6).forEach((id, idx) => {
        if (idx <= 5) {
          if (id === 0) {
            // ID 0 w pluginie /color oznacza wyłączony / domyślny region
            state.regions[idx].enabled = false;
            applied = true;
          } else {
            const col = ARK_COLORS.find(c => c.id === id);
            if (col) {
              state.regions[idx].color = col;
              state.regions[idx].enabled = true;
              applied = true;
            }
          }
        }
      });

      if (applied) {
        updateAll();
        showToast("Zsynchronizowano kolory z komendy /color!");
      } else {
        updateCommands();
      }
    } else {
      updateCommands();
    }
  };

  chatCmdInput.addEventListener("input", () => {
    chatCmdInput.style.height = "auto";
    chatCmdInput.style.height = `${chatCmdInput.scrollHeight}px`;
  });

  chatCmdInput.addEventListener("blur", () => {
    isEditingChatCmd = false;
    parseAndApplyChatCmd();
  });

  chatCmdInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      chatCmdInput.blur();
    }
  });
}

// Zdarzenia przycisków głównych
document.getElementById("btn-random-all").addEventListener("click", randomizeAll);
document.getElementById("btn-reset-all").addEventListener("click", resetAll);
document.getElementById("modal-close").addEventListener("click", closeModal);

// Zamknięcie modala kliknięciem poza nim lub ESC
document.getElementById("color-modal").addEventListener("click", (e) => {
  if (e.target.id === "color-modal") {
    closeModal();
  }
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (state.activeModalRegion !== null) closeModal();
    closeLibraryModal();
    closeSaveNameModal();
  }
});

// Inicjalizacja
renderFilterChips();
updateLibraryBadges();
randomizeAll();


