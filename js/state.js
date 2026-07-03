/* Staat — zentraler Spielstand: Feenstaub, Einstellungen, Statistik */
const Staat = (() => {
  const KEY = "sz3-staat";

  let s = {
    dust: 10,
    settings: { musik: false, sound: true },
    stats: { blumen: 0, bilder: 0, traenke: 0, herzen: 0, looks: 0 },
    albumFrei: [],       // unlocked sticker ids
    bilderBelohnt: [],   // coloring pages already rewarded
  };

  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "null");
    if (raw && typeof raw === "object") s = { ...s, ...raw, settings: { ...s.settings, ...raw.settings }, stats: { ...s.stats, ...raw.stats } };
  } catch (e) {}

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {}
  }

  function updateHud(bump) {
    const el = document.getElementById("dust-count");
    if (el) el.textContent = s.dust;
    if (bump) {
      const pill = document.getElementById("hud-dust");
      pill.classList.remove("bump");
      void pill.getBoundingClientRect();
      pill.classList.add("bump");
    }
  }

  /* add dust with a little flight of stars from (x,y) to the HUD pill */
  function addDust(n, x, y) {
    const arrive = () => {
      s.dust += n;
      save();
      updateHud(true);
    };
    const jar = document.getElementById("hud-dust");
    if (x != null && jar && typeof Funkel !== "undefined") {
      Funkel.flyToJar(x, y, jar, arrive);
    } else {
      arrive();
    }
  }

  function spendDust(n) {
    if (s.dust < n) return false;
    s.dust -= n;
    save();
    updateHud(true);
    return true;
  }

  function stat(name, add = 1) {
    s.stats[name] = (s.stats[name] || 0) + add;
    save();
  }

  function resetAll() {
    try {
      Object.keys(localStorage)
        .filter((k) => k.startsWith("sz"))
        .forEach((k) => localStorage.removeItem(k));
    } catch (e) {}
    location.reload();
  }

  return {
    get dust() { return s.dust; },
    get settings() { return s.settings; },
    get stats() { return s.stats; },
    get albumFrei() { return s.albumFrei; },
    get bilderBelohnt() { return s.bilderBelohnt; },
    addDust, spendDust, stat, save, updateHud, resetAll,
    setSetting(k, v) { s.settings[k] = v; save(); },
    freischalten(id) { if (!s.albumFrei.includes(id)) { s.albumFrei.push(id); save(); } },
    bildBelohnt(id) { if (!s.bilderBelohnt.includes(id)) { s.bilderBelohnt.push(id); save(); return true; } return false; },
  };
})();
