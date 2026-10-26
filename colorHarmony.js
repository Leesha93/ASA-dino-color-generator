// =========================================================
// Zaawansowany Moduł Teorii Barw & Harmonii Kolorów (ARK)
// =========================================================

// Konwersja HEX do RGB [0..255]
function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

// Konwersja RGB do HEX (#RRGGBB)
function rgbToHex(r, g, b) {
  const toHex = (v) => {
    const h = Math.round(Math.max(0, Math.min(255, v))).toString(16);
    return h.length === 1 ? "0" + h : h;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

// Konwersja RGB do HSL (H: 0-360, S: 0-1, L: 0-1)
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
      case g: h = ((b - r) / d + 2); break;
      case b: h = ((r - g) / d + 4); break;
    }
    h *= 60;
  }
  return { h, s, l };
}

// Konwersja HSL do RGB
function hslToRgb(h, s, l) {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(1, s));
  l = Math.max(0, Math.min(1, l));

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r1 = 0, g1 = 0, b1 = 0;
  if (h >= 0 && h < 60) {
    r1 = c; g1 = x; b1 = 0;
  } else if (h >= 60 && h < 120) {
    r1 = x; g1 = c; b1 = 0;
  } else if (h >= 120 && h < 180) {
    r1 = 0; g1 = c; b1 = x;
  } else if (h >= 180 && h < 240) {
    r1 = 0; g1 = x; b1 = c;
  } else if (h >= 240 && h < 300) {
    r1 = x; g1 = 0; b1 = c;
  } else {
    r1 = c; g1 = 0; b1 = x;
  }

  return {
    r: Math.round((r1 + m) * 255),
    g: Math.round((g1 + m) * 255),
    b: Math.round((b1 + m) * 255)
  };
}

// Konwersja RGB do CIE-L*a*b* (D65 standard illuminant) dla perceptualnej dokładności ludzkiego oka
function rgbToLab(r, g, b) {
  let rLin = r / 255;
  let gLin = g / 255;
  let bLin = b / 255;

  rLin = rLin > 0.04045 ? Math.pow((rLin + 0.055) / 1.055, 2.4) : rLin / 12.92;
  gLin = gLin > 0.04045 ? Math.pow((gLin + 0.055) / 1.055, 2.4) : gLin / 12.92;
  bLin = bLin > 0.04045 ? Math.pow((bLin + 0.055) / 1.055, 2.4) : bLin / 12.92;

  // D65 standard
  let x = (rLin * 0.4124 + gLin * 0.3576 + bLin * 0.1805) * 100 / 95.047;
  let y = (rLin * 0.2126 + gLin * 0.7152 + bLin * 0.0722) * 100 / 100.000;
  let z = (rLin * 0.0193 + gLin * 0.1192 + bLin * 0.9505) * 100 / 108.883;

  const f = (t) => t > 0.008856 ? Math.cbrt(t) : (7.787 * t) + (16 / 116);

  const fx = f(x);
  const fy = f(y);
  const fz = f(z);

  const L = (116 * fy) - 16;
  const a = 500 * (fx - fy);
  const bVal = 200 * (fy - fz);

  return { L, a, b: bVal };
}

// Obliczanie perceptualnej odległości Delta E (CIE76 z wagą jasności i chrominancji)
function deltaE(lab1, lab2) {
  const dL = lab1.L - lab2.L;
  const da = lab1.a - lab2.a;
  const db = lab1.b - lab2.b;
  return Math.sqrt(dL * dL + da * da + db * db);
}

// Zbudowanie pamięci podręcznej Lab dla wszystkich kolorów ARK
const ARK_LAB_CACHE = new Map();

function getCachedLab(color) {
  if (ARK_LAB_CACHE.has(color.id)) {
    return ARK_LAB_CACHE.get(color.id);
  }
  const rgb = hexToRgb(color.hex);
  const lab = rgbToLab(rgb.r, rgb.g, rgb.b);
  ARK_LAB_CACHE.set(color.id, lab);
  return lab;
}

// Znalezienie najbliższego koloru z puli ARK dla docelowego RGB/Lab
// z wąską, kontrolowaną wariancją (wybór z 2-3 najbliższych kandydatów o zbliżonym odcieniu)
function findNearestArkColor(targetRgb, pool, excludedIds = new Set(), usedHexes = new Set(), allowSubtleVariance = true) {
  const targetLab = rgbToLab(targetRgb.r, targetRgb.g, targetRgb.b);
  const candidates = [];

  // 1. Spróbuj w dostępnej puli (bez użytych ID ani tego samego odcienia HEX)
  for (const c of pool) {
    if (excludedIds.has(c.id)) continue;
    if (usedHexes && usedHexes.has(c.hex.toUpperCase())) continue;
    const cLab = getCachedLab(c);
    const dist = deltaE(targetLab, cLab);
    candidates.push({ color: c, dist });
  }

  // 2. Jeśli nie znaleziono (wszystkie unikalne wyczerpane), dopuść inne ID o ile jeszcze nie użyte
  if (candidates.length === 0 && pool.length > 0) {
    for (const c of pool) {
      if (excludedIds.has(c.id)) continue;
      const cLab = getCachedLab(c);
      candidates.push({ color: c, dist: deltaE(targetLab, cLab) });
    }
  }

  // 3. Fallback na całą pulę
  if (candidates.length === 0 && pool.length > 0) {
    for (const c of pool) {
      const cLab = getCachedLab(c);
      candidates.push({ color: c, dist: deltaE(targetLab, cLab) });
    }
  }

  if (candidates.length === 0) return pool[0];

  candidates.sort((a, b) => a.dist - b.dist);
  const bestDist = candidates[0].dist;

  // Wąskie zawężenie: bierzemy wyłącznie kandydatów leżących niemal identycznie blisko (DeltaE <= bestDist + 4.5, max 3)
  if (allowSubtleVariance) {
    const closeCandidates = candidates.filter(c => c.dist <= bestDist + 4.5).slice(0, 3);
    if (closeCandidates.length === 1) {
      return closeCandidates[0].color;
    }
    const rand = Math.random();
    if (closeCandidates.length === 2) {
      return rand < 0.70 ? closeCandidates[0].color : closeCandidates[1].color;
    }
    if (rand < 0.62) return closeCandidates[0].color;
    if (rand < 0.88) return closeCandidates[1].color;
    return closeCandidates[2].color;
  }

  return candidates[0].color;
}

// =========================================================
// Reguły Harmonii i Nastrojów (Color Harmony Engine)
// =========================================================

const HARMONY_MODES = [
  { key: "auto", namePl: "🎲 Losowa harmonia", nameEn: "🎲 Random Harmony" },
  { key: "analogous", namePl: "🌿 Analogiczna (Spójna)", nameEn: "🌿 Analogous (Harmonious)" },
  { key: "complementary", namePl: "⚡ Dopełniająca (Kontrast)", nameEn: "⚡ Complementary (Contrast)" },
  { key: "split", namePl: "🪶 Rozszczepiona (Zrównoważona)", nameEn: "🪶 Split-Complementary" },
  { key: "triad", namePl: "🔺 Triada (3-kolorowa)", nameEn: "🔺 Triadic (3-Color)" },
  { key: "monochromatic", namePl: "🧊 Monochromatyczna (Odcienie)", nameEn: "🧊 Monochromatic (Tints)" }
];

const HARMONY_MOODS = [
  { key: "auto", namePl: "✨ Dowolny nastrój", nameEn: "✨ Any Mood" },
  { key: "natural", namePl: "🦎 Naturalny / Zwierzęcy", nameEn: "🦎 Natural / Animal" },
  { key: "vibrant", namePl: "⚡ Neon / Żywy", nameEn: "⚡ Neon / Vibrant" },
  { key: "dark", namePl: "🌑 Mroczny / Drapieżny", nameEn: "🌑 Dark / Predator" },
  { key: "pastel", namePl: "🌸 Pastelowy / Słodki", nameEn: "🌸 Pastel / Soft" }
];

// Modyfikacja HSL wg nastroju
function applyMoodToHsl(hsl, moodKey) {
  let { h, s, l } = hsl;
  switch (moodKey) {
    case "natural":
      // Stonowane, zwierzęce nasycenie, bezpieczna jasność
      s = Math.max(0.18, Math.min(0.55, s * 0.7));
      l = Math.max(0.25, Math.min(0.70, l));
      break;
    case "vibrant":
      // Maksymalnie nasycone, żywe kolory
      s = Math.max(0.75, Math.min(1.0, s * 1.3));
      l = Math.max(0.42, Math.min(0.68, l));
      break;
    case "dark":
      // Ciemne, nastrojowe
      l = Math.max(0.12, Math.min(0.38, l * 0.65));
      s = Math.max(0.25, Math.min(0.85, s));
      break;
    case "pastel":
      // Jasne, miękkie
      s = Math.max(0.25, Math.min(0.65, s * 0.8));
      l = Math.max(0.68, Math.min(0.88, l * 1.25));
      break;
    default:
      break;
  }
  return { h, s, l };
}

// Zwraca definicję przesunięcia HSL dla danego trybu harmonii i kroku (1..5)
function getModeStepOffset(effectiveMode, stepIndex) {
  if (effectiveMode === "monochromatic") {
    const lSteps = [0, 0.22, -0.22, 0.35, -0.32, 0.15];
    const sSteps = [0, -0.15, 0.18, -0.25, 0.12, -0.05];
    return {
      dH: 0,
      dL: lSteps[stepIndex] || 0.15,
      dS: sSteps[stepIndex] || 0
    };
  }
  if (effectiveMode === "analogous") {
    const hOffsets = [0, 28, -28, 48, -48, 15];
    const lOffsets = [0, 0.14, -0.16, 0.22, -0.24, -0.08];
    return {
      dH: hOffsets[stepIndex] || 25,
      dL: lOffsets[stepIndex] || 0,
      dS: 0
    };
  }
  if (effectiveMode === "complementary") {
    // Krok 1: Główny akcent dopełniający (+180 st.)
    // Krok 2: Spójny analog (-18 st.)
    // Krok 3: Highlight dopełniający (+195 st.)
    // Krok 4: Jasny analog (+14 st.)
    // Krok 5: Rozszczepiony akcent (+165 st.)
    const hOffsets = [0, 180, -18, 195, 14, 165];
    const lOffsets = [0, 0.20, -0.18, -0.15, 0.14, 0.10];
    const sOffsets = [0, 0.15, 0, 0.10, 0, 0.10];
    return {
      dH: hOffsets[stepIndex] || 180,
      dL: lOffsets[stepIndex] || 0,
      dS: sOffsets[stepIndex] || 0,
      isComplement: stepIndex === 1 || stepIndex === 3 || stepIndex === 5
    };
  }
  if (effectiveMode === "split") {
    const offsets = [0, 150, 210, 20, -20, 165];
    const lOffsets = [0, 0.15, -0.18, -0.15, 0.22, -0.05];
    return {
      dH: offsets[stepIndex] || 150,
      dL: lOffsets[stepIndex] || 0,
      dS: 0
    };
  }
  if (effectiveMode === "triad") {
    const triadOffsets = [0, 120, 240, 135, 255, 15];
    const lOffsets = [0, 0.12, -0.12, -0.18, 0.18, -0.08];
    return {
      dH: triadOffsets[stepIndex] || 120,
      dL: lOffsets[stepIndex] || 0,
      dS: 0
    };
  }
  return { dH: 0, dL: 0, dS: 0 };
}

// Główna funkcja wyliczająca paletę barw z respektowaniem tylko aktywnych regionów
// oraz z dynamicznym mieszaniem ról (shuffleRoles)
function generateHarmonicPalette(
  baseColor,
  modeKey = "auto",
  moodKey = "auto",
  pool = null,
  anchorIndex = 0,
  activeRegionIndices = [0, 1, 2, 3, 4, 5],
  shuffleRoles = true
) {
  const activePool = (pool && pool.length > 0) ? pool : (typeof ARK_COLORS !== "undefined" ? ARK_COLORS : []);
  const rgbBase = hexToRgb(baseColor.hex);
  let hslBase = rgbToHsl(rgbBase.r, rgbBase.g, rgbBase.b);

  // Jeśli wybrany nastrój nie jest "auto", dopasuj bazę jeśli to dozwolone
  if (moodKey !== "auto") {
    hslBase = applyMoodToHsl(hslBase, moodKey);
  }

  // Rozstrzygnij tryb "auto"
  let effectiveMode = modeKey;
  if (modeKey === "auto") {
    const choices = ["analogous", "complementary", "split", "triad", "monochromatic"];
    effectiveMode = choices[Math.floor(Math.random() * choices.length)];
  }

  // Upewnij się, że anchorIndex należy do aktywnych regionów
  const safeActiveIndices = (activeRegionIndices && activeRegionIndices.length > 0)
    ? [...activeRegionIndices]
    : [0, 1, 2, 3, 4, 5];

  if (!safeActiveIndices.includes(anchorIndex)) {
    anchorIndex = safeActiveIndices[0];
  }

  const resultColors = new Array(6);
  const usedColorIds = new Set();
  const usedHexes = new Set();

  // 1. Zarezerwuj bazę w wybranym slocie anchorIndex
  resultColors[anchorIndex] = baseColor;
  usedColorIds.add(baseColor.id);
  usedHexes.add(baseColor.hex.toUpperCase());

  // 2. Pobierz pozostałe aktywne regiony (nieaktywne są całkowicie pomijane!)
  const otherActive = safeActiveIndices.filter(i => i !== anchorIndex);
  if (otherActive.length === 0) {
    return {
      colors: resultColors,
      mode: effectiveMode,
      mood: moodKey
    };
  }

  // Dostępne kroki harmonii dla tylu aktywnych slotów ile potrzebujemy (1..N)
  const steps = [];
  for (let s = 1; s <= otherActive.length; s++) {
    steps.push(s);
  }

  // Dynamiczne mieszanie się regionów (tasowanie ról między aktywnymi slotami)
  if (shuffleRoles) {
    for (let i = steps.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [steps[i], steps[j]] = [steps[j], steps[i]];
    }
  }

  // 3. Wylicz odcienie wyłącznie dla aktywnych slotów
  otherActive.forEach((slotIdx, idx) => {
    const assignedStep = steps[idx];
    const offset = getModeStepOffset(effectiveMode, assignedStep);

    // Subtelna, wąska wariancja kąta (+/- 4 st.) i jasności (+/- 0.025)
    const angleJitter = (Math.random() - 0.5) * 8; // -4 do +4 st.
    const lightJitter = (Math.random() - 0.5) * 0.05; // -0.025 do +0.025

    let targetH = (hslBase.h + offset.dH + angleJitter + 360) % 360;
    let targetS = hslBase.s + (offset.dS || 0);
    let targetL = hslBase.l;

    if (offset.isComplement) {
      targetL = Math.max(0.2, Math.min(0.85, (1 - targetL * 0.8) + lightJitter));
      targetS = Math.min(1.0, targetS * 1.15);
    } else {
      targetL = Math.max(0.15, Math.min(0.85, targetL + offset.dL + lightJitter));
    }

    if (moodKey !== "auto") {
      const adjusted = applyMoodToHsl({ h: targetH, s: targetS, l: targetL }, moodKey);
      targetH = adjusted.h;
      targetS = adjusted.s;
      targetL = adjusted.l;
    }

    const rgb = hslToRgb(targetH, targetS, targetL);
    const matched = findNearestArkColor(rgb, activePool, usedColorIds, usedHexes, true);
    resultColors[slotIdx] = matched;
    if (matched) {
      usedColorIds.add(matched.id);
      usedHexes.add(matched.hex.toUpperCase());
    }
  });

  return {
    colors: resultColors,
    mode: effectiveMode,
    mood: moodKey
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    hexToRgb,
    rgbToHsl,
    hslToRgb,
    rgbToLab,
    deltaE,
    findNearestArkColor,
    HARMONY_MODES,
    HARMONY_MOODS,
    generateHarmonicPalette
  };
}
