// Definicje 13 grup kolorów z etykietami (PL/EN) i kolorami kropek
const COLOR_CATEGORIES = [
  { key: "czarne", labelPl: "Czarne", labelEn: "Black", dot: "#000000" },
  { key: "szare", labelPl: "Szare", labelEn: "Gray", dot: "#8B9BB4" },
  { key: "biale", labelPl: "Białe", labelEn: "White", dot: "#FFFFFF" },
  { key: "czerwone", labelPl: "Czerwone", labelEn: "Red", dot: "#FF0000" },
  { key: "pomaranczowe", labelPl: "Pomarańczowe", labelEn: "Orange", dot: "#FF8C00" },
  { key: "brazowe", labelPl: "Brązowe", labelEn: "Brown", dot: "#784437" },
  { key: "zolte", labelPl: "Żółte", labelEn: "Yellow", dot: "#FFFF00" },
  { key: "zielone", labelPl: "Zielone", labelEn: "Green", dot: "#00FF00" },
  { key: "niebieskie", labelPl: "Niebieskie", labelEn: "Blue", dot: "#00A8FF" },
  { key: "fioletowe", labelPl: "Fioletowe", labelEn: "Purple", dot: "#9B59B6" },
  { key: "rozowe", labelPl: "Różowe", labelEn: "Pink", dot: "#FF69B4" },
  { key: "pastelowe", labelPl: "Pastelowe", labelEn: "Pastel", dot: "#FFAEC9" },
  { key: "ciemne", labelPl: "Ciemne", labelEn: "Dark", dot: "#1a1a24" }
];

function getCategoryLabel(cat) {
  return currentLang === "en" ? cat.labelEn : cat.labelPl;
}

// Oficjalne Eventy ARK z dokładnymi listami ID kolorów
const EVENT_PRESETS = {
  "event-winter": {
    namePl: "Winter Wonderland",
    nameEn: "Winter Wonderland",
    name: "Winter Wonderland",
    ids: [79, 5, 68, 31, 93, 91, 30, 28, 45, 85, 86, 87, 88, 96, 95, 94, 69, 1, 3, 8, 12, 17, 19, 25, 26, 36, 55, 4]
  },
  "event-love": {
    namePl: "Love Ascended / Evolved",
    nameEn: "Love Ascended / Evolved",
    name: "Love Ascended / Evolved",
    ids: [28, 51, 95, 96, 89, 90, 91, 69, 30, 67, 6, 68, 1, 17, 44, 88, 36, 55, 99, 85, 86, 87, 84, 19]
  },
  "event-easter": {
    namePl: "Eggcellent Adventure",
    nameEn: "Eggcellent Adventure",
    name: "Eggcellent Adventure",
    ids: [6, 3, 7, 11, 10, 12, 4, 5, 60, 67, 68, 97, 93, 94, 95, 96, 99, 78, 75, 91, 19, 21, 23, 25, 28, 30, 34, 56, 48, 44, 49, 50, 66, 64, 40, 38]
  },
  "event-summer": {
    namePl: "Summer Bash",
    nameEn: "Summer Bash",
    name: "Summer Bash",
    ids: [4, 11, 99, 94, 76, 60, 83, 84, 85, 78, 97, 10, 67, 12, 19, 36, 18, 79]
  },
  "event-fear": {
    namePl: "Fear Ascended / Evolved",
    nameEn: "Fear Ascended / Evolved",
    name: "Fear Ascended / Evolved",
    ids: [69, 83, 80, 1, 75, 90, 89, 8, 31, 79, 3, 86, 14, 49]
  },
  "event-turkey": {
    namePl: "Turkey Trial",
    nameEn: "Turkey Trial",
    name: "Turkey Trial",
    ids: [75, 72, 77, 71, 15, 9, 88, 69, 73, 1, 17, 20, 80, 82, 53, 54, 14, 33, 36]
  }
};

// Selekcjonowane Style & Klimaty
const STYLE_PRESETS = {
  "style-alpha": {
    namePl: "Alpha",
    nameEn: "Alpha",
    name: "Alpha",
    ids: [79, 224, 14, 225, 128, 226, 35, 129, 20, 17, 130, 227, 1, 12, 230, 231, 232, 18]
  },
  "style-cosmic": {
    namePl: "Kosmos",
    nameEn: "Cosmic",
    name: "Kosmos",
    ids: [79, 80, 200, 184, 57, 193, 201, 69, 252, 93, 58, 178, 59, 179, 219, 204, 172, 232]
  },
  "style-dragon": {
    namePl: "Smoczy Ogień",
    nameEn: "Dragonfire",
    name: "Smoczy Ogień",
    ids: [224, 62, 226, 128, 136, 129, 17, 130, 71, 72, 138, 243, 1, 74, 75, 244, 245, 241]
  },
  "style-frost": {
    namePl: "Nordycki Mróz",
    nameEn: "Nordic Frost",
    name: "Nordycki Mróz",
    ids: [56, 81, 29, 65, 251, 52, 185, 191, 51, 186, 66, 228, 188, 95, 189, 96, 231, 55]
  },
  "style-pastel": {
    namePl: "Słodki Pastel",
    nameEn: "Sweet Pastel",
    name: "Słodki Pastel",
    ids: [89, 207, 223, 215, 49, 220, 222, 214, 206, 134, 188, 174, 254, 221, 213, 205, 173, 149]
  },
  "style-synthwave": {
    namePl: "Synthwave",
    nameEn: "Synthwave",
    name: "Synthwave",
    ids: [192, 200, 201, 69, 194, 202, 210, 218, 219, 68, 73, 74, 211, 212, 75, 76, 245, 179]
  },
  "style-reef": {
    namePl: "Rafa Koralowa",
    nameEn: "Coral Reef",
    name: "Rafa Koralowa",
    ids: [192, 176, 92, 177, 250, 94, 187, 249, 183, 135, 74, 132, 76, 140, 180, 182, 141, 181]
  },
  "style-royal": {
    namePl: "Królewski Ametyst",
    nameEn: "Royal Amethyst",
    name: "Królewski Ametyst",
    ids: [216, 217, 209, 202, 31, 70, 218, 210, 203, 90, 91, 77, 245, 244, 67, 253, 133, 241]
  }
};

function getPresetDisplayName(presetKey) {
  const p = EVENT_PRESETS[presetKey] || STYLE_PRESETS[presetKey];
  if (!p) return "";
  return currentLang === "en" ? (p.nameEn || p.name) : (p.namePl || p.name);
}

// Stały domyślny zestaw kolorów (Region 0: kolor ID 6, Regiony 1-5: kolory ID 1-5)
const DEFAULT_COLOR_IDS = [6, 1, 2, 3, 4, 5];

function getColorById(id) {
  return ARK_COLORS.find(c => c.id === id) || ARK_COLORS[0];
}

// Stan aplikacji: 6 regionów (0 - 5) + aktywne filtry i presety losowania
const state = {
  activeModalRegion: null,
  activeFilters: new Set(), // wybrane tagi (np. czerwone, biale)
  activePreset: "all",      // "all", "fav-colors", klucz z EVENT_PRESETS lub STYLE_PRESETS
  favOnlyMode: false,
  excludedColorIds: new Set(), // kolory wykluczone przez użytkownika z losowania
  modalFilter: null, // pojedynczy filtr w modalu
  compactViewPicker: localStorage.getItem("ark_compact_view_picker") === "true",
  compactViewPool: localStorage.getItem("ark_compact_view_pool") === "true",
  poolCollapsed: localStorage.getItem("ark_pool_collapsed") === "true",
  harmonyRule: localStorage.getItem("ark_harmony_rule") || "auto",
  harmonyMood: localStorage.getItem("ark_harmony_mood") || "auto",
  anchorRegionIndex: null, // Dowolny region 0-5 wybrany/zablokowany jako baza harmonii
  regions: [
    { regionIndex: 0, color: getColorById(6), enabled: true, locked: false },
    { regionIndex: 1, color: getColorById(1), enabled: true, locked: false },
    { regionIndex: 2, color: getColorById(2), enabled: true, locked: false },
    { regionIndex: 3, color: getColorById(3), enabled: true, locked: false },
    { regionIndex: 4, color: getColorById(4), enabled: true, locked: false },
    { regionIndex: 5, color: getColorById(5), enabled: true, locked: false }
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

// =========================================================
// Obsługa Drag & Drop (Zamiana kolorów między regionami)
// =========================================================
let isDraggingColor = false;
let draggedRegionIndex = null;
let floatingDragBadge = null;

// Pływający kafel podążający za kursorem podczas przeciągania
function createFloatingBadge(reg, x, y) {
  removeFloatingBadge();

  floatingDragBadge = document.createElement("div");
  floatingDragBadge.className = "cursor-drag-badge";
  const textCol = getContrastColor(reg.color.hex);
  floatingDragBadge.style.backgroundColor = reg.color.hex;
  floatingDragBadge.style.color = textCol;

  floatingDragBadge.innerHTML = `
    <div class="drag-badge-header">
      <span class="drag-badge-region" style="color: ${textCol}">R${reg.regionIndex}</span>
      <span class="drag-badge-id" style="color: ${textCol}">ID: ${reg.color.id}</span>
    </div>
    <div class="drag-badge-name" style="color: ${textCol}">${reg.color.name}</div>
  `;

  document.body.appendChild(floatingDragBadge);
  if (x && y) {
    updateFloatingBadgePos(x, y);
  }
}

function updateFloatingBadgePos(x, y) {
  if (!floatingDragBadge || !x || !y) return;
  floatingDragBadge.style.left = `${x}px`;
  floatingDragBadge.style.top = `${y}px`;
}

function removeFloatingBadge() {
  if (floatingDragBadge) {
    floatingDragBadge.remove();
    floatingDragBadge = null;
  }
}

// Globalne śledzenie ruchu kursora podczas operacji Drag & Drop
window.addEventListener("dragover", (e) => {
  if (floatingDragBadge) {
    updateFloatingBadgePos(e.clientX, e.clientY);
  }
});

window.addEventListener("drag", (e) => {
  if (floatingDragBadge && e.clientX > 0 && e.clientY > 0) {
    updateFloatingBadgePos(e.clientX, e.clientY);
  }
});

window.addEventListener("drop", removeFloatingBadge);
window.addEventListener("dragend", removeFloatingBadge);

// 1x1 przezroczysty obrazek ukrywający domyślny, blady duch przeglądarki
const transparentDragImg = new Image();
transparentDragImg.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

// Obsługa przeciągania na ekranach dotykowych (Mobile / Touch)
function setupTouchDrag(element, regionIndex, colorHex) {
  let touchStartPos = null;
  let isMoving = false;
  let avatar = null;
  let currentTargetEl = null;

  element.addEventListener("touchstart", (e) => {
    const reg = state.regions[regionIndex];
    if (reg.locked || !reg.enabled) return;
    const touch = e.touches[0];
    touchStartPos = { x: touch.clientX, y: touch.clientY };
    isMoving = false;
  }, { passive: true });

  element.addEventListener("touchmove", (e) => {
    if (!touchStartPos) return;
    const touch = e.touches[0];
    const dx = touch.clientX - touchStartPos.x;
    const dy = touch.clientY - touchStartPos.y;

    if (!isMoving) {
      if (Math.hypot(dx, dy) > 10) {
        isMoving = true;
        isDraggingColor = true;
        draggedRegionIndex = regionIndex;
        document.body.classList.add("is-color-dragging");

        const regObj = state.regions[regionIndex];
        avatar = document.createElement("div");
        avatar.className = "cursor-drag-badge touch-drag-avatar";
        avatar.style.backgroundColor = colorHex;
        const textCol = getContrastColor(colorHex);
        avatar.style.color = textCol;
        avatar.innerHTML = `
          <div class="drag-badge-header">
            <span class="drag-badge-region" style="color: ${textCol}">R${regionIndex}</span>
            <span class="drag-badge-id" style="color: ${textCol}">ID: ${regObj.color.id}</span>
          </div>
          <div class="drag-badge-name" style="color: ${textCol}">${regObj.color.name}</div>
        `;
        document.body.appendChild(avatar);
      }
    }

    if (isMoving && avatar) {
      if (e.cancelable) e.preventDefault();
      avatar.style.left = `${touch.clientX}px`;
      avatar.style.top = `${touch.clientY}px`;

      const elBelow = document.elementFromPoint(touch.clientX, touch.clientY);
      const targetCandidate = elBelow?.closest("[data-reg]");

      if (currentTargetEl && currentTargetEl !== targetCandidate) {
        currentTargetEl.classList.remove("drag-over", "drag-locked", "drag-insert-left", "drag-insert-right");
        currentTargetEl = null;
      }

      if (targetCandidate) {
        const targetIdx = parseInt(targetCandidate.dataset.reg, 10);
        if (!isNaN(targetIdx) && targetIdx !== regionIndex) {
          currentTargetEl = targetCandidate;
          if (state.regions[targetIdx].locked || !state.regions[targetIdx].enabled) {
            currentTargetEl.classList.add("drag-locked");
          } else {
            const rect = targetCandidate.getBoundingClientRect();
            const ratioX = (touch.clientX - rect.left) / rect.width;
            targetCandidate.classList.remove("drag-over", "drag-insert-left", "drag-insert-right");
            if (ratioX < 0.28) {
              targetCandidate.classList.add("drag-insert-left");
            } else if (ratioX > 0.72) {
              targetCandidate.classList.add("drag-insert-right");
            } else {
              targetCandidate.classList.add("drag-over");
            }
          }
        }
      }
    }
  }, { passive: false });

  const finishTouch = () => {
    if (avatar) {
      avatar.remove();
      avatar = null;
    }
    if (currentTargetEl) {
      const isInsertLeft = currentTargetEl.classList.contains("drag-insert-left");
      const isInsertRight = currentTargetEl.classList.contains("drag-insert-right");
      currentTargetEl.classList.remove("drag-over", "drag-locked", "drag-insert-left", "drag-insert-right");
      const targetIdx = parseInt(currentTargetEl.dataset.reg, 10);
      if (!isNaN(targetIdx) && targetIdx !== regionIndex) {
        if (state.regions[targetIdx].locked) {
          showToast(t("toastRegionLockedNoSwap", targetIdx));
        } else if (!state.regions[targetIdx].enabled) {
          showToast(t("toastRegionInactiveNoSwap", targetIdx));
        } else {
          if (isInsertLeft) {
            insertRegionColor(regionIndex, targetIdx, "before");
          } else if (isInsertRight) {
            insertRegionColor(regionIndex, targetIdx, "after");
          } else {
            swapRegionColors(regionIndex, targetIdx);
          }
        }
      }
      currentTargetEl = null;
    }
    document.body.classList.remove("is-color-dragging");
    draggedRegionIndex = null;
    touchStartPos = null;
    setTimeout(() => {
      isMoving = false;
      isDraggingColor = false;
    }, 120);
  };

  element.addEventListener("touchend", finishTouch);
  element.addEventListener("touchcancel", finishTouch);
}

// Dołączanie zdarzeń Drag & Drop do kafelka w pasku podglądu
function attachTileDragAndDrop(tile, reg) {
  const isProtected = reg.locked || !reg.enabled;
  if (!isProtected) {
    tile.draggable = true;

    tile.addEventListener("dragstart", (e) => {
      isDraggingColor = true;
      draggedRegionIndex = reg.regionIndex;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", String(reg.regionIndex));
      tile.classList.add("is-dragging");
      document.body.classList.add("is-color-dragging");

      // Ukryj domyślny cień przeglądarki i utwórz własną wizualizację trzymanego kafelka
      if (e.dataTransfer.setDragImage) {
        e.dataTransfer.setDragImage(transparentDragImg, 0, 0);
      }
      createFloatingBadge(reg, e.clientX, e.clientY);
    });

    tile.addEventListener("dragend", () => {
      tile.classList.remove("is-dragging");
      document.body.classList.remove("is-color-dragging");
      document.querySelectorAll(".drag-over, .drag-locked, .drag-insert-left, .drag-insert-right").forEach(el => {
        el.classList.remove("drag-over", "drag-locked", "drag-insert-left", "drag-insert-right");
      });
      draggedRegionIndex = null;
      removeFloatingBadge();
      setTimeout(() => {
        isDraggingColor = false;
      }, 100);
    });

    setupTouchDrag(tile, reg.regionIndex, reg.color.hex);
  } else {
    tile.draggable = false;
  }

  tile.addEventListener("dragover", (e) => {
    if (draggedRegionIndex !== null && draggedRegionIndex !== reg.regionIndex) {
      e.preventDefault();
      if (reg.locked || !reg.enabled) {
        e.dataTransfer.dropEffect = "none";
        tile.classList.add("drag-locked");
        return;
      }
      e.dataTransfer.dropEffect = "move";

      const rect = tile.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;

      tile.classList.remove("drag-over", "drag-insert-left", "drag-insert-right");
      if (ratio < 0.28) {
        tile.classList.add("drag-insert-left");
      } else if (ratio > 0.72) {
        tile.classList.add("drag-insert-right");
      } else {
        tile.classList.add("drag-over");
      }
    }
  });

  tile.addEventListener("dragleave", (e) => {
    if (tile.contains(e.relatedTarget)) return;
    tile.classList.remove("drag-over", "drag-locked", "drag-insert-left", "drag-insert-right");
  });

  tile.addEventListener("drop", (e) => {
    e.preventDefault();
    const isInsertLeft = tile.classList.contains("drag-insert-left");
    const isInsertRight = tile.classList.contains("drag-insert-right");
    tile.classList.remove("drag-over", "drag-locked", "drag-insert-left", "drag-insert-right");
    removeFloatingBadge();

    if (reg.locked) {
      showToast(t("toastRegionLockedNoSwap", reg.regionIndex));
      return;
    }
    if (!reg.enabled) {
      showToast(t("toastRegionInactiveNoSwap", reg.regionIndex));
      return;
    }

    const raw = e.dataTransfer.getData("text/plain");
    const sourceIdx = draggedRegionIndex !== null ? draggedRegionIndex : parseInt(raw, 10);
    if (!isNaN(sourceIdx) && sourceIdx !== reg.regionIndex) {
      if (isInsertLeft) {
        insertRegionColor(sourceIdx, reg.regionIndex, "before");
      } else if (isInsertRight) {
        insertRegionColor(sourceIdx, reg.regionIndex, "after");
      } else {
        swapRegionColors(sourceIdx, reg.regionIndex);
      }
    }
  });
}

// Dołączanie zdarzeń Drag & Drop do karty regionu i próbki koloru
function attachCardDragAndDrop(card, swatch, reg) {
  const isProtected = reg.locked || !reg.enabled;
  if (!isProtected) {
    swatch.draggable = true;

    swatch.addEventListener("dragstart", (e) => {
      isDraggingColor = true;
      draggedRegionIndex = reg.regionIndex;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", String(reg.regionIndex));
      swatch.classList.add("is-dragging");
      document.body.classList.add("is-color-dragging");

      // Ukryj domyślny cień przeglądarki i utwórz własną wizualizację trzymanego kafelka
      if (e.dataTransfer.setDragImage) {
        e.dataTransfer.setDragImage(transparentDragImg, 0, 0);
      }
      createFloatingBadge(reg, e.clientX, e.clientY);
    });

    swatch.addEventListener("dragend", () => {
      swatch.classList.remove("is-dragging");
      document.body.classList.remove("is-color-dragging");
      document.querySelectorAll(".drag-over, .drag-locked, .drag-insert-left, .drag-insert-right").forEach(el => {
        el.classList.remove("drag-over", "drag-locked", "drag-insert-left", "drag-insert-right");
      });
      draggedRegionIndex = null;
      removeFloatingBadge();
      setTimeout(() => {
        isDraggingColor = false;
      }, 100);
    });

    setupTouchDrag(swatch, reg.regionIndex, reg.color.hex);
  } else {
    swatch.draggable = false;
  }

  card.addEventListener("dragover", (e) => {
    if (draggedRegionIndex !== null && draggedRegionIndex !== reg.regionIndex) {
      e.preventDefault();
      if (reg.locked || !reg.enabled) {
        e.dataTransfer.dropEffect = "none";
        card.classList.add("drag-locked");
        return;
      }
      e.dataTransfer.dropEffect = "move";

      const rect = card.getBoundingClientRect();
      const ratioX = (e.clientX - rect.left) / rect.width;

      card.classList.remove("drag-over", "drag-insert-left", "drag-insert-right");
      if (ratioX < 0.22) {
        card.classList.add("drag-insert-left");
      } else if (ratioX > 0.78) {
        card.classList.add("drag-insert-right");
      } else {
        card.classList.add("drag-over");
      }
    }
  });

  card.addEventListener("dragleave", (e) => {
    if (card.contains(e.relatedTarget)) return;
    card.classList.remove("drag-over", "drag-locked", "drag-insert-left", "drag-insert-right");
  });

  card.addEventListener("drop", (e) => {
    e.preventDefault();
    const isInsertLeft = card.classList.contains("drag-insert-left");
    const isInsertRight = card.classList.contains("drag-insert-right");
    card.classList.remove("drag-over", "drag-locked", "drag-insert-left", "drag-insert-right");
    removeFloatingBadge();

    if (reg.locked) {
      showToast(t("toastRegionLockedNoSwap", reg.regionIndex));
      return;
    }
    if (!reg.enabled) {
      showToast(t("toastRegionInactiveNoSwap", reg.regionIndex));
      return;
    }

    const raw = e.dataTransfer.getData("text/plain");
    const sourceIdx = draggedRegionIndex !== null ? draggedRegionIndex : parseInt(raw, 10);
    if (!isNaN(sourceIdx) && sourceIdx !== reg.regionIndex) {
      if (isInsertLeft) {
        insertRegionColor(sourceIdx, reg.regionIndex, "before");
      } else if (isInsertRight) {
        insertRegionColor(sourceIdx, reg.regionIndex, "after");
      } else {
        swapRegionColors(sourceIdx, reg.regionIndex);
      }
    }
  });
}

// Funkcja wyznaczająca kolor bazowy (kotwicę) harmonii
function getHarmonyAnchorRegion() {
  // Sprawdź czy zapamiętany region bazowy jest aktywny i zablokowany
  if (state.anchorRegionIndex !== null && state.anchorRegionIndex !== undefined) {
    const reg = state.regions[state.anchorRegionIndex];
    if (reg && reg.enabled && reg.locked) {
      return reg;
    }
  }

  // Jeśli nie, znajdź pierwszy zablokowany i aktywny
  const lockedActive = state.regions.filter(r => r.enabled && r.locked);
  if (lockedActive.length > 0) {
    state.anchorRegionIndex = lockedActive[0].regionIndex;
    return lockedActive[0];
  }

  state.anchorRegionIndex = null;
  return null;
}

// Aktualizacja paska statusu bazy harmonii
function updateHarmonyUI() {
  const anchor = getHarmonyAnchorRegion();
  const badge = document.getElementById("harmony-anchor-status");
  const ruleSelect = document.getElementById("harmony-rule-select");
  const moodSelect = document.getElementById("harmony-mood-select");

  if (ruleSelect && ruleSelect.value !== state.harmonyRule) {
    ruleSelect.value = state.harmonyRule;
  }
  if (moodSelect && moodSelect.value !== state.harmonyMood) {
    moodSelect.value = state.harmonyMood;
  }

  if (badge) {
    if (anchor) {
      badge.textContent = t("harmonyBaseBadgeText", anchor.regionIndex, anchor.color.name);
      badge.classList.add("is-active-anchor");
    } else {
      badge.textContent = t("harmonyAnchorTooltip");
      badge.classList.remove("is-active-anchor");
    }
  }
}

// Renderowanie paska podglądu 6 regionów
function renderPreviewBar() {
  const bar = document.getElementById("preview-bar");
  bar.innerHTML = "";
  const anchor = getHarmonyAnchorRegion();

  state.regions.forEach((reg) => {
    const isAnchor = anchor && anchor.regionIndex === reg.regionIndex;
    const tile = document.createElement("div");
    tile.className = `preview-tile ${reg.locked ? "is-locked" : ""} ${isAnchor ? "is-anchor" : ""} ${reg.enabled ? "" : "disabled"}`;
    tile.dataset.reg = reg.regionIndex;
    const lockIcon = isAnchor ? " ⭐" : (reg.locked ? " 🔒" : "");

    if (isAnchor) {
      tile.title = t("tip_tile_anchor", reg.regionIndex, reg.color.name);
    } else if (reg.locked) {
      tile.title = t("tip_tile_locked", reg.regionIndex);
    } else if (!reg.enabled) {
      tile.title = t("tip_tile_inactive", reg.regionIndex);
    } else {
      tile.title = t("tip_tile_active", reg.regionIndex, reg.color.name);
    }

    if (reg.enabled) {
      tile.style.backgroundColor = reg.color.hex;
      const textCol = getContrastColor(reg.color.hex);
      tile.style.color = textCol;
      tile.innerHTML = `
        <div class="tile-header">
          <span class="tile-title" style="color: ${textCol}">R${reg.regionIndex}${lockIcon}</span>
          <span class="tile-id" style="color: ${textCol}">ID: ${reg.color.id}</span>
        </div>
        <span class="tile-color-name" style="color: ${textCol}">${reg.color.name}</span>
      `;
    } else {
      tile.style.backgroundColor = "#1b2330";
      tile.style.color = "#55657e";
      tile.innerHTML = `
        <div class="tile-header">
          <span class="tile-title">R${reg.regionIndex}${lockIcon}</span>
          <span class="tile-id">[off]</span>
        </div>
        <span class="tile-color-name">${t("regionDisabledTag")}</span>
      `;
    }

    tile.addEventListener("click", () => {
      if (isDraggingColor) return;
      openColorModal(reg.regionIndex);
    });

    // Dołącz obsługę Drag & Drop
    attachTileDragAndDrop(tile, reg);

    bar.appendChild(tile);
  });
}

// Renderowanie siatki regionów
function renderRegionsGrid() {
  const grid = document.getElementById("regions-grid");
  grid.innerHTML = "";
  const anchor = getHarmonyAnchorRegion();

  state.regions.forEach((reg) => {
    const isAnchor = anchor && anchor.regionIndex === reg.regionIndex;
    const card = document.createElement("div");
    card.className = `region-card ${reg.enabled ? "" : "disabled"} ${reg.locked ? "is-locked" : ""} ${isAnchor ? "is-anchor" : ""}`;
    card.dataset.reg = reg.regionIndex;

    let swatchTitle = t("tip_swatch_active");
    if (isAnchor) {
      swatchTitle = t("tip_swatch_anchor", reg.regionIndex, reg.color.name);
    } else if (reg.locked) {
      swatchTitle = t("tip_swatch_locked");
    } else if (!reg.enabled) {
      swatchTitle = t("tip_swatch_inactive");
    }

    const lockIconChar = isAnchor ? "⭐" : (reg.locked ? "🔒" : "🔓");
    const lockBtnTitle = isAnchor
      ? t("tip_lock_anchor")
      : (reg.locked ? t("tip_lock_locked") : t("tip_lock_unlocked"));

    card.innerHTML = `
      <div class="region-card-header">
        <div class="region-title-group">
          <div class="region-number">${reg.regionIndex}</div>
          <div class="region-title">
            Region ${reg.regionIndex}
            ${isAnchor ? `<span class="region-anchor-tag">${t("harmonyAnchorBadge")}</span>` : ""}
          </div>
        </div>
        <div class="region-controls-group">
          <button class="region-lock-btn ${reg.locked ? "locked" : ""} ${isAnchor ? "is-anchor-btn" : ""}" data-reg="${reg.regionIndex}" title="${lockBtnTitle}">
            ${lockIconChar}
          </button>
          <label class="region-toggle-label">
            <input type="checkbox" ${reg.enabled ? "checked" : ""} data-reg="${reg.regionIndex}" class="region-toggle">
            ${t("activeRegion")}
          </label>
        </div>
      </div>

      <div class="region-card-body">
        <div class="color-swatch-large ${reg.locked ? "is-locked" : ""} ${isAnchor ? "is-anchor-swatch" : ""}" style="background-color: ${reg.color.hex}" title="${swatchTitle}" data-reg="${reg.regionIndex}"></div>
        <div class="region-info">
          <div class="color-info-name">${reg.color.name}</div>
          <div class="color-info-meta">
            <span>ID:</span>
            <input type="number" class="region-id-input" value="${reg.color.id}" min="1" max="254" data-reg="${reg.regionIndex}" title="${t("tip_input_id")}">
            <span class="color-meta-divider">|</span>
            <span>HEX: ${reg.color.hex}</span>
          </div>
        </div>
      </div>

      <div class="region-actions">
        <button class="btn btn-secondary btn-sm btn-pick" data-reg="${reg.regionIndex}">${t("pick")}</button>
        <button class="btn btn-secondary btn-sm btn-rand-one" data-reg="${reg.regionIndex}">${t("randomize")}</button>
        <button class="btn btn-secondary btn-sm btn-copy-one" data-reg="${reg.regionIndex}" title="${t("tip_copy_region")}">${t("copy")}</button>
      </div>
    `;

    // Zdarzenia
    const swatch = card.querySelector(".color-swatch-large");
    const pickBtn = card.querySelector(".btn-pick");
    const randBtn = card.querySelector(".btn-rand-one");
    const copyBtn = card.querySelector(".btn-copy-one");
    const toggle = card.querySelector(".region-toggle");
    const idInput = card.querySelector(".region-id-input");
    const lockBtn = card.querySelector(".region-lock-btn");

    swatch.addEventListener("click", () => {
      if (isDraggingColor) return;
      openColorModal(reg.regionIndex);
    });
    pickBtn.addEventListener("click", () => openColorModal(reg.regionIndex));
    randBtn.addEventListener("click", () => randomizeSingle(reg.regionIndex));
    copyBtn.addEventListener("click", () => {
      const singleCmd = `cheat settargetdinocolor ${reg.regionIndex} ${reg.color.id}`;
      navigator.clipboard.writeText(singleCmd).then(() => {
        showToast(t("toastCopiedSingle") + singleCmd);
      });
    });
    toggle.addEventListener("change", (e) => {
      reg.enabled = e.target.checked;
      if (!reg.enabled && state.anchorRegionIndex === reg.regionIndex) {
        state.anchorRegionIndex = null;
      }
      updateAll();
    });
    lockBtn.addEventListener("click", () => {
      reg.locked = !reg.locked;
      if (reg.locked) {
        state.anchorRegionIndex = reg.regionIndex;
      } else if (state.anchorRegionIndex === reg.regionIndex) {
        state.anchorRegionIndex = null;
      }
      renderRegionsGrid();
      renderPreviewBar();
      updateHarmonyUI();
      if (reg.locked) {
        const newAnchor = getHarmonyAnchorRegion();
        if (newAnchor && newAnchor.regionIndex === reg.regionIndex) {
          showToast(t("toastHarmonyAnchorSet", reg.regionIndex));
        } else {
          showToast(t("toastRegionLocked", reg.regionIndex));
        }
      } else {
        showToast(t("toastRegionUnlocked", reg.regionIndex));
      }
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
          showToast(t("toastColorNotFound", val));
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

    // Dołącz obsługę Drag & Drop na karcie i próbce koloru
    attachCardDragAndDrop(card, swatch, reg);

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
      adminCmdElem.value = t("adminCmdEmpty");
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

// Zamiana kolorów miejscami (Drag & Drop)
function swapRegionColors(sourceIdx, targetIdx) {
  if (sourceIdx === targetIdx) return;
  const srcReg = state.regions[sourceIdx];
  const tgtReg = state.regions[targetIdx];
  if (!srcReg || !tgtReg) return;

  // Odporne na przeciąganie zablokowane i nieaktywne regiony
  if (srcReg.locked) {
    showToast(t("toastRegionLockedNoSwap", sourceIdx));
    return;
  }
  if (!srcReg.enabled) {
    showToast(t("toastRegionInactiveNoSwap", sourceIdx));
    return;
  }
  if (tgtReg.locked) {
    showToast(t("toastRegionLockedNoSwap", targetIdx));
    return;
  }
  if (!tgtReg.enabled) {
    showToast(t("toastRegionInactiveNoSwap", targetIdx));
    return;
  }

  // Zamiana koloru
  const tempColor = srcReg.color;
  srcReg.color = tgtReg.color;
  tgtReg.color = tempColor;

  updateAll(true);
  showToast(t("toastSwappedColors", sourceIdx, targetIdx));
}

// Wstawienie koloru pomiędzy regionami (przesunięcie pozostałych aktywnych i odblokowanych)
function insertRegionColor(sourceIdx, targetIdx, position = "before") {
  if (sourceIdx === targetIdx) return;
  const srcReg = state.regions[sourceIdx];
  if (!srcReg || srcReg.locked) {
    showToast(t("toastRegionLockedNoShift", sourceIdx));
    return;
  }
  if (!srcReg.enabled) {
    showToast(t("toastRegionInactiveNoShift", sourceIdx));
    return;
  }

  // Odczytaj listę indeksów regionów, które NIE są zablokowane i SĄ AKTYWNE
  const availableIndices = [];
  state.regions.forEach(r => {
    if (!r.locked && r.enabled) availableIndices.push(r.regionIndex);
  });

  if (availableIndices.length < 2) {
    showToast(t("toastTooFewRegionsToShift"));
    return;
  }

  // Lista obiektów dla aktywnych odblokowanych regionów
  const availableItems = availableIndices.map(idx => ({
    origIdx: idx,
    color: state.regions[idx].color
  }));

  // Znajdź pozycję elementu źródłowego na liście aktywnych i odblokowanych
  const srcPos = availableItems.findIndex(item => item.origIdx === sourceIdx);
  if (srcPos === -1) return;

  // Wyjmij element źródłowy
  const [movedItem] = availableItems.splice(srcPos, 1);

  // Oblicz pozycję docelową w liście
  let targetPos = availableItems.findIndex(item => item.origIdx === targetIdx);

  if (targetPos === -1) {
    // Jeżeli targetIdx jest zablokowany lub nieaktywny, wstawiamy względem najbliższego aktywnego sąsiada
    if (position === "before") {
      targetPos = availableItems.findIndex(item => item.origIdx > targetIdx);
      if (targetPos === -1) targetPos = availableItems.length;
    } else {
      let lastBefore = -1;
      availableItems.forEach((item, i) => {
        if (item.origIdx < targetIdx) lastBefore = i;
      });
      targetPos = lastBefore + 1;
    }
  } else {
    if (position === "after") {
      targetPos += 1;
    }
  }

  // Wstaw w nowej pozycji
  availableItems.splice(targetPos, 0, movedItem);

  // Sprawdź czy zaszła zmiana
  let anyChanged = false;
  availableIndices.forEach((slotIdx, i) => {
    if (state.regions[slotIdx].color.id !== availableItems[i].color.id) {
      anyChanged = true;
    }
  });

  if (!anyChanged) return;

  // Zastosuj nowe przypisania wyłącznie do aktywnych i odblokowanych slotów
  availableIndices.forEach((slotIdx, i) => {
    state.regions[slotIdx].color = availableItems[i].color;
  });

  updateAll(true);
  const posText = position === "before" ? t("posBefore", targetIdx) : t("posAfter", targetIdx);
  showToast(t("toastInsertedShifted", sourceIdx, posText));
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
    showToast(t("toastFavRemoved"));
  } else {
    favs.add(colorId);
    showToast(t("toastFavAdded"));
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
  const name = customName && customName.trim() ? customName.trim() : `${t("defaultSetComposition")} #${favorites.length + 1}`;
  
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
  showToast(t("toastSavedFav", name));
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
  showToast(t("toastLoadedSet"));
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
  const label = activeTab === "favorites" ? t("labelFavorites") : t("labelHistory");
  if (confirm(t("confirmClearList", label))) {
    setStorage(key, []);
    updateLibraryBadges();
    renderLibrary();
    showToast(t("toastClearedList", label));
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
    ? t("libSavedDesc")
    : t("libHistoryDesc");

  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `
      <div class="lib-empty">
        ${isFav ? t("libEmptySaved") : t("libEmptyHistory")}
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
          return `<div class="mini-swatch disabled" title="Region ${r.regionIndex}: ${t("regionDisabledName")}">R${r.regionIndex}</div>`;
        }
        const textCol = getContrastColor(r.color.hex);
        return `<div class="mini-swatch" style="background-color: ${r.color.hex}; color: ${textCol}" title="Region ${r.regionIndex}: ${r.color.name} (ID: ${r.color.id})">R${r.regionIndex}</div>`;
      })
      .join("");

    const titleText = isFav ? item.name : `${t("setAtTime")} ${item.date}`;

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
        <button class="btn btn-primary btn-sm btn-apply-set">${t("loadSet")}</button>
        <button class="btn btn-secondary btn-sm btn-del-set" title="${t("deleteSetTitle")}">🗑️</button>
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

// Pobierz pełną pulę wybraną filtrami i presetem (przed odjęciem wykluczeń)
function getBaseSelectedPool() {
  let basePool = ARK_COLORS;

  if (state.favOnlyMode) {
    const favs = getFavoriteColorIds();
    basePool = ARK_COLORS.filter(col => favs.has(col.id));
  } else if (state.activePreset && state.activePreset !== "all") {
    let presetObj = EVENT_PRESETS[state.activePreset] || STYLE_PRESETS[state.activePreset];
    if (presetObj && Array.isArray(presetObj.ids)) {
      const idSet = new Set(presetObj.ids);
      basePool = ARK_COLORS.filter(col => idSet.has(col.id));
    }
  }

  // Jeśli użytkownik dodatkowo zaznaczył konkretne tagi odcieni, zawężamy bazową pulę
  if (state.activeFilters.size > 0) {
    basePool = basePool.filter(col => {
      if (!col.tags) return false;
      return col.tags.some(t => state.activeFilters.has(t));
    });
  }

  return basePool;
}

// Pobierz bieżącą ostateczną pulę kolorów do losowania (z odjęciem wykluczonych)
function getFilteredColorPool() {
  const base = getBaseSelectedPool();
  if (state.excludedColorIds.size === 0) return base;
  return base.filter(col => !state.excludedColorIds.has(col.id));
}

// =========================================================
// Obsługa przełącznika widoku: Standardowy / Kompaktowy (ID jako cień)
// =========================================================
function setPickerCompactMode(isCompact) {
  state.compactViewPicker = !!isCompact;
  localStorage.setItem("ark_compact_view_picker", state.compactViewPicker ? "true" : "false");
  updatePickerViewToggleUI();
  filterAndRenderModalPalette();
}

function setPoolCompactMode(isCompact) {
  state.compactViewPool = !!isCompact;
  localStorage.setItem("ark_compact_view_pool", state.compactViewPool ? "true" : "false");
  updatePoolViewToggleUI();
  renderPoolModal();
}

function updatePickerViewToggleUI() {
  const toggle = document.getElementById("color-picker-view-toggle");
  if (!toggle) return;
  toggle.querySelectorAll(".view-mode-btn").forEach(btn => {
    const isCompactBtn = btn.dataset.mode === "compact";
    btn.classList.toggle("active", isCompactBtn === !!state.compactViewPicker);
  });
}

function updatePoolViewToggleUI() {
  const toggle = document.getElementById("pool-view-toggle");
  if (!toggle) return;
  toggle.querySelectorAll(".view-mode-btn").forEach(btn => {
    const isCompactBtn = btn.dataset.mode === "compact";
    btn.classList.toggle("active", isCompactBtn === !!state.compactViewPool);
  });
}

function initViewToggleControls() {
  const pickerToggle = document.getElementById("color-picker-view-toggle");
  if (pickerToggle) {
    pickerToggle.querySelectorAll(".view-mode-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        setPickerCompactMode(btn.dataset.mode === "compact");
      });
    });
  }

  const poolToggle = document.getElementById("pool-view-toggle");
  if (poolToggle) {
    poolToggle.querySelectorAll(".view-mode-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        setPoolCompactMode(btn.dataset.mode === "compact");
      });
    });
  }

  updatePickerViewToggleUI();
  updatePoolViewToggleUI();
}

// Otwieranie i obsługa modalu zarządzania pulą
function openPoolModal() {
  const modal = document.getElementById("pool-modal");
  if (!modal) return;
  updatePoolViewToggleUI();
  renderPoolModal();
  modal.classList.add("active");
}

function closePoolModal() {
  const modal = document.getElementById("pool-modal");
  if (modal) modal.classList.remove("active");
}

function renderPoolModal() {
  const grid = document.getElementById("pool-modal-grid");
  const badge = document.getElementById("pool-stats-badge");
  const subtitle = document.getElementById("pool-modal-subtitle");
  if (!grid) return;

  const fullPool = getBaseSelectedPool();
  const activeCount = fullPool.filter(c => !state.excludedColorIds.has(c.id)).length;
  const excludedInPool = fullPool.filter(c => state.excludedColorIds.has(c.id)).length;

  let presetName = t("allColorsName");
  if (state.favOnlyMode) presetName = t("favColorsPreset");
  else if (state.activePreset && EVENT_PRESETS[state.activePreset]) presetName = getPresetDisplayName(state.activePreset);
  else if (state.activePreset && STYLE_PRESETS[state.activePreset]) presetName = getPresetDisplayName(state.activePreset);

  if (subtitle) {
    subtitle.textContent = t("poolSubtitle", presetName);
  }
  if (badge) {
    badge.textContent = t("poolStats", activeCount, excludedInPool);
  }

  grid.innerHTML = "";

  if (fullPool.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 40px;">${t("noColorsInFilter")}</div>`;
    return;
  }

  const isCompact = !!state.compactViewPool;
  grid.classList.toggle("is-compact", isCompact);

  fullPool.forEach(col => {
    const isExcluded = state.excludedColorIds.has(col.id);
    const item = document.createElement("div");

    const toggleExclude = (e) => {
      e.stopPropagation();
      if (state.excludedColorIds.has(col.id)) {
        state.excludedColorIds.delete(col.id);
      } else {
        state.excludedColorIds.add(col.id);
      }
      renderPoolModal();
      updateFilterPoolInfo();
    };

    if (isCompact) {
      const contrast = getContrastColor(col.hex);
      const bgClass = contrast === "#FFFFFF" ? "dark-bg" : "light-bg";
      item.className = `palette-item palette-item-compact ${bgClass} ${isExcluded ? "is-excluded" : ""}`;
      item.style.backgroundColor = col.hex;
      item.title = isExcluded ? t("tip_item_pool_excl", col.id, col.name) : t("tip_item_pool_incl", col.id, col.name);
      item.innerHTML = `<span class="palette-compact-id">${col.id}</span>`;
      item.addEventListener("click", toggleExclude);
    } else {
      item.className = `palette-item pool-palette-item ${isExcluded ? "is-excluded" : ""}`;
      item.title = isExcluded ? t("tip_item_pool_row_excl") : t("tip_item_pool_row_incl");

      item.innerHTML = `
        <div class="palette-swatch-wrapper">
          <div class="palette-swatch" style="background-color: ${col.hex}"></div>
          <button class="pool-exclude-btn ${isExcluded ? "excluded" : ""}" title="${isExcluded ? t("tip_exclude_remove") : t("tip_exclude_add")}">
            ✕
          </button>
        </div>
        <div class="palette-name" title="${col.name}">${col.name}</div>
        <div class="palette-id">ID: ${col.id}</div>
      `;

      const btn = item.querySelector(".pool-exclude-btn");
      btn.addEventListener("click", toggleExclude);
      item.addEventListener("click", toggleExclude);
    }

    grid.appendChild(item);
  });
}

// Renderowanie pastylek/filtrów w sekcji głównej
function renderFilterChips() {
  const container = document.getElementById("filter-chips-grid");
  if (!container) return;
  container.innerHTML = "";

  COLOR_CATEGORIES.forEach(cat => {
    // Policz ile kolorów w ARK ma dany tag
    const count = ARK_COLORS.filter(c => c.tags && c.tags.includes(cat.key)).length;
    const isActive = state.activeFilters.has(cat.key);

    const chip = document.createElement("div");
    chip.className = `filter-chip ${isActive ? "active" : ""}`;
    chip.innerHTML = `
      <span class="filter-chip-dot" style="background-color: ${cat.dot}"></span>
      <span>${getCategoryLabel(cat)}</span>
      <span class="filter-chip-count">(${count})</span>
    `;

    chip.addEventListener("click", () => {
      if (state.activeFilters.has(cat.key)) {
        state.activeFilters.delete(cat.key);
      } else {
        state.activeFilters.add(cat.key);
      }
      updateFilterUI();
    });

    container.appendChild(chip);
  });

  updateFilterPoolInfo();
}

// Aktualizacja informacji o rozmiarze puli
function updateFilterPoolInfo() {
  const pool = getFilteredColorPool();
  const info = document.getElementById("filters-pool-info");
  if (info) {
    const exclCount = state.excludedColorIds.size;
    if (exclCount > 0) {
      info.textContent = t("poolInfoWithExcl", pool.length, exclCount);
    } else {
      info.textContent = t("poolInfoNormal", pool.length);
    }
  }
}

// Aktualizacja stanu chipów i puli
function updateFilterUI() {
  // Aktualizuj kafelki poszczególnych kategorii
  const chips = document.querySelectorAll("#filter-chips-grid .filter-chip");
  COLOR_CATEGORIES.forEach((cat, idx) => {
    if (chips[idx]) {
      chips[idx].classList.toggle("active", state.activeFilters.has(cat.key));
    }
  });

  // Aktualizuj podświetlenie przycisków presetów
  document.querySelectorAll(".preset-chip").forEach(btn => {
    const isAct = btn.dataset.preset === state.activePreset;
    btn.classList.toggle("active", isAct);
  });

  // Wskaźnik aktywnego presetu na belce nagłówka (przydatny po zwinięciu)
  const activeBadge = document.getElementById("filters-active-preset-badge");
  if (activeBadge) {
    if (state.activePreset && state.activePreset !== "all" && state.activePreset !== "fav-colors") {
      activeBadge.textContent = getActivePresetName(state.activePreset);
      activeBadge.style.display = "inline-flex";
      activeBadge.title = t("tip_title_toggle");
    } else {
      activeBadge.style.display = "none";
    }
  }

  updateFilterPoolInfo();
}

// Obsługa presetów
document.querySelectorAll(".preset-chip").forEach(btn => {
  btn.addEventListener("click", () => {
    const presetKey = btn.dataset.preset;
    if (presetKey === "fav-colors") {
      const favCount = getFavoriteColorIds().size;
      if (favCount === 0) {
        showToast(t("toastNoFavColorsYet"));
        return;
      }
      state.favOnlyMode = true;
      state.activePreset = "fav-colors";
      state.activeFilters.clear();
      updateFilterUI();
      showToast(t("toastFavOnlyModeSet"));
      return;
    }

    state.favOnlyMode = false;
    state.activePreset = presetKey;
    if (presetKey === "all") {
      state.activeFilters.clear();
      state.excludedColorIds.clear();
    }
    updateFilterUI();
    showToast(t("toastPresetSet", btn.textContent.trim()));
  });
});

// Obsługa otwierania i zamykania modalu puli
const poolInfoBtn = document.getElementById("filters-pool-info-btn");
if (poolInfoBtn) {
  poolInfoBtn.addEventListener("click", openPoolModal);
}

const poolModalCloseBtn = document.getElementById("pool-modal-close");
if (poolModalCloseBtn) {
  poolModalCloseBtn.addEventListener("click", closePoolModal);
}

const poolModal = document.getElementById("pool-modal");
if (poolModal) {
  poolModal.addEventListener("click", (e) => {
    if (e.target.id === "pool-modal") closePoolModal();
  });
}

const btnResetExcluded = document.getElementById("btn-reset-excluded");
if (btnResetExcluded) {
  btnResetExcluded.addEventListener("click", () => {
    state.excludedColorIds.clear();
    renderPoolModal();
    updateFilterPoolInfo();
    showToast(t("toastRestoredPool"));
  });
}

// =========================================================
// Zwijanie / Rozwijanie kafelka puli kolorów
// =========================================================
function setPoolCollapsed(collapsed) {
  state.poolCollapsed = !!collapsed;
  try {
    localStorage.setItem("ark_pool_collapsed", state.poolCollapsed ? "true" : "false");
  } catch (e) {}
  updatePoolCollapseUI();
}

function togglePoolCollapse() {
  setPoolCollapsed(!state.poolCollapsed);
}

function updatePoolCollapseUI() {
  const section = document.getElementById("filters-section");
  const btn = document.getElementById("btn-toggle-pool");
  const icon = document.getElementById("toggle-pool-icon");
  const text = document.getElementById("toggle-pool-text");
  const body = document.getElementById("filters-collapsible-body");
  const titleClickable = document.getElementById("filters-title-clickable");

  if (!section) return;

  const isCollapsed = !!state.poolCollapsed;
  section.classList.toggle("is-collapsed", isCollapsed);

  if (btn) {
    btn.setAttribute("aria-expanded", isCollapsed ? "false" : "true");
    btn.title = t(isCollapsed ? "tip_expand_pool" : "tip_collapse_pool");
  }
  if (body) {
    body.setAttribute("aria-hidden", isCollapsed ? "true" : "false");
  }
  if (icon) {
    icon.textContent = isCollapsed ? "▼" : "▲";
  }
  if (text) {
    text.textContent = t(isCollapsed ? "expandPool" : "collapsePool");
  }
  if (titleClickable) {
    titleClickable.title = t("tip_title_toggle");
  }
}

function initPoolCollapseControls() {
  const btn = document.getElementById("btn-toggle-pool");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      togglePoolCollapse();
    });
  }

  const titleClickable = document.getElementById("filters-title-clickable");
  if (titleClickable) {
    titleClickable.addEventListener("click", () => {
      togglePoolCollapse();
    });
  }

  const activeBadge = document.getElementById("filters-active-preset-badge");
  if (activeBadge) {
    activeBadge.addEventListener("click", (e) => {
      e.stopPropagation();
      if (state.poolCollapsed) {
        setPoolCollapsed(false);
      }
    });
  }
}

// Losowanie pojedynczego regionu (z uwzględnieniem aktywnej puli)
function randomizeSingle(regionIdx) {
  const reg = state.regions[regionIdx];
  if (!reg.enabled) {
    showToast(t("toastRegionInactiveNoRoll", regionIdx));
    return;
  }
  if (reg.locked) {
    showToast(t("toastRegionLockedUnlock", regionIdx));
    return;
  }
  const pool = getFilteredColorPool();
  if (pool.length === 0) {
    showToast(t("toastNoColorsInPool"));
    return;
  }
  const randomColor = pool[Math.floor(Math.random() * pool.length)];
  reg.color = randomColor;
  updateAll(true);
}

// Losowanie wszystkich aktywnych regionów (z pominięciem zablokowanych i nieaktywnych)
function randomizeAll() {
  const pool = getFilteredColorPool();
  if (pool.length === 0) {
    showToast(t("toastNoColorsInPool"));
    return;
  }
  const activeRegions = state.regions.filter(r => r.enabled);
  if (activeRegions.length === 0) {
    showToast(t("toastNoActiveRegions"));
    return;
  }
  let changedCount = 0;
  activeRegions.forEach((r) => {
    if (!r.locked) {
      r.color = pool[Math.floor(Math.random() * pool.length)];
      changedCount++;
    }
  });

  if (changedCount === 0) {
    showToast(t("toastAllRegionsLocked"));
  } else {
    updateAll(true);
  }
}

// Losowanie zaawansowane w oparciu o teorię barw i harmonie
// z respektowaniem nieaktywnych regionów oraz mieszaniem ról (shuffle)
function randomizeHarmonic() {
  const pool = getFilteredColorPool();
  if (pool.length === 0) {
    showToast(t("toastNoColorsInPool"));
    return;
  }

  // 1. Sprawdź które regiony są w ogóle aktywne
  const activeRegions = state.regions.filter(r => r.enabled);
  if (activeRegions.length === 0) {
    showToast(t("toastNoActiveRegions"));
    return;
  }

  // 2. Sprawdź czy są aktywne odblokowane regiony do modyfikacji
  const anchor = getHarmonyAnchorRegion();
  const unlockedActive = activeRegions.filter(r => !r.locked);

  if (unlockedActive.length === 0 && (!anchor || activeRegions.every(r => r.locked))) {
    showToast(t("toastAllRegionsLocked"));
    return;
  }

  // 3. Wybierz kolor bazowy i slot bazowy (musi to być region włączony!)
  let baseColor = null;
  let anchorIdx = 0;

  if (anchor && anchor.enabled) {
    baseColor = anchor.color;
    anchorIdx = anchor.regionIndex;
  } else {
    // Jeśli brak zablokowanego, baza trafia na pierwszy aktywny region
    anchorIdx = activeRegions[0].regionIndex;
    baseColor = pool[Math.floor(Math.random() * pool.length)];
  }

  const activeIndices = activeRegions.map(r => r.regionIndex);

  // 4. Generuj paletę harmoniczną z uwzględnieniem TYLKO aktywnych regionów i mieszaniem ról
  const harmonicResult = typeof generateHarmonicPalette === "function"
    ? generateHarmonicPalette(baseColor, state.harmonyRule, state.harmonyMood, pool, anchorIdx, activeIndices, true)
    : { colors: [baseColor, baseColor, baseColor, baseColor, baseColor, baseColor], mode: "auto" };

  let changedCount = 0;
  state.regions.forEach((r) => {
    // Respektuj nieaktywne i zablokowane: zmieniamy TYLKO aktywne i odblokowane sloty!
    if (r.enabled && !r.locked) {
      if (harmonicResult.colors[r.regionIndex]) {
        r.color = harmonicResult.colors[r.regionIndex];
        changedCount++;
      }
    }
  });

  if (changedCount === 0 && activeRegions.every(r => r.locked)) {
    showToast(t("toastAllRegionsLocked"));
    return;
  }

  updateAll(true);
  const modeLabelKey = `harmonyRule_${harmonicResult.mode}`;
  const modeName = t(modeLabelKey) || harmonicResult.mode;
  showToast(t("toastHarmonicGenerated", modeName, baseColor.name));
}

// Resetowanie do domyślnych (stały zestaw: 6 1 2 3 4 5)
function resetAll() {
  state.regions.forEach((r, idx) => {
    const targetId = DEFAULT_COLOR_IDS[idx];
    r.color = getColorById(targetId);
    r.enabled = true;
  });
  updateAll(true);
  showToast(t("toastResetDefaultSet"));
}

// Zbiorcza aktualizacja interfejsu (z opcją zapisu do historii)
function updateAll(saveHistory = false) {
  renderPreviewBar();
  renderRegionsGrid();
  updateCommands();
  updateHarmonyUI();
  if (saveHistory) {
    pushToHistory();
  }
}

// Modal wyboru koloru
function openColorModal(regionIdx) {
  state.activeModalRegion = regionIdx;
  state.modalFilter = null;
  const pool = getFilteredColorPool();
  
  let poolName = "";
  if (state.favOnlyMode) poolName = t("poolOnlyFavName");
  else if (state.activePreset && EVENT_PRESETS[state.activePreset]) poolName = ` (${getPresetDisplayName(state.activePreset)})`;
  else if (state.activePreset && STYLE_PRESETS[state.activePreset]) poolName = ` (${getPresetDisplayName(state.activePreset)})`;
  else if (pool.length < ARK_COLORS.length) poolName = t("poolActiveCountName", pool.length);

  document.getElementById("modal-title").textContent = t("modalTitleChoose", regionIdx, poolName);
  document.getElementById("color-search").value = "";
  renderModalFilterChips();
  updatePickerViewToggleUI();
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

  const pool = getFilteredColorPool();
  const favs = getFavoriteColorIds();
  const favCountInPool = pool.filter(c => favs.has(c.id)).length;

  // Przycisk "Wszystkie z puli"
  const allChip = document.createElement("div");
  allChip.className = `filter-chip ${state.modalFilter === null ? "active" : ""}`;
  allChip.innerHTML = `<span>${t("allFromPool")} (${pool.length})</span>`;
  allChip.addEventListener("click", () => {
    state.modalFilter = null;
    updateModalFilterChips();
    filterAndRenderModalPalette();
  });
  container.appendChild(allChip);

  // Przycisk "⭐ Ulubione" (jeśli są w puli)
  if (favCountInPool > 0) {
    const favChip = document.createElement("div");
    favChip.className = `filter-chip ${state.modalFilter === "favorites" ? "active" : ""}`;
    favChip.innerHTML = `<span>${t("onlyFavorites")} (${favCountInPool})</span>`;
    favChip.addEventListener("click", () => {
      state.modalFilter = state.modalFilter === "favorites" ? null : "favorites";
      updateModalFilterChips();
      filterAndRenderModalPalette();
    });
    container.appendChild(favChip);
  }

  COLOR_CATEGORIES.forEach(cat => {
    // Pokaż kategorię tylko jeśli w wybranej puli są kolory z tym tagiem
    const countInPool = pool.filter(c => c.tags && c.tags.includes(cat.key)).length;
    if (countInPool === 0) return;

    const chip = document.createElement("div");
    chip.className = `filter-chip ${state.modalFilter === cat.key ? "active" : ""}`;
    chip.innerHTML = `
      <span class="filter-chip-dot" style="background-color: ${cat.dot}"></span>
      <span>${getCategoryLabel(cat)} (${countInPool})</span>
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
  renderModalFilterChips();
}

// Filtruj i renderuj paletę w modalu (ograniczoną ściśle do aktywnej puli)
function filterAndRenderModalPalette() {
  const query = document.getElementById("color-search").value.toLowerCase().trim();
  let list = getFilteredColorPool(); // Tylko aktualnie aktywna pula
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
    container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 30px;">${t("noMatchingColors")}</div>`;
    return;
  }

  const isCompact = !!state.compactViewPicker;
  container.classList.toggle("is-compact", isCompact);

  const favs = getFavoriteColorIds();
  const activeColorId = state.activeModalRegion !== null && state.regions[state.activeModalRegion].enabled
    ? state.regions[state.activeModalRegion].color.id
    : null;

  list.forEach((col) => {
    const item = document.createElement("div");
    const isSelected = activeColorId === col.id;

    if (isCompact) {
      const contrast = getContrastColor(col.hex);
      const bgClass = contrast === "#FFFFFF" ? "dark-bg" : "light-bg";
      item.className = `palette-item palette-item-compact ${bgClass} ${isSelected ? "is-selected" : ""}`;
      item.style.backgroundColor = col.hex;
      item.title = t("tip_item_pick", col.id, col.name);
      item.innerHTML = `<span class="palette-compact-id">${col.id}</span>`;

      // Kliknięcie w kafelek
      item.addEventListener("click", () => {
        if (state.activeModalRegion !== null) {
          state.regions[state.activeModalRegion].color = col;
          state.regions[state.activeModalRegion].enabled = true;
          closeModal();
          updateAll(true);
        }
      });
    } else {
      item.className = `palette-item ${isSelected ? "is-selected" : ""}`;
      const isFav = favs.has(col.id);

      item.innerHTML = `
        <div class="palette-swatch-wrapper">
          <div class="palette-swatch" style="background-color: ${col.hex}"></div>
          <button class="palette-fav-btn ${isFav ? "is-fav" : ""}" title="${isFav ? t("tip_fav_remove") : t("tip_fav_add")}">
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
    }

    container.appendChild(item);
  });
}

// Wyszukiwanie w modalu
document.getElementById("color-search").addEventListener("input", filterAndRenderModalPalette);

// Toast powiadomienie
function showToast(text) {
  const toast = document.getElementById("toast");
  toast.textContent = text || t("toastCopiedDefault");
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
      showToast(t("toastCopiedCmd"));
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
      showToast(t("toastSyncAdmin"));
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
        showToast(t("toastSyncChat"));
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
    closePoolModal();
  }
});

// =========================================================
// Przełączanie języka (PL / EN) i aktualizacja statycznych tekstów UI
// =========================================================
function setLanguage(lang) {
  if (lang !== "pl" && lang !== "en") lang = "pl";
  currentLang = lang;
  try {
    localStorage.setItem("ark_lang", lang);
  } catch (e) {}
  if (document.documentElement) {
    document.documentElement.lang = lang;
  }

  // Aktualizacja przycisków przełącznika
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Tłumaczenie elementów z data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (key) {
      el.textContent = t(key);
    }
  });

  // Tłumaczenie elementów z atrybutami (placeholder, title, specyficzne ID)
  const titleEl = document.getElementById("page-title");
  if (titleEl) titleEl.textContent = t("appTitle");

  const previewHint = document.getElementById("preview-hint");
  if (previewHint) previewHint.innerHTML = `<span>${t("previewHint")}</span>`;

  const poolTitleStrong = document.querySelector(".filters-title-group strong");
  if (poolTitleStrong) poolTitleStrong.textContent = t("poolTitle");

  const poolBtn = document.getElementById("filters-pool-info-btn");
  if (poolBtn) poolBtn.title = t("tip_pool_btn");

  const colorSearchInput = document.getElementById("color-search");
  if (colorSearchInput) colorSearchInput.placeholder = t("searchPlaceholder");

  const setNameInput = document.getElementById("set-name-input");
  if (setNameInput) setNameInput.placeholder = t("setPlaceholder");

  const setNameLabel = document.getElementById("set-name-label");
  if (setNameLabel) setNameLabel.textContent = t("saveSetModalLabel");

  const poolModalTitle = document.getElementById("pool-modal-title");
  if (poolModalTitle) poolModalTitle.textContent = t("poolModalTitle");

  // Presety główne
  const presetAll = document.getElementById("preset-chip-all");
  if (presetAll) {
    presetAll.textContent = t("preset_all");
    presetAll.title = t("tip_preset_all");
  }
  const presetFav = document.getElementById("preset-chip-fav");
  if (presetFav) {
    presetFav.textContent = t("preset_fav");
    presetFav.title = t("tip_preset_fav");
  }

  // Presety Eventów
  const eventMap = [
    { id: "chip-event-winter", key: "preset_winter", tip: "tip_preset_winter" },
    { id: "chip-event-love", key: "preset_love", tip: "tip_preset_love" },
    { id: "chip-event-easter", key: "preset_easter", tip: "tip_preset_easter" },
    { id: "chip-event-summer", key: "preset_summer", tip: "tip_preset_summer" },
    { id: "chip-event-fear", key: "preset_fear", tip: "tip_preset_fear" },
    { id: "chip-event-turkey", key: "preset_turkey", tip: "tip_preset_turkey" },
    { id: "chip-style-alpha", key: "style_alpha", tip: "tip_style_alpha" },
    { id: "chip-style-cosmic", key: "style_cosmic", tip: "tip_style_cosmic" },
    { id: "chip-style-dragon", key: "style_dragon", tip: "tip_style_dragon" },
    { id: "chip-style-frost", key: "style_frost", tip: "tip_style_frost" },
    { id: "chip-style-pastel", key: "style_pastel", tip: "tip_style_pastel" },
    { id: "chip-style-synthwave", key: "style_synthwave", tip: "tip_style_synthwave" },
    { id: "chip-style-reef", key: "style_reef", tip: "tip_style_reef" },
    { id: "chip-style-royal", key: "style_royal", tip: "tip_style_royal" }
  ];

  eventMap.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) {
      el.textContent = t(item.key);
      el.title = t(item.tip);
    }
  });

  // Przyciski przełączania widoków
  const pickNorm = document.getElementById("picker-view-normal-btn");
  if (pickNorm) pickNorm.title = t("tip_view_normal");
  const pickComp = document.getElementById("picker-view-compact-btn");
  if (pickComp) pickComp.title = t("tip_view_compact");

  const poolNorm = document.getElementById("pool-view-normal-btn");
  if (poolNorm) poolNorm.title = t("tip_view_normal");
  const poolComp = document.getElementById("pool-view-compact-btn");
  if (poolComp) poolComp.title = t("tip_view_compact");

  // Przeładuj dynamiczne sekcje
  renderFilterChips();
  renderPreviewBar();
  renderRegionsGrid();
  updateCommands();
  updateFilterPoolInfo();
  updateHarmonyUI();
  updatePoolCollapseUI();
  if (document.getElementById("library-modal").classList.contains("active")) {
    renderLibrary();
  }
  if (document.getElementById("pool-modal").classList.contains("active")) {
    renderPoolModal();
  }
}

function initHarmonyControls() {
  const btnHarmonic = document.getElementById("btn-random-harmonic");
  if (btnHarmonic) {
    btnHarmonic.addEventListener("click", randomizeHarmonic);
  }

  const ruleSelect = document.getElementById("harmony-rule-select");
  if (ruleSelect) {
    ruleSelect.addEventListener("change", (e) => {
      state.harmonyRule = e.target.value;
      localStorage.setItem("ark_harmony_rule", state.harmonyRule);
    });
  }

  const moodSelect = document.getElementById("harmony-mood-select");
  if (moodSelect) {
    moodSelect.addEventListener("change", (e) => {
      state.harmonyMood = e.target.value;
      localStorage.setItem("ark_harmony_mood", state.harmonyMood);
    });
  }
}

function initLanguageSwitch() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.lang;
      setLanguage(selected);
    });
  });
}

// Inicjalizacja
initLanguageSwitch();
initHarmonyControls();
initPoolCollapseControls();
setLanguage(currentLang);
updatePoolCollapseUI();
initViewToggleControls();
renderFilterChips();
updateLibraryBadges();
randomizeAll();



